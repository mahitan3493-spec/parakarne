"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type AuthTab = "login" | "signup";

type BankModalMode = "detail" | "rating";

type UIContextValue = {
  authTab: AuthTab | null;
  openAuthModal: (tab: AuthTab) => void;
  closeAuthModal: () => void;
  bankDetailId: string | null;
  bankModalMode: BankModalMode;
  openBankModal: (id: string, mode?: BankModalMode) => void;
  closeBankModal: () => void;
  profileOpen: boolean;
  openProfileModal: () => void;
  closeProfileModal: () => void;
  reviewFormBank: string | null;
  setReviewFormBank: (name: string) => void;
};

const UIContext = createContext<UIContextValue | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
  const [authTab, setAuthTab] = useState<AuthTab | null>(null);
  const [bankDetailId, setBankDetailId] = useState<string | null>(null);
  const [bankModalMode, setBankModalMode] = useState<BankModalMode>("detail");
  const [profileOpen, setProfileOpen] = useState(false);
  const [reviewFormBank, setReviewFormBank] = useState<string | null>(null);

  return (
    <UIContext.Provider
      value={{
        authTab,
        openAuthModal: (tab) => setAuthTab(tab),
        closeAuthModal: () => setAuthTab(null),
        bankDetailId,
        bankModalMode,
        openBankModal: (id, mode = "detail") => {
          setBankModalMode(mode);
          setBankDetailId(id);
        },
        closeBankModal: () => {
          setBankDetailId(null);
          setBankModalMode("detail");
        },
        profileOpen,
        openProfileModal: () => setProfileOpen(true),
        closeProfileModal: () => setProfileOpen(false),
        reviewFormBank,
        setReviewFormBank: (name) => setReviewFormBank(name),
      }}
    >
      {children}
    </UIContext.Provider>
  );
}

export function useUI() {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error("useUI must be used within UIProvider");
  return ctx;
}
