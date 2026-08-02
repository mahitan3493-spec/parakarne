export function publicDisplayName(value: string): string {
  const clean = value.trim().replace(/\s+/g, " ");
  if (!clean) return "ParaKarne Kullanıcısı";
  const parts = clean.split(" ");
  if (parts.length === 1) return parts[0].slice(0, 24);
  const first = parts[0].slice(0, 20);
  const lastInitial = parts[parts.length - 1]?.charAt(0).toLocaleUpperCase("tr-TR");
  return lastInitial ? `${first} ${lastInitial}.` : first;
}
