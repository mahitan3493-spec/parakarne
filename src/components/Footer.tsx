import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-grid">
        <div>
          <div className="logo footer-logo" style={{ marginBottom: 14 }}>
            <span className="logo-mark" style={{ width: 36, height: 36 }} aria-hidden="true">
              <img src="/logo-mark.svg" alt="" width="36" height="36" />
            </span>
            <div className="logo-text" style={{ fontSize: 18 }}>
              Para<span>Karne</span>
            </div>
          </div>
          <p className="footer-copy">
            ParaKarne.com; Türkiye'deki bankaları kullanıcı yorumları,
            kategori puanları ve başvuru deneyimleriyle karşılaştırmaya yardımcı
            olan bağımsız bir finans platformudur.
          </p>
          <div className="mono footer-mini">
            © 2026 ParaKarne.com — Tüm hakları saklıdır.
          </div>
        </div>
        <div>
          <h4 className="footer-title">Platform</h4>
          <div className="footer-links">
            <Link href="/tum-konular">Tüm Konular</Link>
            <Link href="/#karsilastir">Banka Karşılaştırma</Link>
            <Link href="/#yorumlar">Kullanıcı Yorumları</Link>
            <Link href="/hakkimizda">Hakkımızda</Link>
          </div>
        </div>
        <div>
          <h4 className="footer-title">Yasal</h4>
          <div className="footer-links">
            <Link href="/gizlilik">Gizlilik</Link>
            <Link href="/kvkk">KVKK</Link>
            <Link href="/kullanim-sartlari">Kullanım Şartları</Link>
            <Link href="/itiraz-sureci">İtiraz Süreci</Link>
            <Link href="/iletisim">İletişim</Link>
          </div>
        </div>
      </div>
      <div className="wrap footer-disclaimer">
        ParaKarne bir bankanın resmî temsilcisi değildir. Platformdaki puanlar,
        yorumlar ve karşılaştırmalar kullanıcı deneyimlerine dayanır; yatırım,
        kredi veya kesin finansal yönlendirme niteliği taşımaz. Nihai karar öncesinde
        ilgili bankaların resmî kanallarını kontrol edin.
      </div>
    </footer>
  );
}
