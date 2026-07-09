"use client";

import { useEffect, useMemo, useState } from "react";
import { getIdTokenResult } from "firebase/auth";
import Header from "./Header";
import Footer from "./Footer";
import AuthModal from "./AuthModal";
import ProfileModal from "./ProfileModal";
import { useAuth } from "@/lib/auth-context";
import { useReviews } from "@/lib/reviews-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import { approveReview, deleteReview, hideReview } from "@/lib/reviews";

const fallbackAdminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL?.toLowerCase();

export default function AdminModeration() {
  const { user } = useAuth();
  const { reviews } = useReviews();
  const { showToast } = useToast();
  const { openAuthModal } = useUI();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    async function checkAdmin() {
      setChecking(true);
      try {
        if (!user) {
          if (alive) setIsAdmin(false);
          return;
        }
        const token = await getIdTokenResult(user, true).catch(() => null);
        const byClaim = token?.claims?.admin === true;
        const byEmail = !!fallbackAdminEmail && user.email?.toLowerCase() === fallbackAdminEmail;
        if (alive) setIsAdmin(byClaim || byEmail);
      } finally {
        if (alive) setChecking(false);
      }
    }
    checkAdmin();
    return () => {
      alive = false;
    };
  }, [user]);

  const reportedReviews = useMemo(
    () => reviews.filter((review) => review.reportCount > 0 || review.status === "hidden"),
    [reviews],
  );

  async function runAction(reviewId: string, action: "approve" | "hide" | "delete") {
    setBusyId(reviewId);
    try {
      if (action === "approve") await approveReview(reviewId);
      if (action === "hide") await hideReview(reviewId);
      if (action === "delete") await deleteReview(reviewId);
      showToast("Moderasyon işlemi tamamlandı.");
    } catch (err) {
      showToast(err instanceof Error ? err.message : "İşlem yapılamadı.");
    } finally {
      setBusyId(null);
    }
  }

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="wrap">
          <section className="admin-card">
            <h1>Moderasyon Paneli</h1>
            <p>
              Bildirim alan yorumları buradan kontrol edebilirsin. Güvenli kullanım için Firebase tarafında admin custom claim tanımlanmalı.
            </p>

            {!user && (
              <div className="info-strip" style={{ margin: "18px 0" }}>
                Moderasyon için giriş yapmalısın. <button className="text-link-btn" style={{ display: "inline", margin: 0 }} onClick={() => openAuthModal("login")}>Giriş yap</button>
              </div>
            )}

            {user && checking && <p className="skeleton-row">Yetki kontrol ediliyor…</p>}

            {user && !checking && !isAdmin && (
              <div className="info-strip" style={{ margin: "18px 0" }}>
                Bu hesap admin yetkisine sahip değil. Firebase Admin SDK ile kullanıcıya <strong>admin: true</strong> custom claim ver veya geçici olarak NEXT_PUBLIC_ADMIN_EMAIL değerini kendi e-postan yap.
              </div>
            )}

            {isAdmin && (
              <div>
                <h2>Bildirim Alan Yorumlar</h2>
                {reportedReviews.length === 0 ? (
                  <p className="skeleton-row">Şu anda incelenecek yorum yok.</p>
                ) : (
                  reportedReviews.map((review) => (
                    <div className="admin-review" key={review.id}>
                      <p>
                        <strong>{review.bankName}</strong> — {review.userName}
                        <span className="badge-soft">{review.reportCount} bildirim</span>
                        {review.status === "hidden" && <span className="badge-soft">gizli</span>}
                      </p>
                      <p>{review.text}</p>
                      <div className="admin-actions">
                        <button className="btn small primary" disabled={busyId === review.id} onClick={() => runAction(review.id, "approve")}>Yayında Tut</button>
                        <button className="btn small" disabled={busyId === review.id} onClick={() => runAction(review.id, "hide")}>Gizle</button>
                        <button className="btn small" disabled={busyId === review.id} onClick={() => runAction(review.id, "delete")}>Sil</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
    </>
  );
}
