"use client";

import { useMemo } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf, letterFromScore, approvalClass } from "@/lib/grades";
import { applyReviewStats, visibleReviews } from "@/lib/bank-stats";
import { CATEGORY_META } from "@/lib/types";
import ReviewItem from "./ReviewItem";
import BankLogo from "./BankLogo";

export default function BankDetailModal() {
  const { bankDetailId, closeBankModal, setReviewFormBank } = useUI();
  const { banks } = useBanks();
  const { reviews } = useReviews();

  const rawBank = banks.find((b) => b.id === bankDetailId);
  const bank = useMemo(
    () => (rawBank ? applyReviewStats(rawBank, reviews) : null),
    [rawBank, reviews],
  );

  if (!bankDetailId || !bank) return null;

  const bankReviews = visibleReviews(reviews).filter((r) => r.bankId === bank.id);

  function handleReviewCta() {
    closeBankModal();
    setReviewFormBank(bank!.name);
    setTimeout(() => {
      document.getElementById("yorumlar")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }

  return (
    <div
      className="overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBankModal();
      }}
    >
      <div className="modal wide">
        <button className="modal-close" onClick={closeBankModal}>
          ✕
        </button>
        <div className="detail-head">
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
            const score = bank.sub[cat.key] as number;
            const letter = letterFromScore(score);
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
        <p
          style={{
            fontSize: "13px",
            color: "var(--ink-soft)",
            fontStyle: "italic",
            marginBottom: "14px",
          }}
        >
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
        <button className="btn primary small" style={{ marginBottom: "14px" }} onClick={handleReviewCta}>
          Bu Bankaya Yorum Yap
        </button>
        <div className="detail-reviews">
          {bankReviews.length ? (
            bankReviews.map((r) => <ReviewItem key={r.id} review={r} />)
          ) : (
            <p style={{ fontSize: "13px", color: "var(--ink-faint)" }}>
              Henüz yorum yok — ilk yorumu sen yaz.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
