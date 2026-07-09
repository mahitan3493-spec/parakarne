"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf, letterFromScore, approvalClass } from "@/lib/grades";
import { applyReviewStats, overallFromCategories, visibleReviews } from "@/lib/bank-stats";
import { submitReview } from "@/lib/reviews";
import {
  CATEGORY_META,
  type ApplicationOutcome,
  type CategoryKey,
  type CategoryRatings,
  type EmploymentStatus,
} from "@/lib/types";
import ReviewItem from "./ReviewItem";
import BankLogo from "./BankLogo";

type ModalStep = 1 | 2 | 3 | 4 | 5;

const APPLICATION_OPTIONS: { value: ApplicationOutcome; label: string; tone: string }[] = [
  { value: "approved", label: "Onaylandı", tone: "approved" },
  { value: "rejected", label: "Reddedildi", tone: "rejected" },
  { value: "not_applied", label: "Başvurmadım", tone: "neutral" },
];

const EMPLOYMENT_OPTIONS: { value: EmploymentStatus; label: string }[] = [
  { value: "private_sector", label: "Özel Sektör" },
  { value: "public_sector", label: "Kamu" },
  { value: "self_employed", label: "Serbest Meslek" },
  { value: "retired", label: "Emekli" },
  { value: "not_working", label: "Çalışmıyor" },
  { value: "student", label: "Öğrenci" },
  { value: "business_owner", label: "Esnaf / Şirket Sahibi" },
];

function StepDots({ step }: { step: ModalStep }) {
  return (
    <div className="rating-stepper" aria-label={`Adım ${step} / 4`}>
      {[1, 2, 3, 4].map((num) => (
        <span key={num} className={num < step ? "done" : num === step ? "active" : ""}>
          {num < step ? "✓" : num}
        </span>
      ))}
    </div>
  );
}

function StarPicker({ value, onChange }: { value: number | undefined; onChange: (value: number) => void }) {
  return (
    <div className="star-picker modal-stars" role="radiogroup" aria-label="Yıldız puanı">
      {[1, 2, 3, 4, 5].map((v) => (
        <button
          type="button"
          key={v}
          className={v <= (value || 0) ? "active" : undefined}
          onClick={() => onChange(v)}
          aria-label={`${v} yıldız`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function BankDetailModal() {
  const { user } = useAuth();
  const { bankDetailId, bankModalMode, closeBankModal, openAuthModal } = useUI();
  const { banks } = useBanks();
  const { reviews } = useReviews();
  const { showToast } = useToast();

  const [step, setStep] = useState<ModalStep>(1);
  const [categories, setCategories] = useState<CategoryRatings>({});
  const [creditApplicationOutcome, setCreditApplicationOutcome] = useState<ApplicationOutcome | undefined>();
  const [creditCardApplicationOutcome, setCreditCardApplicationOutcome] = useState<ApplicationOutcome | undefined>();
  const [employmentStatus, setEmploymentStatus] = useState<EmploymentStatus | undefined>();
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [lastSubmittedBankName, setLastSubmittedBankName] = useState("");

  const rawBank = banks.find((b) => b.id === bankDetailId);
  const bank = useMemo(
    () => (rawBank ? applyReviewStats(rawBank, reviews) : null),
    [rawBank, reviews],
  );

  useEffect(() => {
    setStep(bankModalMode === "rating" ? 2 : 1);
    setCategories({});
    setCreditApplicationOutcome(undefined);
    setCreditCardApplicationOutcome(undefined);
    setEmploymentStatus(undefined);
    setText("");
    setSubmitting(false);
    setLastSubmittedBankName("");
  }, [bankDetailId, bankModalMode]);

  if (!bankDetailId || !bank) return null;

  const bankReviews = visibleReviews(reviews).filter((r) => r.bankId === bank.id);
  const applicableCategories = CATEGORY_META.filter(
    (cat) => bank.hasBranch !== false || (cat.key !== "branch" && cat.key !== "atm"),
  );
  const filledCount = applicableCategories.filter((cat) => categories[cat.key]).length;
  const liveOverall = overallFromCategories(categories);

  function setRating(key: CategoryKey, value: number) {
    setCategories((prev) => ({ ...prev, [key]: value }));
  }

  function goToStep(nextStep: ModalStep) {
    setStep(nextStep);
  }

  function goBackToBankList() {
    closeBankModal();
    window.location.href = "/#bankalar";
  }

  function goHome() {
    closeBankModal();
    window.location.href = "/";
  }

  function handleNextFromRatings() {
    if (filledCount < applicableCategories.length) {
      showToast("Lütfen tüm hizmet kategorilerine puan ver.");
      return;
    }
    goToStep(3);
  }

  function handleNextFromApproval() {
    if (!creditApplicationOutcome || !creditCardApplicationOutcome) {
      showToast("Kredi ve kredi kartı başvuru sonucunu seç.");
      return;
    }
    if (!employmentStatus) {
      showToast("Lütfen çalışma / gelir durumunu seç.");
      return;
    }
    goToStep(4);
  }

  async function handleSubmit() {
    if (!user) {
      showToast("Puan ve yorum kaydetmek için üye olman gerekiyor.");
      openAuthModal("signup");
      return;
    }
    if (filledCount < applicableCategories.length) {
      showToast("Lütfen tüm hizmet kategorilerine puan ver.");
      setStep(2);
      return;
    }
    if (!creditApplicationOutcome || !creditCardApplicationOutcome || !employmentStatus) {
      showToast("Lütfen onay ve gelir bilgilerini tamamla.");
      setStep(3);
      return;
    }
    if (text.trim().length < 25) {
      showToast("Yorum en az 25 karakter olmalı.");
      return;
    }

    setSubmitting(true);
    try {
      await submitReview({
        uid: user.uid,
        userName: user.displayName || user.email || "Anonim",
        bankId: bank!.id,
        bankName: bank!.name,
        categories,
        creditApplicationOutcome,
        creditCardApplicationOutcome,
        employmentStatus,
        text: text.trim(),
      });
      setLastSubmittedBankName(bank!.name);
      showToast(`${bank!.name} için puanın ve yorumun kaydedildi.`);
      setStep(5);
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Yorum gönderilemedi, tekrar dene.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div
      className="overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeBankModal();
      }}
    >
      <div className="modal wide rating-modal">
        <button className="modal-close" onClick={closeBankModal} aria-label="Pencereyi kapat">
          ✕
        </button>

        {step === 1 && (
          <>
            <div className="rating-modal-title">Adım 1 • Banka Detayı</div>
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
            <p className="editor-note">
              <span>Editör notu</span>
              {bank.summary}
            </p>
            <button className="btn primary review-submit-btn" onClick={() => goToStep(2)}>
              Bu Bankayı Puanla
            </button>
            <p className="modal-footnote">🔒 Yorum ve puan sadece bu bankaya kaydedilir.</p>
            <div className="modal-secondary-actions detail-action-bar">
              <a className="btn" href={`/banka/${bank.id}/`}>
                Banka sayfasını aç
              </a>
              <a className="btn" href="/#karsilastir" onClick={closeBankModal}>
                Karşılaştırmaya git
              </a>
            </div>
            <div className="detail-reviews">
              {bankReviews.length ? (
                bankReviews.map((r) => <ReviewItem key={r.id} review={r} />)
              ) : (
                <p style={{ fontSize: "13px", color: "var(--ink-faint)" }}>
                  Henüz yorum yok — ilk yorumu sen yaz.
                </p>
              )}
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className="rating-modal-title">Adım 2 • Hizmet Puanları</div>
            <StepDots step={2} />
            <p className="modal-step-count">2 / 4</p>
            <p className="hint">Aşağıdaki hizmet kategorilerini 1 ile 5 yıldız arasında puanla.</p>
            <div className="rating-fields">
              {applicableCategories.map((cat) => (
                <div className="rating-row" key={cat.key}>
                  <div>
                    <strong>{cat.label}</strong>
                    <span>{cat.hint}</span>
                  </div>
                  <StarPicker value={categories[cat.key]} onChange={(value) => setRating(cat.key, value)} />
                </div>
              ))}
            </div>
            <div className="live-overall modal-live-overall">
              <span>Canlı Genel Puan</span>
              <strong>
                {filledCount === applicableCategories.length
                  ? `${liveOverall}/5 · ${letterFromScore(liveOverall)}`
                  : `${applicableCategories.length - filledCount} kategori kaldı`}
              </strong>
            </div>
            <div className="modal-actions">
              <button className="btn" onClick={() => goToStep(1)}>
                Geri
              </button>
              <button className="btn primary" onClick={handleNextFromRatings}>
                Devam Et
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="rating-modal-title">Adım 3 • Onay ve Gelir Bilgileri</div>
            <StepDots step={3} />
            <p className="modal-step-count">3 / 4</p>
            <div className="field">
              <label>Kredi Başvurusu</label>
              <div className="outcome-picker modal-outcomes">
                {APPLICATION_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    className={`outcome-btn tone-${opt.tone} ${creditApplicationOutcome === opt.value ? "active" : ""}`}
                    onClick={() => setCreditApplicationOutcome(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Kredi Kartı Başvurusu</label>
              <div className="outcome-picker modal-outcomes">
                {APPLICATION_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    className={`outcome-btn tone-${opt.tone} ${creditCardApplicationOutcome === opt.value ? "active" : ""}`}
                    onClick={() => setCreditCardApplicationOutcome(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="field">
              <label>Çalışma / Gelir Durumu</label>
              <div className="income-picker">
                {EMPLOYMENT_OPTIONS.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    className={employmentStatus === opt.value ? "active" : ""}
                    onClick={() => setEmploymentStatus(opt.value)}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn" onClick={() => goToStep(2)}>
                Geri
              </button>
              <button className="btn primary" onClick={handleNextFromApproval}>
                Devam Et
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="rating-modal-title">Adım 4 • Yorum ve Kaydet</div>
            <StepDots step={4} />
            <p className="modal-step-count">4 / 4</p>
            <p className="hint">
              {bank.name} hakkındaki deneyimini paylaşarak diğer kullanıcılara yardımcı olabilirsin.
            </p>
            <div className="field">
              <label>Yorumun</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Bu banka hakkındaki deneyimini yaz..."
                maxLength={1000}
              />
              <div className="textarea-meta">
                <span>Minimum 25 karakter</span>
                <span>{text.length} / 1000</span>
              </div>
            </div>
            <div className="modal-note-box">
              Yorumun topluluk kurallarına uygun olmalı ve kişisel bilgi içermemelidir.
            </div>
            <button className="btn primary review-submit-btn" onClick={handleSubmit} disabled={submitting}>
              {submitting ? "Kaydediliyor…" : "Puanı ve Yorumu Kaydet"}
            </button>
            <button className="btn modal-back-detail" onClick={() => goToStep(1)}>
              Banka detayına dön
            </button>
          </>
        )}

        {step === 5 && (
          <div className="success-state">
            <div className="success-icon">✓</div>
            <div className="rating-modal-title success-title">Puanın ve yorumun kaydedildi</div>
            <h3>{lastSubmittedBankName || bank.name} karnesine eklendi.</h3>
            <p>
              Verdiğin hizmet puanları, kredi/kredi kartı sonucu ve yorumun bu bankanın
              ParaKarne verilerine işlendi.
            </p>
            <div className="success-summary">
              <span>Kredi: {APPLICATION_OPTIONS.find((o) => o.value === creditApplicationOutcome)?.label}</span>
              <span>Kredi Kartı: {APPLICATION_OPTIONS.find((o) => o.value === creditCardApplicationOutcome)?.label}</span>
              <span>
                Gelir: {EMPLOYMENT_OPTIONS.find((o) => o.value === employmentStatus)?.label}
              </span>
            </div>
            <div className="success-actions">
              <button className="btn primary" onClick={() => goToStep(1)}>
                Bankayı İncele
              </button>
              <button className="btn" onClick={goBackToBankList}>
                Başka Banka Puanla
              </button>
              <button className="btn" onClick={goHome}>
                Ana Sayfaya Dön
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
