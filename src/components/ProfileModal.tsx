"use client";

import { useState } from "react";
import { updateEmail, updateProfile, type User } from "firebase/auth";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth-context";
import { useReviews } from "@/lib/reviews-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import ReviewItem from "./ReviewItem";

export default function ProfileModal() {
  const { user } = useAuth();
  const { profileOpen } = useUI();

  if (!profileOpen || !user) return null;
  return <ProfileModalInner user={user} />;
}

function ProfileModalInner({ user }: { user: User }) {
  const { logout } = useAuth();
  const { reviews } = useReviews();
  const { showToast } = useToast();
  const { closeProfileModal } = useUI();

  const [name, setName] = useState(user.displayName || "");
  const [email, setEmail] = useState(user.email || "");
  const [saving, setSaving] = useState(false);

  const myReviews = reviews.filter((r) => r.uid === user.uid);

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
    } catch (err) {
      if (err instanceof FirebaseError && err.code === "auth/requires-recent-login") {
        showToast("E-postanı değiştirmek için tekrar giriş yapman gerekiyor.");
      } else {
        showToast("Profil güncellenemedi, tekrar dene.");
      }
    } finally {
      setSaving(false);
    }
  }

  async function handleLogout() {
    await logout();
    closeProfileModal();
    showToast("Çıkış yapıldı.");
  }

  return (
    <div
      className="overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeProfileModal();
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={closeProfileModal}>
          ✕
        </button>
        <h3>Profilim</h3>
        <p className="hint">Bilgilerini güncelle ya da çıkış yap.</p>
        <div className="field">
          <label>Ad Soyad</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>E-posta</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <p style={{ fontSize: "12.5px", color: "var(--ink-faint)", marginBottom: "16px" }}>
          Yorum sayın: <strong>{myReviews.length}</strong>
        </p>
        <button
          className="btn primary"
          style={{ width: "100%", marginBottom: "10px" }}
          onClick={handleSave}
          disabled={saving}
        >
          {saving ? "Kaydediliyor…" : "Kaydet"}
        </button>
        <button className="btn" style={{ width: "100%", marginBottom: myReviews.length ? "20px" : 0 }} onClick={handleLogout}>
          Çıkış Yap
        </button>
        {myReviews.length > 0 && (
          <div className="detail-reviews" style={{ maxHeight: 240 }}>
            {myReviews.map((r) => (
              <ReviewItem key={r.id} review={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
