"use client";

import { useMemo } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf } from "@/lib/grades";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import BankLogo from "./BankLogo";

export default function BankGrid() {
  const { banks, loading } = useBanks();
  const { reviews } = useReviews();
  const { openBankModal } = useUI();
  const top = useMemo(
    () => applyReviewStatsToBanks(banks, reviews).slice(0, 6),
    [banks, reviews],
  );

  return (
    <section
      id="bankalar"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--paper-line)",
        borderBottom: "1px solid var(--paper-line)",
      }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">02 — ÖNE ÇIKANLAR</div>
            <h2>Bu ay sınıf birincileri</h2>
          </div>
        </div>
        <div className="bank-grid">
          {loading && <p className="skeleton-row">Bankalar yükleniyor…</p>}
          {!loading &&
            top.map((b) => (
              <div key={b.id} className="bcard" onClick={() => openBankModal(b.id)}>
                <div className="bcard-top">
                  <div className="bank-cell">
                    <BankLogo bank={b} />
                    <div className="bank-name">{b.name}</div>
                  </div>
                  <span className={`grade-pill ${gradeClassOf(b.grade)}`}>
                    {b.grade}
                  </span>
                </div>
                <div className="bcard-quote">{b.quote}</div>
                <div className="bcard-foot">
                  <span>
                    {"★".repeat(Math.round(b.rating))} {b.rating}/5
                  </span>
                  <span>{b.reviewCount.toLocaleString("tr-TR")} yorum</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
