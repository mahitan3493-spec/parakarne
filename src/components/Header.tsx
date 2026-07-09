"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { useUI } from "@/lib/ui-context";
import { initialsOf } from "@/lib/grades";

const MENU_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/#karsilastir", label: "Karşılaştır" },
  { href: "/#bankalar", label: "Bankalar" },
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

  return (
    <header className={`site${mobileOpen ? " mobile-open" : ""}`}>
      <div className="nav wrap">
        <Link className="logo" href="/" aria-label="ParaKarne ana sayfa" onClick={closeMobileMenu}>
          <div className="logo-mark">A+</div>
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
        {MENU_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
