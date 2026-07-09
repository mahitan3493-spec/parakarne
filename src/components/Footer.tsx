import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <div className="logo" style={{ marginBottom: 12 }}>
            <div className="logo-mark" style={{ width: 30, height: 30, fontSize: 13 }}>
              A+
            </div>
            <div className="logo-text" style={{ fontSize: 16 }}>
              Para<span>Karne</span>
            </div>
          </div>
          <div className="mono">
            © 2026 ParaKarne.com — Bağımsız banka değerlendirme platformu
          </div>
        </div>
        <div className="footer-links">
          <Link href="/tum-konular">Tüm Konular</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/gizlilik">Gizlilik</Link>
          <Link href="/kvkk">KVKK</Link>
          <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
          <Link href="/itiraz-sureci">İtiraz Süreci</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
      </div>
      <div className="wrap footer-disclaimer">
        ParaKarne bir bankanın resmî temsilcisi değildir. Platformdaki bilgiler
        yatırım tavsiyesi, kredi tavsiyesi veya kesin finansal yönlendirme
        değildir; nihai karar öncesinde bankaların resmî kanallarını kontrol edin.
      </div>
    </footer>
  );
}
