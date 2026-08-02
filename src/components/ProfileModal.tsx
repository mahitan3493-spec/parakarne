"use client";

import { useState } from "react";
import { updateEmail, updateProfile, type User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth-context";
import { useReviews } from "@/lib/reviews-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import { deleteReview } from "@/lib/reviews";
import ReviewItem from "./ReviewItem";

export default function ProfileModal() {
  const { user } = useAuth();
  const { profileOpen } = useUI();

  if (!profileOpen || !user) return null;
  return <ProfileModalInner user={user} />;
}

function ProfileModalInner({ user }: { user: User }) {
  const { logout, resendVerification, deleteAccount } = useAuth();
  const { reviews, loading: reviewsLoading } = useReviews();
  const { showToast } = useToast();
  const { closeProfileModal } = useUI();

  const [name, setName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [saving, setSaving] = useState(false);
  const [verificationBusy, setVerificationBusy] = useState(false);
  const [deleteBusy, setDeleteBusy] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const myReviews = reviews.filter((review) => review.uid === user.uid);
  const signedInWithGoogle = user.providerData.some(
    (provider) => provider.providerId === "google.com",
  );

  async function handleSave() {
    setSaving(true);
    try {
      if (name.trim() && name.trim() !== user.displayName) {
        await updateProfile(user, { displayName: name.trim() });
      }
      if (email.trim() && email.trim() !== user.email) {
        await updateEmail(user, email.trim());
      }
      showToast("Profil güncellendi.");
    } catch (error) {
      if (error instanceof FirebaseError && error.code === "auth/requires-recent-login") {
        showToast("E-postanı değiştirmek için tekrar giriş yapman gerekiyor.");
      } else {
        showToast("Profil güncellenemedi, tekrar dene.");
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleResendVerification() {
    setVerificationBusy(true);
    try {
      await resendVerification();
      showToast("Doğrulama e-postası yeniden gönderildi.");
    } catch {
      showToast("Doğrulama e-postası gönderilemedi. Biraz sonra tekrar dene.");
    } finally {
      setVerificationBusy(false);
    }
  }

  async function handleLogout() {
    await logout();
    closeProfileModal();
    showToast("Çıkış yapıldı.");
  }

  async function handleDeleteAccount() {
    if (reviewsLoading) {
      showToast("Yorumların yüklenmesi tamamlanınca tekrar dene.");
      return;
    }
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }

    setDeleteBusy(true);
    try {
      for (const review of myReviews) {
        await deleteReview(review.id);
      }
      await deleteAccount();
      closeProfileModal();
      showToast("Hesabın ve yorumların silindi.");
    } catch (error) {
      if (error instanceof FirebaseError && error.code === "auth/requires-recent-login") {
        showToast("Hesabı silmek için çıkış yapıp yeniden giriş yaptıktan sonra tekrar dene.");
      } else {
        showToast("Hesap silinemedi. Lütfen tekrar dene.");
      }
    } finally {
      setDeleteBusy(false);
    }
  }

  return (
    <div
      className="overlay open"
      onClick={(event) => {
        if (event.target === event.currentTarget) closeProfileModal();
      }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="profile-title">
        <button
          type="button"
          className="modal-close"
          onClick={closeProfileModal}
          aria-label="Profil penceresini kapat"
        >
          ✕
        </button>
        <h3 id="profile-title">Profilim</h3>
        <p className="hint">Bilgilerini ve yorumlarını yönet.</p>
        <div className="field">
          <label htmlFor="profile-name">Görünen ad</label>
          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={40}
          />
          <small>Yorumlarda adın “Murat K.” gibi kısaltılarak gösterilir.</small>
        </div>
        <div className="field">
          <label htmlFor="profile-email">E-posta</label>
          <input
            id="profile-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        {!user.emailVerified && !signedInWithGoogle && (
          <div className="profile-verification-box">
            <span>E-posta adresin henüz doğrulanmadı.</span>
            <button
              type="button"
              className="text-link-btn"
              onClick={handleResendVerification}
              disabled={verificationBusy}
            >
              {verificationBusy ? "Gönderiliyor…" : "Doğrulama e-postasını yeniden gönder"}
            </button>
          </div>
        )}
        <p className="profile-review-count">
          Yorum sayın: <strong>{myReviews.length}</strong>
        </p>
        <button
          type="button"
          className="btn primary"
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Kaydediliyor…" : "Kaydet"}
        </button>
        <button
          type="button"
          className="btn"
          style={{ width: "100%", marginBottom: myReviews.length ? "20px" : 0 }}
          onClick={handleLogout}
        >
          Çıkış Yap
        </button>
        {myReviews.length > 0 && (
          <div className="profile-review-section">
            <h4>Yorumlarım</h4>
            <div className="detail-reviews profile-review-list">
              {myReviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
        <div className="profile-danger-zone">
          <strong>Hesabı ve verileri sil</strong>
          <p>Bu işlem hesabını ve sana ait bütün banka yorumlarını kalıcı olarak siler.</p>
          {confirmDelete && (
            <p className="profile-delete-warning">Eminsen düğmeye bir kez daha bas.</p>
          )}
          <button
            type="button"
            className="btn danger-btn"
            onClick={handleDeleteAccount}
            disabled={deleteBusy || reviewsLoading}
          >
            {reviewsLoading
              ? "Yorumlar yükleniyor…"
              : deleteBusy
                ? "Siliniyor…"
                : confirmDelete
                  ? "Evet, hesabımı kalıcı sil"
                  : "Hesabımı Sil"}
          </button>
        </div>
      </div>
    </div>
  );
}
