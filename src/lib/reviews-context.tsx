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

    const q = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc"),
      limit(250),
    );
    const unsub = onSnapshot(
      q,
      (snap) => {
        setReviews(
          snap.docs.map((d) => {
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
          }),
        );
        setLoading(false);
      },
      () => setLoading(false),
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
