import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "ParaKarne, bankaları kullanıcı yorumları, puanları ve kredi/kredi kartı onay deneyimleriyle karşılaştırmaya yardımcı olan bağımsız banka değerlendirme platformudur.",
  alternates: { canonical: "/hakkimizda" },
  openGraph: {
    url: "/hakkimizda",
    title: "Hakkımızda | ParaKarne",
    description: "ParaKarne, bankaları kullanıcı yorumları, puanları ve kredi/kredi kartı onay deneyimleriyle karşılaştırmaya yardımcı olan bağımsız banka değerlendirme platformudur.",
  },
};

export default function HakkimizdaPage() {
  return (
    <LegalPageLayout title="Hakkımızda">
      <div dangerouslySetInnerHTML={{ __html: `<p class="lead">ParaKarne, Türkiye’deki bankaları gerçek kullanıcı yorumları, puanları ve kredi/kredi kartı onay deneyimlerine göre karşılaştırmanızı sağlayan bağımsız bir banka değerlendirme platformudur. Kullanıcılar bankaların müşteri hizmetleri, ATM hizmetleri, güvenlik, mobil uygulama, şube hizmetleri ve kredi/kredi kartı onay oranlarını tek yerde inceleyebilir; kendi deneyimini paylaşarak banka karnesine katkıda bulunabilir.</p>

  <h3>Biz Kimiz?</h3>
  <p>Türkiye'de insanların bankacılık süreçlerinde yaşadığı deneyimleri daha görünür hale getirmek için ParaKarne'yi oluşturduk. Bir bankanın mobil uygulaması iyi mi, müşteri hizmetlerine ulaşmak kolay mı, ATM ve şube deneyimi nasıl, kredi veya kredi kartı başvurularında kullanıcılar nasıl sonuçlar alıyor? ParaKarne bu sorulara kullanıcı puanları, yorumlar ve karşılaştırma ekranlarıyla cevap verir.</p>

  <h3>Ne Yapıyoruz?</h3>
  <p>ParaKarne iki ana bölümden oluşur: rehber içerikler ve banka puanlama sistemi.</p>
  <ul>
    <li>Rehber içeriklerde kredi, kredi kartı, Findeks, hesap blokesi, yasal takip, icra, haciz ve mobil bankacılık sorunları hakkında genel bilgilendirme yazıları yayınlarız.</li>
    <li>Banka puanlama sisteminde kullanıcılar bankaları müşteri hizmetleri, ATM hizmetleri, güvenlik, mobil uygulama ve şube hizmetleri açısından puanlayabilir.</li>
    <li>Kredi ve kredi kartı başvuru sonuçları, çalışma/gelir durumu ve isteğe bağlı Findeks skor aralığı gibi verilerle bankaların kullanıcı deneyimine dayalı onay oranları hesaplanabilir.</li>
    <li>Karşılaştırma ekranı sayesinde kullanıcılar bankaları gerçek yorumlar, puanlar, kategori notları ve kredi/kredi kartı onay oranları üzerinden yan yana inceleyebilir.</li>
  </ul>

  <h3>ParaKarne Neden Var?</h3>
  <p>Bankalar hakkında internette çok sayıda şikayet ve yorum bulunuyor; ancak bu deneyimler çoğu zaman dağınık, karşılaştırması zor ve kategori bazında ölçülemiyor. ParaKarne, kullanıcıların bankacılık deneyimlerini daha düzenli bir karne mantığıyla toplar. Böylece bir bankayı seçmeden, başvuru yapmadan veya mevcut bankanızla ilgili karar vermeden önce diğer kullanıcıların deneyimlerini görebilirsiniz.</p>

  <h3>Ne Yapmıyoruz?</h3>
  <p>ParaKarne; banka, kredi veren kurum, avukatlık bürosu veya resmi kamu kurumu değildir.</p>
  <ul>
    <li>Kredi çıkartma vaadi vermeyiz.</li>
    <li>Borç silme veya kesin sonuç garantisi vermeyiz.</li>
    <li>Kullanıcı adına banka işlemi yapmayız.</li>
    <li>Hukuki danışmanlık hizmeti vermeyiz.</li>
    <li>Resmi kurum gibi davranmayız.</li>
  </ul>
  <p>Rehber yazılarımız genel bilgilendirme amacı taşır. Banka puanları ve yorumlar ise kullanıcıların kendi deneyimlerine dayanır.</p>

  <h3>Güvenliğiniz</h3>
  <p>ParaKarne hiçbir kullanıcıdan banka şifresi, kart numarası, CVV, SMS doğrulama kodu, mobil bankacılık şifresi veya özel hesap bilgisi istemez. Güvenliğiniz için bu bilgileri hiçbir kişi, kurum veya platformla paylaşmamanızı öneririz.</p>` }} />
    </LegalPageLayout>
  );
}
