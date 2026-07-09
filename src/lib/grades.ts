export const GRADE_ORDER: Record<string, number> = {
  "A+": 7,
  A: 6,
  "A-": 5,
  "B+": 4,
  B: 3,
  "B-": 2,
  "C+": 1,
  C: 0,
};

// Tek kaynak: hem genel banka notu hem de kategori notları (Şube, Mobil, vb.)
// bu eşikleri kullanır. 1-5 arası ortalama puanı harf notuna çevirir.
export function letterFromScore(score: number): string {
  if (score >= 4.75) return "A+";
  if (score >= 4.5) return "A";
  if (score >= 4.25) return "A-";
  if (score >= 4) return "B+";
  if (score >= 3.75) return "B";
  if (score >= 3.5) return "B-";
  if (score >= 3.25) return "C+";
  if (score >= 3) return "C";
  return "D";
}

export function gradeClassOf(letter: string | undefined | null): string {
  if (!letter || letter === "—") return "g-B";
  const l = letter[0];
  if (l === "A") return "g-A";
  if (l === "B") return "g-B";
  if (l === "C") return "g-C";
  return "g-D";
}

// Kredi/kredi kartı onay oranı (%0-100) için renk sınıfı — mevcut g-A/B/C/D
// paletini yeniden kullanır, böylece görsel dil tutarlı kalır.
export function approvalClass(rate: number): string {
  if (rate >= 70) return "g-A";
  if (rate >= 50) return "g-B";
  if (rate >= 30) return "g-C";
  return "g-D";
}

export function initialsOf(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function starString(rating: number): string {
  const rounded = Math.round(rating);
  return "★".repeat(rounded) + "☆".repeat(Math.max(0, 5 - rounded));
}
