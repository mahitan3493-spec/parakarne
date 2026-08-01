"use client";

import { useMemo } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { applyReviewStatsToBanks, visibleReviews } from "@/lib/bank-stats";
import { gradeClassOf, letterFromScore } from "@/lib/grades";
import { CATEGORY_META } from "@/lib/types";
import BankLogo from "./BankLogo";

export default function Hero() {
  const { banks } = useBanks();
  const { reviews, loading: reviewsLoading } = useReviews();

  const updated = useMemo(() => applyReviewStatsToBanks(banks, reviews), [banks, reviews]);

  const liveReviews = useMemo(
    () => visibleReviews(reviews).filter((review) => review.status !== "hidden"),
    [reviews],
  );

  const stats = useMemo(() => {
    const reviewCount = liveReviews.length;
    const avg =
      reviewCount > 0
        ? (liveReviews.reduce((sum, review) => sum + review.stars, 0) / reviewCount).toFixed(1)
        : "0.0";
    return { bankCount: updated.length, reviewCount, avg };
  }, [updated.length, liveReviews]);

  const topBank = useMemo(() => {
    const reviewed = updated.filter((bank) => bank.reviewCount > 0);
    if (reviewed.length === 0) return null;
    return [...reviewed].sort(
      (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
    )[0];
  }, [updated]);

  function handleBankaniPuanla() {
    document.getElementById("bankalar")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="hero">
      <div className="hero-shell wrap">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Bağımsız banka değerlendirme platformu</div>
            <h1>
              Bankaları <em>gerçek kullanıcı deneyimleriyle</em> karşılaştırın.
            </h1>
            <p className="lead">
              Mobil uygulama, müşteri hizmetleri, ATM, güvenlik, şube hizmetleri ve kredi/kart başvuru sonuçlarını tek ekranda görün.
            </p>
            <div className="hero-mini-list">
              <span>Canlı kullanıcı puanları</span>
              <span>Kategori bazlı karne sistemi</span>
              <span>Kredi ve kart onay deneyimleri</span>
            </div>
            <div className="hero-ctas">
              <button
                className="btn primary"
                onClick={() =>
                  document
                    .getElementById("karsilastir")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Bankaları Karşılaştır
              </button>
              <button className="btn hero-rate-btn" onClick={handleBankaniPuanla}>
                <span className="hero-rate-icon" aria-hidden="true">★</span>
                <span>Bankanı Puanla</span>
              </button>
            </div>
            <div className="hero-stats hero-stats-pro">
              <div>
                <span className="num">{stats.bankCount}</span>
                <span className="lbl">takip edilen banka</span>
              </div>
              <div>
                <span className="num">{reviewsLoading ? "1+" : stats.reviewCount.toLocaleString("tr-TR")}</span>
                <span className="lbl">yayındaki kullanıcı yorumu</span>
              </div>
              <div>
                <span className="num">{reviewsLoading ? "canlı" : stats.avg}</span>
                <span className="lbl">ortalama kullanıcı puanı</span>
              </div>
            </div>
          </div>

          {reviewsLoading ? (
            <div className="report-card report-card-empty">
              <div className="hero-card-skeleton" aria-label="Karne hazırlanıyor">
                <span className="skeleton-line wide" />
                <span className="skeleton-line" />
                <span className="skeleton-line short" />
              </div>
            </div>
          ) : topBank ? (
            <div className="report-card report-card-pro">
              <div className="rc-topline">Haftanın öne çıkan bankası</div>
              <div className="rc-head">
                <div className="bank-cell">
                  <BankLogo bank={topBank} />
                  <div>
                    <div className="rc-bank">{topBank.name}</div>
                    <div className="rc-sub">
                      LİDER BANKA · {topBank.reviewCount.toLocaleString("tr-TR")} YORUM
                    </div>
                  </div>
                </div>
                <div className="rc-stamp">{topBank.grade}</div>
              </div>
              {CATEGORY_META.filter((cat) => topBank.sub[cat.key] !== null).map((cat) => {
                const letter = letterFromScore(topBank.sub[cat.key] as number);
                return (
                  <div className="rc-row" key={cat.key}>
                    <span className="subj">{cat.label}</span>
                    <span className={`rc-grade ${gradeClassOf(letter)}`}>{letter}</span>
                  </div>
                );
              })}
              {topBank.creditApprovalCount > 0 && (
                <div className="rc-row">
                  <span className="subj">Kredi/Kredi Kartı Onayı</span>
                  <span className="rc-grade g-A">%{Math.round(topBank.creditApprovalRate)}</span>
                </div>
              )}
              <div className="rc-note">
                <span className="rc-note-label">Öne çıkan kullanıcı notu</span>
                {topBank.quote.replace(/^"|"$/g, "")}
              </div>
            </div>
          ) : (
            <div className="report-card report-card-empty">
              <div className="rc-stamp" style={{ margin: "0 auto 16px" }}>
                ?
              </div>
              <p style={{ textAlign: "center", fontWeight: 700, marginBottom: "8px" }}>
                Henüz kullanıcı puanı yok
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontSize: "13px",
                  color: "var(--ink-soft)",
                  marginBottom: "16px",
                }}
              >
                İlk puanı ve yorumunu bırak, karneyi sen başlat.
              </p>
              <button className="btn primary" style={{ width: "100%" }} onClick={handleBankaniPuanla}>
                İlk Bankayı Puanla
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
