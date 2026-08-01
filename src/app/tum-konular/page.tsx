import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import ProfileModal from "@/components/ProfileModal";
import TopicsExplorer from "@/components/TopicsExplorer";
import { articles, CATEGORY_ORDER } from "@/lib/articles-data";

export const metadata: Metadata = {
  title: "Tüm Konular",
  description:
    "ParaKarne'deki tüm bankacılık, kredi, icra, haciz ve hesap sorunları rehberlerini kategori ve aramayla keşfedin.",
  alternates: { canonical: "/tum-konular" },
  openGraph: {
    url: "/tum-konular",
    title: "Tüm Konular | ParaKarne",
    description:
      "ParaKarne'deki bankacılık, kredi, icra, haciz ve hesap sorunları rehberlerini keşfedin.",
    images: [{ url: "/og-image-v8.png", width: 1200, height: 630, alt: "ParaKarne rehber merkezi" }],
  },
};

export default function TumKonularPage() {
  return (
    <>
      <Header />
      <main className="topics-page">
        <div className="wrap">
          <p className="mono breadcrumb topics-breadcrumb">
            <Link href="/">Ana Sayfa</Link> / Tüm Konular
          </p>
          <section className="topics-hero">
            <div>
              <div className="sec-num">PARAKARNE REHBER MERKEZİ</div>
              <h1>Bankacılık sorunlarında aradığın konuyu hızlıca bul.</h1>
              <p>
                ATM işlemlerinden Findeks kayıtlarına, kredi kartı itirazlarından
                hesap blokelerine kadar tüm ParaKarne rehberleri tek yerde.
              </p>
            </div>
            <div className="topics-hero-stat">
              <strong>{articles.length}</strong>
              <span>güncel rehber</span>
            </div>
          </section>
          <TopicsExplorer articles={articles} categories={CATEGORY_ORDER} />
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
    </>
  );
}
