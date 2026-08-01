"use client";

import RateBankButton from "./RateBankButton";

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap cta-band-inner">
        <div>
          <div className="sec-num" style={{ color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>TOPLULUĞA KATIL</div>
          <h2>Senin deneyimin, başkasının daha doğru banka seçimi olabilir.</h2>
          <p>
            Bankanı seç, puanlama formunu aç ve kredi / kart başvuru deneyimini paylaş.
            Henüz üye değilsen form sürecinde ücretsiz hesabını oluşturabilirsin.
          </p>
        </div>
        <div className="hero-ctas cta-buttons" style={{ justifyContent: "center" }}>
          <RateBankButton className="btn primary">Bankanı Puanla</RateBankButton>
          <button
            className="btn btn-ghost-light"
            onClick={() =>
              document
                .getElementById("karsilastir")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Karneleri İncele
          </button>
        </div>
      </div>
    </section>
  );
}
