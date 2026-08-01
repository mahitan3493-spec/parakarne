"use client";

import { useUI } from "@/lib/ui-context";

export default function CtaBand() {
  const { openAuthModal } = useUI();
  return (
    <section className="cta-band">
      <div className="wrap cta-band-inner">
        <div>
          <div className="sec-num" style={{ color: "rgba(255,255,255,0.7)", marginBottom: 10 }}>05 — KATILIM</div>
          <h2>Senin deneyimin, başkasının daha doğru banka seçimi olabilir.</h2>
          <p>
            Ücretsiz üye ol, bankanı puanla ve kredi / kart başvuru deneyimini paylaş.
            ParaKarne'deki her katkı platformun güvenilirliğini artırır.
          </p>
        </div>
        <div className="hero-ctas cta-buttons" style={{ justifyContent: "center" }}>
          <button className="btn primary" onClick={() => openAuthModal("signup")}>
            Ücretsiz Üye Ol
          </button>
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
