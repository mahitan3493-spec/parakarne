import type { ApplicationOutcome, Bank, CategoryKey, CreditOutcome, Review, SubGrades } from "./types";
import { letterFromScore } from "./grades";

const CATEGORY_KEYS: CategoryKey[] = ["branch", "service", "app", "atm", "security"];

const OUTCOME_SCORE: Record<CreditOutcome, number> = {
  approved: 100,
  conditional: 50,
  rejected: 0,
};

const APPLICATION_SCORE: Record<Exclude<ApplicationOutcome, "not_applied">, number> = {
  approved: 100,
  rejected: 0,
};

export function gradeFromRating(rating: number): string {
  return rating > 0 ? letterFromScore(rating) : "—";
}

export function visibleReviews(reviews: Review[]): Review[] {
  return reviews.filter(
    (review) =>
      review.status !== "hidden" &&
      review.reportCount < 3 &&
      typeof review.bankId === "string" &&
      review.bankId.length > 0 &&
      typeof review.stars === "number" &&
      Number.isFinite(review.stars) &&
      review.stars >= 1 &&
      review.stars <= 5,
  );
}

function liveCategoryScores(bank: Bank, bankReviews: Review[]): SubGrades {
  const result: SubGrades = {
    branch: null,
    service: null,
    app: null,
    atm: null,
    security: null,
  };

  for (const key of CATEGORY_KEYS) {
    if (!bank.hasBranch && (key === "branch" || key === "atm")) continue;

    const liveValues = bankReviews
      .map((r) => r.categories[key])
      .filter((v): v is number => typeof v === "number" && v >= 1 && v <= 5);

    if (liveValues.length === 0) continue;

    const liveTotal = liveValues.reduce((sum, v) => sum + v, 0);
    result[key] = Number((liveTotal / liveValues.length).toFixed(2));
  }

  return result;
}

function liveCreditApproval(bankReviews: Review[]): { rate: number; count: number } {
  const legacyScores = bankReviews
    .map((r) => r.creditOutcome)
    .filter((v): v is CreditOutcome => !!v)
    .map((o) => OUTCOME_SCORE[o]);

  const applicationScores = bankReviews.flatMap((r) => {
    const outcomes = [r.creditApplicationOutcome, r.creditCardApplicationOutcome];
    return outcomes
      .filter((o): o is Exclude<ApplicationOutcome, "not_applied"> =>
        o === "approved" || o === "rejected",
      )
      .map((o) => APPLICATION_SCORE[o]);
  });

  const scores = [...legacyScores, ...applicationScores];

  if (scores.length === 0) return { rate: 0, count: 0 };

  const liveTotal = scores.reduce((sum, score) => sum + score, 0);
  const nextRate = Number((liveTotal / scores.length).toFixed(1));

  return { rate: nextRate, count: scores.length };
}

export function applyReviewStats(bank: Bank, reviews: Review[]): Bank {
  const bankReviews = visibleReviews(reviews).filter((review) => review.bankId === bank.id);

  // ParaKarne'de kullanıcı verisi tek kaynak olsun: Firestore `banks`
  // dokümanlarında kalan eski demo reviewCount/rating/category değerleri
  // sıralama, karşılaştırma ve lider kartını etkilemesin. Banka hakkında
  // gerçek yorum yoksa not/yorum sayısı boş görünür.
  if (bankReviews.length === 0) {
    return {
      ...bank,
      rating: 0,
      reviewCount: 0,
      grade: "—",
      sub: {
        branch: !bank.hasBranch ? null : null,
        service: null,
        app: null,
        atm: !bank.hasBranch ? null : null,
        security: null,
      },
      creditApprovalRate: 0,
      creditApprovalCount: 0,
    };
  }

  const liveRatingTotal = bankReviews.reduce((sum, review) => sum + review.stars, 0);
  const nextRating = Number((liveRatingTotal / bankReviews.length).toFixed(1));
  const credit = liveCreditApproval(bankReviews);

  return {
    ...bank,
    rating: nextRating,
    reviewCount: bankReviews.length,
    grade: gradeFromRating(nextRating),
    sub: liveCategoryScores(bank, bankReviews),
    creditApprovalRate: credit.rate,
    creditApprovalCount: credit.count,
  };
}

export function applyReviewStatsToBanks(banks: Bank[], reviews: Review[]): Bank[] {
  return banks.map((bank) => applyReviewStats(bank, reviews));
}

export function overallFromCategories(categories: Partial<Record<CategoryKey, number>>): number {
  const values = Object.values(categories).filter((v): v is number => typeof v === "number");
  if (values.length === 0) return 0;
  const avg = values.reduce((sum, v) => sum + v, 0) / values.length;
  return Math.round(avg);
}
