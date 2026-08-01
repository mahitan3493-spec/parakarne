"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Article } from "@/lib/articles-data";

export default function TopicsExplorer({
  articles,
  categories,
}: {
  articles: Article[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tümü");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase("tr-TR");
    return articles.filter((article) => {
      const categoryMatches = category === "Tümü" || article.category === category;
      const queryMatches =
        normalized.length === 0 ||
        article.title.toLocaleLowerCase("tr-TR").includes(normalized) ||
        article.description.toLocaleLowerCase("tr-TR").includes(normalized) ||
        (article.category ?? "").toLocaleLowerCase("tr-TR").includes(normalized);
      return categoryMatches && queryMatches;
    });
  }, [articles, category, query]);

  return (
    <section className="topics-explorer" aria-label="ParaKarne rehberleri">
      <div className="topics-toolbar">
        <label className="topics-search">
          <span className="sr-only">Rehberlerde ara</span>
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="ATM, Findeks, kredi, icra…"
          />
        </label>
        <span className="topics-count">{filtered.length} rehber</span>
      </div>

      <div className="topics-filters" aria-label="Rehber kategorileri">
        {["Tümü", ...categories].map((item) => (
          <button
            key={item}
            type="button"
            className={category === item ? "active" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="topics-empty">
          <strong>Bu aramayla eşleşen rehber bulunamadı.</strong>
          <span>Başka bir kelime deneyebilir veya kategori filtresini kaldırabilirsin.</span>
          <button type="button" className="btn" onClick={() => { setQuery(""); setCategory("Tümü"); }}>
            Filtreleri Temizle
          </button>
        </div>
      ) : (
        <div className="topics-card-grid">
          {filtered.map((article, index) => (
            <article className="topic-card" key={article.slug}>
              <div className="topic-card-top">
                <span className="topic-card-icon" aria-hidden="true">{iconFor(article.category)}</span>
                <span className="topic-card-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="topic-card-category">{article.category ?? "Genel Rehber"}</div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link className="topic-card-link" href={`/${article.slug}`}>
                Rehberi Oku <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

function iconFor(category: string | null): string {
  if (!category) return "PK";
  if (category.includes("ATM")) return "ATM";
  if (category.includes("Findeks") || category.includes("Kredi")) return "₺";
  if (category.includes("İcra") || category.includes("Haciz")) return "§";
  if (category.includes("Hesap") || category.includes("Mobil")) return "↗";
  if (category.includes("Kart")) return "▣";
  return "PK";
}
