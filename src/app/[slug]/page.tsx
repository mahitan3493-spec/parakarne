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

  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: `/${article.slug}` },
    openGraph: {
      url: `/${article.slug}`,
      title: article.title,
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
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana sayfa</Link> / <Link href="/tum-konular">Tüm Konular</Link> /{" "}
              {article.title}
            </p>
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
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
