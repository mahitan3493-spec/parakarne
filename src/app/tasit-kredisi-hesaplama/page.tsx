import type { Metadata } from "next";
import FinancePage from "@/components/FinancePage";
export const metadata: Metadata = { title: "Taşıt Kredisi Hesaplama", description: "Araç değerine göre taşıt kredisi oranı, azami vade, aylık taksit, vergiler ve toplam geri ödemeyi hesaplayın.", alternates: { canonical: "/tasit-kredisi-hesaplama/" } };
export default function Page() { return <FinancePage initialTab="vehicle" />; }
