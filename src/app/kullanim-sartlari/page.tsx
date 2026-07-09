import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Kullanım Şartları",
  description: "ParaKarne kullanım şartları.",
  alternates: { canonical: "/kullanim-sartlari" },
  openGraph: {
    url: "/kullanim-sartlari",
    title: "Kullanım Şartları | ParaKarne",
    description: "ParaKarne kullanım şartları.",
  },
};

export default function TermsPage() {
  return (
    <LegalPageLayout title="Kullanım Şartları">
      <p>
        ParaKarne, bankalarla ilgili kullanıcı yorumlarını ve puanlarını karne mantığıyla göstermeyi amaçlayan bağımsız bir platformdur. Siteyi kullanan herkes bu şartları kabul etmiş sayılır.
      </p>
      <h2>Yorum kuralları</h2>
      <ul>
        <li>Hakaret, tehdit, kişisel veri, telefon, IBAN, reklam ve yanıltıcı bilgi paylaşılmamalıdır.</li>
        <li>Yorumlar gerçek deneyime dayanmalı, başka kişileri hedef göstermemelidir.</li>
        <li>Bildirim alan yorumlar otomatik incelemeye alınabilir veya gizlenebilir.</li>
      </ul>
      <h2>Sorumluluk sınırı</h2>
      <p>
        Sitedeki puanlar gerçek kullanıcı yorumlarıyla oluşur. Buradaki bilgiler yatırım tavsiyesi, kredi tavsiyesi veya kesin finansal yönlendirme niteliği taşımaz. Faiz, ücret ve kampanya bilgileri değişebilir; resmî işlem yapmadan önce ilgili bankanın kendi kanallarından teyit alınmalıdır.
      </p>
      <h2>Hesap işlemleri</h2>
      <p>
        Kullanıcı hesabı kötüye kullanım, sahte yorum, spam veya hukuka aykırı içerik nedeniyle kısıtlanabilir. Kullanıcı, hesabındaki işlemlerden sorumludur.
      </p>
    </LegalPageLayout>
  );
}
