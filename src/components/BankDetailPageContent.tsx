"use client";

import { useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AuthModal from "./AuthModal";
import ProfileModal from "./ProfileModal";
import BankDetailModal from "./BankDetailModal";
import ReviewItem from "./ReviewItem";
import BankLogo from "./BankLogo";
import Link from "next/link";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf, letterFromScore, approvalClass } from "@/lib/grades";
import { applyReviewStats, visibleReviews } from "@/lib/bank-stats";
import { CATEGORY_META } from "@/lib/types";

export default function BankDetailPageContent({ bankId }: { bankId: string }) {
  const { banks } = useBanks();
  const { reviews } = useReviews();
  const { openBankModal } = useUI();

  const rawBank = banks.find((b) => b.id === bankId);
  const bank = useMemo(
    () => (rawBank ? applyReviewStats(rawBank, reviews) : null),
    [rawBank, reviews],
  );

  if (!bank) {
    return (
      <>
        <Header />
        <main className="legal-page">
          <div className="wrap">
            <p className="skeleton-row">Banka bulunamadı.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const bankReviews = visibleReviews(reviews).filter((r) => r.bankId === bank.id);

  function handleReviewCta() {
    openBankModal(bank!.id, "rating");
  }

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="wrap">
          <article className="content-article">
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana sayfa</Link> / {bank.name} Karnesi
            </p>
            <h1>{bank.name} Karnesi</h1>
            <p className="lead">
              {bank.name} için gerçek kullanıcı yorumlarına dayalı güncel puan, kategori notları ve
              kredi/kredi kartı onay oranı. Aşağıdan siz de not verebilirsiniz.
            </p>

            <div className="detail-head" style={{ marginTop: 20 }}>
              <div className="bank-cell">
                <BankLogo bank={bank} />
                <div>
                  <div className="rc-bank">{bank.name}</div>
                  <div className="rc-sub">
                    {bank.reviewCount > 0
                      ? `${bank.reviewCount.toLocaleString("tr-TR")} yorum · Genel ${bank.rating}/5`
                      : "Henüz yorum yok"}
                  </div>
                </div>
              </div>
              <div
                className={`grade-pill ${gradeClassOf(bank.grade)}`}
                style={{ width: 52, height: 52, fontSize: 18 }}
              >
                {bank.grade}
              </div>
            </div>

            <div className="detail-grades">
              {CATEGORY_META.filter((cat) => bank.sub[cat.key] !== null).map((cat) => {
                const letter = letterFromScore(bank.sub[cat.key] as number);
                return (
                  <div className="rc-row" key={cat.key}>
                    <span className="subj">{cat.label}</span>
                    <span className={`rc-grade ${gradeClassOf(letter)}`}>{letter}</span>
                  </div>
                );
              })}
              {bank.creditApprovalCount > 0 && (
                <>
                  <div className="rc-row">
                    <span className="subj">Kredi / Kredi Kartı Onay Oranı</span>
                    <span className={`rc-grade ${approvalClass(bank.creditApprovalRate)}`}>
                      %{Math.round(bank.creditApprovalRate)}
                    </span>
                  </div>
                  <div className="rc-approval-note">
                    {bank.creditApprovalCount.toLocaleString("tr-TR")} başvurudan derlendi
                  </div>
                </>
              )}
              {bank.reviewCount === 0 && (
                <p style={{ fontSize: "12.5px", color: "var(--ink-faint)", padding: "8px 0" }}>
                  Bu banka için henüz not yok — ilk yorumu sen bırakınca kategoriler burada belirecek.
                </p>
              )}
            </div>

            <p style={{ fontSize: "13px", color: "var(--ink-soft)", fontStyle: "italic", margin: "18px 0" }}>
              <span
                style={{
                  display: "block",
                  fontStyle: "normal",
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  color: "var(--ink-faint)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "4px",
                }}
              >
                Editör notu
              </span>
              {bank.summary}
            </p>

            <button className="btn primary" onClick={handleReviewCta}>
              Bu Bankayı Puanla
            </button>

            <h2 style={{ marginTop: 32 }}>Kullanıcı Yorumları</h2>
            <div className="detail-reviews">
              {bankReviews.length ? (
                bankReviews.map((r) => <ReviewItem key={r.id} review={r} />)
              ) : (
                <p style={{ fontSize: "13px", color: "var(--ink-faint)" }}>
                  Henüz yorum yok — ilk yorumu sen yaz.
                </p>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <BankDetailModal />
      <ProfileModal />
    </>
  );
}
