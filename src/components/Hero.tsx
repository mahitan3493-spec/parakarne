"use client";

import { useMemo } from "react";
import { useAuth } from "@/lib/auth-context";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import { gradeClassOf, letterFromScore } from "@/lib/grades";
import { CATEGORY_META } from "@/lib/types";
import { useUI } from "@/lib/ui-context";
import BankLogo from "./BankLogo";

export default function Hero() {
  const { user } = useAuth();
  const { openAuthModal } = useUI();
  const { banks } = useBanks();
  const { reviews } = useReviews();

  const updated = useMemo(() => applyReviewStatsToBanks(banks, reviews), [banks, reviews]);

  const stats = useMemo(() => {
    const reviewCount = updated.reduce((sum, bank) => sum + bank.reviewCount, 0);
    const avg = updated.length
      ? (updated.reduce((sum, bank) => sum + bank.rating, 0) / updated.length).toFixed(1)
      : "0.0";
    return { bankCount: updated.length, reviewCount, avg };
  }, [updated]);

  // Kartta gösterilen banka her zaman gerçek, canlı veri: en yüksek puanlı
  // banka (eşitlikte daha çok yorumu olan öne çıkar). Statik/sahte örnek
  // veri kullanmıyoruz ki sitenin geri kalanıyla çelişmesin.
  const topBank = useMemo(() => {
    if (updated.length === 0) return null;
    return [...updated].sort(
      (a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount,
    )[0];
  }, [updated]);

  function handleNotVer() {
    if (user) {
      document.getElementById("yorumlar")?.scrollIntoView({ behavior: "smooth" });
    } else {
      openAuthModal("signup");
    }
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
            <button className="btn" onClick={handleNotVer}>
              Sen de Not Ver
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

        {topBank && (
          <div className="report-card">
            <div className="rc-head">
              <div className="bank-cell">
                <BankLogo bank={topBank} />
                <div>
                  <div className="rc-bank">{topBank.name}</div>
                  <div className="rc-sub">
                    BU AYIN LİDERİ · {topBank.reviewCount.toLocaleString("tr-TR")} YORUM
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
            <div className="rc-row">
              <span className="subj">Kredi/Kredi Kartı Onayı</span>
              <span className="rc-grade g-A">%{Math.round(topBank.creditApprovalRate)}</span>
            </div>
            <div className="rc-note">&quot;{topBank.quote.replace(/^"|"$/g, "")}&quot;</div>
          </div>
        )}
      </div>
    </section>
  );
}
