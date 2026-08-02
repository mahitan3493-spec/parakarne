import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "İletişim",
  description: "ParaKarne iletişim ve destek sayfası.",
  alternates: { canonical: "/iletisim" },
  openGraph: {
    url: "/iletisim",
    title: "İletişim | ParaKarne",
    description: "ParaKarne iletişim ve destek sayfası.",
  },
};

export default function ContactPage() {
  return (
    <LegalPageLayout title="İletişim">
      <p>
        Destek, içerik bildirimi, veri talebi ve kurum itirazları için aşağıdaki iletişim kanalını kullanabilirsiniz. Başvurularda ilgili banka/kurum adını, yorum bağlantısını ve talebinize ilişkin kısa açıklamayı eklemeniz sürecin daha hızlı değerlendirilmesine yardımcı olur.
      </p>
      <h2>Destek e-postası</h2>
      <p><a href="mailto:destek@parakarne.com">destek@parakarne.com</a></p>
      <h2>İtirazlarda gönderilecek bilgiler</h2>
      <ul>
        <li>İlgili banka/kurum adı</li>
        <li>Yorumun ekran görüntüsü veya bağlantısı</li>
        <li>İtiraz gerekçesi</li>
        <li>Geri dönüş için yetkili kişi ve kurumsal e-posta</li>
      </ul>
      <p>
        ParaKarne bir banka temsilcisi değildir; bireysel banka işlemleri için doğrudan ilgili bankanın müşteri hizmetlerine başvurulmalıdır.
      </p>
    </LegalPageLayout>
  );
}
