"use client";

import { useMemo, useState } from "react";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { applyReviewStatsToBanks } from "@/lib/bank-stats";
import { gradeClassOf, letterFromScore } from "@/lib/grades";
import { CATEGORY_META, type Bank } from "@/lib/types";
import BankLogo from "./BankLogo";
import RateBankButton from "./RateBankButton";

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

  const bankA = stats.find((bank) => bank.id === idA);
  const bankB = stats.find((bank) => bank.id === idB);
  const hasBothSelected = Boolean(bankA && bankB && bankA.id !== bankB.id);

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

  const rows = bankA && bankB ? buildRows(bankA, bankB) : [];
  const hasAnyLiveData = Boolean(bankA && bankB && (bankA.reviewCount > 0 || bankB.reviewCount > 0));
  const hasCompleteLiveData = Boolean(bankA && bankB && bankA.reviewCount > 0 && bankB.reviewCount > 0);

  const selectionMessage = !bankA && !bankB
    ? "Karşılaştırmak istediğiniz iki bankayı seçin."
    : !bankA
      ? "Birinci bankayı seçerek karşılaştırmayı başlatın."
      : !bankB
        ? "İkinci bankayı seçerek karşılaştırmayı tamamlayın."
        : "Seçtiğiniz bankalarda henüz karşılaştırılabilir kullanıcı puanı bulunmuyor.";

  return (
    <div className="compare-card">
      <div className="compare-title-row">
        <div>
          <div className="compare-title">İki Bankayı Karşılaştır</div>
          <p className="compare-helper">İki farklı banka seçin; yüksek değer yeşil, düşük değer kırmızı ve eşit değer nötr rozetle gösterilsin.</p>
        </div>
        <span className="compare-live-badge">Canlı veriler</span>
      </div>

      <div className="compare-pickers">
        <select required value={idA} onChange={(event) => setIdA(event.target.value)} aria-label="Birinci banka">
          <option value="">Birinci bankayı seçin</option>
          {stats.map((bank) => (
            <option key={bank.id} value={bank.id} disabled={bank.id === idB}>
              {bank.name}
            </option>
          ))}
        </select>
        <span className="compare-vs">VS</span>
        <select required value={idB} onChange={(event) => setIdB(event.target.value)} aria-label="İkinci banka">
          <option value="">İkinci bankayı seçin</option>
          {stats.map((bank) => (
            <option key={bank.id} value={bank.id} disabled={bank.id === idA}>
              {bank.name}
            </option>
          ))}
        </select>
      </div>

      {hasBothSelected && bankA && bankB ? (
        <div className="compare-heads">
          <div className="compare-head">
            <BankLogo bank={bankA} />
            <div className="bank-name">{bankA.name}</div>
            <span className={`grade-pill ${gradeClassOf(bankA.grade)}`}>{bankA.reviewCount > 0 ? bankA.grade : "—"}</span>
          </div>
          <div className="compare-head">
            <BankLogo bank={bankB} />
            <div className="bank-name">{bankB.name}</div>
            <span className={`grade-pill ${gradeClassOf(bankB.grade)}`}>{bankB.reviewCount > 0 ? bankB.grade : "—"}</span>
          </div>
        </div>
      ) : null}

      {!hasBothSelected || !hasAnyLiveData ? (
        <div className="compare-zero-state" role="status">
          <div className="compare-zero-visual" aria-hidden="true">
            <span>{bankA ? "✓" : "?"}</span>
            <b>VS</b>
            <span>{bankB ? "✓" : "?"}</span>
          </div>
          <div>
            <strong>{selectionMessage}</strong>
            <p>
              ParaKarne örnek veya sahte puan göstermez. Gerçek kullanıcı verileri
              geldikçe Genel Not, Kullanıcı Puanı ve kategori rozetleri otomatik oluşur.
            </p>
          </div>
          {hasBothSelected ? <RateBankButton className="btn primary">İlk Puanı Ver</RateBankButton> : null}
        </div>
      ) : null}

      {hasBothSelected && hasAnyLiveData && !hasCompleteLiveData ? (
        <div className="compare-partial-note" role="status">
          Bankalardan birinde henüz kullanıcı puanı bulunmuyor. Veri olmayan alanlar “—” olarak gösterilir.
        </div>
      ) : null}

      {hasBothSelected && hasAnyLiveData ? (
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
      ) : null}
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

  for (const category of CATEGORY_META) {
    const aScore = bankA.sub[category.key];
    const bScore = bankB.sub[category.key];
    if (aScore === null && bScore === null) continue;

    rows.push({
      label: category.label,
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
