"use client";

import { useMemo } from "react";
import Link from "next/link";
import { useReviews } from "@/lib/reviews-context";
import { visibleReviews } from "@/lib/bank-stats";
import ReviewItem from "./ReviewItem";

export default function Reviews() {
  const { reviews, loading } = useReviews();
  const publishedReviews = useMemo(
    () => visibleReviews(reviews).filter((review) => review.status !== "hidden"),
    [reviews],
  );

  return (
    <section id="yorumlar">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">03 — YORUMLAR</div>
            <h2>Kullanıcılar bankalar hakkında ne diyor?</h2>
            <p>
              Gerçek kullanıcı yorumlarını incele, banka deneyimlerini karşılaştır.
              Puan vermek için banka kartındaki <strong>Puanla</strong> butonunu kullan.
            </p>
          </div>
          <div className="review-cta-actions">
            <Link className="btn primary" href="/#bankalar">
              Bankanı Puanla
            </Link>
            <Link className="btn" href="/#karsilastir">
              Bankaları Karşılaştır
            </Link>
          </div>
        </div>

        <div className="review-only-layout">
          <div className="review-list review-list-wide">
            {loading ? (
              <div className="empty-review-card review-skeleton-card">
                <span className="skeleton-line wide" />
                <span className="skeleton-line" />
                <span className="skeleton-line short" />
              </div>
            ) : publishedReviews.length === 0 ? (
              <div className="empty-review-card">
                <h3>Henüz yorum yok</h3>
                <p>İlk puanı sen ver; yorumun burada görünsün.</p>
                <Link className="btn primary" href="/#bankalar">
                  İlk Bankayı Puanla
                </Link>
              </div>
            ) : (
              publishedReviews.map((r) => <ReviewItem key={r.id} review={r} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
