const FAQ_ITEMS = [
  {
    question: "ParaKarne banka puanlarını nasıl hesaplıyor?",
    answer:
      "Genel puan ve kategori notları, yayınlanan gerçek kullanıcı değerlendirmelerinin ortalamasından oluşur. Henüz yorum almayan bankalara örnek veya tahmini puan verilmez.",
  },
  {
    question: "Bir bankayı nasıl puanlayabilirim?",
    answer:
      "Bankanı Puanla butonuna dokunup bankanı seç. Müşteri hizmetleri, ATM, güvenlik, mobil uygulama ve varsa şube deneyimini puanladıktan sonra yorumunu gönderebilirsin.",
  },
  {
    question: "Kredi ve kredi kartı onay oranları neyi gösteriyor?",
    answer:
      "Bu oranlar kullanıcıların ParaKarne'ye bildirdiği başvuru sonuçlarından hesaplanır. Bankanın resmî onay garantisi veya tüm müşterileri temsil eden kesin bir oran değildir.",
  },
  {
    question: "Şüpheli veya uygunsuz bir yorumu nasıl bildirebilirim?",
    answer:
      "Yorum kartındaki Bildir düğmesini kullanabilirsin. Üç bildirim alan yorum genel puan ve açık yorum akışından çıkarılarak moderasyon incelemesine alınır.",
  },
  {
    question: "ParaKarne bir bankaya bağlı mı?",
    answer:
      "Hayır. ParaKarne bağımsız bir kullanıcı değerlendirme platformudur; herhangi bir bankanın resmî temsilcisi değildir.",
  },
  {
    question: "Yorum yaparken kişisel bilgilerimi yazmalı mıyım?",
    answer:
      "Hayır. Kart numarası, T.C. kimlik numarası, telefon, IBAN, şifre veya tek kullanımlık doğrulama kodu gibi kişisel ve finansal bilgileri yorumlarda paylaşmamalısın.",
  },
] as const;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomeFaq() {
  return (
    <section id="sss" className="faq-section">
      <div className="wrap faq-shell">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="faq-intro">
          <div className="sec-num">SIKÇA SORULAN SORULAR</div>
          <h2>ParaKarne hakkında merak edilenler</h2>
          <p>
            Puanlama, yorum güvenliği ve banka karşılaştırma sistemiyle ilgili
            temel soruların yanıtlarını burada bulabilirsin.
          </p>
          <a className="btn faq-guide-link" href="/tum-konular/">
            Tüm Rehberleri Gör
          </a>
        </div>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <details className="faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">+</span>
              </summary>
              <div className="faq-answer">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
