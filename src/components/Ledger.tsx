"use client";

import { useMemo, useState } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { GRADE_ORDER, gradeClassOf, starString } from "@/lib/grades";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import type { Bank } from "@/lib/types";
import BankLogo from "./BankLogo";
import CompareBanks from "./CompareBanks";

type SortKey = "name" | "grade" | "rating" | "reviews";

export default function Ledger() {
  const { banks, loading, usingDemoData } = useBanks();
  const { reviews } = useReviews();
  const [sortKey, setSortKey] = useState<SortKey>("grade");
  const [sortDir, setSortDir] = useState<1 | -1>(1);

  const banksWithStats = useMemo(
    () => applyReviewStatsToBanks(banks, reviews),
    [banks, reviews],
  );

  const sorted = useMemo(() => {
    const list = [...banksWithStats];
    list.sort((a, b) => {
      if (sortKey === "name") return sortDir * a.name.localeCompare(b.name);
      if (sortKey === "grade")
        return sortDir * ((GRADE_ORDER[b.grade] ?? 0) - (GRADE_ORDER[a.grade] ?? 0));
      const key = sortKey === "reviews" ? "reviewCount" : sortKey;
      const av = (a as unknown as Record<string, number>)[key] ?? 0;
      const bv = (b as unknown as Record<string, number>)[key] ?? 0;
      return sortDir * (bv - av);
    });
    return list;
  }, [banksWithStats, sortKey, sortDir]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === 1 ? -1 : 1) as 1 | -1);
    } else {
      setSortKey(key);
      setSortDir(1);
    }
  }

  const columns: { key: SortKey; label: string }[] = [
    { key: "name", label: "Banka" },
    { key: "grade", label: "Genel Not" },
    { key: "rating", label: "Kullanıcı Puanı" },
    { key: "reviews", label: "Yorum" },
  ];

  return (
    <section id="karsilastir">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">01 — KARŞILAŞTIRMA</div>
            <h2>Banka defteri</h2>
            <p>
              Sütun başlıklarına tıklayarak sıralayın. Yeni yorumlar banka
              puanına ve yorum sayısına otomatik yansır.
            </p>
          </div>
        </div>
        {usingDemoData && (
          <div className="info-strip">
            Firebase banka koleksiyonu boş ya da bağlı değil. Şimdilik yerel 32 bankalık yedek veri gösteriliyor.
          </div>
        )}
        <CompareBanks />
        <div className="ledger">
          <table>
            <thead>
              <tr>
                {columns.map((c) => (
                  <th
                    key={c.key}
                    className={sortKey === c.key ? "sorted" : undefined}
                    onClick={() => handleSort(c.key)}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="skeleton-row">
                    Bankalar yükleniyor…
                  </td>
                </tr>
              ) : sorted.length === 0 ? (
                <tr>
                  <td colSpan={4} className="skeleton-row">
                    Henüz banka verisi eklenmedi.
                  </td>
                </tr>
              ) : (
                sorted.map((b) => <LedgerRow key={b.id} bank={b} />)
              )}
            </tbody>
          </table>
        </div>
        <p
          style={{ fontSize: "11.5px", color: "var(--ink-faint)", marginTop: "10px" }}
          className="mono"
        >
          * Örnek puanlar tanıtım verisidir; kullanıcı yorumları geldikçe ekrandaki karne ortalaması güncellenir.
        </p>
      </div>
    </section>
  );
}

function LedgerRow({ bank }: { bank: Bank }) {
  const { openBankModal } = useUI();
  return (
    <tr onClick={() => openBankModal(bank.id)}>
      <td>
        <div className="bank-cell">
          <BankLogo bank={bank} small />
          <div className="bank-name">
            {bank.name}
            <small>Ticari &amp; Bireysel Bankacılık</small>
          </div>
        </div>
      </td>
      <td>
        <span className={`grade-pill ${gradeClassOf(bank.grade)}`}>{bank.grade}</span>
      </td>
      <td>
        <span className="stars">{starString(bank.rating)}</span>{" "}
        <span className="rate-num" style={{ color: "var(--ink-faint)", fontSize: "12px" }}>
          {bank.rating}
        </span>
      </td>
      <td className="rate-num" style={{ color: "var(--ink-faint)" }}>
        {bank.reviewCount.toLocaleString("tr-TR")}
      </td>
    </tr>
  );
}
