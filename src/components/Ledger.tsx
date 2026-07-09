"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
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
        <div className="ledger ledger-desktop">
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
                <th>İşlem</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={5} className="skeleton-row">
                    Bankalar yükleniyor…
                  </td>
                </tr>
              ) : sorted.length === 0 ? (
                <tr>
                  <td colSpan={5} className="skeleton-row">
                    Henüz banka verisi eklenmedi.
                  </td>
                </tr>
              ) : (
                sorted.map((b) => <LedgerRow key={b.id} bank={b} />)
              )}
            </tbody>
          </table>
        </div>

        <div className="mobile-bank-list">
          {loading ? (
            <p className="skeleton-row">Bankalar yükleniyor…</p>
          ) : sorted.length === 0 ? (
            <p className="skeleton-row">Henüz banka verisi eklenmedi.</p>
          ) : (
            sorted.map((b) => <MobileBankCard key={b.id} bank={b} />)
          )}
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
  const bankUrl = `/banka/${bank.id}/`;

  function goToBankPage() {
    window.location.href = bankUrl;
  }

  return (
    <tr onClick={goToBankPage}>
      <td>
        <div className="bank-cell">
          <BankLogo bank={bank} small />
          <div className="bank-name">
            <Link
              href={bankUrl}
              onClick={(e) => e.stopPropagation()}
            >
              {bank.name}
            </Link>
            <small>Ticari &amp; Bireysel Bankacılık</small>
          </div>
        </div>
      </td>
      <td>
        <span className={`grade-pill ${gradeClassOf(bank.grade)}`}>{bank.grade}</span>
      </td>
      <td>
        {bank.reviewCount > 0 ? (
          <>
            <span className="stars">{starString(bank.rating)}</span>{" "}
            <span className="rate-num" style={{ color: "var(--ink-faint)", fontSize: "12px" }}>
              {bank.rating}
            </span>
          </>
        ) : (
          <span style={{ fontSize: "12px", color: "var(--ink-faint)" }}>Henüz not yok</span>
        )}
      </td>
      <td className="rate-num" style={{ color: "var(--ink-faint)" }}>
        {bank.reviewCount.toLocaleString("tr-TR")}
      </td>
      <td>
        <div className="ledger-actions" onClick={(e) => e.stopPropagation()}>
          <button className="ledger-action" onClick={goToBankPage}>
            İncele
          </button>
          <button className="ledger-action primary" onClick={() => openBankModal(bank.id, "rating")}>
            Puanla
          </button>
        </div>
      </td>
    </tr>
  );
}

function MobileBankCard({ bank }: { bank: Bank }) {
  const { openBankModal } = useUI();
  const bankUrl = `/banka/${bank.id}/`;

  function goToBankPage() {
    window.location.href = bankUrl;
  }

  return (
    <article className="mobile-bank-card">
      <button className="mobile-bank-main" type="button" onClick={goToBankPage}>
        <div className="bank-cell">
          <BankLogo bank={bank} small />
          <div className="bank-name">
            <span>{bank.name}</span>
            <small>Ticari &amp; Bireysel Bankacılık</small>
          </div>
        </div>
        <span className={`grade-pill ${gradeClassOf(bank.grade)}`}>{bank.grade}</span>
      </button>

      <div className="mobile-bank-stats">
        <div>
          <span className="mobile-stat-label">Kullanıcı puanı</span>
          {bank.reviewCount > 0 ? (
            <strong>
              <span className="stars">{starString(bank.rating)}</span>{" "}
              <span>{bank.rating}</span>
            </strong>
          ) : (
            <strong>Henüz not yok</strong>
          )}
        </div>
        <div>
          <span className="mobile-stat-label">Yorum</span>
          <strong>{bank.reviewCount.toLocaleString("tr-TR")}</strong>
        </div>
      </div>

      <div className="mobile-bank-actions">
        <button className="ledger-action" type="button" onClick={goToBankPage}>
          İncele
        </button>
        <button
          className="ledger-action primary"
          type="button"
          onClick={() => openBankModal(bank.id, "rating")}
        >
          Puanla
        </button>
      </div>
    </article>
  );
}
