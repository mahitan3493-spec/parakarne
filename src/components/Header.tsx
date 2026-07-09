"use client";

import { useAuth } from "@/lib/auth-context";
import { useUI } from "@/lib/ui-context";
import { initialsOf } from "@/lib/grades";

export default function Header() {
  const { user } = useAuth();
  const { openAuthModal, openProfileModal } = useUI();

  return (
    <header className="site">
      <div className="nav wrap">
        <div className="logo">
          <div className="logo-mark">A+</div>
          <div className="logo-text">
            Para<span>Karne</span>
          </div>
        </div>
        <nav className="links">
          <a href="#karsilastir">Karşılaştır</a>
          <a href="#bankalar">Bankalar</a>
          <a href="#yorumlar">Yorumlar</a>
          <a href="#nasil">Nasıl Çalışır</a>
        </nav>
        <div className="nav-actions">
          {user ? (
            <button className="profile-chip" onClick={openProfileModal}>
              <div className="profile-avatar">
                {initialsOf(user.displayName || user.email || "?")}
              </div>
              <span>{(user.displayName || user.email || "").split(" ")[0]}</span>
            </button>
          ) : (
            <>
              <button className="btn small" onClick={() => openAuthModal("login")}>
                Giriş Yap
              </button>
              <button
                className="btn small primary"
                onClick={() => openAuthModal("signup")}
              >
                Üye Ol
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
