"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, type User } from "firebase/auth";
import { auth, firebaseMissingMessage } from "./firebase";
type AuthContextValue = {
  user: User | null; loading: boolean;
  signup: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>; resetPassword: (email: string) => Promise<void>;
  resendVerification: () => Promise<void>; deleteAccount: () => Promise<void>; logout: () => Promise<void>;
};
const AuthContext = createContext<AuthContextValue | undefined>(undefined);
function requireAuth() { if (!auth) throw new Error(firebaseMissingMessage); return auth; }
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null); const [loading, setLoading] = useState(!!auth);
  useEffect(() => { if (!auth) return; return onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false); }); }, []);
  async function signup(name: string, email: string, password: string) { const a=requireAuth(); const c=await createUserWithEmailAndPassword(a,email,password); await updateProfile(c.user,{displayName:name.trim()}); await sendEmailVerification(c.user).catch(()=>undefined); await c.user.reload().catch(()=>undefined); setUser(a.currentUser); }
  async function login(email:string,password:string){ await signInWithEmailAndPassword(requireAuth(),email,password); }
  async function loginWithGoogle(){ await signInWithPopup(requireAuth(),new GoogleAuthProvider()); }
  async function resetPassword(email:string){ await sendPasswordResetEmail(requireAuth(),email); }
  async function resendVerification(){ const u=requireAuth().currentUser; if(!u) throw new Error("Oturum bulunamadı."); await sendEmailVerification(u); }
  async function deleteAccount(){ const u=requireAuth().currentUser; if(!u) throw new Error("Oturum bulunamadı."); await deleteUser(u); }
  async function logout(){ await signOut(requireAuth()); }
  return <AuthContext.Provider value={{user,loading,signup,login,loginWithGoogle,resetPassword,resendVerification,deleteAccount,logout}}>{children}</AuthContext.Provider>;
}
export function useAuth(){ const ctx=useContext(AuthContext); if(!ctx) throw new Error("useAuth must be used within AuthProvider"); return ctx; }
