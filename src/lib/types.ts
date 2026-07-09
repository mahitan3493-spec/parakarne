// Kategori bazlı puanlama: her değer 1-5 arası ağırlıklı ortalama.
// branch (Şube Hizmetleri) fiziksel şubesi olmayan bankalarda null'dur —
// bu kategori o banka için hiç gösterilmez ve genel puana katılmaz.
export type SubGrades = {
  branch: number | null;
  service: number;
  app: number;
  atm: number | null;
  security: number;
};

export type CategoryKey = keyof SubGrades;

export const CATEGORY_META: { key: CategoryKey; label: string; hint: string }[] = [
  { key: "branch", label: "Şube Hizmetleri", hint: "Bekleme süresi, ilgi" },
  { key: "service", label: "Müşteri Hizmetleri", hint: "Çağrı merkezi, çözüm hızı" },
  { key: "app", label: "Mobil Uygulama", hint: "Hız, arayüz, stabilite" },
  { key: "atm", label: "ATM Hizmetleri", hint: "Erişim, arıza sıklığı" },
  { key: "security", label: "Güvenlik", hint: "Dolandırıcılık koruması, güven" },
];

// Kredi / kredi kartı başvurusunun sonucu. Yıldızla değil onay/red ile
// ölçülür çünkü bu sübjektif bir memnuniyet değil, somut bir sonuçtur.
export type CreditOutcome = "approved" | "conditional" | "rejected";

export type Bank = {
  id: string;
  name: string;
  grade: string;
  rate: number;
  app: number;
  rating: number;
  reviewCount: number;
  quote: string;
  summary: string;
  sub: SubGrades;
  hasBranch: boolean;
  color: string;
  order: number;
  // Kredi/kredi kartı başvurularında onay oranı (0-100) ve bu oranın
  // kaç başvuru üzerinden hesaplandığı. Herkes bu soruyu yanıtlamadığı
  // için reviewCount'tan bağımsız, ayrı bir sayaçla tutulur.
  creditApprovalRate: number;
  creditApprovalCount: number;
};

// Kullanıcının bir yoruma girerken verdiği kategori puanları.
// hasBranch=false olan bankalarda 'branch' ve 'atm' alanları gönderilmez.
export type CategoryRatings = Partial<Record<CategoryKey, number>>;

export type Review = {
  id: string;
  uid: string;
  userName: string;
  bankId: string;
  bankName: string;
  stars: number;
  categories: CategoryRatings;
  // Opsiyonel: kullanıcı kredi/kredi kartı başvurusu yaptıysa sonucu.
  // Başvurmadıysa hiç gönderilmez.
  creditOutcome?: CreditOutcome;
  text: string;
  note: string;
  reportCount: number;
  reportedBy: string[];
  status?: "published" | "hidden";
  createdAtMs: number | null;
};
