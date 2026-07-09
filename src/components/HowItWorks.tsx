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
          <div className="stamp-num">SORU 1</div>
          <h4>Veri toplanır</h4>
          <p>
            Faiz oranları, ücret tarifeleri ve uygulama performansı düzenli
            olarak taranır.
          </p>
        </div>
        <div className="step">
          <div className="stamp-num">SORU 2</div>
          <h4>Kullanıcı katkısı</h4>
          <p>
            Üyeler gerçek deneyimlerini puanlar; sahte ve tekrar eden
            yorumlar filtrelenir.
          </p>
        </div>
        <div className="step">
          <div className="stamp-num">SORU 3</div>
          <h4>Karne basılır</h4>
          <p>
            Ağırlıklı ortalama, harf notuna çevrilir ve karne her ay
            güncellenir.
          </p>
        </div>
      </div>
    </section>
  );
}
