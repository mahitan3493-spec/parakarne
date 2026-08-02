import Link from "next/link";

const tools = [
  { icon: "₺", title: "İhtiyaç kredisi", text: "Taksit, faiz ve vergiler" },
  { icon: "⌂", title: "Konut kredisi", text: "Kredi oranı ve peşinat" },
  { icon: "◈", title: "Taşıt kredisi", text: "Araç değerine göre limit" },
  { icon: "%", title: "Mevduat", text: "Stopaj sonrası net kazanç" },
];

export default function FinanceHomeTeaser() {
  return (
    <section className="finance-home-teaser">
      <div className="wrap">
        <div className="finance-home-shell">
          <div className="finance-home-copy">
            <span className="eyebrow">YENİ · FİNANS HESAPLAMA</span>
            <h2>Kredi maliyetini ve mevduat getirisini tek yerde hesapla.</h2>
            <p>Faiz oranını gir; taksitleri, toplam geri ödemeyi, vergileri ve net mevduat kazancını anında gör.</p>
            <Link className="btn primary" href="/kredi-hesaplama/">Finans Merkezini Aç</Link>
          </div>
          <div className="finance-home-tools">
            {tools.map((tool) => (
              <Link key={tool.title} href="/kredi-hesaplama/" className="finance-home-tool">
                <span>{tool.icon}</span><div><strong>{tool.title}</strong><small>{tool.text}</small></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
