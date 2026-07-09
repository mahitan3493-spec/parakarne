import {
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db, firebaseMissingMessage } from "./firebase";
import { overallFromCategories } from "./bank-stats";
import type { ApplicationOutcome, CategoryRatings, CreditOutcome, EmploymentStatus, FindeksScoreRange } from "./types";

function requireDb() {
  if (!db) throw new Error(firebaseMissingMessage);
  return db;
}

export async function submitReview(params: {
  uid: string;
  userName: string;
  bankId: string;
  bankName: string;
  categories: CategoryRatings;
  creditOutcome?: CreditOutcome;
  creditApplicationOutcome?: ApplicationOutcome;
  creditCardApplicationOutcome?: ApplicationOutcome;
  employmentStatus?: EmploymentStatus;
  findeksScoreRange?: FindeksScoreRange;
  text: string;
}) {
  const stars = overallFromCategories(params.categories);
  const currentDb = requireDb();
  const reviewId = `${params.uid}_${params.bankId}`;

  const reviewRef = doc(currentDb, "reviews", reviewId);
  const existing = await getDoc(reviewRef);
  if (existing.exists()) {
    throw new Error("Bu bankayı zaten puanladın. Her kullanıcı aynı bankaya yalnızca 1 karne bırakabilir.");
  }

  await setDoc(reviewRef, {
    uid: params.uid,
    userName: params.userName,
    bankId: params.bankId,
    bankName: params.bankName,
    stars,
    categories: params.categories,
    // Firestore, alan değeri "undefined" olan yazma isteklerini reddeder —
    // bu yüzden kullanıcı bu opsiyonel soruyu yanıtlamadıysa alanı hiç
    // eklemiyoruz (sadece koşullu spread ile).
    ...(params.creditOutcome ? { creditOutcome: params.creditOutcome } : {}),
    ...(params.creditApplicationOutcome
      ? { creditApplicationOutcome: params.creditApplicationOutcome }
      : {}),
    ...(params.creditCardApplicationOutcome
      ? { creditCardApplicationOutcome: params.creditCardApplicationOutcome }
      : {}),
    ...(params.employmentStatus ? { employmentStatus: params.employmentStatus } : {}),
    ...(params.findeksScoreRange ? { findeksScoreRange: params.findeksScoreRange } : {}),
    text: params.text,
    note: "Bu yorum karne ortalamasına eklendi.",
    status: "published",
    reportCount: 0,
    reportedBy: [],
    createdAt: serverTimestamp(),
  });
}

export async function reportReview(reviewId: string, uid: string) {
  await updateDoc(doc(requireDb(), "reviews", reviewId), {
    reportCount: increment(1),
    reportedBy: arrayUnion(uid),
  });
}

export async function approveReview(reviewId: string) {
  await updateDoc(doc(requireDb(), "reviews", reviewId), {
    reportCount: 0,
    reportedBy: [],
    status: "published",
    note: "Bu yorum moderasyon kontrolünden geçti.",
  });
}

export async function hideReview(reviewId: string) {
  await updateDoc(doc(requireDb(), "reviews", reviewId), {
    status: "hidden",
    note: "Bu yorum moderasyon tarafından gizlendi.",
  });
}

export async function deleteReview(reviewId: string) {
  await deleteDoc(doc(requireDb(), "reviews", reviewId));
}
