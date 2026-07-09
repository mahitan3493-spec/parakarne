import Image from "next/image";
import { bankLogoPath } from "@/lib/bank-data";
import { initialsOf } from "@/lib/grades";
import type { Bank } from "@/lib/types";

export default function BankLogo({ bank, small = false }: { bank: Bank; small?: boolean }) {
  return (
    <div
      className={`bank-logo-wrap${small ? " small" : ""}`}
      style={{ borderColor: bank.color }}
      aria-hidden="true"
    >
      {/* Basit yerel SVG rozetler. Resmî logo dosyaları geldiğinde aynı klasöre aynı isimle değiştirilebilir. */}
      <Image src={bankLogoPath(bank.id)} alt="" fill sizes={small ? "34px" : "42px"} className="bank-logo-img" />
      <span className="bank-logo-fallback">{initialsOf(bank.name)}</span>
    </div>
  );
}
