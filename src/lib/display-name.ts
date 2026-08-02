export function publicDisplayName(value: string | null | undefined): string {
  const clean = (value || "").trim().replace(/\s+/g, " ");
  if (!clean || clean.includes("@")) return "ParaKarne Kullanıcısı";
  const parts = clean.split(" ").filter(Boolean);
  const first = parts[0].slice(0, 24);
  if (parts.length === 1) return first;
  const lastInitial = parts[parts.length - 1].charAt(0).toLocaleUpperCase("tr-TR");
  return `${first} ${lastInitial}.`;
}
