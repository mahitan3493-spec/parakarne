export default function HowItWorks() {
  return (
    <section
      id="nasil"
      style={{
        background: "var(--card)",
        borderTop: "1px solid var(--paper-line)",
        borderBottom: "1px solid var(--ink)",
      }}
    >
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">04 — SÜREÇ</div>
            <h2>Not nasıl hesaplanıyor</h2>
          </div>
        </div>
      </div>
      <div className="steps wrap" style={{ padding: "0 28px" }}>
        <div className="step">
          <div className="stamp-num">ADIM 1</div>
          <h4>Kullanıcı deneyimi alınır</h4>
          <p>
            Kullanıcı banka deneyimini; müşteri hizmetleri, ATM, güvenlik,
            mobil uygulama ve şube başlıklarında puanlar.
          </p>
        </div>
        <div className="step">
          <div className="stamp-num">ADIM 2</div>
          <h4>Yorum ve başvuru sonucu eklenir</h4>
          <p>
            Kredi ve kredi kartı başvuru sonucu, gelir durumu ve yorum metni
            karneye katkı olarak kaydedilir.
          </p>
        </div>
        <div className="step">
          <div className="stamp-num">ADIM 3</div>
          <h4>Karne güncellenir</h4>
          <p>
            Bankanın puanı, yorum sayısı ve kategori notları gerçek kullanıcı
            katkılarına göre otomatik güncellenir.
          </p>
        </div>
      </div>
    </section>
  );
}
