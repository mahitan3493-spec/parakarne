// Bankalar koleksiyonunu tanıtım verileriyle doldurur.
// Kullanım: node scripts/seed-banks.mjs
// Not: Firestore kurallarında "banks" koleksiyonu için writes'ın geçici olarak
// açık olması gerekir (README.md içindeki "Bankaları seed etme" adımına bakın).
// Eski demo bankaları (kuzey, anadolu, liman, degirmen, vira, besevler) silinir
// ve yerine tam 32 bankalık gerçek isim listesi yazılır.

import { initializeApp } from "firebase/app";
import { deleteDoc, doc, getFirestore, setDoc } from "firebase/firestore";
import { config } from "dotenv";

config({ path: ".env.local" });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const missingEnv = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (missingEnv.length) {
  console.error("Firebase env eksik:", missingEnv.join(", "));
  console.error("Önce .env.local dosyasını .env.example içeriğine göre doldurun.");
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const oldDemoIds = ["kuzey", "anadolu", "liman", "degirmen", "vira", "besevler"];

const colors = [
  "#33477A",
  "#2F6F4E",
  "#B8862B",
  "#C41F35",
  "#5A4A8C",
  "#2F7A7A",
  "#8C5A2F",
  "#4A6741",
  "#7A3B69",
  "#3B6B8C",
  "#6B4A3B",
  "#5C7A2F",
];

const banks = [
  { id: "garanti-bbva", name: "Garanti BBVA", grade: "—", rate: 47.2, app: 9.5, rating: 0, reviewCount: 0,
    quote: "\"BonusFlaş kampanyaları ve hızlı EFT'lerle bankacılığı oyunlaştırıyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Mobil uygulama ve kredi kartı avantajlarında sınıfın açık ara lideri." },
  { id: "akbank", name: "Akbank", grade: "—", rate: 47.0, app: 9.4, rating: 0, reviewCount: 0,
    quote: "\"Akbank Mobil ile şube ihtiyacı neredeyse kalmadı.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Dijital ve şube deneyimini dengeli götüren birkaç bankadan biri." },
  { id: "yapikredi", name: "Yapı Kredi", grade: "—", rate: 46.4, app: 9.1, rating: 0, reviewCount: 0,
    quote: "\"World kart avantajları hâlâ pazarın en güçlülerinden.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Kredi kartı ekosistemiyle öne çıkıyor, şube kuyrukları zaman zaman uzuyor." },
  { id: "isbankasi", name: "İş Bankası", grade: "—", rate: 46.0, app: 8.9, rating: 0, reviewCount: 0,
    quote: "\"En eski banka ama uygulaması son yıllarda gerçekten toparladı.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Şube ağı ve kurumsal güven en güçlü yanı, mobil tarafta rakiplerini yakalıyor." },
  { id: "ziraatbankasi", name: "Ziraat Bankası", grade: "—", rate: 45.5, app: 8.5, rating: 0, reviewCount: 0,
    quote: "\"Türkiye'nin her köşesinde şubesi var, bu hâlâ büyük bir avantaj.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Devasa şube ağıyla kırsalda bile erişim sağlıyor, mobil deneyim gelişiyor." },
  { id: "halkbank", name: "Halkbank", grade: "—", rate: 44.8, app: 7.9, rating: 0, reviewCount: 0,
    quote: "\"KOBİ kredilerinde hâlâ ilk akla gelen banka.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Esnaf ve KOBİ kredilerinde güçlü, dijital deneyimde gelişim payı var." },
  { id: "vakifbank", name: "VakıfBank", grade: "—", rate: 44.9, app: 8.0, rating: 0, reviewCount: 0,
    quote: "\"Konut kredisi kampanyaları düzenli takip etmeye değer.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Konut kredisi kampanyalarıyla öne çıkıyor, çağrı merkezi yoğun saatlerde yavaş." },
  { id: "qnb-finansbank", name: "QNB Finansbank", grade: "—", rate: 45.6, app: 8.7, rating: 0, reviewCount: 0,
    quote: "\"CepteTeklif ile anlık kampanya takibi gerçekten işe yarıyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Kişiselleştirilmiş kampanyalarıyla dijital tarafta iddialı bir banka." },
  { id: "denizbank", name: "DenizBank", grade: "—", rate: 45.2, app: 8.6, rating: 0, reviewCount: 0,
    quote: "\"DenizBank Mobil'in arayüzü sade ve hızlı.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Orta ölçekli bankalar arasında dijital deneyimde öne çıkıyor." },
  { id: "teb", name: "TEB", grade: "—", rate: 44.3, app: 8.1, rating: 0, reviewCount: 0,
    quote: "\"BNP Paribas ortaklığı kurumsal bankacılıkta güven veriyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Kurumsal ve KOBİ bankacılığında güçlü, bireysel şube sayısı sınırlı." },
  { id: "ing-bank", name: "ING Bank", grade: "—", rate: 45.3, app: 8.8, rating: 0, reviewCount: 0,
    quote: "\"Şubesiz model ama Türkiye'de en eski dijital oyunculardan biri.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Az şubeyle güçlü dijital deneyim sunuyor, yoğun şehirlerde erişim sınırlı." },
  { id: "sekerbank", name: "Şekerbank", grade: "—", rate: 43.6, app: 7.3, rating: 0, reviewCount: 0,
    quote: "\"Tarım kredilerinde bölgesinde hâlâ tercih ediliyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Bölgesel ve tarım odaklı kredilerde niş bir oyuncu, dijital tarafta geride." },
  { id: "kuveyt-turk", name: "Kuveyt Türk", grade: "—", rate: 45.4, app: 8.7, rating: 0, reviewCount: 0,
    quote: "\"Katılım bankacılığında uygulama kalitesiyle de öne çıkıyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "En büyük katılım bankası unvanını dijital deneyimle de destekliyor." },
  { id: "albaraka-turk", name: "Albaraka Türk", grade: "—", rate: 44.5, app: 7.8, rating: 0, reviewCount: 0,
    quote: "\"Kâr payı oranları düzenli karşılaştırmaya değer.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Katılım bankacılığında istikrarlı ama dijital tarafta gelişim payı var." },
  { id: "turkiye-finans", name: "Türkiye Finans", grade: "—", rate: 44.6, app: 7.9, rating: 0, reviewCount: 0,
    quote: "\"N Kolay ile dijital tarafını büyütmeye çalışıyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Geleneksel şube ağını N Kolay'ın dijital deneyimiyle tamamlıyor." },
  { id: "ziraat-katilim", name: "Ziraat Katılım", grade: "—", rate: 44.7, app: 7.7, rating: 0, reviewCount: 0,
    quote: "\"Devlet güvencesi katılım bankacılığında tercih sebebi oluyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Ziraat'in şube ağından güç alıyor, uygulama arayüzü sadeleştirilebilir." },
  { id: "vakif-katilim", name: "Vakıf Katılım", grade: "—", rate: 44.0, app: 7.4, rating: 0, reviewCount: 0,
    quote: "\"Konut finansmanında kâr payı oranları takip edilmeye değer.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Konut finansmanı odaklı kampanyalarıyla dikkat çekiyor." },
  { id: "emlak-katilim", name: "Emlak Katılım", grade: "—", rate: 43.8, app: 7.2, rating: 0, reviewCount: 0,
    quote: "\"Genç bir banka ama gayrimenkul finansmanında hızlı büyüyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Katılım bankacılığının en yeni oyuncularından, şube ağı hâlâ küçük." },
  { id: "enpara", name: "Enpara", grade: "—", rate: 46.5, app: 9.3, rating: 0, reviewCount: 0,
    quote: "\"Şubesi yok ama QNB Finansbank güvencesiyle işlem yapıyorsun.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: false, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Şubesiz bankacılıkta faiz oranı ve uygulama kalitesini birlikte sunan nadir örnek." },
  { id: "on-dijital", name: "ON Dijital", grade: "—", rate: 44.9, app: 8.3, rating: 0, reviewCount: 0,
    quote: "\"TEB'in dijital markası, genç kullanıcıları hedefliyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: false, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Dijital-öncelikli deneyimiyle genç kullanıcı kitlesine hitap ediyor." },
  { id: "n-kolay", name: "N Kolay", grade: "—", rate: 44.2, app: 8.0, rating: 0, reviewCount: 0,
    quote: "\"Türkiye Finans'ın dijital yüzü, açılış süreci gerçekten hızlı.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: false, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Katılım bankacılığını dijital-öncelikli bir deneyimle sunuyor." },
  { id: "odeabank", name: "Odeabank", grade: "—", rate: 43.9, app: 7.5, rating: 0, reviewCount: 0,
    quote: "\"Mevduat kampanyalarını düzenli takip edenler kazançlı çıkıyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Zaman zaman öne çıkan mevduat kampanyalarıyla dikkat çekiyor." },
  { id: "alternatif-bank", name: "Alternatif Bank", grade: "—", rate: 42.8, app: 6.9, rating: 0, reviewCount: 0,
    quote: "\"Küçük ama kurumsal bankacılıkta niş bir oyuncu.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Kurumsal bankacılığa odaklı, bireysel şube deneyimi sınırlı." },
  { id: "anadolubank", name: "Anadolubank", grade: "—", rate: 42.5, app: 6.8, rating: 0, reviewCount: 0,
    quote: "\"Bölgesel sanayi bölgelerinde ismi geçen bir banka.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Sanayi bölgelerinde kurumsal ilişkileriyle biliniyor, dijital tarafı sade." },
  { id: "fibabanka", name: "Fibabanka", grade: "—", rate: 43.7, app: 7.6, rating: 0, reviewCount: 0,
    quote: "\"Fibabanka Cep'in arayüzü küçük bankaya göre oldukça iyi.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Küçük ölçeğine rağmen mobil deneyimde şaşırtıcı derecede iyi." },
  { id: "burgan-bank", name: "Burgan Bank", grade: "—", rate: 42.6, app: 6.9, rating: 0, reviewCount: 0,
    quote: "\"Kuveyt sermayeli, kurumsal bankacılıkta temkinli büyüyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Temkinli büyüme stratejisiyle küçük ama istikrarlı bir portföy sunuyor." },
  { id: "icbc-turkey", name: "ICBC Turkey", grade: "—", rate: 42.3, app: 6.7, rating: 0, reviewCount: 0,
    quote: "\"Çin sermayeli, daha çok kurumsal ve proje finansmanına odaklı.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Bireysel bankacılıktan çok proje finansmanında tercih ediliyor." },
  { id: "hsbc-turkiye", name: "HSBC Türkiye", grade: "—", rate: 43.5, app: 7.6, rating: 0, reviewCount: 0,
    quote: "\"Küçülen şube ağına rağmen kart avantajları hâlâ güçlü.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Şube ağını daraltsa da kredi kartı avantajlarını koruyor." },
  { id: "aktif-bank", name: "Aktif Bank", grade: "—", rate: 41.5, app: 6.5, rating: 0, reviewCount: 0,
    quote: "\"Cepte Kolay uygulaması ile şubesiz açılışta öncülerden.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: false, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Yatırım bankacılığı kökenli, şubesiz bireysel bankacılıkta erken hareket etti." },
  { id: "tom-bank", name: "TOM Bank", grade: "—", rate: 41.2, app: 6.8, rating: 0, reviewCount: 0,
    quote: "\"Yeni nesil dijital banka, arayüzü genç kullanıcıya hitap ediyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: false, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Yeni kurulan dijital bankalar arasında hızlı büyüyen bir isim." },
  { id: "colendi-bank", name: "Colendi Bank", grade: "—", rate: 41.0, app: 6.9, rating: 0, reviewCount: 0,
    quote: "\"Fintech kökeninden geliyor, kredi skorlama tarafı ilgi çekici.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: false, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Fintech geçmişinden gelen alternatif kredi değerlendirme modeliyle dikkat çekiyor." },
  { id: "hayat-finans", name: "Hayat Finans", grade: "—", rate: 40.8, app: 6.4, rating: 0, reviewCount: 0,
    quote: "\"En yeni katılım bankalarından, ürün yelpazesi hâlâ genişliyor.\"",
    sub: { branch: null, service: null, app: null, atm: null, security: null }, hasBranch: true, creditApprovalRate: 0, creditApprovalCount: 0,
    summary: "Katılım bankacılığının en genç oyuncusu, ürün çeşitliliği hâlâ sınırlı." },
];

async function main() {
  for (const oldId of oldDemoIds) {
    await deleteDoc(doc(db, "banks", oldId));
    console.log(`✗ eski demo banka silindi: ${oldId}`);
  }

  for (let i = 0; i < banks.length; i++) {
    const { id, ...data } = banks[i];
    await setDoc(doc(db, "banks", id), {
      ...data,
      color: colors[i % colors.length],
      order: i,
    });
    console.log(`✓ ${data.name} yazıldı`);
  }
  console.log("Bitti. Toplam", banks.length, "banka yazıldı.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed başarısız:", err.message);
  process.exit(1);
});
