"use client";

import { useMemo, useState } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import { gradeClassOf, letterFromScore } from "@/lib/grades";
import { CATEGORY_META, type Bank } from "@/lib/types";
import BankLogo from "./BankLogo";

type RowKind = "score" | "count" | "grade" | "percent";

type Row = {
  label: string;
  kind: RowKind;
  aValue: number | null;
  bValue: number | null;
  aDisplay: string;
  bDisplay: string;
};

type CompareTone = "winner" | "loser" | "neutral" | "empty";

export default function CompareBanks() {
  const { banks } = useBanks();
  const { reviews, loading: reviewsLoading } = useReviews();
  const stats = useMemo(() => applyReviewStatsToBanks(banks, reviews), [banks, reviews]);

  const [idA, setIdA] = useState("");
  const [idB, setIdB] = useState("");

  const bankA = stats.find((b) => b.id === idA) ?? stats[0];
  const bankB = stats.find((b) => b.id === idB) ?? stats[1];

  if (!bankA || !bankB) return null;

  if (reviewsLoading) {
    return (
      <div className="compare-card compare-skeleton-card" aria-label="Karşılaştırma hazırlanıyor">
        <div className="compare-title">İki Bankayı Karşılaştır</div>
        <span className="skeleton-line wide" />
        <span className="skeleton-line" />
        <span className="skeleton-line short" />
      </div>
    );
  }

  const rows = buildRows(bankA, bankB);

  return (
    <div className="compare-card">
      <div className="compare-title-row">
        <div>
          <div className="compare-title">İki Bankayı Karşılaştır</div>
          <p className="compare-helper">Yüksek değer yeşil, düşük değer kırmızı ve eşit değer nötr rozetle gösterilir.</p>
        </div>
        <span className="compare-live-badge">Canlı veriler</span>
      </div>

      <div className="compare-pickers">
        <select value={bankA.id} onChange={(e) => setIdA(e.target.value)} aria-label="Birinci banka">
          {stats.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        <span className="compare-vs">VS</span>
        <select value={bankB.id} onChange={(e) => setIdB(e.target.value)} aria-label="İkinci banka">
          {stats.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
      </div>

      <div className="compare-heads">
        <div className="compare-head">
          <BankLogo bank={bankA} />
          <div className="bank-name">{bankA.name}</div>
          <span className={`grade-pill ${gradeClassOf(bankA.grade)}`}>{bankA.grade}</span>
        </div>
        <div className="compare-head">
          <BankLogo bank={bankB} />
          <div className="bank-name">{bankB.name}</div>
          <span className={`grade-pill ${gradeClassOf(bankB.grade)}`}>{bankB.grade}</span>
        </div>
      </div>

      <div className="compare-rows">
        {rows.map((row) => {
          const aTone = toneFor(row.aValue, row.bValue);
          const bTone = toneFor(row.bValue, row.aValue);
          return (
            <div className="compare-row compare-row-pro" key={row.label}>
              <CompareScore display={row.aDisplay} value={row.aValue} kind={row.kind} tone={aTone} />
              <span className="compare-label">{row.label}</span>
              <CompareScore display={row.bDisplay} value={row.bValue} kind={row.kind} tone={bTone} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function CompareScore({
  display,
  value,
  kind,
  tone,
}: {
  display: string;
  value: number | null;
  kind: RowKind;
  tone: CompareTone;
}) {
  return (
    <span
      className={`compare-score compare-score-${tone} compare-score-${kind}`}
      aria-label={value === null ? "Veri yok" : display}
    >
      {display}
    </span>
  );
}

function toneFor(value: number | null, other: number | null): CompareTone {
  if (value === null) return "empty";
  if (other === null || value === other) return "neutral";
  return value > other ? "winner" : "loser";
}

function buildRows(bankA: Bank, bankB: Bank): Row[] {
  const rows: Row[] = [
    {
      label: "Genel Not",
      kind: "grade",
      aValue: bankA.reviewCount > 0 ? bankA.rating : null,
      bValue: bankB.reviewCount > 0 ? bankB.rating : null,
      aDisplay: bankA.reviewCount > 0 ? bankA.grade : "—",
      bDisplay: bankB.reviewCount > 0 ? bankB.grade : "—",
    },
    {
      label: "Kullanıcı Puanı",
      kind: "score",
      aValue: bankA.reviewCount > 0 ? bankA.rating : null,
      bValue: bankB.reviewCount > 0 ? bankB.rating : null,
      aDisplay: bankA.reviewCount > 0 ? `${bankA.rating.toFixed(1)} / 5` : "—",
      bDisplay: bankB.reviewCount > 0 ? `${bankB.rating.toFixed(1)} / 5` : "—",
    },
    {
      label: "Yorum Sayısı",
      kind: "count",
      aValue: bankA.reviewCount,
      bValue: bankB.reviewCount,
      aDisplay: bankA.reviewCount.toLocaleString("tr-TR"),
      bDisplay: bankB.reviewCount.toLocaleString("tr-TR"),
    },
  ];

  for (const cat of CATEGORY_META) {
    const aScore = bankA.sub[cat.key];
    const bScore = bankB.sub[cat.key];
    if (aScore === null && bScore === null) continue;

    rows.push({
      label: cat.label,
      kind: "grade",
      aValue: aScore,
      bValue: bScore,
      aDisplay: aScore === null ? "—" : letterFromScore(aScore),
      bDisplay: bScore === null ? "—" : letterFromScore(bScore),
    });
  }

  if (bankA.creditApprovalCount > 0 || bankB.creditApprovalCount > 0) {
    rows.push({
      label: "Kredi/Kredi Kartı Onayı",
      kind: "percent",
      aValue: bankA.creditApprovalCount > 0 ? bankA.creditApprovalRate : null,
      bValue: bankB.creditApprovalCount > 0 ? bankB.creditApprovalRate : null,
      aDisplay: bankA.creditApprovalCount > 0 ? `%${Math.round(bankA.creditApprovalRate)}` : "—",
      bDisplay: bankB.creditApprovalCount > 0 ? `%${Math.round(bankB.creditApprovalRate)}` : "—",
    });
  }

  return rows;
}
