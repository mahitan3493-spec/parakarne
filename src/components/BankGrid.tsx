"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf } from "@/lib/grades";
import { applyReviewStatsToBanks, MIN_APPROVAL_SAMPLE_COUNT, MIN_RELIABLE_REVIEW_COUNT } from "@/lib/bank-stats";
import type { Bank } from "@/lib/types";
import BankLogo from "./BankLogo";
import RateBankButton from "./RateBankButton";

type ViewMode = "grid" | "list";
type BankBadge = {
  label: string;
  tone: "emerald" | "gold" | "blue" | "neutral";
};

export default function BankGrid() {
  const router = useRouter();
  const { banks, loading } = useBanks();
  const { reviews, loading: reviewsLoading } = useReviews();
  const { openBankModal } = useUI();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  function goToBankPage(bankId: string) {
    router.push(`/banka/${bankId}/`);
  }

  const bankStats = useMemo(
    () => applyReviewStatsToBanks(banks, reviews),
    [banks, reviews],
  );

  const reviewedBanks = useMemo(
    () => bankStats.filter((bank) => bank.reviewCount > 0),
    [bankStats],
  );

  const top = useMemo(
    () =>
      [...reviewedBanks]
        .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
        .slice(0, 6),
    [reviewedBanks],
  );

  const badgeMetrics = useMemo(() => {
    const reliableBanks = reviewedBanks.filter((bank) => bank.reviewCount >= MIN_RELIABLE_REVIEW_COUNT);
    const highestRating = reliableBanks.reduce(
      (max, bank) => Math.max(max, bank.rating),
      0,
    );
    const highestReviewCount = reliableBanks.reduce(
      (max, bank) => Math.max(max, bank.reviewCount),
      0,
    );
    const approvalBanks = reviewedBanks.filter((bank) => bank.creditApprovalCount >= MIN_APPROVAL_SAMPLE_COUNT);
    const highestApprovalRate = approvalBanks.reduce(
      (max, bank) => Math.max(max, bank.creditApprovalRate),
      0,
    );

    return { highestRating, highestReviewCount, highestApprovalRate };
  }, [reviewedBanks]);

  function badgesFor(bank: Bank): BankBadge[] {
    const badges: BankBadge[] = [];

    if (bank.rating === badgeMetrics.highestRating && badgeMetrics.highestRating > 0) {
      badges.push({ label: "En Yüksek Puan", tone: "emerald" });
    }
    if (
      bank.reviewCount === badgeMetrics.highestReviewCount &&
      badgeMetrics.highestReviewCount > 0
    ) {
      badges.push({ label: "En Çok Yorumlanan", tone: "gold" });
    }
    if (
      bank.creditApprovalCount >= MIN_APPROVAL_SAMPLE_COUNT &&
      bank.creditApprovalRate === badgeMetrics.highestApprovalRate &&
      badgeMetrics.highestApprovalRate > 0
    ) {
      badges.push({ label: "Yüksek Onay Oranı", tone: "blue" });
    }
    if (bank.reviewCount > 0 && bank.reviewCount <= 2) {
      badges.push({ label: "Yeni Karne", tone: "neutral" });
    } else if (bank.reviewCount < MIN_RELIABLE_REVIEW_COUNT) {
      badges.push({ label: "Veri Oluşuyor", tone: "neutral" });
    }

    return badges.slice(0, 2);
  }

  return (
    <section
      id="bankalar"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--paper-line)",
        borderBottom: "1px solid var(--paper-line)",
      }}
    >
      <div className="wrap">
        <div className="sec-head bank-grid-section-head">
          <div>
            <div className="sec-num">KULLANICI PUANLARI</div>
            <h2>Kullanıcıların öne çıkardığı bankalar</h2>
            <p>
              Rozetler yalnızca yayınlanan gerçek kullanıcı verilerine göre otomatik oluşur.
            </p>
          </div>
          <div className="bank-view-toggle" role="group" aria-label="Banka görünümü">
            <button
              type="button"
              className={viewMode === "grid" ? "active" : ""}
              aria-pressed={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            >
              <span aria-hidden="true">▦</span>
              Kart
            </button>
            <button
              type="button"
              className={viewMode === "list" ? "active" : ""}
              aria-pressed={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <span aria-hidden="true">☰</span>
              Liste
            </button>
          </div>
        </div>
        {(loading || reviewsLoading) && <BankGridSkeleton />}
        {!loading && !reviewsLoading && top.length === 0 && (
          <div className="section-zero-state">
            <span className="section-zero-icon" aria-hidden="true">★</span>
            <div>
              <h3>İlk banka karnesini sen oluştur.</h3>
              <p>Henüz yayınlanmış kullanıcı puanı yok. Bankanı seçip deneyimini paylaşınca burada ilk kart oluşacak.</p>
            </div>
            <RateBankButton className="btn primary">Banka Seçip Puanla</RateBankButton>
          </div>
        )}
        {!loading && !reviewsLoading && top.length > 0 && (
          <div className={`bank-grid bank-grid-${viewMode}`}>
            {top.map((bank) => {
              const badges = badgesFor(bank);
              return (
                <article
                  key={bank.id}
                  className="bcard premium-hover-card"
                  role="button"
                  tabIndex={0}
                  onClick={() => goToBankPage(bank.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      goToBankPage(bank.id);
                    }
                  }}
                >
                  {badges.length > 0 && (
                    <div className="bank-badge-row" aria-label="Banka öne çıkan özellikleri">
                      {badges.map((badge) => (
                        <span
                          className={`bank-data-badge bank-data-badge-${badge.tone}`}
                          key={`${bank.id}-${badge.label}`}
                        >
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="bcard-top">
                    <div className="bank-cell">
                      <BankLogo bank={bank} />
                      <div>
                        <div className="bank-name">{bank.name}</div>
                        <div className="bcard-list-summary">
                          {bank.reviewCount.toLocaleString("tr-TR")} gerçek yorum
                        </div>
                      </div>
                    </div>
                    <span className={`grade-pill ${gradeClassOf(bank.grade)}`}>
                      {bank.grade}
                    </span>
                  </div>
                  <div className="bcard-quote">{bank.reviewCount >= MIN_RELIABLE_REVIEW_COUNT ? `${bank.reviewCount.toLocaleString("tr-TR")} gerçek kullanıcı değerlendirmesiyle oluşan karne.` : `İlk ${bank.reviewCount} kullanıcı değerlendirmesi alındı; veri oluşmaya devam ediyor.`}</div>
                  <div className="bcard-foot">
                    <span>
                      {"★".repeat(Math.round(bank.rating))} {bank.rating}/5
                    </span>
                    <span>{bank.reviewCount.toLocaleString("tr-TR")} yorum</span>
                    {bank.creditApprovalCount >= MIN_APPROVAL_SAMPLE_COUNT && (
                      <span>%{Math.round(bank.creditApprovalRate)} onay deneyimi</span>
                    )}
                  </div>
                  <div className="bcard-actions" onClick={(event) => event.stopPropagation()}>
                    <button className="ledger-action" onClick={() => goToBankPage(bank.id)}>
                      İncele
                    </button>
                    <button
                      className="ledger-action primary"
                      onClick={() => openBankModal(bank.id, "rating")}
                    >
                      Puanla
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function BankGridSkeleton() {
  return (
    <div className="bank-grid skeleton-bank-grid" aria-label="Banka kartları hazırlanıyor">
      {[0, 1, 2].map((item) => (
        <div className="bcard skeleton-card" key={item}>
          <span className="skeleton-line wide" />
          <span className="skeleton-line" />
          <span className="skeleton-line short" />
        </div>
      ))}
    </div>
  );
}
