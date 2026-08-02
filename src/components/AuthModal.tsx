"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { FirebaseError } from "firebase/app";
import { useAuth } from "@/lib/auth-context";
import { useToast } from "@/lib/toast-context";
import { useUI } from "@/lib/ui-context";
import { useModalAccessibility } from "@/lib/use-modal-accessibility";

function authErrorMessage(err: unknown): string {
  if (err instanceof Error && !(err instanceof FirebaseError)) return err.message;
  if (err instanceof FirebaseError) {
    switch (err.code) {
      case "auth/email-already-in-use": return "Bu e-posta adresi zaten kayıtlı.";
      case "auth/invalid-email": return "Geçerli bir e-posta adresi gir.";
      case "auth/weak-password": return "Şifre en az 6 karakter olmalı.";
      case "auth/popup-closed-by-user": return "Google giriş penceresi kapatıldı.";
      case "auth/invalid-credential":
      case "auth/wrong-password":
      case "auth/user-not-found": return "E-posta veya şifre hatalı.";
      case "auth/too-many-requests": return "Çok fazla deneme yapıldı, birazdan tekrar dene.";
      default: return "Bir şeyler ters gitti, tekrar dene.";
    }
  }
  return "Bir şeyler ters gitti, tekrar dene.";
}

export default function AuthModal() {
  const { authTab, closeAuthModal, openAuthModal } = useUI();
  const { signup, login, loginWithGoogle, resetPassword } = useAuth();
  const { showToast } = useToast();
  const titleId = useId();
  const modalRef = useModalAccessibility<HTMLDivElement>(!!authTab, closeAuthModal);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPass, setLoginPass] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPass, setSignupPass] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (!authTab) return null;

  async function handleLogin() {
    setError("");
    if (!loginEmail.trim() || !loginPass) { setError("E-posta ve şifre gerekli."); return; }
    setBusy(true);
    try {
      await login(loginEmail.trim(), loginPass);
      closeAuthModal();
      showToast("Tekrar hoş geldin.");
      setLoginEmail(""); setLoginPass("");
    } catch (err) { setError(authErrorMessage(err)); }
    finally { setBusy(false); }
  }

  async function handleSignup() {
    setError("");
    if (!signupName.trim() || !signupEmail.trim() || !signupPass) {
      setError("Görünen ad, e-posta ve şifre gerekli."); return;
    }
    if (signupPass.length < 6) { setError("Şifre en az 6 karakter olmalı."); return; }
    if (!acceptedTerms) {
      setError("Üyelik için KVKK Aydınlatma Metni ve Kullanım Şartları onayı gerekli."); return;
    }
    setBusy(true);
    try {
      await signup(signupName.trim(), signupEmail.trim(), signupPass);
      closeAuthModal();
      showToast("Aramıza hoş geldin! Doğrulama e-postası gönderildi.");
      setSignupName(""); setSignupEmail(""); setSignupPass(""); setAcceptedTerms(false);
    } catch (err) { setError(authErrorMessage(err)); }
    finally { setBusy(false); }
  }

  async function handleGoogle() {
    setError(""); setBusy(true);
    try { await loginWithGoogle(); closeAuthModal(); showToast("Google ile giriş yapıldı."); }
    catch (err) { setError(authErrorMessage(err)); }
    finally { setBusy(false); }
  }

  async function handleResetPassword() {
    setError("");
    if (!loginEmail.trim()) { setError("Şifre sıfırlama için e-posta adresini yaz."); return; }
    setBusy(true);
    try { await resetPassword(loginEmail.trim()); showToast("Şifre sıfırlama bağlantısı e-postana gönderildi."); }
    catch (err) { setError(authErrorMessage(err)); }
    finally { setBusy(false); }
  }

  function switchTab(tab: "login" | "signup") { setError(""); openAuthModal(tab); }

  return (
    <div className="overlay open" onClick={(e) => { if (e.target === e.currentTarget) closeAuthModal(); }}>
      <div className="modal" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby={titleId} tabIndex={-1}>
        <button type="button" className="modal-close" onClick={closeAuthModal} aria-label="Giriş penceresini kapat">✕</button>
        <div className="tabs" role="tablist" aria-label="Üyelik işlemleri">
          <button type="button" role="tab" aria-selected={authTab === "login"} className={`tab${authTab === "login" ? " active" : ""}`} onClick={() => switchTab("login")}>Giriş Yap</button>
          <button type="button" role="tab" aria-selected={authTab === "signup"} className={`tab${authTab === "signup" ? " active" : ""}`} onClick={() => switchTab("signup")}>Üye Ol</button>
        </div>

        <button type="button" className="btn google" onClick={handleGoogle} disabled={busy}>Google ile devam et</button>
        <div className="auth-divider"><span>veya</span></div>

        {authTab === "login" && (
          <div className="tab-panel active" role="tabpanel">
            <h3 id={titleId}>Tekrar hoş geldin</h3>
            <p className="hint">Notlarına ve banka değerlendirmelerine devam et.</p>
            <div className="field"><label htmlFor="login-email">E-posta</label><input id="login-email" type="email" autoComplete="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="ornek@eposta.com" /></div>
            <div className="field"><label htmlFor="login-password">Şifre</label><input id="login-password" type="password" autoComplete="current-password" value={loginPass} onChange={(e) => setLoginPass(e.target.value)} placeholder="••••••••" /></div>
            {error && <p className="field-error" role="alert">{error}</p>}
            <button type="button" className="btn primary" style={{ width: "100%" }} onClick={handleLogin} disabled={busy}>{busy ? "Giriş yapılıyor…" : "Giriş Yap"}</button>
            <button type="button" className="text-link-btn" onClick={handleResetPassword} disabled={busy}>Şifremi unuttum</button>
          </div>
        )}

        {authTab === "signup" && (
          <div className="tab-panel active" role="tabpanel">
            <h3 id={titleId}>Karneye katıl</h3>
            <p className="hint">Puan ver, yorum yaz ve banka deneyimini paylaş.</p>
            <div className="field"><label htmlFor="signup-name">Görünen ad</label><input id="signup-name" type="text" autoComplete="name" value={signupName} onChange={(e) => setSignupName(e.target.value)} placeholder="Örn. Murat K." maxLength={40} /><small>Yorumlarda adın gizlilik için kısaltılarak gösterilir.</small></div>
            <div className="field"><label htmlFor="signup-email">E-posta</label><input id="signup-email" type="email" autoComplete="email" value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} placeholder="ornek@eposta.com" /></div>
            <div className="field"><label htmlFor="signup-password">Şifre</label><input id="signup-password" type="password" autoComplete="new-password" value={signupPass} onChange={(e) => setSignupPass(e.target.value)} placeholder="••••••••" /></div>
            <label className="auth-consent">
              <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} />
              <span><Link href="/kvkk/" target="_blank">KVKK Aydınlatma Metni</Link>&apos;ni ve <Link href="/kullanim-sartlari/" target="_blank">Kullanım Şartları</Link>&apos;nı okudum, kabul ediyorum.</span>
            </label>
            {error && <p className="field-error" role="alert">{error}</p>}
            <button type="button" className="btn primary" style={{ width: "100%" }} onClick={handleSignup} disabled={busy || !acceptedTerms}>{busy ? "Kaydolunuyor…" : "Üye Ol"}</button>
          </div>
        )}
      </div>
    </div>
  );
}
