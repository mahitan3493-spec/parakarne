import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";
import ProfileModal from "@/components/ProfileModal";
import FinanceCalculator from "@/components/FinanceCalculator";
import type { FinanceTab } from "@/lib/finance-calculations";

const COPY: Record<FinanceTab, { eyebrow: string; title: string; accent: string; description: string }> = {
  personal: {
    eyebrow: "PARAKARNE FİNANS MERKEZİ",
    title: "Kredini hesapla,",
    accent: "toplam maliyeti gör.",
    description: "İhtiyaç, konut ve taşıt kredilerinde taksit, toplam faiz, vergi ve ödeme planını; mevduatta net kazancı tek ekranda hesaplayın.",
  },
  housing: {
    eyebrow: "KONUT KREDİSİ HESAPLAMA",
    title: "Peşinatı ve taksiti",
    accent: "aynı anda görün.",
    description: "Konut değeri, enerji sınıfı, kredi tutarı, vade ve aylık oranla tahmini ödeme planınızı oluşturun.",
  },
  vehicle: {
    eyebrow: "TAŞIT KREDİSİ HESAPLAMA",
    title: "Araç değerine göre",
    accent: "kredi sınırını hesaplayın.",
    description: "Araç türü ve fatura/değer tutarına göre tahmini azami kredi ile vade sınırını, taksitleri ve toplam maliyeti görün.",
  },
  deposit: {
    eyebrow: "MEVDUAT FAİZİ HESAPLAMA",
    title: "Paranızın net",
    accent: "vade sonu getirisini görün.",
    description: "Anapara, gün ve yıllık brüt oranı girin; brüt kazanç, stopaj, net kazanç ve vade sonu toplam tutarı hesaplayın.",
  },
};

export default function FinancePage({ initialTab = "personal" }: { initialTab?: FinanceTab }) {
  const copy = COPY[initialTab];
  return (
    <>
      <Header />
      <main className="finance-page">
        <section className="finance-hero">
          <div className="wrap finance-hero-inner">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h1>{copy.title} <em>{copy.accent}</em></h1>
            <p>{copy.description}</p>
            <div className="finance-trust-row">
              <span>✓ Anlık hesaplama</span>
              <span>✓ Vergi ve stopaj ayrımı</span>
              <span>✓ Resmî kaynak bağlantıları</span>
            </div>
          </div>
        </section>
        <div className="wrap finance-page-content">
          <FinanceCalculator initialTab={initialTab} />
        </div>
      </main>
      <Footer />
      <AuthModal />
      <ProfileModal />
    </>
  );
}
