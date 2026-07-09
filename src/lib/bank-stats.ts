import type { Bank, CategoryKey, CreditOutcome, Review, SubGrades } from "./types";
import { letterFromScore } from "./grades";

const CATEGORY_KEYS: CategoryKey[] = ["branch", "service", "app", "atm", "security"];

const OUTCOME_SCORE: Record<CreditOutcome, number> = {
  approved: 100,
  conditional: 50,
  rejected: 0,
};

export function gradeFromRating(rating: number): string {
  return letterFromScore(rating);
}

export function visibleReviews(reviews: Review[]): Review[] {
  return reviews.filter((review) => review.reportCount < 3);
}

// Bir bankanın kategori puanlarını (bank.sub) o bankaya ait yorumlardaki
// kategori puanlarıyla harmanlayıp güncel sayısal ortalamayı döndürür.
// null iki farklı anlama gelebilir: (1) hiç veri yok henüz — ilk gerçek
// yorum geldiğinde dolacak, ağırlığı 0 kabul edilir; (2) şubesiz bankada
// branch/atm gibi hiç geçerli olmayan bir kategori — bu durumda kalıcı
// olarak null kalır, review.categories'te zaten hiç gönderilmez.
function nextCategoryScores(bank: Bank, bankReviews: Review[]): SubGrades {
  const result = { ...bank.sub };

  for (const key of CATEGORY_KEYS) {
    if (!bank.hasBranch && (key === "branch" || key === "atm")) continue; // kalıcı olarak geçersiz

    const liveValues = bankReviews
      .map((r) => r.categories[key])
      .filter((v): v is number => typeof v === "number");

    if (liveValues.length === 0) continue; // henüz yeni veri yok, mevcut değer (null olabilir) korunur

    const baseScore = bank.sub[key];
    const baseTotal = (baseScore ?? 0) * bank.reviewCount;
    const liveTotal = liveValues.reduce((sum, v) => sum + v, 0);
    const nextCount = bank.reviewCount + liveValues.length;
    result[key] = Number(((baseTotal + liveTotal) / nextCount).toFixed(2));
  }

  return result;
}

// Kredi/kredi kartı onay oranını günceller. Bu, genel yorum sayısından
// bağımsız bir sayaçtır çünkü herkes bu opsiyonel soruyu yanıtlamaz —
// sadece "creditOutcome" alanı dolu olan yorumlar hesaba katılır.
function nextCreditApproval(bank: Bank, bankReviews: Review[]): { rate: number; count: number } {
  const outcomes = bankReviews
    .map((r) => r.creditOutcome)
    .filter((v): v is CreditOutcome => !!v);

  if (outcomes.length === 0) {
    return { rate: bank.creditApprovalRate, count: bank.creditApprovalCount };
  }

  const baseTotal = bank.creditApprovalRate * bank.creditApprovalCount;
  const liveTotal = outcomes.reduce((sum, o) => sum + OUTCOME_SCORE[o], 0);
  const nextCount = bank.creditApprovalCount + outcomes.length;
  const nextRate = Number(((baseTotal + liveTotal) / nextCount).toFixed(1));

  return { rate: nextRate, count: nextCount };
}

export function applyReviewStats(bank: Bank, reviews: Review[]): Bank {
  const bankReviews = visibleReviews(reviews).filter((review) => review.bankId === bank.id);

  if (bankReviews.length === 0) return bank;

  const baseRatingTotal = bank.rating * bank.reviewCount;
  const liveRatingTotal = bankReviews.reduce((sum, review) => sum + review.stars, 0);
  const nextReviewCount = bank.reviewCount + bankReviews.length;
  const nextRating = Number(((baseRatingTotal + liveRatingTotal) / nextReviewCount).toFixed(1));
  const credit = nextCreditApproval(bank, bankReviews);

  return {
    ...bank,
    rating: nextRating,
    reviewCount: nextReviewCount,
    grade: gradeFromRating(nextRating),
    sub: nextCategoryScores(bank, bankReviews),
    creditApprovalRate: credit.rate,
    creditApprovalCount: credit.count,
  };
}

export function applyReviewStatsToBanks(banks: Bank[], reviews: Review[]): Bank[] {
  return banks.map((bank) => applyReviewStats(bank, reviews));
}

// Kullanıcının verdiği kategori puanlarının (1-5) ortalamasını "genel puan"a
// çevirir. Bir bankada geçersiz olan kategoriler (örn. şubesiz bankada
// Şube Hizmetleri) zaten forma hiç girmez, bu yüzden burada ekstra filtre
// gerekmiyor — gelen tüm değerlerin ortalaması alınır ve en yakın tam sayıya
// yuvarlanır (review.stars her zaman 1-5 arası tam sayı olmalı).
export function overallFromCategories(categories: Partial<Record<CategoryKey, number>>): number {
  const values = Object.values(categories).filter((v): v is number => typeof v === "number");
  if (values.length === 0) return 0;
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.round(avg);
}
