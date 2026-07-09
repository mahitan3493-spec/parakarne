import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";
import AuthModal from "./AuthModal";
import ProfileModal from "./ProfileModal";

export default function LegalPageLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="wrap">
          <article>
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana sayfa</Link> / {title}
            </p>
            <h1>{title}</h1>
            {children}
          </article>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
    </>
  );
}
