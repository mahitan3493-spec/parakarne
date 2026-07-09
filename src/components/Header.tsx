"use client";

import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useUI } from "@/lib/ui-context";
import { initialsOf } from "@/lib/grades";

export default function Header() {
  const { user } = useAuth();
  const { openAuthModal, openProfileModal } = useUI();

  return (
    <header className="site">
      <div className="nav wrap">
        <Link className="logo" href="/" aria-label="ParaKarne ana sayfa">
          <div className="logo-mark">A+</div>
          <div className="logo-text">
            Para<span>Karne</span>
          </div>
        </Link>
        <nav className="links" aria-label="Ana menü">
          <Link href="/">Ana Sayfa</Link>
          <Link href="/#karsilastir">Karşılaştır</Link>
          <Link href="/#bankalar">Bankalar</Link>
          <Link href="/#yorumlar">Yorumlar</Link>
          <Link href="/#nasil">Nasıl Çalışır</Link>
          <Link href="/tum-konular/">Tüm Konular</Link>
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
