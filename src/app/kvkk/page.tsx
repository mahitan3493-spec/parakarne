import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: { absolute: "KVKK Aydınlatma Metni - ParaKarne" },
  description: "ParaKarne KVKK aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
  openGraph: {
    url: "/kvkk",
    title: "KVKK Aydınlatma Metni - ParaKarne",
    description: "ParaKarne KVKK aydınlatma metni.",
  },
};

export default function KvkkPage() {
  return (
    <LegalPageLayout title="KVKK Aydınlatma Metni">
      <p>
        Bu metin, ParaKarne üzerinden işlenebilecek kişisel veriler hakkında genel aydınlatma amacı taşır. Canlı yayına çıkmadan önce şirket/unvan, adres, e-posta ve veri sorumlusu bilgileri gerçek bilgilerle güncellenmelidir.
      </p>
      <h2>İşlenen veri kategorileri</h2>
      <ul>
        <li>Kimlik/iletişim: görünen ad ve e-posta adresi.</li>
        <li>Kullanıcı işlemi: yorum, yıldız puanı, bildirim ve moderasyon kayıtları.</li>
        <li>Teknik veri: oturum, cihaz ve güvenlik logları.</li>
      </ul>
      <h2>İşleme amaçları</h2>
      <p>
        Üyeliğin kurulması, yorumların yayınlanması, güvenlik ve kötüye kullanımın önlenmesi, hukuki taleplerin karşılanması, hizmet kalitesinin ölçülmesi ve kullanıcı destek süreçlerinin yürütülmesi.
      </p>
      <h2>Haklarınız</h2>
      <p>
        Kişisel verileriniz hakkında bilgi alma, düzeltme, silme, işlemeye itiraz etme ve mevzuatta tanınan diğer haklarınız için iletişim sayfasından talep iletebilirsiniz.
      </p>
      <h2>Önemli not</h2>
      <p>
        ParaKarne bir banka, aracı kurum veya finans kuruluşu değildir. Kullanıcı yorumları kişisel deneyimdir; finansal tavsiye olarak kabul edilmemelidir.
      </p>
    </LegalPageLayout>
  );
}
