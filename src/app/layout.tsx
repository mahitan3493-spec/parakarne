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
    default: "ParaKarne — Bankanızın Notu Ne?",
    template: "%s | ParaKarne",
  },
  description:
    "Türkiye'nin banka karnesi. Gerçek kullanıcı deneyimlerine dayalı, karne gibi net bir sistemle bankaları puanlayın ve karşılaştırın.",
  applicationName: "ParaKarne",
  keywords: [
    "banka karşılaştırma",
    "banka yorumları",
    "banka puanı",
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
    title: "ParaKarne — Bankanızın Notu Ne?",
    description:
      "Türkiye'nin banka karnesi. Bankaları kullanıcı deneyimlerine göre puanlayın ve karşılaştırın.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ParaKarne banka karşılaştırma platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ParaKarne — Bankanızın Notu Ne?",
    description: "Bankaları kullanıcı puanları ve yorumlarla karşılaştırın.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#33477A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>
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
