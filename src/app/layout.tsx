import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";
import { ToastProvider } from "@/lib/toast-context";
import { UIProvider } from "@/lib/ui-context";
import { BanksProvider } from "@/lib/banks-context";
import { ReviewsProvider } from "@/lib/reviews-context";

const siteUrl = "https://parakarne.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ParaKarne - Banka Yorumları, Puanlama ve Karşılaştırma Platformu",
    template: "%s | ParaKarne",
  },
  description:
    "ParaKarne ile bankaları gerçek kullanıcı yorumlarına göre inceleyin, puanlayın ve karşılaştırın. Mobil uygulama, müşteri hizmetleri, ATM, güvenlik, şube hizmetleri ve kredi/kredi kartı onay oranlarını görün.",
  applicationName: "ParaKarne",
  keywords: [
    "banka puanlama",
    "banka yorumları",
    "banka karşılaştırma",
    "banka kullanıcı yorumları",
    "banka şikayetleri",
    "banka mobil uygulama puanı",
    "en iyi banka",
    "banka müşteri hizmetleri yorumları",
    "kredi onayı veren bankalar",
    "kart onayı veren bankalar",
    "mobil bankacılık yorumları",
    "banka şube hizmetleri",
    "banka karnesi",
    "kredi kartı yorumları",
    "ParaKarne",
  ],
  authors: [{ name: "ParaKarne" }],
  creator: "ParaKarne",
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "ParaKarne",
    title: "ParaKarne - Banka Yorumları, Puanlama ve Karşılaştırma Platformu",
    description:
      "Bankaları gerçek kullanıcı yorumlarına göre puanlayın, inceleyin ve karşılaştırın.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ParaKarne banka karşılaştırma platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ParaKarne - Banka Yorumları, Puanlama ve Karşılaştırma Platformu",
    description: "Türkiye'deki bankaları kullanıcı puanları, yorumlar ve onay oranlarıyla karşılaştırın.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#33477A",
};


const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ParaKarne",
  url: siteUrl,
  inLanguage: "tr-TR",
  description:
    "ParaKarne, Türkiye'deki bankaları gerçek kullanıcı yorumları, puanları ve kredi/kredi kartı onay deneyimlerine göre karşılaştırmaya yardımcı olan bağımsız bir banka değerlendirme platformudur.",
  publisher: {
    "@type": "Organization",
    name: "ParaKarne",
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ParaKarne",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  sameAs: [],
  description:
    "ParaKarne, banka kullanıcı yorumları, banka puanları, mobil uygulama deneyimleri, müşteri hizmetleri, ATM, güvenlik, şube hizmetleri ve kredi/kredi kartı onay oranlarını karşılaştırmaya odaklanan bağımsız bir platformdur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <AuthProvider>
          <ToastProvider>
            <UIProvider>
              <BanksProvider>
                <ReviewsProvider>{children}</ReviewsProvider>
              </BanksProvider>
            </UIProvider>
          </ToastProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
