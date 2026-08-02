import Link from "next/link";

export default function Legal() {
  return (
    <section id="guven" style={{ paddingTop: 0, paddingBottom: "56px" }}>
      <div className="wrap">
        <div className="legal">
          <h4>Notlar nasıl güvenilir tutulur?</h4>
          <p>
            ParaKarne bir bankanın resmî temsilcisi değildir. Platformdaki
            puanlar, yorumlar ve karşılaştırmalar kullanıcı deneyimlerine
            dayalıdır. Buradaki bilgiler yatırım tavsiyesi, kredi tavsiyesi
            veya kesin finansal yönlendirme niteliği taşımaz. Faiz, ücret,
            kampanya ve ürün bilgileri değişebileceği için nihai karar öncesinde
            ilgili bankanın resmî kanalları kontrol edilmelidir.
          </p>
          <ul>
            <li>
              Yanlış, hakaret içeren veya sahte olduğunu düşündüğün bir
              yorumu &quot;Bildir&quot; butonuyla işaretleyebilirsin.
            </li>
            <li>
              3 veya daha fazla bildirim alan yorumlar genel puan ve yorum
              akışından otomatik olarak çıkarılır; moderasyon panelinde
              incelemeye alınır.
            </li>
            <li>
              Bankalar, kendileriyle ilgili yorumlara{" "}
              <Link href="/itiraz-sureci">itiraz süreci</Link> üzerinden yanıt verebilir.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
