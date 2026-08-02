import type { Metadata } from "next";
import FinancePage from "@/components/FinancePage";
export const metadata: Metadata = { title: "Konut Kredisi Hesaplama", description: "Konut değeri ve enerji sınıfına göre tahmini azami kredi, peşinat, aylık taksit ve toplam ödeme planını hesaplayın.", alternates: { canonical: "/konut-kredisi-hesaplama/" } };
export default function Page() { return <FinancePage initialTab="housing" />; }
