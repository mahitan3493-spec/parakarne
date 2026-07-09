"use client";

import { useState } from "react";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";

function authErrorMessage(err: unknown): string {
  if (err instanceof Error && !(err instanceof FirebaseError)) return err.message;
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case "auth/email-already-in-use":
        return "Bu e-posta adresi zaten kayıtlı.";
      case "auth/invalid-email":
        return "Geçerli bir e-posta adresi gir.";
      case "auth/weak-password":
        return "Şifre en az 6 karakter olmalı.";
      case "auth/popup-closed-by-user":
        return "Google giriş penceresi kapatıldı.";
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found":
        return "E-posta veya şifre hatalı.";
      case "auth/too-many-requests":
        return "Çok fazla deneme yapıldı, birazdan tekrar dene.";
      default:
        return "Bir şeyler ters gitti, tekrar dene.";
    }
  }
  return "Bir şeyler ters gitti, tekrar dene.";
}

export default function AuthModal() {
  const { authTab, closeAuthModal, openAuthModal } = useUI();
  const { signup, login, loginWithGoogle, resetPassword } = useAuth();
  const { showToast } = useToast();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (!authTab) return null;

  async function handleLogin() {
    setError("");
    if (!loginEmail.trim() || !loginPass) {
      setError("E-posta ve şifre gerekli.");
      return;
    }
    setBusy(true);
    try {
      await login(loginEmail.trim(), loginPass);
      closeAuthModal();
      showToast("Tekrar hoşgeldin.");
      setLoginEmail("");
      setLoginPass("");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleSignup() {
    setError("");
    if (!signupName.trim() || !signupEmail.trim() || !signupPass) {
      setError("Ad, e-posta ve şifre gerekli.");
      return;
    }
    if (signupPass.length < 6) {
      setError("Şifre en az 6 karakter olmalı.");
      return;
    }
    setBusy(true);
    try {
      await signup(signupName.trim(), signupEmail.trim(), signupPass);
      closeAuthModal();
      showToast("Aramıza hoş geldin, " + signupName.trim().split(" ")[0] + "! Doğrulama e-postası gönderildi.");
      setSignupName("");
      setSignupEmail("");
      setSignupPass("");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setError("");
    setBusy(true);
    try {
      await loginWithGoogle();
      closeAuthModal();
      showToast("Google ile giriş yapıldı.");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  async function handleResetPassword() {
    setError("");
    if (!loginEmail.trim()) {
      setError("Şifre sıfırlama için e-posta adresini yaz.");
      return;
    }
    setBusy(true);
    try {
      await resetPassword(loginEmail.trim());
      showToast("Şifre sıfırlama bağlantısı e-postana gönderildi.");
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setBusy(false);
    }
  }

  function switchTab(tab: "login" | "signup") {
    setError("");
    openAuthModal(tab);
  }

  return (
    <div
      className="overlay open"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeAuthModal();
      }}
    >
      <div className="modal">
        <button className="modal-close" onClick={closeAuthModal}>
          ✕
        </button>
        <div className="tabs">
          <div
            className={`tab${authTab === "login" ? " active" : ""}`}
            onClick={() => switchTab("login")}
          >
            Giriş Yap
          </div>
          <div
            className={`tab${authTab === "signup" ? " active" : ""}`}
            onClick={() => switchTab("signup")}
          >
            Üye Ol
          </div>
        </div>

        <button className="btn google" onClick={handleGoogle} disabled={busy}>
          Google ile devam et
        </button>
        <div className="auth-divider"><span>veya</span></div>

        {authTab === "login" && (
          <div className="tab-panel active">
            <h3>Tekrar hoş geldin</h3>
            <p className="hint">Notlarına ve favori bankalarına devam et.</p>
            <div className="field">
              <label>E-posta</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="ornek@eposta.com"
              />
            </div>
            <div className="field">
              <label>Şifre</label>
              <input
                type="password"
                value={loginPass}
                onChange={(e) => setLoginPass(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            {error && <p className="field-error">{error}</p>}
            <button
              className="btn primary"
              style={{ width: "100%" }}
              onClick={handleLogin}
              disabled={busy}
            >
              {busy ? "Giriş yapılıyor…" : "Giriş Yap"}
            </button>
            <button className="text-link-btn" onClick={handleResetPassword} disabled={busy}>
              Şifremi unuttum
            </button>
          </div>
        )}

        {authTab === "signup" && (
          <div className="tab-panel active">
            <h3>Karneye katıl</h3>
            <p className="hint">Puan ver, yorum yaz, bankaları listene ekle.</p>
            <div className="field">
              <label>Ad Soyad</label>
              <input
                type="text"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                placeholder="Ad Soyad"
              />
            </div>
            <div className="field">
              <label>E-posta</label>
              <input
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="ornek@eposta.com"
              />
            </div>
            <div className="field">
              <label>Şifre</label>
              <input
                type="password"
                value={signupPass}
                onChange={(e) => setSignupPass(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            {error && <p className="field-error">{error}</p>}
            <button
              className="btn primary"
              style={{ width: "100%" }}
              onClick={handleSignup}
              disabled={busy}
            >
              {busy ? "Kaydolunuyor…" : "Üye Ol"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
