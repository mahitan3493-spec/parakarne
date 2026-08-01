export default function HowItWorks() {
  return (
    <section id="nasil" className="how-section">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">ŞEFFAF PUANLAMA</div>
            <h2>ParaKarne nasıl çalışır?</h2>
            <p>
              Her değerlendirme gerçek kullanıcı katkısıyla oluşur. Sistem;
              görünürlük, şeffaflık ve kıyas kolaylığı için banka deneyimlerini
              tek formatta toplar.
            </p>
          </div>
        </div>
      </div>
      <div className="steps wrap" style={{ padding: "0 28px" }}>
        <div className="step">
          <div className="stamp-num">01</div>
          <h4>Deneyim puanı girilir</h4>
          <p>
            Kullanıcılar müşteri hizmetleri, ATM, güvenlik, mobil uygulama ve
            şube deneyimi için ayrı not verir.
          </p>
        </div>
        <div className="step">
          <div className="stamp-num">02</div>
          <h4>Başvuru sonucu eklenir</h4>
          <p>
            Kredi ve kredi kartı başvuru sonucu, gelir durumu ve opsiyonel
            yorum metni sisteme eklenir.
          </p>
        </div>
        <div className="step">
          <div className="stamp-num">03</div>
          <h4>Karne canlı güncellenir</h4>
          <p>
            Yorum sayıları, not ortalamaları ve onay oranları otomatik olarak
            güncellenir; bankalar anında kıyaslanabilir.
          </p>
        </div>
      </div>
    </section>
  );
}
