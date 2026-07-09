import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import ProfileModal from "@/components/ProfileModal";
import { articles, getArticle } from "@/lib/articles-data";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  const pageTitle = article.seoTitle ?? article.title;

  return {
    title: pageTitle,
    description: article.description,
    alternates: { canonical: `/${article.slug}` },
    openGraph: {
      url: `/${article.slug}`,
      title: pageTitle,
      description: article.description,
      type: "article",
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="wrap">
          <article className="content-article">
            <p className="mono breadcrumb" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana Sayfa</Link> / <Link href="/tum-konular/">Tüm Konular</Link> /{" "}
              {article.title}
            </p>
            <h1>{article.title}</h1>
            <div className="article-quick-actions" aria-label="Sayfa yönlendirme bağlantıları">
              <Link className="article-action primary" href="/">
                Ana Sayfaya Dön
              </Link>
              <Link className="article-action" href="/#bankalar">
                Banka Karnelerine Bak
              </Link>
              <Link className="article-action" href="/#karsilastir">
                Bankaları Karşılaştır
              </Link>
            </div>
            <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
            <section className="article-next-actions" aria-label="Makale sonrası yönlendirme">
              <p className="article-next-kicker">Yazıyı okudun, şimdi bankaları inceleyebilirsin.</p>
              <h2>Banka karnelerine ve karşılaştırma alanına geç</h2>
              <p>
                Kullanıcı puanlarını, banka yorumlarını ve kredi/kart onay deneyimlerini
                karşılaştırmak için aşağıdaki kısa yolları kullan.
              </p>
              <div className="article-next-buttons">
                <Link className="article-action primary" href="/#karsilastir">
                  Bankaları Karşılaştır
                </Link>
                <Link className="article-action" href="/#bankalar">
                  Banka Karnelerine Bak
                </Link>
                <Link className="article-action" href="/">
                  Ana Sayfaya Dön
                </Link>
              </div>
            </section>
          </article>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
      {article.jsonLd.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
