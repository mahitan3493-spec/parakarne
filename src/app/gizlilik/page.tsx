import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: { absolute: "Gizlilik Politikası - ParaKarne" },
  description: "ParaKarne gizlilik politikası ve veri işleme bilgilendirmesi.",
  alternates: { canonical: "/gizlilik" },
  openGraph: {
    url: "/gizlilik",
    title: "Gizlilik Politikası - ParaKarne",
    description: "ParaKarne gizlilik politikası ve veri işleme bilgilendirmesi.",
  },
};

export default function PrivacyPage() {
  return (
    <LegalPageLayout title="Gizlilik Politikası">
      <p>
        ParaKarne, bankalar hakkında kullanıcı deneyimlerinin paylaşılabildiği bağımsız bir değerlendirme platformudur. Bu sayfa, platformu kullanırken hangi bilgilerin işlenebileceğini sade şekilde açıklar.
      </p>
      <h2>Toplanan bilgiler</h2>
      <ul>
        <li>Üyelik için e-posta, görünen ad ve Firebase kimlik bilgisi.</li>
        <li>Kullanıcının yazdığı banka yorumu, verdiği yıldız puanı, kategori puanları ve bildirim kayıtları.</li>
        <li>Kredi başvurusu, kredi kartı başvurusu, çalışma/gelir durumu ve isteğe bağlı Findeks skor aralığı gibi kullanıcı tarafından paylaşılan deneyim bilgileri.</li>
        <li>Güvenlik, hata ayıklama ve temel performans için teknik kayıtlar.</li>
      </ul>
      <h2>Kullanım amacı</h2>
      <p>
        Bilgiler üyelik işlemlerini yürütmek, yorumları göstermek, banka puanlarını ve kredi/kredi kartı onay oranlarını hesaplamak, sahte/zararlı içerikleri azaltmak, kullanıcıların kendi yorumlarını yönetmesini sağlamak ve platform güvenliğini korumak amacıyla kullanılır.
      </p>
      <h2>Üçüncü taraf servisler</h2>
      <p>
        Kimlik doğrulama ve veritabanı için Firebase kullanılabilir. Yayınlama altyapısı Netlify üzerinde çalışabilir. Bu servislerin kendi gizlilik ve güvenlik koşulları ayrıca geçerlidir.
      </p>
      <h2>İletişim</h2>
      <p>
        Gizlilik talepleri ve veri silme istekleri için iletişim sayfasındaki kanallardan başvuru yapılabilir.
      </p>
    </LegalPageLayout>
  );
}
