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
  <p>Türkiye'de insanların bankacılık süreçlerinde en çok zorlandığı konuları sadeleştirmek için ParaKarne'yi oluşturduk. Bankacılıkta birçok kişi aynı sorunları yaşıyor: kredi başvurusu reddediliyor ama sebebi bilinmiyor; borç kapatılıyor ama Findeks raporunda hâlâ açık takip görünüyor; hesapta bloke var ama hangi kurumun koyduğu öğrenilemiyor; icra tebligatı geliyor ama itiraz süresi kaçırılıyor; aileye 89 haciz ihbarnamesi geliyor ama ne anlama geldiği bilinmiyor. Hedefimiz, bankacılık ve icra süreçlerinde insanların çaresiz kalmasını önlemektir — amacımız korkutmak değil, sakinleştirmek ve doğru yola yönlendirmektir. Çünkü çoğu bankacılık sorunu, doğru raporu kontrol ederek, doğru kuruma başvurarak ve doğru şekilde takip edilerek çözülebilir.</p>

  <h3>Ne Yapıyoruz?</h3>
  <p>ParaKarne'de kullanıcılar yaşadıkları sorunu yazarak konuya göre yönlendirme alır. Sistem, bankacılık süreçlerini karmaşık resmi dilden çıkarıp kişinin anlayabileceği adım adım bir yol haritasına dönüştürür. Örneğin kullanıcı şu sorulara cevap arayabilir:</p>
  <ul>
    <li>Kredi başvurum neden reddediliyor?</li>
    <li>Findeks raporumda açık takip görünüyor, ne yapmalıyım?</li>
    <li>Borcumu kapattım ama hesap blokem kalkmadı, nereye başvurmalıyım?</li>
    <li>89/1 haciz ihbarnamesi geldi, nasıl itiraz edilir?</li>
    <li>Yasal takipten sonra tekrar kredi kartı alabilir miyim?</li>
    <li>Kredi sigortası iadesi nasıl alınır?</li>
    <li>Varlık şirketi borcu kredi almama engel olur mu?</li>
  </ul>
  <p>Bu tür sorularda kullanıcıya hangi raporu kontrol etmesi gerektiğini, hangi kuruma başvuracağını, hangi belgeleri hazırlayacağını ve süreci nasıl takip edeceğini anlatıyoruz; gerektiğinde başvurularında kullanabileceği bir dilekçe taslağı da hazırlıyoruz.</p>

  <h3>Ne Yapmıyoruz?</h3>
  <p>ParaKarne; banka, kredi veren kurum, avukatlık bürosu veya resmi kamu kurumu değildir.</p>
  <ul>
    <li>Kredi çıkartma vaadi vermeyiz.</li>
    <li>Borç silme veya kesin sonuç garantisi vermeyiz.</li>
    <li>Kullanıcı adına banka işlemi yapmayız.</li>
    <li>Hukuki danışmanlık hizmeti vermeyiz.</li>
    <li>Resmi kurum gibi davranmayız.</li>
  </ul>
  <p>Yaptığımız şey; bankacılık sorunlarını anlaşılır hale getirmek ve kullanıcının hangi adımı atacağını, hangi raporu kontrol edeceğini ve süreci nasıl bilinçli şekilde takip edeceğini göstermektir.</p>

  <h3>Güvenliğiniz</h3>
  <p>ParaKarne hiçbir kullanıcıdan banka şifresi, kart numarası, CVV, SMS doğrulama kodu, mobil bankacılık şifresi veya özel hesap bilgisi istemez. Güvenliğiniz için bu bilgileri hiçbir kişi, kurum veya platformla paylaşmamanızı öneririz.</p>` }} />
    </LegalPageLayout>
  );
}
