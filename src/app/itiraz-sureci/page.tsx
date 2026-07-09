import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: { absolute: "ParaKarne Yorum ve Puan İtiraz Süreci" },
  description: "ParaKarne yorum bildirim ve itiraz süreci.",
  alternates: { canonical: "/itiraz-sureci" },
  openGraph: {
    url: "/itiraz-sureci",
    title: "ParaKarne Yorum ve Puan İtiraz Süreci",
    description: "ParaKarne yorum bildirim ve itiraz süreci.",
  },
};

export default function AppealPage() {
  return (
    <LegalPageLayout title="Yorum İtiraz Süreci">
      <p>
        Yanlış, hakaret içeren, kişisel veri barındıran veya sahte olduğunu düşündüğünüz yorumlar için itiraz/bildirim süreci kullanılabilir.
      </p>
      <h2>Kullanıcı bildirimi</h2>
      <p>
        Her yorumun altında yer alan “Bildir” butonu ile yorum işaretlenebilir. Üç veya daha fazla bildirim alan yorumlar otomatik olarak inceleme durumuna alınır.
      </p>
      <h2>Kurum/banka itirazı</h2>
      <p>
        Bir kurum, kendisiyle ilgili yorumun hukuka aykırı olduğunu düşünüyorsa iletişim sayfasından; yorum bağlantısı, gerekçe ve varsa belge ile başvuru yapabilir.
      </p>
      <h2>Değerlendirme</h2>
      <p>
        İncelemede; hakaret, kişisel veri, açık reklam, kanıtlanabilir yanlışlık ve platform kurallarına aykırılık kontrol edilir. Uygun görülürse yorum gizlenir, düzeltilmesi istenir veya yayında kalır.
      </p>
    </LegalPageLayout>
  );
}
