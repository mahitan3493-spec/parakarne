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

  const title = `${bank.name} Karnesi - Kullanıcı Puanları ve Yorumları`;
  const description = `${bank.name} için gerçek kullanıcı yorumlarına dayalı güncel puan, şube/mobil/müşteri hizmetleri kategorileri ve kredi/kredi kartı onay oranı.`;

  return {
    title: { absolute: title },
    description,
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
