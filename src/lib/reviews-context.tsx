"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  collection,
  limit,
  onSnapshot,
  query,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import type { CategoryRatings, Review } from "./types";

type ReviewsContextValue = {
  reviews: Review[];
  loading: boolean;
};

const ReviewsContext = createContext<ReviewsContextValue | undefined>(
  undefined,
);

function readLocalReviews(): Review[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem("parakarne-local-reviews") || "[]");
    return Array.isArray(parsed) ? (parsed as Review[]) : [];
  } catch {
    return [];
  }
}

function toNumber(value: unknown): number | null {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value === "string" && value.trim()) {
    const parsed = Number(value.replace(",", "."));
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

function toCategoryScore(value: unknown): number | undefined {
  const score = toNumber(value);
  if (score === null || score < 1 || score > 5) return undefined;
  return score;
}

function normalizeCategories(raw: unknown): CategoryRatings {
  if (!raw || typeof raw !== "object") return {};
  const data = raw as Record<string, unknown>;
  const categories: CategoryRatings = {};
  const branch = toCategoryScore(data.branch ?? data.sube ?? data["Şube Hizmetleri"]);
  const service = toCategoryScore(data.service ?? data.customerService ?? data.musteriHizmetleri ?? data["Müşteri Hizmetleri"]);
  const app = toCategoryScore(data.app ?? data.mobileApp ?? data.mobilUygulama ?? data["Mobil Uygulama"]);
  const atm = toCategoryScore(data.atm ?? data.atmServices ?? data["ATM Hizmetleri"]);
  const security = toCategoryScore(data.security ?? data.guvenlik ?? data["Güvenlik"]);

  if (branch) categories.branch = branch;
  if (service) categories.service = service;
  if (app) categories.app = app;
  if (atm) categories.atm = atm;
  if (security) categories.security = security;
  return categories;
}

function scoreFromCategories(categories: CategoryRatings): number | null {
  const values = Object.values(categories).filter((value): value is number => typeof value === "number");
  if (values.length === 0) return null;
  const avg = values.reduce((sum, value) => sum + value, 0) / values.length;
  return Math.min(5, Math.max(1, Math.round(avg)));
}

function normalizeStars(data: Record<string, unknown>, categories: CategoryRatings): number {
  const rawScore =
    toNumber(data.stars) ??
    toNumber(data.rating) ??
    toNumber(data.overallRating) ??
    toNumber(data.overall) ??
    scoreFromCategories(categories) ??
    0;

  if (rawScore <= 0) return 0;
  return Math.min(5, Math.max(1, Math.round(rawScore)));
}

function normalizeReview(d: QueryDocumentSnapshot<DocumentData>): Review {
  const data = d.data();
  const categories = normalizeCategories(data.categories);
  const createdAtMs =
    data.createdAt?.toMillis?.() ??
    toNumber(data.createdAtMs) ??
    toNumber(data.createdAt) ??
    toNumber(data.timestamp) ??
    null;

  return {
    id: d.id,
    uid: String(data.uid ?? data.userId ?? ""),
    userName: String(data.userName ?? data.name ?? data.displayName ?? "Anonim"),
    bankId: String(data.bankId ?? data.bankSlug ?? data.bank ?? ""),
    bankName: String(data.bankName ?? data.bankTitle ?? "Banka"),
    stars: normalizeStars(data, categories),
    categories,
    creditOutcome: data.creditOutcome as Review["creditOutcome"],
    creditApplicationOutcome: data.creditApplicationOutcome as Review["creditApplicationOutcome"],
    creditCardApplicationOutcome: data.creditCardApplicationOutcome as Review["creditCardApplicationOutcome"],
    employmentStatus: data.employmentStatus as Review["employmentStatus"],
    findeksScoreRange: data.findeksScoreRange as Review["findeksScoreRange"],
    text: String(data.text ?? data.comment ?? data.review ?? data.message ?? ""),
    note: String(data.note ?? "Bu yorum karne ortalamasına eklendi."),
    reportCount: toNumber(data.reportCount) ?? 0,
    reportedBy: Array.isArray(data.reportedBy) ? data.reportedBy : [],
    status: data.status === "hidden" ? "hidden" : "published",
    createdAtMs,
  };
}

function newestFirst(reviews: Review[]): Review[] {
  return [...reviews].sort((a, b) => (b.createdAtMs ?? 0) - (a.createdAtMs ?? 0));
}

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(!!db);

  useEffect(() => {
    if (!db) {
      const syncLocal = () => {
        setReviews(newestFirst(readLocalReviews()));
        setLoading(false);
      };
      const timer = window.setTimeout(syncLocal, 0);
      window.addEventListener("parakarne:local-reviews", syncLocal);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("parakarne:local-reviews", syncLocal);
      };
    }

    // orderBy("createdAt") eski yorumlarda createdAt alanı yoksa o dokümanları
    // tamamen dışarıda bırakır. Bu yüzden tüm yorumlar düz sorguyla okunur,
    // sıralama tarayıcıda yapılır. Böylece daha önce girilmiş tek yorum bile
    // ana sayaçlara ve banka puanına yansır.
    const reviewsRef = collection(db, "reviews");
    const unsub = onSnapshot(
      query(reviewsRef, limit(500)),
      (snap) => {
        setReviews(newestFirst(snap.docs.map(normalizeReview)));
        setLoading(false);
      },
      (error) => {
        console.error("ParaKarne reviews query failed.", error);
        setReviews([]);
        setLoading(false);
      },
    );

    return unsub;
  }, []);

  return (
    <ReviewsContext.Provider value={{ reviews, loading }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export function useReviews() {
  const ctx = useContext(ReviewsContext);
  if (!ctx) throw new Error("useReviews must be used within ReviewsProvider");
  return ctx;
}
