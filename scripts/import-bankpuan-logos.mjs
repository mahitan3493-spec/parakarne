#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, resolve } from "node:path";

const SOURCE_TO_TARGET = {
  "akbank.svg": "akbank.svg",
  "aktifbank.svg": "aktif-bank.svg",
  "albaraka.svg": "albaraka-turk.svg",
  "alternatifbank.svg": "alternatif-bank.svg",
  "anadolubank.svg": "anadolubank.svg",
  "burgan.svg": "burgan-bank.svg",
  "colendibank.svg": "colendi-bank.svg",
  "denizbank.svg": "denizbank.svg",
  "emlakkatilim.svg": "emlak-katilim.svg",
  "enpara.svg": "enpara.svg",
  "fibabanka.svg": "fibabanka.svg",
  "garanti.svg": "garanti-bbva.svg",
  "halkbank.svg": "halkbank.svg",
  "hayatfinans.svg": "hayat-finans.svg",
  "hsbc.svg": "hsbc-turkiye.svg",
  "icbc.svg": "icbc-turkey.svg",
  "ing.svg": "ing-bank.svg",
  "isbank.svg": "isbankasi.svg",
  "kuveytturk.svg": "kuveyt-turk.svg",
  "nkolay.svg": "n-kolay.svg",
  "odeabank.svg": "odeabank.svg",
  "on.svg": "on-dijital.svg",
  "qnb.svg": "qnb-finansbank.svg",
  "sekerbank.svg": "sekerbank.svg",
  "teb.svg": "teb.svg",
  "tombank.svg": "tom-bank.svg",
  "turkiyefinans.svg": "turkiye-finans.svg",
  "vakifbank.svg": "vakifbank.svg",
  "vakifkatilim.svg": "vakif-katilim.svg",
  "yapikredi.svg": "yapikredi.svg",
  "ziraat.svg": "ziraatbankasi.svg",
  "ziraatkatilim.svg": "ziraat-katilim.svg",
};

const zipPath = process.argv[2] ? resolve(process.argv[2]) : null;
const destination = process.argv[3]
  ? resolve(process.argv[3])
  : resolve(process.cwd(), "public", "bank-logos");

if (!zipPath || !existsSync(zipPath)) {
  console.error("HATA: bankpuan-logo-kompakt.zip yolu bulunamadı.");
  console.error("Kullanım: npm run logos:import -- /tam/yol/bankpuan-logo-kompakt.zip");
  process.exit(1);
}

let entries;
try {
  entries = execFileSync("unzip", ["-Z1", zipPath], { encoding: "utf8" })
    .split(/\r?\n/)
    .filter(Boolean);
} catch (error) {
  console.error("HATA: ZIP listelenemedi. 'unzip' komutunun kurulu olduğunu kontrol edin.");
  process.exit(1);
}

const byBasename = new Map();
for (const entry of entries) {
  const name = basename(entry).toLocaleLowerCase("tr-TR");
  if (name.endsWith(".svg")) byBasename.set(name, entry);
}

const missing = Object.keys(SOURCE_TO_TARGET).filter((source) => !byBasename.has(source));
if (missing.length) {
  console.error(`HATA: Logo arşivinde ${missing.length} SVG eksik:`);
  console.error(missing.join(", "));
  process.exit(1);
}

mkdirSync(destination, { recursive: true });
let imported = 0;
for (const [source, target] of Object.entries(SOURCE_TO_TARGET)) {
  const entry = byBasename.get(source);
  const svg = execFileSync("unzip", ["-p", zipPath, entry], { encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });
  if (!/<svg[\s>]/i.test(svg)) {
    console.error(`HATA: ${source} geçerli bir SVG değil.`);
    process.exit(1);
  }
  writeFileSync(resolve(destination, target), svg.trimStart(), "utf8");
  imported += 1;
}

writeFileSync(
  resolve(destination, "LOGO-KAYNAK.txt"),
  [
    "ParaKarne banka logoları",
    `Kaynak arşiv: ${basename(zipPath)}`,
    `Aktarılan SVG: ${imported}`,
    "Logolar yalnızca bankaları tanımlamak amacıyla kullanılır; ticari markalar ilgili kurumlara aittir.",
    "",
  ].join("\n"),
  "utf8",
);

console.log(`TAMAM: ${imported} gerçek banka SVG logosu ${destination} klasörüne aktarıldı.`);
