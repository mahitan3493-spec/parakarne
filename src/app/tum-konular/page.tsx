import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import ProfileModal from "@/components/ProfileModal";
import { articles, CATEGORY_ORDER } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Tüm Konular",
  description:
    "ParaKarne'deki tüm bankacılık, kredi, icra, haciz ve hesap sorunları rehberlerinin tam listesi.",
  alternates: { canonical: "/tum-konular" },
  openGraph: {
    url: "/tum-konular",
    title: "Tüm Konular | ParaKarne",
    description:
      "ParaKarne'deki tüm bankacılık, kredi, icra, haciz ve hesap sorunları rehberlerinin tam listesi.",
  },
};

export default function TumKonularPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="wrap">
          <article className="content-article">
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana sayfa</Link> / Tüm Konular
            </p>
            <h1>Tüm Konular</h1>
            <p className="lead">
              Kredi, kredi kartı, Findeks/KKB, yasal takip, icra, haciz, hesap ve mobil bankacılık
              sorunlarınızla ilgili tüm rehberlerin tam listesi. Bir konuya tıklayarak ilgili açıklamaları
              ve yapılabilecek genel adımları okuyabilirsiniz.
            </p>
            {CATEGORY_ORDER.map((cat) => {
              const items = articles.filter((a) => a.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat} className="topics-group">
                  <h2>{cat}</h2>
                  <ul className="topics-list">
                    {items.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/${a.slug}`}>{a.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </article>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
    </>
  );
}
