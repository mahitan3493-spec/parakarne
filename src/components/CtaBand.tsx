"use client";

import { useUI } from "@/lib/ui-context";

export default function CtaBand() {
  const { openAuthModal } = useUI();
  return (
    <section className="cta-band">
      <div className="wrap">
        <h2>Bankanı henüz karneye almadık mı?</h2>
        <p>Üye ol, ilk yorumu sen yaz — herkes senin notunla karar versin.</p>
        <div className="hero-ctas" style={{ justifyContent: "center" }}>
          <button className="btn primary" onClick={() => openAuthModal("signup")}>
            Ücretsiz Üye Ol
          </button>
          <button
            className="btn"
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
