import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import ProfileModal from "@/components/ProfileModal";
import { articles, getArticle } from "@/lib/articles-data";

const SITE_URL = "https://parakarne.com";
const PUBLISHED_DATE = "2026-07-10";
const MODIFIED_DATE = "2026-08-02";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const pageTitle = article.seoTitle ?? article.title;
  const canonical = `/${article.slug}/`;

  return {
    title: pageTitle,
    description: article.description,
    authors: [{ name: "ParaKarne Editör Ekibi" }],
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: pageTitle,
      description: article.description,
      type: "article",
      publishedTime: `${PUBLISHED_DATE}T09:00:00+03:00`,
      modifiedTime: `${MODIFIED_DATE}T09:00:00+03:00`,
      authors: ["ParaKarne Editör Ekibi"],
      images: [{ url: "/parakarne-paylasim.png", width: 1200, height: 630, alt: `${article.title} | ParaKarne` }],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: article.description,
      images: ["/parakarne-paylasim.png"],
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return notFound();

  const articleUrl = `${SITE_URL}/${article.slug}/`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    image: [`${SITE_URL}/parakarne-paylasim.png`],
    datePublished: PUBLISHED_DATE,
    dateModified: MODIFIED_DATE,
    author: { "@type": "Organization", name: "ParaKarne Editör Ekibi", url: `${SITE_URL}/hakkimizda/` },
    publisher: {
      "@type": "Organization",
      name: "ParaKarne",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/parakarne-logo-search.png` },
    },
    inLanguage: "tr-TR",
  };
  const supplementaryJsonLd = article.jsonLd.filter((block) => (block as { "@type"?: string })["@type"] !== "Article");

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="wrap">
          <article className="content-article">
            <p className="mono breadcrumb" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana Sayfa</Link> / <Link href="/tum-konular/">Tüm Konular</Link> / {article.title}
            </p>
            <h1>{article.title}</h1>
            <div className="article-meta" aria-label="Makale bilgileri">
              <span>ParaKarne Editör Ekibi</span>
              <span>İlk yayın: 10 Temmuz 2026</span>
              <span>Güncelleme: 2 Ağustos 2026</span>
            </div>
            <div className="article-quick-actions" aria-label="Sayfa yönlendirme bağlantıları">
              <Link className="article-action primary" href="/">Ana Sayfaya Dön</Link>
              <Link className="article-action" href="/#bankalar">Banka Karnelerine Bak</Link>
              <Link className="article-action" href="/#karsilastir">Bankaları Karşılaştır</Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
            <section className="article-next-actions" aria-label="Makale sonrası yönlendirme">
              <p className="article-next-kicker">Yazıyı okudun, şimdi bankaları inceleyebilirsin.</p>
              <h2>Banka karnelerine ve karşılaştırma alanına geç</h2>
              <p>Kullanıcı puanlarını, banka yorumlarını ve kredi/kart onay deneyimlerini karşılaştırmak için aşağıdaki kısa yolları kullan.</p>
              <div className="article-next-buttons">
                <Link className="article-action primary" href="/#karsilastir">Bankaları Karşılaştır</Link>
                <Link className="article-action" href="/#bankalar">Banka Karnelerine Bak</Link>
                <Link className="article-action" href="/">Ana Sayfaya Dön</Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
      {[articleJsonLd, ...supplementaryJsonLd].map((block, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }} />
      ))}
    </>
  );
}
