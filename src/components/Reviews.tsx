"use client";

import { useMemo, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import { submitReview } from "@/lib/reviews";
import { visibleReviews, overallFromCategories } from "@/lib/bank-stats";
import { letterFromScore } from "@/lib/grades";
import { CATEGORY_META, type CategoryKey, type CategoryRatings, type CreditOutcome } from "@/lib/types";
import ReviewItem from "./ReviewItem";

const CREDIT_OPTIONS: { value: CreditOutcome; label: string }[] = [
  { value: "approved", label: "Onaylandı" },
  { value: "conditional", label: "Şartlı Onay" },
  { value: "rejected", label: "Reddedildi" },
];

export default function Reviews() {
  const { user } = useAuth();
  const { banks } = useBanks();
  const { reviews } = useReviews();
  const publishedReviews = visibleReviews(reviews).filter((review) => review.status !== "hidden");
  const { showToast } = useToast();
  const { openAuthModal, reviewFormBank, setReviewFormBank } = useUI();

  const [categories, setCategories] = useState<CategoryRatings>({});
  const [creditOutcome, setCreditOutcome] = useState<CreditOutcome | undefined>(undefined);
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const bankName = reviewFormBank || banks[0]?.name || "";
  const bank = banks.find((b) => b.name === bankName);

  // Şubesi olmayan bankalarda "Şube Hizmetleri" ve "ATM Hizmetleri" kategorileri
  // anlamsız olduğu için formda gösterilmez ve genel puana katılmaz.
  const applicableCategories = useMemo(
    () => CATEGORY_META.filter((cat) => bank?.hasBranch !== false || (cat.key !== "branch" && cat.key !== "atm")),
    [bank],
  );

  const filledCount = applicableCategories.filter((cat) => categories[cat.key]).length;
  const liveOverall = overallFromCategories(categories);

  function setRating(key: CategoryKey, value: number) {
    setCategories((prev) => ({ ...prev, [key]: value }));
  }

  function resetForm() {
    setCategories({});
    setCreditOutcome(undefined);
    setText("");
  }

  async function handleSubmit() {
    if (!user) {
      showToast("Yorum yapmak için üye olman gerekiyor.");
      openAuthModal("signup");
      return;
    }
    if (filledCount < applicableCategories.length) {
      showToast("Lütfen tüm kategorilere puan ver.");
      return;
    }
    if (text.trim().length < 25) {
      showToast("Yorum en az 25 karakter olmalı.");
      return;
    }
    if (!bank) {
      showToast("Lütfen bir banka seç.");
      return;
    }
    setSubmitting(true);
    try {
      await submitReview({
        uid: user.uid,
        userName: user.displayName || user.email || "Anonim",
        bankId: bank.id,
        bankName: bank.name,
        categories,
        creditOutcome,
        text: text.trim(),
      });
      resetForm();
      showToast(`${bank.name} için yorumun yayınlandı — puanı güncellendi.`);
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Yorum gönderilemedi, tekrar dene.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="yorumlar">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">03 — YORUMLAR</div>
            <h2>Kullanıcılar ne diyor</h2>
            <p>
              Deneyimini paylaş, banka notuna katkıda bulun. Yorumun anında
              listeye eklenir.
            </p>
          </div>
        </div>
        <div className="review-layout">
          <div className="review-form">
            <h3>Notunu ver</h3>
            <p className="hint">
              Yorum yapmak için üye olman gerekir — deneme için formu
              doldurup gönderebilirsin. Yorum en az 25 karakter olmalı.
            </p>
            <div className="field">
              <label>Banka</label>
              <select
                value={bankName}
                onChange={(e) => {
                  setReviewFormBank(e.target.value);
                  resetForm();
                }}
              >
                {banks.map((b) => (
                  <option key={b.id} value={b.name}>
                    {b.name}
                  </option>
                ))}
              </select>
            </div>

            {applicableCategories.map((cat) => (
              <div className="field" key={cat.key}>
                <label>{cat.label}</label>
                <div className="star-picker">
                  {[1, 2, 3, 4, 5].map((v) => (
                    <span
                      key={v}
                      className={v <= (categories[cat.key] || 0) ? "active" : undefined}
                      onClick={() => setRating(cat.key, v)}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="field">
              <label>Kredi / Kredi Kartı Başvurunda Ne Oldu? <span className="hint-inline">(opsiyonel)</span></label>
              <div className="outcome-picker">
                {CREDIT_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    className={`outcome-btn ${creditOutcome === opt.value ? "active" : ""}`}
                    onClick={() =>
                      setCreditOutcome((prev) => (prev === opt.value ? undefined : opt.value))
                    }
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="live-overall">
              <span>Canlı Genel Puan</span>
              <strong>
                {filledCount === applicableCategories.length
                  ? `${liveOverall}/5 · ${letterFromScore(liveOverall)}`
                  : `${applicableCategories.length - filledCount} kategori kaldı`}
              </strong>
            </div>

            <div className="field">
              <label>Yorumun</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Bu bankayla yaşadığın deneyimi anlat..."
              />
            </div>
            <button
              className="btn primary"
              style={{ width: "100%" }}
              onClick={handleSubmit}
              disabled={submitting}
            >
              {submitting ? "Gönderiliyor…" : "Yorumu Yayınla"}
            </button>
          </div>

          <div className="review-list">
            {publishedReviews.length === 0 ? (
              <p className="skeleton-row">Henüz yorum yok — ilk yorumu sen yaz.</p>
            ) : (
              publishedReviews.map((r) => <ReviewItem key={r.id} review={r} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
