import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Ledger from "@/components/Ledger";
import BankGrid from "@/components/BankGrid";
import Reviews from "@/components/Reviews";
import HowItWorks from "@/components/HowItWorks";
import CtaBand from "@/components/CtaBand";
import Legal from "@/components/Legal";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import BankDetailModal from "@/components/BankDetailModal";
import ProfileModal from "@/components/ProfileModal";

export const metadata: Metadata = {
  title: {
    absolute: "ParaKarne.com - Banka Yorumları ve Karşılaştırma",
  },
  description:
    "ParaKarne.com ile Türkiye’deki bankaları gerçek kullanıcı yorumları, puanları ve kredi/kredi kartı onay oranlarıyla karşılaştırın.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ParaKarne.com - Banka Yorumları ve Karşılaştırma",
    description:
      "Türkiye’deki bankaları kullanıcı yorumları, kategori puanları ve onay oranlarıyla karşılaştırın.",
    url: "https://parakarne.com/",
    siteName: "ParaKarne",
    type: "website",
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ParaKarne.com banka yorumları ve karşılaştırma platformu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ParaKarne.com - Banka Yorumları",
    description:
      "Bankaları kullanıcı puanları, yorumlar ve onay oranlarıyla karşılaştırın.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Ledger />
      <BankGrid />
      <Reviews />
      <HowItWorks />
      <CtaBand />
      <Legal />
      <Footer />
      <AuthModal />
      <BankDetailModal />
      <ProfileModal />
    </>
  );
}
