import type { Metadata } from "next";
import FinancePage from "@/components/FinancePage";
export const metadata: Metadata = { title: "Mevduat Faizi Hesaplama", description: "TL mevduat için brüt faiz, stopaj kesintisi, net kazanç ve vade sonu toplam tutarı hesaplayın.", alternates: { canonical: "/mevduat-faizi-hesaplama/" } };
export default function Page() { return <FinancePage initialTab="deposit" />; }
