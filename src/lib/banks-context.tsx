"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";
import { demoBanks } from "./bank-data";
import type { Bank } from "./types";

type BanksContextValue = {
  banks: Bank[];
  loading: boolean;
  usingDemoData: boolean;
};

const BanksContext = createContext<BanksContextValue | undefined>(undefined);

// Firestore'daki "banks" koleksiyonu, kod güncellenmeden ÖNCE eski bir
// şemayla seed edilmiş olabilir (örn. kredi onay alanları hiç yokken,
// veya kategori puanları harf iken). Bu fonksiyon, hangi alan eksik/eski
// olursa olsun güvenli bir varsayılanla doldurur — böylece arayüz asla
// "undefined.toLocaleString()" gibi bir hatayla çökmez. Kalıcı çözüm için
// yine de `scripts/seed-banks.mjs` ile Firestore'u güncel şemaya taşımak
// gerekir; bu sadece bir güvenlik ağı.
function normalizeBank(raw: Partial<Bank> & { id: string }): Bank {
  const fallback = demoBanks.find((b) => b.id === raw.id);
  return {
    id: raw.id,
    name: raw.name ?? fallback?.name ?? raw.id,
    grade: raw.grade ?? fallback?.grade ?? "C",
    rate: typeof raw.rate === "number" ? raw.rate : fallback?.rate ?? 0,
    app: typeof raw.app === "number" ? raw.app : fallback?.app ?? 0,
    rating: typeof raw.rating === "number" ? raw.rating : fallback?.rating ?? 3,
    reviewCount: typeof raw.reviewCount === "number" ? raw.reviewCount : fallback?.reviewCount ?? 0,
    quote: raw.quote ?? fallback?.quote ?? "",
    summary: raw.summary ?? fallback?.summary ?? "",
    sub: raw.sub ?? fallback?.sub ?? { branch: null, service: 3, app: 3, atm: null, security: 3 },
    hasBranch: typeof raw.hasBranch === "boolean" ? raw.hasBranch : fallback?.hasBranch ?? true,
    color: raw.color ?? fallback?.color ?? "#4a5878",
    order: typeof raw.order === "number" ? raw.order : fallback?.order ?? 0,
    creditApprovalRate:
      typeof raw.creditApprovalRate === "number" ? raw.creditApprovalRate : fallback?.creditApprovalRate ?? 60,
    creditApprovalCount:
      typeof raw.creditApprovalCount === "number" ? raw.creditApprovalCount : fallback?.creditApprovalCount ?? 0,
  };
}

export function BanksProvider({ children }: { children: ReactNode }) {
  const [banks, setBanks] = useState<Bank[]>(demoBanks);
  const [loading, setLoading] = useState(!!db);
  const [usingDemoData, setUsingDemoData] = useState(!db);

  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, "banks"), orderBy("order", "asc"));
    const unsub = onSnapshot(
      q,
      (snap) => {
        const liveBanks = snap.docs.map((d) =>
          normalizeBank({ id: d.id, ...(d.data() as Partial<Bank>) }),
        );
        setBanks(liveBanks.length ? liveBanks : demoBanks);
        setUsingDemoData(liveBanks.length === 0);
        setLoading(false);
      },
      () => {
        setBanks(demoBanks);
        setUsingDemoData(true);
        setLoading(false);
      },
    );
    return unsub;
  }, []);

  return (
    <BanksContext.Provider value={{ banks, loading, usingDemoData }}>
      {children}
    </BanksContext.Provider>
  );
}

export function useBanks() {
  const ctx = useContext(BanksContext);
  if (!ctx) throw new Error("useBanks must be used within BanksProvider");
  return ctx;
}
