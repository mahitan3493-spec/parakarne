"use client";

import { useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import { reportReview } from "@/lib/reviews";
import type { ApplicationOutcome, CreditOutcome, EmploymentStatus, Review } from "@/lib/types";

const CREDIT_LABELS: Record<CreditOutcome, string> = {
  approved: "Kredi Onaylandı",
  conditional: "Şartlı Onay",
  rejected: "Kredi Reddedildi",
};

const APPLICATION_LABELS: Record<ApplicationOutcome, string> = {
  approved: "Onaylandı",
  rejected: "Reddedildi",
  not_applied: "Başvurmadı",
};

const EMPLOYMENT_LABELS: Record<EmploymentStatus, string> = {
  private_sector: "Özel Sektör",
  public_sector: "Kamu",
  self_employed: "Serbest Meslek",
  retired: "Emekli",
  not_working: "Çalışmıyor",
  student: "Öğrenci",
  business_owner: "Esnaf / Şirket Sahibi",
};

export default function ReviewItem({ review }: { review: Review }) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { openAuthModal } = useUI();
  const [submitting, setSubmitting] = useState(false);

  const flagged = review.reportCount >= 3;
  const alreadyReported = !!user && review.reportedBy.includes(user.uid);

  async function handleReport() {
    if (!user) {
      showToast("Bildirmek için üye olman gerekiyor.");
      openAuthModal("login");
      return;
    }
    if (alreadyReported || submitting) return;
    setSubmitting(true);
    try {
      await reportReview(review.id, user.uid);
      showToast(
        review.reportCount + 1 >= 3
          ? "Yorum incelemeye alındı."
          : "Bildirimin alındı, teşekkürler.",
      );
    } catch {
      showToast("Bildirim gönderilemedi, tekrar dene.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="review-item">
      <div className="rev-head">
        <span className="rev-user">
          {review.userName}
          {flagged && <span className="review-flag">İNCELEMEDE</span>}
        </span>
        <span className="rev-bank-pill">{review.bankName}</span>
      </div>
      <div className="rev-stars">
        {"★".repeat(review.stars)}
        {"☆".repeat(5 - review.stars)}
        {review.creditOutcome && (
          <span className={`credit-badge credit-${review.creditOutcome}`}>
            {CREDIT_LABELS[review.creditOutcome]}
          </span>
        )}
        {review.creditApplicationOutcome && (
          <span className={`credit-badge credit-${review.creditApplicationOutcome}`}>
            Kredi: {APPLICATION_LABELS[review.creditApplicationOutcome]}
          </span>
        )}
        {review.creditCardApplicationOutcome && (
          <span className={`credit-badge credit-${review.creditCardApplicationOutcome}`}>
            Kart: {APPLICATION_LABELS[review.creditCardApplicationOutcome]}
          </span>
        )}
        {review.employmentStatus && (
          <span className="credit-badge credit-info">
            {EMPLOYMENT_LABELS[review.employmentStatus]}
          </span>
        )}
      </div>
      <div className="rev-text">
        {flagged
          ? "Bu yorum, birden fazla bildirim aldığı için incelemeye alındı."
          : review.text}
      </div>
      {!flagged && <div className="rev-margin">{review.note}</div>}
      <div className="rev-actions">
        <button className="report-btn" onClick={handleReport} disabled={alreadyReported}>
          {alreadyReported ? "Bildirildi" : "Bildir"}
        </button>
        <span className="mono" style={{ fontSize: "10.5px", color: "var(--ink-faint)" }}>
          {review.reportCount ? `${review.reportCount} bildirim` : ""}
        </span>
      </div>
    </div>
  );
}
