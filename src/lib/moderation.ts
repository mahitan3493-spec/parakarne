import type { Review } from "./types";

export const REVIEW_REPORT_THRESHOLD = 3;

export function isReviewUnderModeration(review: Pick<Review, "reportCount">): boolean {
  return review.reportCount >= REVIEW_REPORT_THRESHOLD;
}
