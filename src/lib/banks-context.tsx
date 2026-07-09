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
import type { Bank, SubGrades } from "./types";

type BanksContextValue = {
  banks: Bank[];
  loading: boolean;
  usingDemoData: boolean;
};

const BanksContext = createContext<BanksContextValue | undefined>(undefined);

// Firestore'daki "banks" koleksiyonu, kod güncellenmeden ÖNCE eski bir
// şemayla seed edilmiş olabilir (örn. kredi onay alanları hiç yokken,
// veya kategori puanları harf iken, örn. "A-"). Bu fonksiyon, hangi alan
// eksik/eski/bozuk olursa olsun güvenli bir varsayılanla doldurur —
// böylece arayüz asla çökmez ve yanlış/eski veri (örn. hep "D" görünmesi)
// göstermez. Kalıcı çözüm için yine de `scripts/seed-banks.mjs` ile
// Firestore'u güncel şemaya taşımak önerilir; bu sadece bir güvenlik ağı.
function isValidSubGrades(sub: unknown): sub is SubGrades {
  if (!sub || typeof sub !== "object") return false;
  const keys: (keyof SubGrades)[] = ["branch", "service", "app", "atm", "security"];
  return keys.every((k) => {
    const v = (sub as Record<string, unknown>)[k];
    return v === null || (typeof v === "number" && v >= 0 && v <= 5);
  });
}

function normalizeBank(raw: Partial<Bank> & { id: string }): Bank {
  const fallback = demoBanks.find((b) => b.id === raw.id);
  const rawSubValid = isValidSubGrades(raw.sub);
  return {
    id: raw.id,
    name: raw.name ?? fallback?.name ?? raw.id,
    grade: raw.grade ?? fallback?.grade ?? "—",
    rate: typeof raw.rate === "number" ? raw.rate : fallback?.rate ?? 0,
    app: typeof raw.app === "number" ? raw.app : fallback?.app ?? 0,
    rating: typeof raw.rating === "number" ? raw.rating : fallback?.rating ?? 0,
    reviewCount: typeof raw.reviewCount === "number" ? raw.reviewCount : fallback?.reviewCount ?? 0,
    quote: raw.quote ?? fallback?.quote ?? "",
    summary: raw.summary ?? fallback?.summary ?? "",
    sub: rawSubValid
      ? (raw.sub as SubGrades)
      : fallback?.sub ?? { branch: null, service: null, app: null, atm: null, security: null },
    hasBranch: typeof raw.hasBranch === "boolean" ? raw.hasBranch : fallback?.hasBranch ?? true,
    color: raw.color ?? fallback?.color ?? "#4a5878",
    order: typeof raw.order === "number" ? raw.order : fallback?.order ?? 0,
    creditApprovalRate:
      typeof raw.creditApprovalRate === "number" ? raw.creditApprovalRate : fallback?.creditApprovalRate ?? 0,
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
