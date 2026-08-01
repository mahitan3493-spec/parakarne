"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useUI } from "@/lib/ui-context";
import { initialsOf } from "@/lib/grades";

const MENU_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#karsilastir", label: "Karşılaştır" },
  { href: "/#bankalar", label: "Öne Çıkanlar" },
  { href: "/#yorumlar", label: "Yorumlar" },
  { href: "/#nasil", label: "Nasıl Çalışır" },
  { href: "/tum-konular/", label: "Tüm Konular" },
];

export default function Header() {
  const { user } = useAuth();
  const { openAuthModal, openProfileModal } = useUI();
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  function openMobileAuth(tab: "login" | "signup") {
    closeMobileMenu();
    openAuthModal(tab);
  }

  function openMobileProfile() {
    closeMobileMenu();
    openProfileModal();
  }

  function checkPwaUpdate() {
    closeMobileMenu();
    window.dispatchEvent(new Event("parakarne:check-update"));
  }

  return (
    <header className={`site${mobileOpen ? " mobile-open" : ""}`}>
      <div className="nav wrap">
        <Link className="logo" href="/" aria-label="ParaKarne ana sayfa" onClick={closeMobileMenu}>
          <span className="logo-mark" aria-hidden="true">
            <img src="/logo-mark.svg" alt="" width="44" height="44" />
          </span>
          <div className="logo-text">
            Para<span>Karne</span>
          </div>
        </Link>
        <nav className="links" aria-label="Ana menü">
          {MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="nav-actions">
          <div className="header-badge">Bağımsız banka puanları</div>
          {user ? (
            <button className="profile-chip" onClick={openProfileModal}>
              <div className="profile-avatar">
                {initialsOf(user.displayName || user.email || "?")}
              </div>
              <span>{(user.displayName || user.email || "").split(" ")[0]}</span>
            </button>
          ) : (
            <>
              <button className="btn small btn-ghost" onClick={() => openAuthModal("login")}>
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
          <button
            className="mobile-menu-btn"
            type="button"
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav className={`mobile-links wrap${mobileOpen ? " open" : ""}`} aria-label="Mobil menü">
        <div className="mobile-link-grid">
          {MENU_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-auth-actions">
          <button type="button" className="mobile-update-check" onClick={checkPwaUpdate}>
            <span className="mobile-update-icon" aria-hidden="true">↻</span>
            <span>Güncellemeleri Kontrol Et</span>
            <small>V18</small>
          </button>
          {user ? (
            <button type="button" className="mobile-profile-button" onClick={openMobileProfile}>
              <span className="profile-avatar">{initialsOf(user.displayName || user.email || "?")}</span>
              <span>
                <strong>Profilim</strong>
                <small>{user.email}</small>
              </span>
            </button>
          ) : (
            <>
              <button type="button" className="btn mobile-login-btn" onClick={() => openMobileAuth("login")}>
                Giriş Yap
              </button>
              <button type="button" className="btn primary mobile-signup-btn" onClick={() => openMobileAuth("signup")}>
                Ücretsiz Üye Ol
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
