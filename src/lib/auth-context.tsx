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
  deleteUser,
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

export type AuthContextValue = {
  user: User | null;
  loading: boolean;
  signup: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  resendVerification: () => Promise<void>;
  deleteAccount: () => Promise<void>;
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
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function signup(name: string, email: string, password: string) {
    const currentAuth = requireAuth();
    const credential = await createUserWithEmailAndPassword(currentAuth, email, password);
    await updateProfile(credential.user, { displayName: name.trim() });
    await sendEmailVerification(credential.user).catch(() => undefined);
    await credential.user.reload().catch(() => undefined);
    setUser(currentAuth.currentUser);
  }

  async function login(email: string, password: string) {
    await signInWithEmailAndPassword(requireAuth(), email, password);
  }

  async function loginWithGoogle() {
    await signInWithPopup(requireAuth(), new GoogleAuthProvider());
  }

  async function resetPassword(email: string) {
    await sendPasswordResetEmail(requireAuth(), email);
  }

  async function resendVerification() {
    const currentUser = requireAuth().currentUser;
    if (!currentUser) throw new Error("Oturum bulunamadı.");
    await sendEmailVerification(currentUser);
  }

  async function deleteAccount() {
    const currentUser = requireAuth().currentUser;
    if (!currentUser) throw new Error("Oturum bulunamadı.");
    await deleteUser(currentUser);
  }

  async function logout() {
    await signOut(requireAuth());
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signup,
        login,
        loginWithGoogle,
        resetPassword,
        resendVerification,
        deleteAccount,
        logout,
      }}
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
