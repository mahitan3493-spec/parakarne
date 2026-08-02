"use client";

import { useEffect, useState } from "react";

const SPLASH_MIN_MS = 1650;
const SPLASH_FADE_MS = 360;
const SESSION_KEY = "parakarne-launch-splash-v23";

function ShieldCheckIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M16 3.5 26 7v7.5c0 6.4-4.1 11.5-10 14-5.9-2.5-10-7.6-10-14V7l10-3.5Z" />
      <path d="m11.5 16 3 3 6.5-7" />
    </svg>
  );
}

function BankIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="M4 12h24L16 4 4 12Z" />
      <path d="M7 14v10M13 14v10M19 14v10M25 14v10M4 27h24" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <path d="m16 4 3.5 7.1 7.8 1.1-5.6 5.5 1.3 7.8-7-3.7-7 3.7 1.3-7.8-5.6-5.5 7.8-1.1L16 4Z" />
    </svg>
  );
}

export default function AppLaunchSplash() {
  const [phase, setPhase] = useState<"visible" | "fading" | "hidden">("visible");

  useEffect(() => {
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.matchMedia("(display-mode: fullscreen)").matches ||
      Boolean((window.navigator as Navigator & { standalone?: boolean }).standalone) ||
      new URLSearchParams(window.location.search).get("source") === "pwa";

    if (!isStandalone) {
      setPhase("hidden");
      return;
    }

    if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
      setPhase("hidden");
      return;
    }

    window.sessionStorage.setItem(SESSION_KEY, "1");

    const fadeTimer = window.setTimeout(() => {
      setPhase("fading");
    }, SPLASH_MIN_MS);

    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
    }, SPLASH_MIN_MS + SPLASH_FADE_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div
      className={`app-launch-screen${phase === "fading" ? " is-fading" : ""}`}
      aria-label="ParaKarne açılıyor"
      role="status"
      aria-live="polite"
    >
      <div className="app-launch-decoration app-launch-decoration-left" />
      <div className="app-launch-decoration app-launch-decoration-right" />

      <div className="app-launch-content">
        <img
          className="app-launch-logo"
          src="/icon-v23-512.png"
          alt="ParaKarne PK logosu"
          width="176"
          height="176"
        />
        <h1>ParaKarne</h1>
        <span className="app-launch-divider" aria-hidden="true" />
        <p>
          Banka deneyimleri ve
          <br />
          gerçek kullanıcı yorumları
          <br />
          <strong>tek yerde.</strong>
        </p>
      </div>

      <div className="app-launch-features" aria-label="ParaKarne özellikleri">
        <div className="app-launch-feature">
          <ShieldCheckIcon />
          <span>Gerçek Yorumlar</span>
        </div>
        <span className="app-launch-feature-divider" aria-hidden="true" />
        <div className="app-launch-feature">
          <BankIcon />
          <span>Banka Karşılaştırma</span>
        </div>
        <span className="app-launch-feature-divider" aria-hidden="true" />
        <div className="app-launch-feature">
          <StarIcon />
          <span>Deneyimini Paylaş</span>
        </div>
      </div>

      <div className="app-launch-wave" aria-hidden="true" />
    </div>
  );
}
