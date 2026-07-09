"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf } from "@/lib/grades";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import BankLogo from "./BankLogo";

export default function BankGrid() {
  const router = useRouter();
  const { banks, loading } = useBanks();
  const { reviews, loading: reviewsLoading } = useReviews();
  const { openBankModal } = useUI();

  function goToBankPage(bankId: string) {
    router.push(`/banka/${bankId}/`);
  }
  // "Öne çıkanlar" gerçekten en yüksek puanlı, gerçekten yorum almış
  // bankalar olmalı — dizideki ilk 6 banka değil. Henüz yorum almamış
  // bankalar bu listeye hiç girmez.
  const top = useMemo(() => {
    const updated = applyReviewStatsToBanks(banks, reviews);
    return updated
      .filter((b) => b.reviewCount > 0)
      .sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount)
      .slice(0, 6);
  }, [banks, reviews]);

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
        <div className="sec-head">
          <div>
            <div className="sec-num">02 — ÖNE ÇIKANLAR</div>
            <h2>Sınıf birincileri</h2>
          </div>
        </div>
        {(loading || reviewsLoading) && <BankGridSkeleton />}
        {!loading && !reviewsLoading && top.length === 0 && (
          <p className="skeleton-row">
            Henüz hiçbir bankaya yorum yapılmadı — ilk notu sen ver, burada ilk sen görün.
          </p>
        )}
        {!loading && !reviewsLoading && top.length > 0 && (
          <div className="bank-grid">
            {top.map((b) => (
              <article
                key={b.id}
                className="bcard"
                role="button"
                tabIndex={0}
                onClick={() => goToBankPage(b.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") goToBankPage(b.id);
                }}
              >
                <div className="bcard-top">
                  <div className="bank-cell">
                    <BankLogo bank={b} />
                    <div className="bank-name">{b.name}</div>
                  </div>
                  <span className={`grade-pill ${gradeClassOf(b.grade)}`}>
                    {b.grade}
                  </span>
                </div>
                <div className="bcard-quote">{b.quote}</div>
                <div className="bcard-foot">
                  <span>
                    {"★".repeat(Math.round(b.rating))} {b.rating}/5
                  </span>
                  <span>{b.reviewCount.toLocaleString("tr-TR")} yorum</span>
                </div>
                <div className="bcard-actions" onClick={(e) => e.stopPropagation()}>
                  <button className="ledger-action" onClick={() => goToBankPage(b.id)}>
                    İncele
                  </button>
                  <button className="ledger-action primary" onClick={() => openBankModal(b.id, "rating")}>
                    Puanla
                  </button>
                </div>
              </article>
            ))}
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
