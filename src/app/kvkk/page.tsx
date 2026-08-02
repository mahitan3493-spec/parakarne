import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: { absolute: "KVKK Aydınlatma Metni - ParaKarne" },
  description: "ParaKarne üzerinde işlenen kişisel veriler, kullanıcı yorumları, puanlama ve veri talepleri hakkında KVKK aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
  openGraph: {
    url: "/kvkk",
    title: "KVKK Aydınlatma Metni - ParaKarne",
    description: "ParaKarne üzerinde işlenen kişisel veriler, kullanıcı yorumları, puanlama ve veri talepleri hakkında KVKK aydınlatma metni.",
  },
};

export default function KvkkPage() {
  return (
    <LegalPageLayout title="KVKK Aydınlatma Metni">
      <p>
        Bu metin, ParaKarne üzerinden işlenen kişisel veriler hakkında kullanıcıları bilgilendirmek amacıyla hazırlanmıştır. ParaKarne’de üyelik, yorum, puanlama, bildirim, güvenlik ve destek süreçleri kapsamında sınırlı kişisel veriler işlenebilir.
      </p>

      <h2>İşlenen veri kategorileri</h2>
      <ul>
        <li>Kimlik/iletişim: görünen ad, e-posta adresi ve Firebase kullanıcı kimliği.</li>
        <li>Kullanıcı işlemi: banka tercihi, yorum metni, yıldız puanı, kategori puanları, bildirim ve moderasyon kayıtları.</li>
        <li>Başvuru deneyimi verisi: kredi başvuru sonucu, kredi kartı başvuru sonucu, çalışma/gelir durumu ve isteğe bağlı Findeks skor aralığı.</li>
        <li>Teknik veri: oturum bilgileri, cihaz/tarayıcı bilgileri, güvenlik ve hata kayıtları.</li>
      </ul>

      <h2>İşleme amaçları</h2>
      <p>
        Veriler; üyelik işlemlerini yürütmek, kullanıcı yorumlarını yayınlamak, banka puanlarını ve onay oranlarını hesaplamak, kötüye kullanımı önlemek, içerik bildirimlerini değerlendirmek, hizmet kalitesini ölçmek, kullanıcı destek taleplerini karşılamak ve hukuki yükümlülükleri yerine getirmek amacıyla işlenir.
      </p>

      <h2>Kredi, kredi kartı ve Findeks bilgisi hakkında</h2>
      <p>
        ParaKarne, kullanıcıların banka deneyimlerini daha anlamlı karşılaştırabilmek için kredi başvurusu, kredi kartı başvurusu, çalışma/gelir durumu ve isteğe bağlı Findeks skor aralığı gibi bilgileri yorum formunda sorabilir. Findeks bilgisi açık skor olarak değil, kullanıcı tarafından seçilen aralık şeklinde alınır ve platform içindeki istatistiklerin hesaplanmasında kullanılabilir.
      </p>

      <h2>Verilerin saklanması ve paylaşılması</h2>
      <p>
        Kullanıcı yorumları ve puanları platformda yayınlanabilir. E-posta adresi gibi üyelik bilgileri herkese açık şekilde gösterilmez. Veriler, hizmetin çalışması için Firebase ve Netlify gibi teknik altyapı sağlayıcıları üzerinde işlenebilir. ParaKarne, kullanıcı verilerini reklam amacıyla üçüncü taraflara satmaz.
      </p>

      <h2>Haklarınız</h2>
      <p>
        Kişisel verileriniz hakkında bilgi alma, düzeltme, silme, işlemeye itiraz etme ve mevzuatta tanınan diğer haklarınız için iletişim sayfasındaki destek adresinden talep iletebilirsiniz.
      </p>

      <h2>Önemli not</h2>
      <p>
        ParaKarne bir banka, aracı kurum veya finans kuruluşu değildir. Kullanıcı yorumları kişisel deneyimdir; finansal tavsiye olarak kabul edilmemelidir.
      </p>
    </LegalPageLayout>
  );
}
