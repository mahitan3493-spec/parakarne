"use client";

import { useMemo, useState } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import { gradeClassOf, letterFromScore } from "@/lib/grades";
import { CATEGORY_META, type Bank } from "@/lib/types";
import BankLogo from "./BankLogo";

type Row = {
  label: string;
  aValue: number | null;
  bValue: number | null;
  aDisplay: string;
  bDisplay: string;
};

export default function CompareBanks() {
  const { banks } = useBanks();
  const { reviews } = useReviews();
  const stats = useMemo(() => applyReviewStatsToBanks(banks, reviews), [banks, reviews]);

  const [idA, setIdA] = useState("");
  const [idB, setIdB] = useState("");

  const bankA = stats.find((b) => b.id === idA) ?? stats[0];
  const bankB = stats.find((b) => b.id === idB) ?? stats[1];

  if (!bankA || !bankB) return null;

  const rows = buildRows(bankA, bankB);

  return (
    <div className="compare-card">
      <div className="compare-title">İki Bankayı Karşılaştır</div>
      <div className="compare-pickers">
        <select value={bankA.id} onChange={(e) => setIdA(e.target.value)}>
          {stats.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        <span className="compare-vs">vs</span>
        <select value={bankB.id} onChange={(e) => setIdB(e.target.value)}>
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
        {rows.map((row) => (
          <div className="compare-row" key={row.label}>
            <span className={`compare-cell ${row.aValue !== null && row.bValue !== null && row.aValue > row.bValue ? "winner" : ""}`}>
              {row.aDisplay}
            </span>
            <span className="compare-label">{row.label}</span>
            <span className={`compare-cell ${row.aValue !== null && row.bValue !== null && row.bValue > row.aValue ? "winner" : ""}`}>
              {row.bDisplay}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function buildRows(bankA: Bank, bankB: Bank): Row[] {
  const rows: Row[] = [
    {
      label: "Genel Puan",
      aValue: bankA.rating,
      bValue: bankB.rating,
      aDisplay: `${bankA.rating}/5`,
      bDisplay: `${bankB.rating}/5`,
    },
    {
      label: "Yorum Sayısı",
      aValue: bankA.reviewCount,
      bValue: bankB.reviewCount,
      aDisplay: bankA.reviewCount.toLocaleString("tr-TR"),
      bDisplay: bankB.reviewCount.toLocaleString("tr-TR"),
    },
  ];

  // İki bankanın herhangi birinde geçerli olan kategorileri birleştirip
  // göster; geçerli olmayan tarafta "—" yazsın (örn. şubesiz banka).
  for (const cat of CATEGORY_META) {
    const aScore = bankA.sub[cat.key];
    const bScore = bankB.sub[cat.key];
    if (aScore === null && bScore === null) continue;

    rows.push({
      label: cat.label,
      aValue: aScore,
      bValue: bScore,
      aDisplay: aScore === null ? "—" : letterFromScore(aScore),
      bDisplay: bScore === null ? "—" : letterFromScore(bScore),
    });
  }

  rows.push({
    label: "Kredi/Kredi Kartı Onayı",
    aValue: bankA.creditApprovalRate,
    bValue: bankB.creditApprovalRate,
    aDisplay: `%${Math.round(bankA.creditApprovalRate)}`,
    bDisplay: `%${Math.round(bankB.creditApprovalRate)}`,
  });

  return rows;
}
