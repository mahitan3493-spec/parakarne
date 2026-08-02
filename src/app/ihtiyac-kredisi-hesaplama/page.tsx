import type { Metadata } from "next";
import FinancePage from "@/components/FinancePage";
export const metadata: Metadata = { title: "İhtiyaç Kredisi Hesaplama", description: "İhtiyaç kredisi aylık taksit, faiz, BSMV, KKDF, toplam geri ödeme ve ödeme planını hesaplayın.", alternates: { canonical: "/ihtiyac-kredisi-hesaplama/" } };
export default function Page() { return <FinancePage initialTab="personal" />; }
