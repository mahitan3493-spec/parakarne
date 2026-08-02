import type { FinanceTab } from "./finance-calculations";

export type FinancialOffer = {
  id: string;
  bankId: string;
  bankName: string;
  tab: FinanceTab;
  productName: string;
  rate: number;
  rateLabel: "Başlangıç" | "Varan" | "Yayınlanan";
  termText: string;
  conditions: string;
  checkedAt: string;
  sourceUrl: string;
  minPrincipal?: number;
  maxPrincipal?: number;
  minMonths?: number;
  maxMonths?: number;
  interestBearingRatio?: number;
};

// Yalnızca bankaların resmî ürün sayfalarında doğrulanan ve kontrol tarihi
// bulunan örnek teklifler gösterilir. Oranlar garanti değildir; kredi skoru,
// müşteri tipi, tutar, vade, sigorta ve kampanya koşullarına göre değişebilir.
export const financialOffers: FinancialOffer[] = [
  {
    id: "ing-personal-169",
    bankId: "ing-bank",
    bankName: "ING",
    tab: "personal",
    productName: "Yeni ING'lilere Özel İhtiyaç Kredisi",
    rate: 1.69,
    rateLabel: "Başlangıç",
    termText: "25.000 TL'ye kadar · 6 ay",
    conditions: "İlk kez ING'li olanlara özel sigortalı başlangıç oranıdır; kampanya 31 Ağustos 2026'ya kadar geçerlidir ve onaya tabidir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.ing.com.tr/tr/sizin-icin/krediler/kredi-yeni-musteri",
    minPrincipal: 1_000,
    maxPrincipal: 25_000,
    minMonths: 1,
    maxMonths: 6,
  },
  {
    id: "alternatif-personal-329",
    bankId: "alternatif-bank",
    bankName: "Alternatif Bank",
    tab: "personal",
    productName: "İşsizlik Sigortalı İhtiyaç Kredisi",
    rate: 3.29,
    rateLabel: "Başlangıç",
    termText: "125.000 TL'ye kadar · 36 ay",
    conditions: "Başlangıç oranı KKB puanı ve banka değerlendirmesine bağlıdır; işsizlik sigortalı kredi koşulları geçerlidir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.alternatifbank.com.tr/bireysel/krediler/yeni-dijital-kredi",
    minPrincipal: 1_000,
    maxPrincipal: 125_000,
    minMonths: 1,
    maxMonths: 36,
  },
  {
    id: "garanti-personal-410",
    bankId: "garanti-bbva",
    bankName: "Garanti BBVA",
    tab: "personal",
    productName: "Bireysel İhtiyaç Kredisi",
    rate: 4.10,
    rateLabel: "Yayınlanan",
    termText: "100.000 TL · 36 ay örnek oran",
    conditions: "Resmî örnek maliyet tablosundaki orandır; gerçek teklif müşteri, tutar, vade ve sigortaya göre değişebilir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.garantibbva.com.tr/krediler/bireysel-ihtiyac-kredisi",
    minPrincipal: 1_000,
    maxPrincipal: 250_000,
    minMonths: 1,
    maxMonths: 36,
  },
  {
    id: "isbank-housing-310",
    bankId: "isbankasi",
    bankName: "İş Bankası",
    tab: "housing",
    productName: "Ev Kredisi",
    rate: 3.10,
    rateLabel: "Yayınlanan",
    termText: "1–120 ay vade",
    conditions: "Tahsis ücretli ürün oranıdır; ekspertiz, ipotek, DASK, konut ve hayat sigortası masrafları ayrıca doğabilir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.isbank.com.tr/urun-ve-hizmet-ucretleri",
    minPrincipal: 5_001,
    minMonths: 1,
    maxMonths: 120,
  },
  {
    id: "isbank-vehicle-359",
    bankId: "isbankasi",
    bankName: "İş Bankası",
    tab: "vehicle",
    productName: "Hayat Sigortalı Taşıt Kredisi",
    rate: 3.59,
    rateLabel: "Yayınlanan",
    termText: "36–48 ay vade",
    conditions: "Bu oran 36–48 ay vadeli hayat sigortalı kampanya için yayınlanmıştır; araç değeri, rehin ve banka onayı koşulları geçerlidir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.isbank.com.tr/tasit-kredisi",
    minPrincipal: 1_000,
    minMonths: 36,
    maxMonths: 48,
  },
  {
    id: "vakif-vehicle-384",
    bankId: "vakifbank",
    bankName: "VakıfBank",
    tab: "vehicle",
    productName: "0 KM Taşıt Kredisi",
    rate: 3.84,
    rateLabel: "Yayınlanan",
    termText: "100.000 TL · 48 ay örnek oran",
    conditions: "Resmî örnek maliyet tablosundaki aylık orandır; müşteri, araç, vade, kasko ve sigorta koşullarına göre farklılaşabilir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.vakifbank.com.tr/tr/bireysel/krediler/tasit-kredileri/0-km-tasit-kredisi",
    minPrincipal: 1_000,
    minMonths: 48,
    maxMonths: 48,
  },
  {
    id: "alternatif-vov-46",
    bankId: "alternatif-bank",
    bankName: "Alternatif Bank",
    tab: "deposit",
    productName: "VOV Hesap",
    rate: 46,
    rateLabel: "Varan",
    termText: "Günlük kazanç · 10 milyon TL'ye kadar",
    conditions: "Hoş geldin ve ürün kullanım koşulları geçerlidir; faiz işletilmeyen alt bakiye nedeniyle gerçek net kazanç değişebilir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.alternatifbank.com.tr/bireysel/mevduat/vadeli-mevduat/vov-hesap",
    minPrincipal: 1_000,
    maxPrincipal: 10_000_000,
  },
  {
    id: "ing-turuncu-45",
    bankId: "ing-bank",
    bankName: "ING",
    tab: "deposit",
    productName: "Turuncu Hesap",
    rate: 45,
    rateLabel: "Varan",
    termText: "90 günlük hoş geldin dönemi",
    conditions: "Mobil üzerinden yeni müşteri olanlara özel brüt orandır; oran değişebilir ve faiz işletilmeyen tutar uygulanabilir.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.ing.com.tr/tr/sizin-icin/mevduat/ing-turuncu-hesap",
    minPrincipal: 1_000,
  },
  {
    id: "akbank-serbest-plus-41",
    bankId: "akbank",
    bankName: "Akbank",
    tab: "deposit",
    productName: "Serbest Plus Hesap",
    rate: 41,
    rateLabel: "Yayınlanan",
    termText: "10.000 TL–25 milyon TL",
    conditions: "Toplam bakiyenin %10'u vadesiz hesapta tutulur ve faiz işletilmez; hesaplama faizlenen %90 bakiye üzerinden yapılır.",
    checkedAt: "2026-08-02",
    sourceUrl: "https://www.akbank.com/mevduat-yatirim/mevduat/vadeli-mevduat-hesaplari/serbest-plus-hesap",
    minPrincipal: 10_000,
    maxPrincipal: 25_000_000,
    interestBearingRatio: 0.9,
  },
];
