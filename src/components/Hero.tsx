"use client";

import { useMemo } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import { gradeClassOf, letterFromScore } from "@/lib/grades";
import { CATEGORY_META } from "@/lib/types";
import BankLogo from "./BankLogo";

export default function Hero() {
  const { banks } = useBanks();
  const { reviews } = useReviews();

  const updated = useMemo(() => applyReviewStatsToBanks(banks, reviews), [banks, reviews]);

  const stats = useMemo(() => {
    const reviewed = updated.filter((bank) => bank.reviewCount > 0);
    const reviewCount = updated.reduce((sum, bank) => sum + bank.reviewCount, 0);
    // Ortalamayı sadece gerçekten yorum almış bankalar üzerinden, yorum
    // sayısıyla ağırlıklandırarak hesaplıyoruz — yoksa henüz yorum almamış
    // bankaların 0 puanı ortalamayı yanlış şekilde aşağı çekerdi.
    const avg =
      reviewCount > 0
        ? (
            reviewed.reduce((sum, bank) => sum + bank.rating * bank.reviewCount, 0) / reviewCount
          ).toFixed(1)
        : "0.0";
    return { bankCount: updated.length, reviewCount, avg };
  }, [updated]);

  // Kartta gösterilen banka her zaman gerçek, canlı veri: en yüksek puanlı,
  // gerçekten yorum almış banka (eşitlikte daha çok yorumu olan öne çıkar).
  // Henüz hiçbir bankaya gerçek yorum yapılmadıysa kart hiç gösterilmez —
  // sahte/örnek veri kullanmıyoruz.
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
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">Türkiye&apos;nin Banka Karnesi</div>
          <h1>
            Bankanız <em>sınıfı geçiyor mu?</em>
          </h1>
          <p className="lead">
            Gerçek kullanıcı deneyimlerine dayalı, karne gibi net bir sistemle
            bankaları puanlıyoruz. Faiz oranından mobil uygulamaya, şube
            hizmetinden şikayet çözümüne — her başlığa ayrı not.
          </p>
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
            <button className="btn" onClick={handleBankaniPuanla}>
              Bankanı Puanla
            </button>
          </div>
          <div className="hero-stats">
            <div>
              <span className="num">{stats.bankCount}</span>
              <span className="lbl">banka karneye alındı</span>
            </div>
            <div>
              <span className="num">{stats.reviewCount.toLocaleString("tr-TR")}</span>
              <span className="lbl">toplam kullanıcı yorumu</span>
            </div>
            <div>
              <span className="num">{stats.avg}</span>
              <span className="lbl">ortalama kullanıcı puanı</span>
            </div>
          </div>
        </div>

        {topBank ? (
          <div className="report-card">
            <div className="rc-head">
              <div className="bank-cell">
                <BankLogo bank={topBank} />
                <div>
                  <div className="rc-bank">{topBank.name}</div>
                  <div className="rc-sub">
                    ŞU AN LİDER · {topBank.reviewCount.toLocaleString("tr-TR")} YORUM
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
              <span className="rc-note-label">Editör notu</span>
              {topBank.quote.replace(/^"|"$/g, "")}
            </div>
          </div>
        ) : (
          <div className="report-card report-card-empty">
            <div className="rc-stamp" style={{ margin: "0 auto 16px" }}>
              ?
            </div>
            <p style={{ textAlign: "center", fontWeight: 700, marginBottom: "8px" }}>
              Henüz kimse not vermedi
            </p>
            <p
              style={{
                textAlign: "center",
                fontSize: "13px",
                color: "var(--ink-soft)",
                marginBottom: "16px",
              }}
            >
              İlk yorumu sen bırak, karneyi sen başlat.
            </p>
            <button className="btn primary" style={{ width: "100%" }} onClick={handleBankaniPuanla}>
              İlk Bankayı Puanla
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
