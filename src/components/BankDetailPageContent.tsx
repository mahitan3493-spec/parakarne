"use client";

import { useMemo } from "react";
import Header from "./Header";
import Footer from "./Footer";
import AuthModal from "./AuthModal";
import ProfileModal from "./ProfileModal";
import BankDetailModal from "./BankDetailModal";
import ReviewItem from "./ReviewItem";
import BankLogo from "./BankLogo";
import Link from "next/link";
import { useBanks } from "@/lib/banks-context";
import { useReviews } from "@/lib/reviews-context";
import { useUI } from "@/lib/ui-context";
import { gradeClassOf, letterFromScore, approvalClass } from "@/lib/grades";
import { applyReviewStats, visibleReviews } from "@/lib/bank-stats";
import { CATEGORY_META } from "@/lib/types";

export default function BankDetailPageContent({ bankId }: { bankId: string }) {
  const { banks } = useBanks();
  const { reviews } = useReviews();
  const { openBankModal } = useUI();

  const rawBank = banks.find((b) => b.id === bankId);
  const bank = useMemo(
    () => (rawBank ? applyReviewStats(rawBank, reviews) : null),
    [rawBank, reviews],
  );

  if (!bank) {
    return (
      <>
        <Header />
        <main className="legal-page">
          <div className="wrap">
            <p className="skeleton-row">Banka bulunamadı.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const bankReviews = visibleReviews(reviews).filter((r) => r.bankId === bank.id);

  function handleReviewCta() {
    openBankModal(bank!.id, "rating");
  }

  return (
    <>
      <Header />
      <main className="legal-page bank-detail-page">
        <div className="wrap bank-detail-wrap">
          <article className="content-article bank-detail-article">
            <p className="mono" style={{ fontSize: 12, color: "var(--ink-faint)", marginBottom: 12 }}>
              <Link href="/">Ana sayfa</Link> / {bank.name} Karnesi
            </p>
            <h1>{bank.name} Karnesi</h1>
            <p className="lead bank-detail-lead">
              {bank.name} kullanıcı yorumları, mobil uygulama puanı, müşteri hizmetleri deneyimi,
              ATM ve şube hizmetleri ile kredi/kredi kartı onay oranını gerçek ParaKarne
              verileriyle inceleyin. Aşağıdan siz de bu bankayı puanlayabilirsiniz.
            </p>

            <div className="detail-head" style={{ marginTop: 20 }}>
              <div className="bank-cell">
                <BankLogo bank={bank} />
                <div>
                  <div className="rc-bank">{bank.name}</div>
                  <div className="rc-sub">
                    {bank.reviewCount > 0
                      ? `${bank.reviewCount.toLocaleString("tr-TR")} yorum · Genel ${bank.rating}/5`
                      : "Henüz yorum yok"}
                  </div>
                </div>
              </div>
              <div
                className={`grade-pill ${gradeClassOf(bank.grade)}`}
                style={{ width: 52, height: 52, fontSize: 18 }}
              >
                {bank.grade}
              </div>
            </div>

            <div className="detail-grades">
              {CATEGORY_META.filter((cat) => bank.sub[cat.key] !== null).map((cat) => {
                const letter = letterFromScore(bank.sub[cat.key] as number);
                return (
                  <div className="rc-row" key={cat.key}>
                    <span className="subj">{cat.label}</span>
                    <span className={`rc-grade ${gradeClassOf(letter)}`}>{letter}</span>
                  </div>
                );
              })}
              {bank.creditApprovalCount > 0 && (
                <>
                  <div className="rc-row">
                    <span className="subj">Kredi / Kredi Kartı Onay Oranı</span>
                    <span className={`rc-grade ${approvalClass(bank.creditApprovalRate)}`}>
                      %{Math.round(bank.creditApprovalRate)}
                    </span>
                  </div>
                  <div className="rc-approval-note">
                    {bank.creditApprovalCount.toLocaleString("tr-TR")} başvurudan derlendi
                  </div>
                </>
              )}
              {bank.reviewCount === 0 && (
                <p style={{ fontSize: "12.5px", color: "var(--ink-faint)", padding: "8px 0" }}>
                  Bu banka için henüz not yok — ilk yorumu sen bırakınca kategoriler burada belirecek.
                </p>
              )}
            </div>

            <button className="btn primary bank-detail-primary-cta" onClick={handleReviewCta}>
              Bu Bankayı Puanla
            </button>

            <p className="bank-detail-editor-note">
              <span className="bank-detail-editor-label">Editör notu</span>
              {bank.summary}
            </p>

            <section className="bank-seo-block" aria-label={`${bank.name} banka inceleme başlıkları`}>
              <h2>{bank.name} Kullanıcı Yorumları ve Banka Karnesi</h2>
              <p>
                {bank.name} kullanıcı yorumları; müşteri hizmetleri, ATM hizmetleri, güvenlik,
                mobil uygulama ve şube deneyimi gibi başlıklarda verilen gerçek kullanıcı
                puanlarından oluşur. ParaKarne, yorumları bankaya özel işler ve bankanın genel
                notunu bu kullanıcı katkılarına göre günceller.
              </p>

              <div className="bank-seo-grid">
                <section>
                  <h3>{bank.name} Mobil Uygulama Puanı</h3>
                  <p>
                    {bank.sub.app
                      ? `${bank.name} mobil uygulama puanı ${bank.sub.app.toFixed(1)}/5 seviyesinde. Bu başlık hız, arayüz ve uygulama stabilitesi deneyimlerine göre hesaplanır.`
                      : `${bank.name} mobil uygulama puanı için henüz yeterli kullanıcı verisi yok. İlk mobil bankacılık deneyimini paylaşarak bu başlığı başlatabilirsiniz.`}
                  </p>
                </section>

                <section>
                  <h3>{bank.name} Müşteri Hizmetleri Yorumları</h3>
                  <p>
                    {bank.sub.service
                      ? `${bank.name} müşteri hizmetleri puanı ${bank.sub.service.toFixed(1)}/5. Kullanıcılar çağrı merkezi erişimi, çözüm hızı ve destek kalitesini değerlendirir.`
                      : `${bank.name} müşteri hizmetleri yorumları henüz karne oluşturacak seviyede değil. Destek deneyiminizi paylaşarak diğer kullanıcılara yardımcı olabilirsiniz.`}
                  </p>
                </section>

                <section>
                  <h3>{bank.name} Kredi ve Kredi Kartı Onay Oranı</h3>
                  <p>
                    {bank.creditApprovalCount > 0
                      ? `${bank.name} kredi ve kredi kartı onay oranı, kullanıcıların paylaştığı ${bank.creditApprovalCount.toLocaleString("tr-TR")} başvuru sonucuna göre yaklaşık %${Math.round(bank.creditApprovalRate)} olarak hesaplanıyor.`
                      : `${bank.name} kredi ve kredi kartı onay oranı için henüz yeterli başvuru sonucu yok. Başvuru sonucunu paylaşan kullanıcılar bu oranın oluşmasını sağlar.`}
                  </p>
                </section>

                <section>
                  <h3>{bank.name} ATM Hizmetleri</h3>
                  <p>
                    {bank.sub.atm
                      ? `${bank.name} ATM hizmetleri puanı ${bank.sub.atm.toFixed(1)}/5. Bu başlık ATM erişimi, arıza sıklığı ve işlem deneyimi yorumlarıyla oluşur.`
                      : `${bank.name} ATM hizmetleri için henüz yeterli kullanıcı puanı yok. ATM deneyiminizi puanlayarak karneye katkı verebilirsiniz.`}
                  </p>
                </section>

                <section>
                  <h3>{bank.name} Şube Hizmetleri</h3>
                  <p>
                    {bank.hasBranch
                      ? bank.sub.branch
                        ? `${bank.name} şube hizmetleri puanı ${bank.sub.branch.toFixed(1)}/5. Bekleme süresi, ilgi ve işlem çözümü kullanıcı notlarıyla ölçülür.`
                        : `${bank.name} şube hizmetleri için henüz yeterli yorum yok. Şube deneyiminizi paylaşarak bu başlığın oluşmasına yardımcı olabilirsiniz.`
                      : `${bank.name} şubesiz/dijital odaklı bir yapı sunduğu için şube hizmetleri her kullanıcı için geçerli olmayabilir.`}
                  </p>
                </section>

                <section>
                  <h3>{bank.name} Güvenlik Puanı</h3>
                  <p>
                    {bank.sub.security
                      ? `${bank.name} güvenlik puanı ${bank.sub.security.toFixed(1)}/5. Bu değerlendirme dolandırıcılık koruması, hesap güvenliği ve kullanıcı güven algısıyla oluşur.`
                      : `${bank.name} güvenlik puanı için henüz yeterli kullanıcı değerlendirmesi yok. Güvenlik deneyiminizi paylaşarak bu veriyi güçlendirebilirsiniz.`}
                  </p>
                </section>
              </div>

              <div className="bank-faq-block">
                <h2>{bank.name} Hakkında Sık Sorulan Sorular</h2>
                <details>
                  <summary>{bank.name} kullanıcı yorumları güvenilir mi?</summary>
                  <p>
                    Yorumlar, kullanıcıların ParaKarne üzerinden paylaştığı banka deneyimlerinden
                    oluşur. Kişisel bilgi içeren veya topluluk kurallarına uymayan yorumlar
                    bildirilebilir ve gerektiğinde moderasyona alınabilir.
                  </p>
                </details>
                <details>
                  <summary>{bank.name} kredi kartı onay oranı nasıl hesaplanır?</summary>
                  <p>
                    Kredi ve kredi kartı onay oranı, kullanıcıların başvuru sonucunu “onaylandı”,
                    “reddedildi” veya “başvurmadım” olarak işaretlemesiyle oluşan kullanıcı katkılarından
                    hesaplanır. Başvuru sayısı arttıkça oran daha anlamlı hale gelir.
                  </p>
                </details>
                <details>
                  <summary>{bank.name} mobil uygulama puanı neye göre belirlenir?</summary>
                  <p>
                    Mobil uygulama puanı; hız, kullanım kolaylığı, arayüz, işlem akışı ve stabilite
                    gibi kullanıcı deneyimi başlıklarına verilen yıldız puanlarının ortalamasıdır.
                  </p>
                </details>
              </div>
            </section>

            <h2 style={{ marginTop: 32 }}>{bank.name} Kullanıcı Yorumları</h2>
            <div className="detail-reviews">
              {bankReviews.length ? (
                bankReviews.map((r) => <ReviewItem key={r.id} review={r} />)
              ) : (
                <p style={{ fontSize: "13px", color: "var(--ink-faint)" }}>
                  Henüz yorum yok — ilk yorumu sen yaz.
                </p>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
      <AuthModal />
      <BankDetailModal />
      <ProfileModal />
    </>
  );
}
