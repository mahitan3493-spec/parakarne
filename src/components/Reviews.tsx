"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useReviews } from "@/lib/reviews-context";
import { visibleReviews } from "@/lib/bank-stats";
import ReviewItem from "./ReviewItem";
import RateBankButton from "./RateBankButton";

export default function Reviews() {
  const { reviews, loading } = useReviews();
  const [showAll, setShowAll] = useState(false);
  const publishedReviews = useMemo(
    () => visibleReviews(reviews).filter((review) => review.status !== "hidden"),
    [reviews],
  );
  const displayedReviews = showAll ? publishedReviews : publishedReviews.slice(0, 3);

  return (
    <section id="yorumlar">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">GERÇEK DENEYİMLER</div>
            <h2>Bankacılık deneyimleri burada konuşuluyor</h2>
            <p>
              Son kullanıcı yorumlarını incele, banka deneyimlerini karşılaştır.
              <strong>Bankanı Puanla</strong> butonuyla bankanı seçip formu doğrudan aç.
            </p>
          </div>
          <div className="review-cta-actions">
            <RateBankButton className="btn primary">Bankanı Puanla</RateBankButton>
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
                <RateBankButton className="btn primary">İlk Bankayı Puanla</RateBankButton>
              </div>
            ) : (
              displayedReviews.map((r) => <ReviewItem key={r.id} review={r} />)
            )}
          </div>
          {!loading && publishedReviews.length > 3 && (
            <div className="reviews-more-row">
              <button className="btn" type="button" onClick={() => setShowAll((value) => !value)}>
                {showAll ? "Son 3 Yorumu Göster" : `Tüm Yorumları Göster (${publishedReviews.length})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
