import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demoBanks } from "@/lib/bank-data";
import BankDetailPageContent from "@/components/BankDetailPageContent";

export function generateStaticParams() {
  return demoBanks.map((b) => ({ bankId: b.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ bankId: string }>;
}): Promise<Metadata> {
  const { bankId } = await params;
  const bank = demoBanks.find((b) => b.id === bankId);
  if (!bank) return {};

  const title = `${bank.name} Kullanıcı Yorumları, Puanı ve Banka Karnesi`;
  const description = `${bank.name} kullanıcı yorumları, mobil uygulama puanı, müşteri hizmetleri yorumları, ATM ve şube hizmetleri ile kredi/kredi kartı onay oranını ParaKarne’de inceleyin.`;

  return {
    title: { absolute: title },
    description,
    keywords: [
      `${bank.name} kullanıcı yorumları`,
      `${bank.name} banka yorumları`,
      `${bank.name} mobil uygulama yorumları`,
      `${bank.name} müşteri hizmetleri yorumları`,
      `${bank.name} kredi kartı onay oranı`,
      `${bank.name} kredi onay oranı`,
      `${bank.name} şikayetleri`,
      `${bank.name} karnesi`,
    ],
    alternates: { canonical: `/banka/${bank.id}` },
    openGraph: {
      url: `/banka/${bank.id}`,
      title,
      description,
      type: "website",
    },
  };
}

export default async function BankPage({
  params,
}: {
  params: Promise<{ bankId: string }>;
}) {
  const { bankId } = await params;
  const exists = demoBanks.some((b) => b.id === bankId);
  if (!exists) notFound();

  return <BankDetailPageContent bankId={bankId} />;
}
