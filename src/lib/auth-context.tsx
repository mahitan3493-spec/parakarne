"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { auth, firebaseMissingMessage } from "./firebase";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signup: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function requireAuth() {
  if (!auth) throw new Error(firebaseMissingMessage);
  return auth;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(!!auth);

  useEffect(() => {
    if (!auth) return;

    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function signup(name: string, email: string, password: string) {
    const currentAuth = requireAuth();
    const cred = await createUserWithEmailAndPassword(currentAuth, email, password);
    await updateProfile(cred.user, { displayName: name });
    await sendEmailVerification(cred.user).catch(() => undefined);
    setUser({ ...cred.user, displayName: name });
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(requireAuth(), email, password);
  }

  async function loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(requireAuth(), provider);
  }

  async function resetPassword(email: string) {
    await sendPasswordResetEmail(requireAuth(), email);
  }

  async function logout() {
    await signOut(requireAuth());
  }

  return (
    <AuthContext.Provider
      value={{ user, loading, signup, login, loginWithGoogle, resetPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
