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
  orderBy,
  query,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "./firebase";
import type { Review } from "./types";

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
    return JSON.parse(window.localStorage.getItem("parakarne-local-reviews") || "[]") as Review[];
  } catch {
    return [];
  }
}

function normalizeReview(d: QueryDocumentSnapshot<DocumentData>): Review {
  const data = d.data();
  return {
    id: d.id,
    uid: data.uid,
    userName: data.userName,
    bankId: data.bankId,
    bankName: data.bankName,
    stars: data.stars,
    categories: data.categories ?? {},
    creditOutcome: data.creditOutcome,
    creditApplicationOutcome: data.creditApplicationOutcome,
    creditCardApplicationOutcome: data.creditCardApplicationOutcome,
    employmentStatus: data.employmentStatus,
    findeksScoreRange: data.findeksScoreRange,
    text: data.text,
    note: data.note,
    reportCount: data.reportCount ?? 0,
    reportedBy: data.reportedBy ?? [],
    status: data.status ?? "published",
    createdAtMs: data.createdAt?.toMillis?.() ?? null,
  } as Review;
}

function newestFirst(reviews: Review[]): Review[] {
  return [...reviews].sort((a, b) => (b.createdAtMs ?? 0) - (a.createdAtMs ?? 0));
}

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(!!db);

  useEffect(() => {
    if (!db) {
      const syncLocal = () => setReviews(readLocalReviews());
      const timer = window.setTimeout(syncLocal, 0);
      window.addEventListener("parakarne:local-reviews", syncLocal);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("parakarne:local-reviews", syncLocal);
      };
    }

    const reviewsRef = collection(db, "reviews");
    const orderedQuery = query(reviewsRef, orderBy("createdAt", "desc"), limit(250));

    let fallbackUnsub: (() => void) | null = null;
    const orderedUnsub = onSnapshot(
      orderedQuery,
      (snap) => {
        setReviews(snap.docs.map(normalizeReview));
        setLoading(false);
      },
      (error) => {
        // Bazı projelerde eski yorum dokümanlarında createdAt eksik/bozuk
        // olabiliyor ya da orderBy sorgusu rules/index yüzünden hata verebiliyor.
        // Sessizce boş liste göstermek yerine düz koleksiyona düşüyoruz; böylece
        // ana sayfadaki sayaçlar ve yorum listesi gerçek reviews verisini yine okur.
        console.warn("ParaKarne reviews ordered query failed; using fallback query.", error);
        fallbackUnsub = onSnapshot(
          query(reviewsRef, limit(250)),
          (snap) => {
            setReviews(newestFirst(snap.docs.map(normalizeReview)));
            setLoading(false);
          },
          (fallbackError) => {
            console.error("ParaKarne reviews fallback query failed.", fallbackError);
            setReviews([]);
            setLoading(false);
          },
        );
      },
    );

    return () => {
      orderedUnsub();
      fallbackUnsub?.();
    };
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
