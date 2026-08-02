import type { Metadata } from "next";
import FinancePage from "@/components/FinancePage";

export const metadata: Metadata = {
  title: "Kredi ve Mevduat Faizi Hesaplama",
  description: "İhtiyaç, konut ve taşıt kredisi taksitlerini; toplam geri ödeme, faiz, vergi ve mevduat net kazancını ücretsiz hesaplayın.",
  alternates: { canonical: "/kredi-hesaplama/" },
};

export default function Page() { return <FinancePage initialTab="personal" />; }
