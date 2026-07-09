// Otomatik oluşturulmuştur: BankaYardım içeriğinden ParaKarne'ye taşınan
// 40 bilgilendirme makalesi + Hakkımızda sayfası.
export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string | null;
  bodyHtml: string;
  jsonLd: object[];
};

export const articles: Article[] = [
  {
    slug: "89-1-89-2-89-3-haciz-ihbarnamesi",
    title: `Benim Borcumdan Dolayı Babama İcra Gelir mi? 89 Haciz İhbarnamesi`,
    description: `89/1, 89/2 ve 89/3 haciz ihbarnamesi nedir? Aile bireyleri borçtan sorumlu olur mu, ihbarname gelirse ne yapılmalı?`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">Kefil, ortak borçlu veya mirasçılık gibi özel bir durum yoksa aile bireyleri sadece akraba oldukları için borçtan sorumlu tutulamaz. Ancak alacaklı, üçüncü kişilerde para/mal/alacak olduğunu düşünürse İİK 89 kapsamında haciz ihbarnamesi gönderebilir. Biz ParaKarne ekibi olarak gördük ki, 89/1 ihbarnamesini önemsemeyip yanıtlamayan pek çok kişi, borçla hiçbir ilgisi olmadığı halde zor durumda kalabiliyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Yasal dayanak: 2004 sayılı İcra ve İflas Kanunu (İİK) madde 89</li>
      <li>89/1 (birinci haciz ihbarnamesi): üçüncü kişiye "borçluya borcun var mı, elinde parası/malı var mı?" sorulur; yoksa süresinde itiraz edilmelidir</li>
      <li>89/1'e süresinde cevap verilmezse 89/2 gönderilir; buna da cevap verilmezse 89/3 aşamasıyla iş ciddi hale gelir</li>
      <li>İhbarname hukuken borçlunun anne, baba veya eşine de gönderilebilir</li>
      <li>Süreler kaçırılırsa, borçla ilgisi olmayan üçüncü kişi bile zor duruma düşebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Tebligatı yırtıp atmayın; dosya numarası ve tebliğ tarihini not edin</li>
      <li>Borçluya herhangi bir borcunuz veya elinizde malı/parası yoksa süresi (7 gün) içinde yazılı veya sözlü itiraz edin</li>
      <li>İtiraz dilekçenizi icra dairesine verip teslim kaydı alın</li>
      <li>89/3 sonrasında itirazınızı sürdürmek istiyorsanız 15 gün içinde "menfi tespit davası" açmanız gerekir</li>
      <li>Süre kaçırdıysanız veya durum karmaşıksa bir icra avukatından destek alın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Tebliğ edilen haciz ihbarnamesi</li>
      <li>T.C. kimlik belgesi</li>
      <li>Varsa borçluyla ilişkinizi gösteren belgeler</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://mevzuat.gov.tr/mevzuatmetin/1.3.2004.pdf" target="_blank" rel="noopener nofollow">2004 sayılı İcra ve İflas Kanunu - resmi mevzuat</a></li>
      <li><a href="https://barandogan.av.tr/iik-89-madde-icra-iflas-kanunu-yargitay-kararlari" target="_blank" rel="noopener nofollow">İcra ve İflas Kanunu madde 89 açıklaması</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">89/1 ihbarnamesine hiç cevap vermezsem ne olur?</p>
      <p class="sss-cevap">7 gün içinde itiraz etmezseniz, alacak sizin "zimmetinizde" sayılır ve borçtan sorumlu hale gelebilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İhbarname geldiğinde avukata mı gitmeliyim?</p>
      <p class="sss-cevap">Basit durumlarda kendiniz itiraz edebilirsiniz; süre kaçırdıysanız veya durum karmaşıksa avukat desteği almanız önerilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">89/3'ten sonra ne yapmalıyım?</p>
      <p class="sss-cevap">İtirazınızı sürdürmek istiyorsanız 15 gün içinde "menfi tespit davası" açmanız gerekir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
      <li><a href="/borctan-dolayi-hapis-cezasi-var-mi">Borçtan Dolayı Hapis Var mı?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Borcumdan Dolayı Aileme İcra Gelir mi? 89/1, 89/2, 89/3 Nedir?", "description": "89/1, 89/2 ve 89/3 haciz ihbarnamesi nedir? Aile bireyleri borçtan sorumlu olur mu, ihbarname gelirse ne yapılmalı?", "url": "https://parakarne.com/89-1-89-2-89-3-haciz-ihbarnamesi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "89/1 ihbarnamesine hiç cevap vermezsem ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "7 gün içinde itiraz etmezseniz, alacak sizin \"zimmetinizde\" sayılır ve borçtan sorumlu hale gelebilirsiniz."}}, {"@type": "Question", "name": "İhbarname geldiğinde avukata mı gitmeliyim?", "acceptedAnswer": {"@type": "Answer", "text": "Basit durumlarda kendiniz itiraz edebilirsiniz; süre kaçırdıysanız veya durum karmaşıksa avukat desteği almanız önerilir."}}, {"@type": "Question", "name": "89/3'ten sonra ne yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "İtirazınızı sürdürmek istiyorsanız 15 gün içinde \"menfi tespit davası\" açmanız gerekir."}}]}],
  },
  {
    slug: "atm-kartsiz-para-yatirma-hatasi",
    title: `ATM'den Kartsız Para Yatırma Hataları Nasıl Çözülür?`,
    description: `ATM'den T.C. kimlik no veya telefon numarasıyla kartsız para yatırırken yaşanan hatalar ve hesaba geçmeyen paranın kurtarılması.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Kartsız para yatırma sırasında ATM hata verirse, size verilen "Ünite Hatası/Para Sıkıştı" bilgi fişini saklayın ve parayı yatırdığınız bankanın müşteri hizmetlerini arayarak arıza kaydı oluşturun.</p>
  <p class="lead">ATM'den T.C. kimlik numarası veya cep telefonu numarası yazarak bir başkasının hesabına kartsız para yatırırken, ATM'nin hata verip parayı yutması ya da paranın alıcının hesabına geçmemesi durumunda yapmanız gerekenler var.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>ATM'nin nakit sayma ünitesinde teknik bir arıza oluşması</li>
      <li>İşlem sırasında bağlantı kopması</li>
      <li>Alıcı bilgilerinin (T.C. kimlik no, IBAN) hatalı girilmesi</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>ATM bilgi fişini atmayın: ATM hata verdiğinde "Ünite Hatası / Para Sıkıştı" yazan bir bilgi fişi verir, bu fişi kesinlikle saklayın</li>
      <li>Yatırma bilgilerini not edin: parayı yatırdığınız tam saati, kendi T.C. kimlik numaranızı ve gönderdiğiniz hesabın IBAN numarasını yazın</li>
      <li>Parayı yatırılan bankaya başvurun: alıcının hesabı hangi bankadaysa o bankanın müşteri hizmetlerini arayıp "kartsız para yatırma ünitesinde param sıkıştı" diyerek arıza kaydı oluşturun; ATM sayımından sonra para alıcıya veya size iade edilir</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>ATM bilgi fişi</li>
      <li>İşlem saati</li>
      <li>Alıcının IBAN/T.C. kimlik bilgisi</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Para kime iade edilir, bana mı alıcıya mı?</p>
      <p class="sss-cevap">ATM sayımı sonucunda para nerede tespit edilirse (yatırma işlemi tamamlanmamışsa gönderene, tamamlanmış ama sistemsel gecikme varsa alıcıya) ona göre iade edilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Bilgi fişini kaybettim, ne yapmalıyım?</p>
      <p class="sss-cevap">Yine de yatırdığınız saat ve tutarı bankaya bildirerek arıza kaydı açtırabilirsiniz; fiş süreci hızlandırır ama tek başına şart değildir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/atm-parayi-yuttu-ne-yapmaliyim">ATM Parayı Yuttu, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "ATM'den Kartsız Para Yatırma Hataları: Hesaba Geçmeyen Para Nasıl Kurtarılır?", "description": "ATM'den T.C. kimlik no veya telefon numarasıyla kartsız para yatırırken yaşanan hatalar ve hesaba geçmeyen paranın kurtarılması.", "url": "https://parakarne.com/atm-kartsiz-para-yatirma-hatasi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Para kime iade edilir, bana mı alıcıya mı?", "acceptedAnswer": {"@type": "Answer", "text": "ATM sayımı sonucunda para nerede tespit edilirse (yatırma işlemi tamamlanmamışsa gönderene, tamamlanmış ama sistemsel gecikme varsa alıcıya) ona göre iade edilir."}}, {"@type": "Question", "name": "Bilgi fişini kaybettim, ne yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Yine de yatırdığınız saat ve tutarı bankaya bildirerek arıza kaydı açtırabilirsiniz; fiş süreci hızlandırır ama tek başına şart değildir."}}]}],
  },
  {
    slug: "atm-parayi-yuttu-ne-yapmaliyim",
    title: `ATM Parayı Yuttu Ne Yapmalıyım? (Adım Adım Kurtarma Rehberi)`,
    description: `ATM parayı veya kartı yutunca ilk yapılması gerekenler, adım adım kurtarma rehberi, iade süresi ve yasal haklarınız.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> ATM parayı yutarsa yapılması gereken ilk şey, ATM başından ayrılmadan kartınızın ait olduğu bankanın müşteri hizmetlerini arayıp ATM'nin seri numarasıyla birlikte bir harcama itirazı/ATM iade kaydı açtırmaktır.</p>
  <p class="lead">Banka ortak ATM'lerinde veya kendi bankanızın ATM'sinde işlem yaparken paranın hazneye sıkışması ya da ATM'nin parayı yutması, hemen herkesin başına gelebilecek can sıkıcı bir durumdur. Özellikle acil nakit ihtiyacınız olduğu bir anda bu sorunla karşılaştıysanız panik yapmayın — sakin kalıp aşağıdaki adımları sırasıyla uyguladığınızda yutulan paranızı bankadan eksiksiz bir şekilde geri alabilirsiniz.</p>

  <img class="makale-gorseli" src="https://images.unsplash.com/photo-1593944938251-748427343ea3?fm=jpg&q=70&w=480&auto=format&fit=crop" alt="atm parayı yuttu ne yapılmalı" loading="lazy" width="320" height="213">

  <h3>Olası nedenler</h3>
  <ul>
      <li>ATM'nin kağıt para sayma/tanıma sensöründe teknik bir hata oluşması</li>
      <li>İşlem sırasında bağlantı kopması veya elektrik kesintisi</li>
      <li>Kartın, ATM'nin kart okuyucusunda teknik bir arıza nedeniyle geri verilmemesi</li>
      <li>Para çekme sonrası hazneden parayı almayı unutmanız — ATM'ler güvenlik amacıyla 30-60 saniye içinde parayı otomatik olarak geri çeker</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>ATM başından kesinlikle ayrılmayın: cihaz kendini otomatik güvenli moda alıp parayı hazneye geri itebilir; işlem tamamlanana veya bankayla görüşene kadar en az 5-10 dakika bekleyin</li>
      <li>ATM'nin üzerinde (genelde ekranın hemen altında veya yan tarafında) yazan seri numarasını/kodu not edin — bankaya arıza kaydı açtırırken bu numara paranızın çok daha hızlı tespit edilmesini sağlar</li>
      <li>Kartınızın ait olduğu bankanın müşteri hizmetlerini ATM'nin başındayken hemen arayın; telesekreterde "Kart İşlemleri" ve ardından "ATM Sorunları/Kayıp-Çalıntı" adımlarını izleyerek doğrudan müşteri temsilcisine bağlanın</li>
      <li>Müşteri temsilcisi adınıza bir harcama itirazı (chargeback) / ATM iade talebi oluşturacaktır; şubeye yakın bir ATM'deyseniz içeri girip yazılı bir dilekçe formu doldurmanız süreci daha da resmi hale getirir</li>
      <li>ParaKarne İpucu: Telefonla görüşürken mutlaka işlemin yapıldığı tam saati ve dakikayı not edin — kamera kayıtlarının incelenmesi istendiğinde bu zaman bilgisi süreci hızlandırır</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Banka hesap/kart bilgisi</li>
      <li>ATM'nin seri numarası</li>
      <li>İşlem saati ve ATM konumu</li>
      <li>Varsa ATM makbuzu/ekran görüntüsü</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Yutulan para kaç günde hesaba geçer?</p>
      <p class="sss-cevap">Bankaların ortak kararlarına ve ATM sayım yoğunluğuna bağlı olarak genellikle 1 ila 7 iş günü içinde iade edilir. Kendi bankanızın ATM'sindeyse süreç 24 saat içinde çözülebilirken, başka bankanın ATM'sindeyse bir haftayı bulabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">ATM başka bankanın kartını veya parasını yutarsa ne olur?</p>
      <p class="sss-cevap">Kartınızın ait olduğu bankayı aramalısınız; bankanız, ATM'nin sahibi olan diğer bankayla resmi yazışma başlatarak paranızı/kartınızı sizin adınıza talep eder.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">ATM'de unutulan para ne olur?</p>
      <p class="sss-cevap">Para çekme sonrası hazneden almayı unutursanız, ATM güvenlik amacıyla 30-60 saniye içinde parayı otomatik olarak geri çeker ve kilitler. Bu para da yutulan para gibi kayıt altına alınır ve dilekçeyle geri istenebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Banka yutulan parayı eksik yatırırsa ne yapılmalı?</p>
      <p class="sss-cevap">ATM'lerin içindeki nakit düzenli olarak sayılır ve dijital kayıtlarla karşılaştırılır; belirttiğiniz tutar kasa fazlasıyla eşleşirse iade edilir. Eksik yatırılırsa BDDK veya Tüketici Hakem Heyeti'ne başvurma hakkınız saklıdır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-harcama-itirazi">Kredi Kartı Harcama İtirazı</a></li>
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
  </ul>

  <p class="sayfa-ici-yonlendirme">ATM'de kartınız mı sıkıştı? <a href="/kartim-atm-de-kaldi-nasil-alirim">Kartım ATM'de Kaldı Nasıl Alırım?</a> rehberimize göz atın.</p>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "ATM Parayı Yuttu Ne Yapmalıyım? (Adım Adım Kurtarma Rehberi)", "description": "ATM parayı veya kartı yutunca ilk yapılması gerekenler, adım adım kurtarma rehberi, iade süresi ve yasal haklarınız.", "url": "https://parakarne.com/atm-parayi-yuttu-ne-yapmaliyim", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Yutulan para kaç günde hesaba geçer?", "acceptedAnswer": {"@type": "Answer", "text": "Bankaların ortak kararlarına ve ATM sayım yoğunluğuna bağlı olarak genellikle 1 ila 7 iş günü içinde iade edilir. Kendi bankanızın ATM'sindeyse süreç 24 saat içinde çözülebilirken, başka bankanın ATM'sindeyse bir haftayı bulabilir."}}, {"@type": "Question", "name": "ATM başka bankanın kartını veya parasını yutarsa ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "Kartınızın ait olduğu bankayı aramalısınız; bankanız, ATM'nin sahibi olan diğer bankayla resmi yazışma başlatarak paranızı/kartınızı sizin adınıza talep eder."}}, {"@type": "Question", "name": "ATM'de unutulan para ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "Para çekme sonrası hazneden almayı unutursanız, ATM güvenlik amacıyla 30-60 saniye içinde parayı otomatik olarak geri çeker ve kilitler. Bu para da yutulan para gibi kayıt altına alınır ve dilekçeyle geri istenebilir."}}, {"@type": "Question", "name": "Banka yutulan parayı eksik yatırırsa ne yapılmalı?", "acceptedAnswer": {"@type": "Answer", "text": "ATM'lerin içindeki nakit düzenli olarak sayılır ve dijital kayıtlarla karşılaştırılır; belirttiğiniz tutar kasa fazlasıyla eşleşirse iade edilir. Eksik yatırılırsa BDDK veya Tüketici Hakem Heyeti'ne başvurma hakkınız saklıdır."}}]}],
  },
  {
    slug: "banka-hesabinda-kisitlama-nasil-kalkar",
    title: `Banka Hesabımda Kısıtlama Görünüyor, Nasıl Kalkar?`,
    description: `Banka hesabında veya kartında kısıtlama/kısıt uyarısı çıkması ne anlama gelir, olası nedenleri ve kaldırma yolları nelerdir?`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Banka hesabında kısıtlama görürseniz ilk yapmanız gereken, müşteri hizmetlerini arayıp kısıtlamanın bankadan mı (idari) yoksa mahkeme/vergi dairesinden mi (yasal) kaynaklandığını netleştirmektir.</p>
  <p class="lead">Bir sabah uyandığınızda banka hesabınızda "kısıt gösterim", "hesap bloke" veya "geçici durdurma" hatası görmek endişe verici olabilir. Bankalar, hesap sahiplerine önceden haber vermeksizin yasal süreçler veya şüpheli durumlar nedeniyle hesapları dondurabilir. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, kullanıcıların büyük kısmı blokenin kaynağını öğrenmeden çözüm aramaya çalışıyor — oysa doğru adım her zaman önce kaynağı netleştirmek.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Şüpheli para trafiği: hesabınıza gün içinde tanımadığınız kişilerden çok sık ve yüksek tutarlı para geliyorsa banka bunu kara para veya yasadışı bahis şüphesiyle bloke edebilir</li>
      <li>Kripto para borsalarıyla uyuşmazlık: Binance, Paribu veya BtcTurk gibi borsalara açıklama kısmını yanlış yazarak ya da başkasının hesabından para göndermeye çalışırsanız hesap kısıtlanabilir</li>
      <li>İcra ve vergi daireleri (e-haciz): devlete olan vergi, KYK borcu, trafik cezası veya şahsi icra borçlarınız yüzünden vergi dairesi hesabınıza bloke koymuş olabilir</li>
      <li>Kimlik/adres bilgilerinizin güncel olmaması veya bankanın ek belge/kimlik teyidi istemesi</li>
      <li>Üst üste yanlış şifre girme, yeni cihazdan giriş veya normal dışı yüksek tutarlı işlem denemesi gibi güvenlik tetikleyicileri</li>
      <li>Not: İcra dosyanızın durumunu netleştirmek veya "idari kısıt" ile "yasal kısıt" ayrımını görmek isterseniz <a href="/banka-hesabinda-yasal-takip-kisitlamasi">Yasal Takip Kısıtlaması</a> sayfamıza bakabilirsiniz</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Bloke koyan kurumu öğrenin: müşteri hizmetlerini arayıp blokenin banka tarafından mı (idari kısıt) yoksa mahkeme/vergi dairesi tarafından mı (yasal bloke) konduğunu netleştirin</li>
      <li>Kaynağı kanıtlayın: kısıt şüpheli işlemler yüzündense, banka şubesine giderek paraların kaynağını (araç satışı, borç ödemesi vb.) sözleşme veya makbuzla kanıtlayıp dilekçe verin</li>
      <li>Borcu yapılandırın: bloke e-haciz kaynaklıysa ilgili vergi dairesiyle görüşüp borcun ilk taksitini ödediğinizde bloke genellikle yasal olarak kaldırılır</li>
      <li>Kimlik/belge eksikliğiyse istenen belgeyi e-Devlet veya şube üzerinden tamamlayın</li>
      <li>Çözülmezse yazılı başvuru yapıp BDDK e-Şikayet gibi resmi yolları değerlendirin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Paranın kaynağını gösteren belge (sözleşme, makbuz vb.)</li>
      <li>Hesap/kart bilgileriniz</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Kısıtlama ile bloke aynı şey mi?</p>
      <p class="sss-cevap">Genelde aynı kapsamda değerlendirilir — ikisi de hesap/kart üzerindeki işlem yapma yetkinizin bir şekilde sınırlandığı durumları ifade eder; kesin anlamı bankanın kullandığı terime ve nedenine göre değişebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kripto borsasına para gönderirken neye dikkat etmeliyim?</p>
      <p class="sss-cevap">Açıklama kısmını doğru ve net doldurun, başkasının hesabından işlem yapmaya çalışmayın; bu tür usulsüzlükler bankanın hesabınızı geçici olarak kısıtlamasına yol açabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kısıtlama kaç günde kalkar?</p>
      <p class="sss-cevap">Nedenine göre değişir: basit bir belge eksikliği aynı gün çözülebilirken, e-haciz veya MASAK incelemesi kaynaklı kısıtlamalar haftalar sürebilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/hesap-blokesi">Hesabımda Bloke Var, Ne Yapmalıyım?</a></li>
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Banka Hesabımda 'Kısıtlama' Görünüyor, Nasıl Kalkar?", "description": "Banka hesabında veya kartında kısıtlama/kısıt uyarısı çıkması ne anlama gelir, olası nedenleri ve kaldırma yolları nelerdir?", "url": "https://parakarne.com/banka-hesabinda-kisitlama-nasil-kalkar", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Kısıtlama ile bloke aynı şey mi?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde aynı kapsamda değerlendirilir — ikisi de hesap/kart üzerindeki işlem yapma yetkinizin bir şekilde sınırlandığı durumları ifade eder; kesin anlamı bankanın kullandığı terime ve nedenine göre değişebilir."}}, {"@type": "Question", "name": "Kripto borsasına para gönderirken neye dikkat etmeliyim?", "acceptedAnswer": {"@type": "Answer", "text": "Açıklama kısmını doğru ve net doldurun, başkasının hesabından işlem yapmaya çalışmayın; bu tür usulsüzlükler bankanın hesabınızı geçici olarak kısıtlamasına yol açabilir."}}, {"@type": "Question", "name": "Kısıtlama kaç günde kalkar?", "acceptedAnswer": {"@type": "Answer", "text": "Nedenine göre değişir: basit bir belge eksikliği aynı gün çözülebilirken, e-haciz veya MASAK incelemesi kaynaklı kısıtlamalar haftalar sürebilir."}}]}],
  },
  {
    slug: "banka-hesabinda-yasal-takip-kisitlamasi",
    title: `Banka Hesabında Yasal Takip Kısıtlaması Ne Demek?`,
    description: `Hesapta bakiye olmasına rağmen para çekilemiyorsa 'Yasal Takip Kısıtlaması' veya 'İdari Kısıt' ne anlama gelir, nasıl çözülür?`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Hesapta "Yasal Takip Kısıtlaması" görüyorsanız, önce müşteri hizmetlerini arayıp kısıtlamayı koyan birimin bankanın kendi risk merkezi mi yoksa savcılık/vergi dairesi mi olduğunu netleştirmeniz gerekir.</p>
  <p class="lead">Banka hesabınızda bakiye olmasına rağmen paranızı çekemiyor ve "Yasal Takip Kısıtlaması" veya "İdari Kısıt" uyarısı görüyorsanız, hesabınız bir inceleme altına alınmış demektir.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Bankanın kendi risk merkezinin şüpheli işlem tespiti (idari kısıt — bankanın kendi kararı)</li>
      <li>MASAK'ın (Mali Suçları Araştırma Kurulu) hesapta sık ve kaynağı belirsiz para transferleri tespit etmesi (yasal/resmi kısıt)</li>
      <li>Bir icra takibinden kaynaklanan borç dosyası (yasal/resmi kısıt)</li>
      <li>Bu sayfa özellikle "idari kısıt" ile "yasal/mahkeme kaynaklı kısıt" ayrımına odaklanır; kripto borsası veya genel şüpheli işlem nedenleri için <a href="/banka-hesabinda-kisitlama-nasil-kalkar">Kısıtlama Nasıl Kalkar</a>, blokenin genel kaldırılma süreci için <a href="/hesap-blokesi">Hesap Blokesi</a> sayfamıza bakabilirsiniz</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Sebebi müşteri hizmetlerinden öğrenin: kısıtlamayı koyan birimin bankanın kendi risk merkezi mi yoksa savcılık/vergi dairesi mi olduğunu netleştirin</li>
      <li>MASAK blokajı kontrolü: hesapta sık ve kaynağı belirsiz transferler dönüyorsa MASAK geçici kısıt koymuş olabilir; bu durumda şubeye gidip işlemlerin fatura/sözleşmelerini ibraz edin</li>
      <li>Borç dosyası: kısıtlama bir icra takibinden kaynaklanıyorsa icra dairesine gidip borcun tamamını kapatın veya taahhüt vererek kısıtlamayı kaldırtın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>İşlemlerin kaynağını gösteren belge (fatura, sözleşme vb.)</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">İdari kısıt ile yasal bloke aynı şey mi?</p>
      <p class="sss-cevap">Hayır, idari kısıt bankanın kendi kararıyla koyduğu bir önlemdir; yasal bloke ise mahkeme, savcılık veya vergi dairesi gibi resmi bir kurumun talebine dayanır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">MASAK incelemesi ne kadar sürer?</p>
      <p class="sss-cevap">Yasal olarak 7 iş günü ile sınırlı olsa da uygulamada bu süre 15-60 güne kadar uzayabilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/banka-hesabinda-kisitlama-nasil-kalkar">Banka Hesabımda Kısıtlama Görünüyor</a></li>
      <li><a href="/hesap-blokesi">Hesabımda Bloke Var, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Banka Hesabında Yasal Takip Kısıtlaması Ne Demek? Nasıl Çözülür?", "description": "Hesapta bakiye olmasına rağmen para çekilemiyorsa 'Yasal Takip Kısıtlaması' veya 'İdari Kısıt' ne anlama gelir, nasıl çözülür?", "url": "https://parakarne.com/banka-hesabinda-yasal-takip-kisitlamasi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "İdari kısıt ile yasal bloke aynı şey mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, idari kısıt bankanın kendi kararıyla koyduğu bir önlemdir; yasal bloke ise mahkeme, savcılık veya vergi dairesi gibi resmi bir kurumun talebine dayanır."}}, {"@type": "Question", "name": "MASAK incelemesi ne kadar sürer?", "acceptedAnswer": {"@type": "Answer", "text": "Yasal olarak 7 iş günü ile sınırlı olsa da uygulamada bu süre 15-60 güne kadar uzayabilir."}}]}],
  },
  {
    slug: "banka-musteri-hizmetlerine-direkt-baglanma",
    title: `Ziraat, Garanti, Akbank Müşteri Hizmetlerine Direkt Bağlanma`,
    description: `Banka müşteri hizmetleri robotunu (telesekreter/sesli yanıt sistemi) geçip doğrudan müşteri temsilcisine bağlanma yöntemleri.`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Banka müşteri hizmetlerine hızlı bağlanmak için sesli asistan konuşurken net bir şekilde "müşteri temsilcisi" demek veya bankanıza özel tuş kombinasyonunu (örn. Ziraat'te 1-6-0) denemek genellikle işe yarar.</p>
  <p class="lead">Bankaların sesli yanıt sistemleri (telesekreter robotları) bazen canlı bir temsilciye bağlanmayı 10-15 dakika sürdürebilir. Aşağıdaki yöntemler bu süreyi kısaltmaya yardımcı olabilir — ancak bankalar bu menüleri zaman zaman değiştirdiği için, bir yöntem işe yaramazsa alternatiflerini deneyin. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, en güvenilir yöntem her zaman "müşteri temsilcisi" ifadesini net bir şekilde tekrarlamak oluyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Ziraat Bankası (444 00 00): telesekreter konuşmaya başladığında sırasıyla 1 (Bankacılık İşlemleri) → 6 (Diğer İşlemler) → 0 (Müşteri Temsilcisi) tuşlarını deneyebilirsiniz</li>
      <li>Garanti BBVA (444 0 333): sesli asistan soru sorduğunda "Müşteri Temsilcisi" veya "Temsilciye Bağlan" ifadesini net bir sesle birkaç kez tekrarlamak genellikle sizi doğrudan temsilciye yönlendirir</li>
      <li>Akbank (444 25 25): T.C. kimlik numaranızı ve şifrenizi girdikten sonra menüde temsilciye yönlendiren tuşu (bankanın o anki menüsüne göre değişebilir) deneyebilirsiniz</li>
      <li>Genel/her banka için işe yarayabilecek yöntem: sesli asistana konuşurken sürekli net bir şekilde "müşteri temsilcisi" demek, çoğu modern sesli yanıt sisteminde işe yarar</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Öncelikle bankanızın resmi numarasını arayın (numarayı bankanın kendi sitesinden veya kartınızın arkasından teyit edin)</li>
      <li>Telesekreter/sesli asistan konuşmaya başladığında yukarıdaki tuş kombinasyonunu veya "müşteri temsilcisi" ifadesini deneyin</li>
      <li>İşe yaramazsa, "kayıp/çalıntı kart" veya "şüpheli işlem" hattını deneyin — bu hatlar genellikle bekleme sırası olmadan doğrudan bir temsilciye bağlar (yalnızca gerçekten ilgili bir durumda kullanın)</li>
      <li>Tuş kombinasyonu güncel değilse (bankalar bunları zaman zaman değiştirir), bankanın resmi sitesinden veya sosyal medya hesabından güncel yönlendirmeyi kontrol edin</li>
      <li>Bağlanamamanızın sebebi bazen aradığınız numara değil, telefonunuzla ilgili bir durum da olabilir — örneğin yakın zamanda telefon değiştirdiyseniz, <a href="/sim-kart-blokesi-bankaya-giremiyorum">SIM kartınız yüzünden de bloke</a> yaşamış olabilirsiniz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Banka müşteri numaranız/kart bilgisi</li>
      <li>T.C. kimlik numaranız</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Bu tuş kombinasyonları her zaman çalışır mı?</p>
      <p class="sss-cevap">Hayır, garanti edilemez — bankalar sesli yanıt sistemi menülerini zaman zaman günceller. Bir kombinasyon işe yaramazsa "müşteri temsilcisi" demeyi veya kayıp/çalıntı hattını denemenizi öneririz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kayıp/çalıntı hattından her işlemi yapabilir miyim?</p>
      <p class="sss-cevap">Hayır, bu hat genellikle sadece kart bloke etme ve güvenlik işlemleri için tasarlanmıştır; bakiye sorgulama gibi standart işlemler için normal hattı kullanmanız gerekir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hiçbiri işe yaramazsa ne yapmalıyım?</p>
      <p class="sss-cevap">Bankanızın mobil uygulaması veya internet şubesi üzerinden canlı destek/mesaj seçeneğini deneyebilir, ya da en yakın şubeye gidebilirsiniz.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
      <li><a href="/banka-hesabinda-kisitlama-nasil-kalkar">Banka Hesabımda Kısıtlama Görünüyor</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Banka Müşteri Hizmetlerine Doğrudan Nasıl Bağlanılır?", "description": "Banka müşteri hizmetleri robotunu (telesekreter/sesli yanıt sistemi) geçip doğrudan müşteri temsilcisine bağlanma yöntemleri.", "url": "https://parakarne.com/banka-musteri-hizmetlerine-direkt-baglanma", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Bu tuş kombinasyonları her zaman çalışır mı?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, garanti edilemez — bankalar sesli yanıt sistemi menülerini zaman zaman günceller. Bir kombinasyon işe yaramazsa \"müşteri temsilcisi\" demeyi veya kayıp/çalıntı hattını denemenizi öneririz."}}, {"@type": "Question", "name": "Kayıp/çalıntı hattından her işlemi yapabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, bu hat genellikle sadece kart bloke etme ve güvenlik işlemleri için tasarlanmıştır; bakiye sorgulama gibi standart işlemler için normal hattı kullanmanız gerekir."}}, {"@type": "Question", "name": "Hiçbiri işe yaramazsa ne yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Bankanızın mobil uygulaması veya internet şubesi üzerinden canlı destek/mesaj seçeneğini deneyebilir, ya da en yakın şubeye gidebilirsiniz."}}]}],
  },
  {
    slug: "borc-kapandi-kayit-acik",
    title: `Borcu Kapattım Ama Kayıt Açık Görünüyor`,
    description: `Kredi veya kart borcunuzu ödediğiniz halde kayıt hâlâ açık mı görünüyor? Yapmanız gerekenler.`,
    category: "Findeks ve KKB",
    bodyHtml: `<p class="lead">Ödeme sonrası sistem güncellemesi bazen birkaç iş günü sürebilir. Süre geçmesine rağmen kayıt düzelmiyorsa aşağıdaki adımları izleyin. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, bankaların KKB'ye bildirim gecikmesi, kullanıcıların en çok mağdur olduğu noktalardan biri.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Ödemenin sisteme yansıması için gereken normal işlem süresi</li>
      <li>Ödemenin yanlış hesaba veya eksik tutarla yapılmış olması</li>
      <li>Bankanın Findeks/KKB'ye bildirim güncellemesini henüz yapmamış olması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Ödeme dekontunuzu saklayın ve tarih/tutarı kontrol edin</li>
      <li>3-5 iş günü bekleyin, sistemsel güncelleme süresi tanıyın</li>
      <li>Süre geçtiyse dekontla birlikte bankaya yazılı başvuru yapın</li>
      <li>Gerekiyorsa Findeks üzerinden kayıt güncelleme talebinde bulunun</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Ödeme dekontu</li>
      <li>Hesap ekstresi</li>
      <li>T.C. kimlik belgesi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Borcu kapattıktan sonra Findeks ne zaman güncellenir?</p>
      <p class="sss-cevap">Genelde birkaç iş günü içinde güncellenir, ancak banka bildirimi geciktirirse 10-15 günü bulabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">KKB'ye ayrıca başvurmam gerekir mi?</p>
      <p class="sss-cevap">Banka bildirimi gecikirse veya yapılmazsa evet, doğrudan KKB Müşteri İlişkileri'ne yazılı başvuru yapmanız faydalı olur.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Risk Merkezi Raporu almam neden öneriliyor?</p>
      <p class="sss-cevap">Bu rapor, Findeks'ten bağımsız olarak güncel borç/takip durumunuzu gösterir; iki kaynağı karşılaştırmak hatayı daha hızlı fark etmenizi sağlar.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kayıt hâlâ açık görünüyorsa ne yapmalıyım?</p>
      <p class="sss-cevap">Dekont ve borcu yoktur yazısıyla bankaya yazılı başvuru yapın; sonuç alamazsanız Bankalar Birliği'ne şikayette bulunabilirsiniz.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kkb-findeks-kaydi-hatali">KKB/Findeks Kaydı Hatalıysa Ne Yapılır?</a></li>
      <li><a href="/findeks-rehberi">Findeks Rehberi</a></li>
      <li><a href="/yasal-takipten-cikma">Yasal Takipten Çıkma</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Borcumu Kapattım Ama Bankada Hâlâ Açık Görünüyor", "description": "Kredi veya kart borcunuzu ödediğiniz halde kayıt hâlâ açık mı görünüyor? Yapmanız gerekenler.", "url": "https://parakarne.com/borc-kapandi-kayit-acik", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Borcu kapattıktan sonra Findeks ne zaman güncellenir?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde birkaç iş günü içinde güncellenir, ancak banka bildirimi geciktirirse 10-15 günü bulabilir."}}, {"@type": "Question", "name": "KKB'ye ayrıca başvurmam gerekir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Banka bildirimi gecikirse veya yapılmazsa evet, doğrudan KKB Müşteri İlişkileri'ne yazılı başvuru yapmanız faydalı olur."}}, {"@type": "Question", "name": "Risk Merkezi Raporu almam neden öneriliyor?", "acceptedAnswer": {"@type": "Answer", "text": "Bu rapor, Findeks'ten bağımsız olarak güncel borç/takip durumunuzu gösterir; iki kaynağı karşılaştırmak hatayı daha hızlı fark etmenizi sağlar."}}, {"@type": "Question", "name": "Kayıt hâlâ açık görünüyorsa ne yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Dekont ve borcu yoktur yazısıyla bankaya yazılı başvuru yapın; sonuç alamazsanız Bankalar Birliği'ne şikayette bulunabilirsiniz."}}]}],
  },
  {
    slug: "borctan-dolayi-hapis-cezasi-var-mi",
    title: `Borçtan Dolayı Hapis Cezası Var mı? Taahhüdü İhlal`,
    description: `Borç ödenmediği için hapse girilir mi? Taahhüdü ihlal, tazyik hapsi ve mal bildirim beyannamesi hakkında güncel ve doğru bilgiler.`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">Türk hukukunda borç, adli bir suç değildir; sadece borcunuz olduğu için hapse girmezsiniz. Ancak icra dairesinde verilen bir ödeme taahhüdünün ihlali özel bir istisnadır. Biz ParaKarne ekibi olarak gördük ki, bu konudaki en büyük kafa karışıklığı, borcun kendisi ile icra dairesinde verilen bir taahhüdün ihlalinin birbirine karıştırılmasından kaynaklanıyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Sadece bir bankaya/kredi kartına borcunuz olması TEK BAŞINA hapis nedeni DEĞİLDİR</li>
      <li>Risk: İcra dairesinde bizzat imzaladığınız bir ÖDEME TAAHHÜDÜNÜ (İİK madde 340) makbul bir sebep olmaksızın ihlal etmeniz</li>
      <li>Bu durumda alacaklının şikayeti üzerine en fazla 3 AYA KADAR "tazyik hapsi" uygulanabilir — adli sicile işlemez, borcu ödeyince serbest kalırsınız</li>
      <li>Bu yaptırım yalnızca takip tutarı brüt asgari ücretin üzerindeyse uygulanır; altındaki takiplerde tazyik hapsi söz konusu değildir</li>
      <li>Nafaka borcunun ödenmemesi ayrı bir madde (İİK m.344) kapsamında değerlendirilir ve önceliklidir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Panik yapmadan önce borcunuzun türünü (adi borç mu, nafaka mı, taahhüt verilmiş mi) netleştirin</li>
      <li>İcra dairesinde bir ödeme taahhüdü imzalamadan önce gerçekten ödeyebileceğinizden emin olun</li>
      <li>Taahhüt imzaladıysanız yerine getirmeye özen gösterin; ödeyemeyecek duruma düşerseniz önceden bir avukata danışın</li>
      <li>Tazyik hapsi kararı geldiyse kararın tebliğinden itibaren 7 gün içinde itiraz hakkınızı kullanın</li>
      <li>Mal bildirim beyannamesi (İİK m.44) istenirse süresi içinde eksiksiz doldurup teslim edin — not: yalnızca süresinde beyanda bulunmamaya verilen disiplin hapsi 2008'de Anayasa Mahkemesi tarafından iptal edilmiştir; ancak beyanda YALAN bilgi vermek (İİK m.338) hâlâ ayrı ve geçerli bir suçtur</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>İcra dosya numarası</li>
      <li>Varsa imzaladığınız taahhütname</li>
      <li>Tebligat belgesi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Sadece kredi kartı borcum var, hapse girer miyim?</p>
      <p class="sss-cevap">Hayır, sadece borç olması hapis nedeni değildir; sadece icra dairesinde imzalanan bir ödeme taahhüdünün ihlali durumunda tazyik hapsi gündeme gelebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Tazyik hapsi en fazla ne kadar sürer?</p>
      <p class="sss-cevap">İİK madde 340 uyarınca aynı borçtan dolayı en fazla 3 ay sürebilir; borcu öderseniz derhal serbest kalırsınız.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Mal bildiriminde bulunmazsam hapse girer miyim?</p>
      <p class="sss-cevap">Sadece süresinde beyanda bulunmamaya verilen disiplin hapsi 2008'de Anayasa Mahkemesi tarafından iptal edilmiştir; ancak beyanda yalan bilgi vermek hâlâ ayrı bir suçtur.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Nafaka borcu için de aynı kurallar mı geçerli?</p>
      <p class="sss-cevap">Hayır, nafaka borcunun ödenmemesi İİK madde 344 kapsamında ayrı ve öncelikli bir düzenlemeye tabidir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/89-1-89-2-89-3-haciz-ihbarnamesi">89/1, 89/2, 89/3 Haciz İhbarnamesi</a></li>
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Borcumdan Dolayı Hapse Girer miyim?", "description": "Borç ödenmediği için hapse girilir mi? Taahhüdü ihlal, tazyik hapsi ve mal bildirim beyannamesi hakkında güncel ve doğru bilgiler.", "url": "https://parakarne.com/borctan-dolayi-hapis-cezasi-var-mi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Sadece kredi kartı borcum var, hapse girer miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, sadece borç olması hapis nedeni değildir; sadece icra dairesinde imzalanan bir ödeme taahhüdünün ihlali durumunda tazyik hapsi gündeme gelebilir."}}, {"@type": "Question", "name": "Tazyik hapsi en fazla ne kadar sürer?", "acceptedAnswer": {"@type": "Answer", "text": "İİK madde 340 uyarınca aynı borçtan dolayı en fazla 3 ay sürebilir; borcu öderseniz derhal serbest kalırsınız."}}, {"@type": "Question", "name": "Mal bildiriminde bulunmazsam hapse girer miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Sadece süresinde beyanda bulunmamaya verilen disiplin hapsi 2008'de Anayasa Mahkemesi tarafından iptal edilmiştir; ancak beyanda yalan bilgi vermek hâlâ ayrı bir suçtur."}}, {"@type": "Question", "name": "Nafaka borcu için de aynı kurallar mı geçerli?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, nafaka borcunun ödenmemesi İİK madde 344 kapsamında ayrı ve öncelikli bir düzenlemeye tabidir."}}]}],
  },
  {
    slug: "cihaz-dogrulama-hatasi-banka-uygulamasi",
    title: `Banka Uygulamalarında Cihaz Doğrulama Hatası Nasıl Çözülür?`,
    description: `Mobil bankacılıkta 'Güvenli Olmayan Cihaz/Yazılım Tespit Edildi' uyarısı nasıl çözülür? Root, VPN ve ekran paylaşımı kaynaklı hatalar.`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Cihaz doğrulama hatasını çözmek için önce Geliştirici Seçenekleri'ni kapatın, VPN/ekran paylaşımı uygulamalarını sonlandırın, sonra banka uygulamasının önbelleğini temizleyip güncel sürümünü resmi mağazadan tekrar yükleyin.</p>
  <p class="lead">Mobil bankacılık uygulamalarına giriş yaparken sıklıkla karşılaşılan "Cihaz Doğrulama Hatası" veya "Güvenli Olmayan Cihaz/Yazılım Tespit Edildi" uyarısı, bankaların siber güvenlik duvarlarından kaynaklanır. Telefonunuza root (Android) veya jailbreak (iOS) attıysanız ya da arka planda güvensiz bir VPN/ekran kaydetme uygulaması varsa banka güvenliğinizi tehlikede görür. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, bu hatanın çoğu zaman kullanıcının haberi bile olmadan çalışan bir arka plan uygulamasından kaynaklandığını gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Telefona root (Android) veya jailbreak (iOS) atılmış olması</li>
      <li>Arka planda açık VPN uygulaması bulunması</li>
      <li>Ekran paylaşımı/kaydetme uygulaması (Zoom, Discord vb.) aktif olması</li>
      <li>Banka uygulamasının eski/bozuk önbelleğe sahip olması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Geliştirici Seçeneklerini kapatın: Ayarlar menüsünden "Geliştirici Seçenekleri" (Developer Options) kısmını bulup tamamen kapalı konuma getirin</li>
      <li>VPN ve ekran paylaşımını sonlandırın: arka planda açık VPN uygulamalarını kapatın; ekran paylaşımı yapıyorsanız (Zoom, Discord vb.) bu uygulamaları sonlandırın</li>
      <li>Uygulama önbelleğini temizleyin: Ayarlar > Uygulamalar > ilgili banka uygulaması > "Önbelleği ve Verileri Temizle"; ardından uygulamayı silip güncel halini resmi mağazadan (Google Play/App Store) tekrar yükleyin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Banka müşteri numaranız</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Rootlu telefonda banka uygulaması hiç çalışmaz mı?</p>
      <p class="sss-cevap">Çoğu banka uygulaması güvenlik nedeniyle rootlu/jailbreak'li cihazlarda çalışmayı reddeder; çözüm için cihazın rootunu kaldırmanız gerekebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">VPN kapatmama rağmen hata devam ediyor, neden?</p>
      <p class="sss-cevap">Bazı VPN uygulamaları arka planda tam kapanmayabilir; cihazı yeniden başlatmayı ve uygulamayı tamamen kaldırıp tekrar yüklemeyi deneyin.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
      <li><a href="/internet-bankaciligi-sifre-blokesi-kaldirma">İnternet Bankacılığı Şifre Blokesi</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Banka Uygulamalarında Cihaz Doğrulama Hatası Nasıl Çözülür?", "description": "Mobil bankacılıkta 'Güvenli Olmayan Cihaz/Yazılım Tespit Edildi' uyarısı nasıl çözülür? Root, VPN ve ekran paylaşımı kaynaklı hatalar.", "url": "https://parakarne.com/cihaz-dogrulama-hatasi-banka-uygulamasi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Rootlu telefonda banka uygulaması hiç çalışmaz mı?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu banka uygulaması güvenlik nedeniyle rootlu/jailbreak'li cihazlarda çalışmayı reddeder; çözüm için cihazın rootunu kaldırmanız gerekebilir."}}, {"@type": "Question", "name": "VPN kapatmama rağmen hata devam ediyor, neden?", "acceptedAnswer": {"@type": "Answer", "text": "Bazı VPN uygulamaları arka planda tam kapanmayabilir; cihazı yeniden başlatmayı ve uygulamayı tamamen kaldırıp tekrar yüklemeyi deneyin."}}]}],
  },
  {
    slug: "ev-esyalarina-haciz-gelir-mi",
    title: `Ev Eşyalarıma Haciz Gelir mi? Haczedilemeyen Eşyalar`,
    description: `Evinize haciz gelirse hangi eşyalar haczedilemez? İİK m.82 kapsamındaki muafiyetler ve haksız haciz durumunda yapılacaklar.`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">İcra ve İflas Kanunu, borçlunun ve ailesinin temel yaşamını sürdürebilmesi için bazı ev eşyalarını haciz dışında tutar. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, pek çok kişi haciz sırasında hangi eşyaların yasal olarak muaf olduğunu bilmediği için haklarını kullanamıyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Buzdolabı, çamaşır makinesi, fırın gibi temel mutfak/ev eşyaları haczedilemez</li>
      <li>Yatak, yorgan gibi zorunlu yatak takımları haczedilemez</li>
      <li>Borçlunun mesleğini icra etmesi için gerekli alet ve edevat haczedilemez</li>
      <li>İSTİSNA: Lüks eşyalar veya aynı türden birden fazla eşya (örn. ikinci bir televizyon) haczedilebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Haciz sırasında icra memuruna hangi eşyaların yasal olarak muaf olduğunu hatırlatın</li>
      <li>Haksız şekilde temel eşyanıza haciz konulduysa haciz tutanağına itirazınızı yazdırın</li>
      <li>Tutanak tarihinden itibaren 7 gün içinde icra mahkemesine şikayet yoluyla itiraz edin</li>
      <li>Gerekirse bir icra avukatından destek alın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Haciz tutanağı</li>
      <li>Eşyalara ait faturalar (varsa)</li>
      <li>T.C. kimlik belgesi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">İkinci bir televizyonum haczedilebilir mi?</p>
      <p class="sss-cevap">Evet, aynı türden birden fazla eşya (örn. ikinci TV) haciz muafiyeti kapsamında değildir, haczedilebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Haciz sırasında itiraz edebilir miyim?</p>
      <p class="sss-cevap">Evet, haksız şekilde temel eşyanıza haciz konulduysa haciz tutanağına itirazınızı yazdırabilir, 7 gün içinde icra mahkemesine şikayet yoluyla itiraz edebilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kiralık evdeki eşyalarım da haczedilir mi?</p>
      <p class="sss-cevap">Evinizdeki eşyalarınız, ev kiralık olsa bile sizin mülkiyetinizdeyse haciz kapsamına girebilir; temel eşya muafiyeti yine geçerlidir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/maas-haczi-ne-kadar-kesilir">Maaş Haczi Ne Kadar Kesilir?</a></li>
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Evime Haciz Gelirse Eşyalarım Alınır mı?", "description": "Evinize haciz gelirse hangi eşyalar haczedilemez? İİK m.82 kapsamındaki muafiyetler ve haksız haciz durumunda yapılacaklar.", "url": "https://parakarne.com/ev-esyalarina-haciz-gelir-mi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "İkinci bir televizyonum haczedilebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, aynı türden birden fazla eşya (örn. ikinci TV) haciz muafiyeti kapsamında değildir, haczedilebilir."}}, {"@type": "Question", "name": "Haciz sırasında itiraz edebilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, haksız şekilde temel eşyanıza haciz konulduysa haciz tutanağına itirazınızı yazdırabilir, 7 gün içinde icra mahkemesine şikayet yoluyla itiraz edebilirsiniz."}}, {"@type": "Question", "name": "Kiralık evdeki eşyalarım da haczedilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evinizdeki eşyalarınız, ev kiralık olsa bile sizin mülkiyetinizdeyse haciz kapsamına girebilir; temel eşya muafiyeti yine geçerlidir."}}]}],
  },
  {
    slug: "fast-ile-yanlis-hesaba-para-gonderme",
    title: `FAST ile Yanlış Hesaba Giden Para Nasıl Geri Alınır?`,
    description: `FAST işlemiyle yanlışlıkla gönderilen para nasıl geri alınır? Kolay adres hatası, şüpheli işlem hattı ve sebepsiz zenginleşme davası.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> FAST ile yanlış hesaba para gönderdiyseniz, hemen bankanızın "kayıp/çalıntı/şüpheli işlem" hattını arayıp "Hatalı Bilgi ile FAST Gönderimi" kaydı açtırmanız gerekir; bankanız karşı bankayla iletişime geçip paraya bloke koyulmasını talep eder.</p>
  <p class="lead">EFT işlemleri belirli saatlerde yapıldığı için bazen iptal edilebilir; ancak 7/24 anında hesaba geçen FAST işlemlerinde para saniyeler içinde karşı tarafa aktarılır. Yanlışlıkla yapılan FAST transferlerinde paranızı kurtarmak için zamana karşı yarışmanız gerekir.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Kolay Adres (telefon numarası/e-posta) üzerinden yanlış kişiye gönderim yapılması</li>
      <li>IBAN'ın bir haneli yanlış girilmesi</li>
      <li>Alıcı adının kontrol edilmeden hızlıca işlem tamamlanması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Kolay Adres (KOLAS) bilgisini kontrol edin: parayı telefon numarası veya e-posta gibi bir kolay adrese gönderdiyseniz hemen bankanızı arayıp "Hatalı Bilgi ile FAST Gönderimi" kaydı açtırın</li>
      <li>"Kayıp/Çalıntı/Şüpheli İşlem" hattını arayın: normal menülerde sıra beklemeden doğrudan acil yardım/şüpheli işlem menüsüne bağlanıp durumu bildirin; bankanız karşı bankayla iletişime geçip paraya bloke koyulmasını talep eder</li>
      <li>Yasal süreç (sebepsiz zenginleşme): karşı taraf parayı iade etmezse, Türk Borçlar Kanunu'na dayanan "sebepsiz zenginleşme" davası açma hakkınız vardır; bankadan alacağınız işlem dekontuyla dava sürecini başlatabilirsiniz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>İşlem dekontu</li>
      <li>Alıcı IBAN/telefon bilgisi</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">FAST işlemi EFT gibi iptal edilebilir mi?</p>
      <p class="sss-cevap">Hayır, FAST anında ve geri döndürülemez şekilde gerçekleşir; iptal yerine bankanızın şüpheli işlem/itiraz sürecini başlatmanız gerekir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Karşı taraf parayı harcadıysa ne olur?</p>
      <p class="sss-cevap">Parayı harcamış olması, kişiyi sebepsiz zenginleşme davasından ve TCK madde 160 kapsamındaki sorumluluktan kurtarmaz.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/yanlislikla-gelen-parayi-harcamak-suc-mu">Banka Hesabına Yanlışlıkla Gelen Parayı Harcamak Suç mu?</a></li>
      <li><a href="/kredi-karti-harcama-itirazi">Kredi Kartı Harcama İtirazı</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "FAST ile Yanlış Hesaba Giden Para Nasıl Geri Alınır?", "description": "FAST işlemiyle yanlışlıkla gönderilen para nasıl geri alınır? Kolay adres hatası, şüpheli işlem hattı ve sebepsiz zenginleşme davası.", "url": "https://parakarne.com/fast-ile-yanlis-hesaba-para-gonderme", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "FAST işlemi EFT gibi iptal edilebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, FAST anında ve geri döndürülemez şekilde gerçekleşir; iptal yerine bankanızın şüpheli işlem/itiraz sürecini başlatmanız gerekir."}}, {"@type": "Question", "name": "Karşı taraf parayı harcadıysa ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "Parayı harcamış olması, kişiyi sebepsiz zenginleşme davasından ve TCK madde 160 kapsamındaki sorumluluktan kurtarmaz."}}]}],
  },
  {
    slug: "findeks-rehberi",
    title: `Findeks Rehberi: Findeks Nedir, Nasıl Okunur?`,
    description: `Findeks raporu nedir, kredi notunu neler etkiler, Turkcell/Vodafone gibi finansman şirketlerinin Findeks'e etkisi nedir?`,
    category: "Findeks ve KKB",
    bodyHtml: `<p class="lead">Findeks, Kredi Kayıt Bürosu'nun (KKB) tükettiği bir hizmettir ve kredi notunuzu, mevcut kredi/kart borçlarınızı ve varsa yasal takip kayıtlarınızı gösterir. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, kullanıcıların büyük kısmının Findeks ile Risk Merkezi raporu arasındaki farkı bilmediğini gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Sadece bankalardan kullanılan krediler değil, Turkcell/Vodafone/Türk Telekom gibi operatörlerden veya Evkur gibi mağazalardan taksitli alınan ürünler de Findeks/KKB'ye bildirilir</li>
      <li>Bu nedenle "hiç kredi çekmedim" dediğiniz halde Findeks'te bir kayıt görebilirsiniz — bu genellikle taksitli bir telefon veya ürün alımından kaynaklanır</li>
      <li>Kredi kartı/ek hesap kullanım oranı yüksekse kredi notu düşük görünebilir; borç kapatıldıktan sonra not birkaç gün içinde güncellenir</li>
      <li>Yasal takipte olan bir dosya, borç kapansa bile bildirim yapılana kadar raporda görünmeye devam edebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Findeks raporunuzu e-Devlet veya Findeks'in kendi sitesinden düzenli olarak kontrol edin</li>
      <li>Raporda tanımadığınız bir kayıt görürseniz, hangi kurumdan geldiğini (banka, operatör, mağaza vb.) kontrol edin</li>
      <li>Bir borcu kapattıysanız, raporun güncellenmesi için birkaç gün ile birkaç hafta arasında bekleyin</li>
      <li>Hatalı veya güncellenmemiş bir kayıt gördüğünüzde ilgili kuruma yazılı başvuru yapın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Findeks/Risk Merkezi Raporu</li>
      <li>T.C. kimlik belgesi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Findeks ile Risk Merkezi Raporu aynı şey mi?</p>
      <p class="sss-cevap">Hayır, ikisi farklı kaynaklardır; Findeks KKB'nin tüketiciye sunduğu bir hizmet, Risk Merkezi ise Türkiye Bankalar Birliği'ne bağlı ayrı bir kuruluştur. İkisini karşılaştırmak faydalı olabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kredi notum ne zaman güncellenir?</p>
      <p class="sss-cevap">Borç ödeme/kapama gibi bildirimlerin rapora yansıması genelde birkaç gün sürer; finansal kurumların bildirim hızına bağlıdır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Findeks raporunu ücretsiz alabilir miyim?</p>
      <p class="sss-cevap">Findeks bazı temel raporları ücretsiz, bazı detaylı raporları ücretli sunar; güncel fiyatlandırmayı Findeks'in kendi sitesinden kontrol edin.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kkb-findeks-kaydi-hatali">KKB/Findeks Kaydı Hatalıysa Ne Yapılır?</a></li>
      <li><a href="/operator-evkur-finansman-borcu-findeks">Turkcell/Vodafone/Evkur Borçları Findeks'te Neden Görünür?</a></li>
      <li><a href="/yasal-takipten-cikma">Yasal Takipten Çıkma</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Findeks Nedir, Raporumu Nasıl Okumalıyım?", "description": "Findeks raporu nedir, kredi notunu neler etkiler, Turkcell/Vodafone gibi finansman şirketlerinin Findeks'e etkisi nedir?", "url": "https://parakarne.com/findeks-rehberi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Findeks ile Risk Merkezi Raporu aynı şey mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, ikisi farklı kaynaklardır; Findeks KKB'nin tüketiciye sunduğu bir hizmet, Risk Merkezi ise Türkiye Bankalar Birliği'ne bağlı ayrı bir kuruluştur. İkisini karşılaştırmak faydalı olabilir."}}, {"@type": "Question", "name": "Kredi notum ne zaman güncellenir?", "acceptedAnswer": {"@type": "Answer", "text": "Borç ödeme/kapama gibi bildirimlerin rapora yansıması genelde birkaç gün sürer; finansal kurumların bildirim hızına bağlıdır."}}, {"@type": "Question", "name": "Findeks raporunu ücretsiz alabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Findeks bazı temel raporları ücretsiz, bazı detaylı raporları ücretli sunar; güncel fiyatlandırmayı Findeks'in kendi sitesinden kontrol edin."}}]}],
  },
  {
    slug: "goruntulu-gorusmede-nfc-hatasi-cozumu",
    title: `Görüntülü Görüşmede NFC Kimlik Okuma Hatası Çözümü`,
    description: `Şubeye gitmeden görüntülü görüşmeyle banka müşterisi olurken T.C. kimlik çipinin okunmaması (NFC hatası) nasıl çözülür?`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> NFC kimlik okuma hatasını çözmek için önce telefon kılıfını çıkarın, kimliği düz bir yüzeye koyup telefonu üzerine getirin ve tarama tamamlanana kadar (yaklaşık 5 saniye) hiç kıpırdatmadan bekleyin.</p>
  <p class="lead">Şubeye gitmeden görüntülü görüşmeyle banka müşterisi olmak istediğinizde, telefonun T.C. kimlik kartındaki çipi okumaması (NFC hatası) en sık yaşanan can sıkıcı sorunlardan biridir. Biz ParaKarne ekibi olarak gördük ki, bu hatanın büyük kısmı telefon kılıfından veya kimliğin yanlış konumlandırılmasından kaynaklanıyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Telefon kılıfının (özellikle kalın/metal içerikli kılıfların) NFC sinyalini kesmesi</li>
      <li>Kimlik kartının telefonun NFC antenine yanlış konumda tutulması</li>
      <li>Taramanın yarıda kesilecek şekilde telefonun veya kimliğin kıpırdatılması</li>
      <li>Android cihazlarda NFC servis önbelleğinin bozulmuş olması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Kılıfı çıkarın ve doğru konumu bulun: iPhone'da kimliği telefonun üst kamerasına yakın tutun; Android'de arka orta kısma yavaşça yaklaştırın</li>
      <li>Kimliği sabit tutun ve titretmeyin: kimlik kartını düz bir masaya koyun, telefonu üzerine getirip tarama başlayınca ses gelene kadar en az 5 saniye hiç kıpırdatmadan bekleyin</li>
      <li>NFC önbelleğini sıfırlayın (Android): telefon ayarlarına girip "NFC" diye arayın, NFC servislerinin önbelleğini temizleyip telefonu yeniden başlatarak tekrar deneyin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Çipli T.C. kimlik kartı</li>
      <li>NFC özellikli telefon</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Her telefonda NFC var mı?</p>
      <p class="sss-cevap">Çoğu modern akıllı telefonda var, ama bazı bütçe dostu/eski modellerde bulunmayabilir; telefon ayarlarınızdan NFC özelliğinin olup olmadığını kontrol edebilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Eski (çipsiz) kimlik kartıyla bu işlem yapılabilir mi?</p>
      <p class="sss-cevap">Hayır, NFC okuma yalnızca yeni nesil çipli T.C. kimlik kartlarında çalışır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/internet-bankaciligi-sifre-blokesi-kaldirma">İnternet Bankacılığı Şifre Blokesi</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Bankadan Hesap Açarken Kimlik Okuma Hatası (NFC Sorunu) Nasıl Çözülür?", "description": "Şubeye gitmeden görüntülü görüşmeyle banka müşterisi olurken T.C. kimlik çipinin okunmaması (NFC hatası) nasıl çözülür?", "url": "https://parakarne.com/goruntulu-gorusmede-nfc-hatasi-cozumu", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Her telefonda NFC var mı?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu modern akıllı telefonda var, ama bazı bütçe dostu/eski modellerde bulunmayabilir; telefon ayarlarınızdan NFC özelliğinin olup olmadığını kontrol edebilirsiniz."}}, {"@type": "Question", "name": "Eski (çipsiz) kimlik kartıyla bu işlem yapılabilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, NFC okuma yalnızca yeni nesil çipli T.C. kimlik kartlarında çalışır."}}]}],
  },
  {
    slug: "hesap-blokesi",
    title: `Banka Hesabında Bloke Var, Ne Yapmalıyım?`,
    description: `Banka hesabındaki bloke icra, e-haciz, vergi borcu, adli inceleme veya banka güvenlik sebebiyle oluşabilir. Blokenin kaynağı nasıl öğrenilir, nasıl kaldırılır?`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="lead">Hesap blokesi her zaman banka borcundan kaynaklanmaz — icra dosyası, vergi dairesi e-haczi, kamu alacağı, adli tedbir veya bankanın güvenlik politikası da sebep olabilir. Önce kaynağı öğrenmek şart. Biz ParaKarne ekibi olarak aldığımız geri bildirimlerde en çok karşılaştığımız durum, kullanıcıların blokenin kaynağını (banka mı, icra mı, vergi dairesi mi) öğrenmeden çözüm aramaya çalışması oluyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Bloke; icra dosyası, vergi dairesi e-haczi, kamu alacağı, savcılık/emniyet kaynaklı tedbir, şüpheli işlem incelemesi veya banka güvenlik politikası nedeniyle olabilir</li>
      <li>Borç ödenmiş olsa bile tahsil harcı veya dosya masrafı kaldığı için dosya açık görünebilir</li>
      <li>Banka, ilgili kurumdan kaldırma yazısı gelmeden blokeyi kendiliğinden kaldırmayabilir</li>
      <li>Not: Kripto borsası işlemleri veya şüpheli para trafiği kaynaklı kısıtlamaların ayrıntısı için <a href="/banka-hesabinda-kisitlama-nasil-kalkar">Kısıtlama Nasıl Kalkar</a> sayfamıza, icra/MASAK kaynaklı "yasal takip kısıtlaması" ayrımı için <a href="/banka-hesabinda-yasal-takip-kisitlamasi">Yasal Takip Kısıtlaması</a> sayfamıza bakabilirsiniz</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Bankanın şubesine gidip blokenin hangi kurumdan, hangi dosya/yazı numarasıyla, ne tutarda konulduğunu sorun</li>
      <li>e-Devlet üzerinden icra ve e-haciz sorgusu yapın (Gelir İdaresi Başkanlığı'nın "Banka Hesaplarına Uygulanan Elektronik Haciz Sorgulama" hizmeti dahil)</li>
      <li>İcra kaynaklıysa: borç kapalıysa dekont ve kapanış yazılarını hazırlayıp ilgili icra dairesinden bankaya haczin kaldırılması için yazı gönderilmesini isteyin</li>
      <li>Vergi/kamu kaynaklıysa: borcu ödeyin, yapılandırın veya hatalıysa itiraz edin, sonra kurumdan haczin kaldırılmasını talep edin</li>
      <li>Adli/şüpheli işlem kaynaklıysa panik yapmadan bankadan başvuru kayıt numarası alın, gerekirse avukat desteği alın</li>
      <li>Çözülmezse yazılı başvuru yapıp BDDK e-Şikayet veya CİMER gibi resmi yolları değerlendirin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Ödeme dekontu (varsa)</li>
      <li>Borcu yoktur yazısı</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.turkiye.gov.tr/gib-intvrg-banka-hesaplarina-uygulanan-elektronik-haciz-sorgulama" target="_blank" rel="noopener nofollow">e-Devlet banka hesaplarına uygulanan elektronik haciz sorgulama</a></li>
      <li><a href="https://www.turkiye.gov.tr/adalet-icra-dosyasi-sorgulama" target="_blank" rel="noopener nofollow">e-Devlet icra dosyası sorgulama</a></li>
      <li><a href="https://ebulten.bddk.org.tr/esikayet/" target="_blank" rel="noopener nofollow">BDDK e-Şikayet</a></li>
      <li><a href="https://www.bddk.org.tr/iletisim" target="_blank" rel="noopener nofollow">BDDK iletişim ve şikayet bilgisi</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Hesap blokesi kaç günde kalkar?</p>
      <p class="sss-cevap">Bloke, icra/vergi dairesinden kaldırma yazısı bankaya ulaştıktan sonra genelde birkaç iş günü içinde kalkar. Kesin süre, ilgili kurumun yazışma hızına bağlıdır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Banka neden bloke koyar?</p>
      <p class="sss-cevap">Banka kendi başına nadiren bloke koyar; genelde icra dairesi, vergi dairesi, savcılık/emniyet gibi bir kurumun talebi veya bankanın kendi şüpheli işlem incelemesi sebep olur.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">e-Haciz ile hesap blokesi aynı şey mi?</p>
      <p class="sss-cevap">Hayır, e-haciz vergi/kamu borcu için Gelir İdaresi'nin elektronik olarak koyduğu bir bloke türüdür; hesap blokesi ise icra, adli tedbir veya banka güvenliği gibi daha geniş bir kategoridir. e-Haciz, hesap blokesinin bir alt türüdür diyebiliriz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Borcumu kapattım ama bloke hâlâ duruyor, neden?</p>
      <p class="sss-cevap">Genelde ödenmiş olsa bile kalan harç/masraf nedeniyle dosya teknik olarak açık görünebilir, ya da ilgili kurum bankaya henüz kaldırma yazısı göndermemiştir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Blokeyi kaldırmak için mutlaka avukat gerekir mi?</p>
      <p class="sss-cevap">Hayır, çoğu durumda ilgili icra dairesi veya vergi dairesiyle doğrudan siz de görüşüp kaldırma talebinde bulunabilirsiniz; sadece karmaşık dosyalarda avukat desteği faydalı olabilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
      <li><a href="/maas-haczi-ne-kadar-kesilir">Maaş Haczi Ne Kadar Kesilir?</a></li>
      <li><a href="/borc-kapandi-kayit-acik">Borç Kapandı, Kayıt Açık Görünüyor</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Hesabımda Bloke Var, Nasıl Kaldırırım?", "description": "Banka hesabındaki bloke icra, e-haciz, vergi borcu, adli inceleme veya banka güvenlik sebebiyle oluşabilir. Blokenin kaynağı nasıl öğrenilir, nasıl kaldırılır?", "url": "https://parakarne.com/hesap-blokesi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Hesap blokesi kaç günde kalkar?", "acceptedAnswer": {"@type": "Answer", "text": "Bloke, icra/vergi dairesinden kaldırma yazısı bankaya ulaştıktan sonra genelde birkaç iş günü içinde kalkar. Kesin süre, ilgili kurumun yazışma hızına bağlıdır."}}, {"@type": "Question", "name": "Banka neden bloke koyar?", "acceptedAnswer": {"@type": "Answer", "text": "Banka kendi başına nadiren bloke koyar; genelde icra dairesi, vergi dairesi, savcılık/emniyet gibi bir kurumun talebi veya bankanın kendi şüpheli işlem incelemesi sebep olur."}}, {"@type": "Question", "name": "e-Haciz ile hesap blokesi aynı şey mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, e-haciz vergi/kamu borcu için Gelir İdaresi'nin elektronik olarak koyduğu bir bloke türüdür; hesap blokesi ise icra, adli tedbir veya banka güvenliği gibi daha geniş bir kategoridir. e-Haciz, hesap blokesinin bir alt türüdür diyebiliriz."}}, {"@type": "Question", "name": "Borcumu kapattım ama bloke hâlâ duruyor, neden?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde ödenmiş olsa bile kalan harç/masraf nedeniyle dosya teknik olarak açık görünebilir, ya da ilgili kurum bankaya henüz kaldırma yazısı göndermemiştir."}}, {"@type": "Question", "name": "Blokeyi kaldırmak için mutlaka avukat gerekir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, çoğu durumda ilgili icra dairesi veya vergi dairesiyle doğrudan siz de görüşüp kaldırma talebinde bulunabilirsiniz; sadece karmaşık dosyalarda avukat desteği faydalı olabilir."}}]}],
  },
  {
    slug: "hesap-kapatma",
    title: `Banka Hesabı Nasıl Kapatılır?`,
    description: `Banka hesabınızı kapatamıyor musunuz? İzlenmesi gereken adımlar ve dikkat edilmesi gerekenler.`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="lead">Hesap kapatma talebi genellikle şubeden yapılır; bazı bankalar mobil uygulama üzerinden de bu imkânı sunar. Biz ParaKarne ekibi olarak gördük ki, hesap kapatma taleplerinin reddedilmesinin en sık nedeni, unutulmuş bir otomatik ödeme talimatı veya bağlı kart oluyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Hesapta bakiye veya borç bulunması</li>
      <li>Hesaba bağlı otomatik ödeme talimatı veya kart olması</li>
      <li>Hesabın maaş/kredi hesabı olarak tanımlı olması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Hesaptaki bakiyeyi sıfırlayın veya transfer edin</li>
      <li>Bağlı otomatik ödeme talimatlarını ve kartları iptal edin</li>
      <li>Şubeye giderek veya mobil uygulama üzerinden kapatma talebinde bulunun</li>
      <li>Kapatma işleminin onaylandığına dair yazılı teyit alın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Hesap numarası/IBAN</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Hesabımı mobil bankacılıktan kapatabilir miyim?</p>
      <p class="sss-cevap">Bazı bankalarda evet, bazılarında şubeye gitmeniz gerekir; bankanızın mobil uygulamasından kontrol edin.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hesapta otomatik ödeme talimatı varsa ne olur?</p>
      <p class="sss-cevap">Kapatmadan önce tüm otomatik ödeme talimatlarını ve bağlı kartları iptal etmeniz gerekir, aksi halde kapatma işlemi engellenebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kapatma sonrası yazılı teyit alabilir miyim?</p>
      <p class="sss-cevap">Evet, kapatma işleminin onaylandığına dair yazılı veya elektronik bir teyit almanız ileride sorun yaşamamak için önemlidir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Banka Hesabımı Nasıl Kapatabilirim?", "description": "Banka hesabınızı kapatamıyor musunuz? İzlenmesi gereken adımlar ve dikkat edilmesi gerekenler.", "url": "https://parakarne.com/hesap-kapatma", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Hesabımı mobil bankacılıktan kapatabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Bazı bankalarda evet, bazılarında şubeye gitmeniz gerekir; bankanızın mobil uygulamasından kontrol edin."}}, {"@type": "Question", "name": "Hesapta otomatik ödeme talimatı varsa ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "Kapatmadan önce tüm otomatik ödeme talimatlarını ve bağlı kartları iptal etmeniz gerekir, aksi halde kapatma işlemi engellenebilir."}}, {"@type": "Question", "name": "Kapatma sonrası yazılı teyit alabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, kapatma işleminin onaylandığına dair yazılı veya elektronik bir teyit almanız ileride sorun yaşamamak için önemlidir."}}]}],
  },
  {
    slug: "icra-tebligati",
    title: `İcra Tebligatı Geldi, Ne Yapmalıyım?`,
    description: `İcra dairesinden ödeme emri veya tebligat gelirse ne yapılır, borç size ait değilse nasıl itiraz edilir, borç tutarı hatalıysa nasıl yol izlenir?`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">İcra tebligatı, borçluya karşı başlatılmış takip hakkında resmi bildirimdir. Bu belge yırtılıp atılmamalı, "sonra bakarım" denilmemelidir — süreler kritik önemdedir. Biz ParaKarne ekibi olarak gördük ki, icra tebligatlarında en sık yapılan hata, 7 günlük itiraz süresinin kaçırılması oluyor — bu yüzden süreleri her zaman en başta vurguluyoruz.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Zarfın içinde icra dairesi adı, dosya numarası, alacaklı/borçlu bilgisi, ana para/faiz/masraf tutarları, tebliğ tarihi ve itiraz süresi yer alır</li>
      <li>İlamsız takiplerde itiraz süresi, İİK madde 62 uyarınca ödeme emrinin tebliğinden itibaren 7 gündür</li>
      <li>Süre kaçarsa takip kesinleşebilir; banka hesabı, maaş, araç veya taşınmaz haczi gibi işlemler gündeme gelebilir</li>
      <li>Borcun tamamı değil sadece tutarı hatalı olabilir (örn. gerçek borç 50.000 TL iken dosyada 200.000 TL yazması)</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Tebliğ tarihini not edin, dosya numarasını yazın, tebligatta belirtilen süreyi kaçırmayın</li>
      <li>Borç size ait değilse 7 gün içinde "bu borç bana ait değildir, icra takibine itiraz ediyorum" şeklinde dilekçeyle veya sözlü olarak icra dairesine bildirin</li>
      <li>Tutar hatalıysa, hangi kısmı kabul ettiğinizi ve hangi kısma itiraz ettiğinizi açıkça belirterek kısmi itiraz yapın</li>
      <li>e-Devlet Adalet Bakanlığı İcra Dosyası Sorgulama veya UYAP Vatandaş Portal üzerinden dosyanızı kontrol edin</li>
      <li>Dosyada anlamadığınız bir kayıt varsa icra dairesinden bilgi alın; karmaşık durumlarda avukat desteği değerlendirin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>İcra tebligatı</li>
      <li>T.C. kimlik belgesi</li>
      <li>Varsa ödeme/borç belgeleri</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://mevzuat.adalet.gov.tr/mevzuat/102993?query=Madde+2" target="_blank" rel="noopener nofollow">İcra ve İflas Kanunu - UYAP Mevzuat</a></li>
      <li><a href="https://www.turkiye.gov.tr/adalet-icra-dosyasi-sorgulama" target="_blank" rel="noopener nofollow">e-Devlet icra dosyası sorgulama</a></li>
      <li><a href="https://vatandas.uyap.gov.tr/main/vatandas/giris.jsp" target="_blank" rel="noopener nofollow">UYAP Vatandaş Portal</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">İcra tebligatına itiraz süresi kaç gün?</p>
      <p class="sss-cevap">İlamsız takiplerde İİK madde 62 uyarınca, ödeme emrinin tebliğinden itibaren 7 gündür.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Süreyi kaçırırsam ne olur?</p>
      <p class="sss-cevap">Takip kesinleşir ve alacaklı, banka hesabı, maaş veya mal varlığınıza haciz işlemi başlatabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Borcun sadece bir kısmına itiraz edebilir miyim?</p>
      <p class="sss-cevap">Evet, hangi kısmı kabul ettiğinizi ve hangi kısma itiraz ettiğinizi açıkça belirterek kısmi itiraz yapabilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Dosyamı nereden sorgulayabilirim?</p>
      <p class="sss-cevap">e-Devlet'teki Adalet Bakanlığı İcra Dosyası Sorgulama hizmetinden veya UYAP Vatandaş Portal'dan sorgulayabilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İtirazı sözlü de yapabilir miyim?</p>
      <p class="sss-cevap">Evet, İİK madde 62 hem yazılı dilekçeyle hem de icra dairesine sözlü beyanla itiraz etmeye izin verir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/89-1-89-2-89-3-haciz-ihbarnamesi">89/1, 89/2, 89/3 Haciz İhbarnamesi</a></li>
      <li><a href="/borctan-dolayi-hapis-cezasi-var-mi">Borçtan Dolayı Hapis Var mı?</a></li>
      <li><a href="/hesap-blokesi">Hesabımda Bloke Var, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "İcra Dairesinden Tebligat Geldi, Ne Yapmalıyım?", "description": "İcra dairesinden ödeme emri veya tebligat gelirse ne yapılır, borç size ait değilse nasıl itiraz edilir, borç tutarı hatalıysa nasıl yol izlenir?", "url": "https://parakarne.com/icra-tebligati", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "İcra tebligatına itiraz süresi kaç gün?", "acceptedAnswer": {"@type": "Answer", "text": "İlamsız takiplerde İİK madde 62 uyarınca, ödeme emrinin tebliğinden itibaren 7 gündür."}}, {"@type": "Question", "name": "Süreyi kaçırırsam ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "Takip kesinleşir ve alacaklı, banka hesabı, maaş veya mal varlığınıza haciz işlemi başlatabilir."}}, {"@type": "Question", "name": "Borcun sadece bir kısmına itiraz edebilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, hangi kısmı kabul ettiğinizi ve hangi kısma itiraz ettiğinizi açıkça belirterek kısmi itiraz yapabilirsiniz."}}, {"@type": "Question", "name": "Dosyamı nereden sorgulayabilirim?", "acceptedAnswer": {"@type": "Answer", "text": "e-Devlet'teki Adalet Bakanlığı İcra Dosyası Sorgulama hizmetinden veya UYAP Vatandaş Portal'dan sorgulayabilirsiniz."}}, {"@type": "Question", "name": "İtirazı sözlü de yapabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, İİK madde 62 hem yazılı dilekçeyle hem de icra dairesine sözlü beyanla itiraz etmeye izin verir."}}]}],
  },
  {
    slug: "internet-bankaciligi-sifre-blokesi-kaldirma",
    title: `İnternet Bankacılığı Şifre Blokesi Nasıl Kaldırılır?`,
    description: `Mobil veya internet şubesi şifrenizi art arda yanlış girdiğinizde oluşan bloke, şubeye gitmeden nasıl kaldırılır?`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> İnternet bankacılığı şifre blokesini kaldırmak için giriş ekranındaki "Şifremi Unuttum / Giriş Yapamıyorum" seçeneğine basıp T.C. kimlik numaranızı ve kayıtlı telefon numaranızı girerek kimlik doğrulama sürecini başlatabilirsiniz.</p>
  <p class="lead">Mobil veya internet şubesi şifrenizi arka arkaya birkaç kez hatalı girdiğinizde, hesabınız kötü niyetli kişilerin eline geçmesin diye banka tarafından bloke edilir. Şubede sıra beklemeden bu kilidi açmanın birkaç yolu var.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Şifrenin art arda birkaç kez (genelde 3) hatalı girilmesi</li>
      <li>Bankanın güvenlik sistemi tarafından şüpheli giriş denemesi olarak algılanması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>"Şifremi Unuttum / Giriş Yapamıyorum" seçeneğine basın: uygulamanın giriş ekranında yer alan bu butondan T.C. kimlik numaranızı ve bankada kayıtlı cep telefonu numaranızı girin</li>
      <li>NFC ile kimlik doğrulama: telefonunuzun NFC özelliğini açıp yeni çipli T.C. kimlik kartınızı telefonun arkasına dokundurarak taratın</li>
      <li>Görüntülü görüşme: kimlik doğrulamasından sonra doğrudan bankanın müşteri temsilcisine görüntülü bağlanın; temsilci birkaç güvenlik sorusunun ardından blokenizi kaldırıp geçici şifrenizi SMS ile gönderir</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi (tercihen çipli)</li>
      <li>Bankada kayıtlı cep telefonu numaranız</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">NFC ile doğrulama tüm bankalarda var mı?</p>
      <p class="sss-cevap">Hayır, sadece bazı bankaların yeni nesil uygulamalarında bulunur; yoksa müşteri hizmetlerini aramanız veya şubeye gitmeniz gerekebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Görüntülü görüşme kaç dakika sürer?</p>
      <p class="sss-cevap">Genelde birkaç dakika sürer; kimlik doğrulama ve güvenlik soruları tamamlandıktan sonra bloke anında kaldırılır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/goruntulu-gorusmede-nfc-hatasi-cozumu">Görüntülü Görüşmede NFC Hatası</a></li>
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "İnternet Bankacılığı Şifre Blokesi Kaldırma: Şubeye Gitmeden Yeni Şifre Alma", "description": "Mobil veya internet şubesi şifrenizi art arda yanlış girdiğinizde oluşan bloke, şubeye gitmeden nasıl kaldırılır?", "url": "https://parakarne.com/internet-bankaciligi-sifre-blokesi-kaldirma", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "NFC ile doğrulama tüm bankalarda var mı?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, sadece bazı bankaların yeni nesil uygulamalarında bulunur; yoksa müşteri hizmetlerini aramanız veya şubeye gitmeniz gerekebilir."}}, {"@type": "Question", "name": "Görüntülü görüşme kaç dakika sürer?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde birkaç dakika sürer; kimlik doğrulama ve güvenlik soruları tamamlandıktan sonra bloke anında kaldırılır."}}]}],
  },
  {
    slug: "kart-aidati-iadesi",
    title: `Kart Aidatı İadesi Nasıl Alınır?`,
    description: `Kredi kartı yıllık aidatı iadesi için bankaya nasıl başvurulur, sonuç alınamazsa hangi yollar izlenir?`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Kart aidatına itiraz etmek istiyorsanız önce bankaya başvurmanız, sonuç alamazsanız resmi mercilere taşımanız gerekir. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, kart aidatı itirazlarının önemli bir kısmı sadece yazılı başvuru yapılmadığı için sonuçsuz kalıyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Kart açılışında aidat alınmayacağı belirtildiği hâlde aidat kesilmesi</li>
      <li>Aidatın iade edileceği taahhüt edilmiş olması</li>
      <li>Kartın kullanılmadığı hâlde aidat tahsil edilmesi</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Bankaya yazılı itiraz başvurusu yapın (şube, çağrı merkezi veya internet bankacılığı)</li>
      <li>Başvurunuza bankanın 20 iş günü içinde yanıt vermesini bekleyin</li>
      <li>Olumsuz yanıt alırsanız Tüketici Hakem Heyeti'ne başvurun</li>
      <li>Tutar hakem heyeti sınırını aşıyorsa Tüketici Mahkemesi'ne başvurulabilir</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Kart ekstresi</li>
      <li>Banka başvuru yanıtı (varsa)</li>
      <li>T.C. kimlik belgesi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Kart aidatı itirazımı nereye yapmalıyım?</p>
      <p class="sss-cevap">Önce bankaya yazılı başvuru yapmalısınız; sonuç alamazsanız Tüketici Hakem Heyeti veya Tüketici Mahkemesi'ne başvurabilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Aidat iadesi ne kadar sürede sonuçlanır?</p>
      <p class="sss-cevap">Banka yanıtı genelde birkaç hafta içinde gelir; hakem heyeti süreci ise dosya yoğunluğuna göre daha uzun sürebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hangi kartlarda aidat alınmaz?</p>
      <p class="sss-cevap">Bazı temassız/dijital kart türlerinde veya özel kampanyalı ürünlerde aidat alınmayabilir; bankanızın güncel ücret tarifesinden kontrol edin.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-harcama-itirazi">Kredi Kartı Harcama İtirazı</a></li>
      <li><a href="/kredi-karti-kullanimi-ve-yapilandirma">Kredi Kartı Kullanımı ve Yapılandırma</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kart Aidatı İadesi Nasıl Alınır?", "description": "Kredi kartı yıllık aidatı iadesi için bankaya nasıl başvurulur, sonuç alınamazsa hangi yollar izlenir?", "url": "https://parakarne.com/kart-aidati-iadesi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Kart aidatı itirazımı nereye yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Önce bankaya yazılı başvuru yapmalısınız; sonuç alamazsanız Tüketici Hakem Heyeti veya Tüketici Mahkemesi'ne başvurabilirsiniz."}}, {"@type": "Question", "name": "Aidat iadesi ne kadar sürede sonuçlanır?", "acceptedAnswer": {"@type": "Answer", "text": "Banka yanıtı genelde birkaç hafta içinde gelir; hakem heyeti süreci ise dosya yoğunluğuna göre daha uzun sürebilir."}}, {"@type": "Question", "name": "Hangi kartlarda aidat alınmaz?", "acceptedAnswer": {"@type": "Answer", "text": "Bazı temassız/dijital kart türlerinde veya özel kampanyalı ürünlerde aidat alınmayabilir; bankanızın güncel ücret tarifesinden kontrol edin."}}]}],
  },
  {
    slug: "kart-borcu-gecikmede",
    title: `Kart Borcu Gecikmede, Nasıl Yapılandırılır?`,
    description: `Kredi kartı borcunuz gecikmedeyse yeniden yapılandırma başvurusu için izlenecek adımlar.`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Gecikmeye düşen kart borçları için bankalar genellikle yeniden yapılandırma (taksitlendirme) imkânı sunar. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, kart borcu yapılandırma taleplerinin çoğu zaman mobil bankacılık üzerinden bile başlatılabildiğini, ama kullanıcıların bu seçeneği bilmediğini gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Asgari ödemenin süresinde yapılamaması</li>
      <li>Gelir kaybı veya beklenmedik bir mali zorluk</li>
      <li>Birden fazla kart borcunun birikmesi</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Bankanızın çağrı merkezi veya şubesinden yapılandırma seçeneklerini öğrenin</li>
      <li>Gelir durumunuzu ve ödeyebileceğiniz taksit tutarını netleştirin</li>
      <li>Yazılı başvuru yaparak yapılandırma talebini resmileştirin</li>
      <li>Yapılandırma sonrası ödeme planına sadık kalın, aksi hâlde yeniden gecikme oluşabilir</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Gelir belgesi (varsa)</li>
      <li>Güncel borç ekstresi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Gecikme kaç gün sonra Findeks'e yansır?</p>
      <p class="sss-cevap">Bankalar genelde ödemenin vadesinden birkaç gün sonra gecikmeyi KKB'ye bildirir; kesin süre bankaya göre değişebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Yapılandırma talebimi banka reddedebilir mi?</p>
      <p class="sss-cevap">Evet, yapılandırma bankanın takdirinde olan bir imkandır, kesin bir hak değildir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Yapılandırma sonrası kartımı kullanabilir miyim?</p>
      <p class="sss-cevap">Genelde yapılandırma taksitlerinin belli bir kısmı ödenene kadar kart kullanıma kapatılabilir; bunu yapılandırma öncesi bankanızla netleştirin.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Gecikmiş borcu öderken hangi sırayla ödemeliyim?</p>
      <p class="sss-cevap">Öncelikle en yüksek faizli veya en uzun süredir geciken borcu kapatmak genelde daha sağlıklıdır; kesin strateji kişisel duruma göre değişir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-kullanimi-ve-yapilandirma">Kredi Kartı Kullanımı ve Yapılandırma</a></li>
      <li><a href="/kredi-basvurusu-oncesi-kontrol">Kredi Başvurusu Öncesi Kontrol</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kart Borcum Gecikmede, Nasıl Yapılandırma Talep Edebilirim?", "description": "Kredi kartı borcunuz gecikmedeyse yeniden yapılandırma başvurusu için izlenecek adımlar.", "url": "https://parakarne.com/kart-borcu-gecikmede", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Gecikme kaç gün sonra Findeks'e yansır?", "acceptedAnswer": {"@type": "Answer", "text": "Bankalar genelde ödemenin vadesinden birkaç gün sonra gecikmeyi KKB'ye bildirir; kesin süre bankaya göre değişebilir."}}, {"@type": "Question", "name": "Yapılandırma talebimi banka reddedebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, yapılandırma bankanın takdirinde olan bir imkandır, kesin bir hak değildir."}}, {"@type": "Question", "name": "Yapılandırma sonrası kartımı kullanabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde yapılandırma taksitlerinin belli bir kısmı ödenene kadar kart kullanıma kapatılabilir; bunu yapılandırma öncesi bankanızla netleştirin."}}, {"@type": "Question", "name": "Gecikmiş borcu öderken hangi sırayla ödemeliyim?", "acceptedAnswer": {"@type": "Answer", "text": "Öncelikle en yüksek faizli veya en uzun süredir geciken borcu kapatmak genelde daha sağlıklıdır; kesin strateji kişisel duruma göre değişir."}}]}],
  },
  {
    slug: "kartim-atm-de-kaldi-nasil-alirim",
    title: `Kartım ATM'de Kaldı, Nasıl Alırım?`,
    description: `ATM kartınızı yuttu veya kart okuyucuda sıkıştı mı? Kartınızı geri almak için izlemeniz gereken adımlar.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="lead">ATM'nin kartınızı yutması veya kart okuyucuda sıkışması, paranın yutulmasına benzer ama farklı bir sorundur — kartınızı güvenle geri almak veya yenisini çıkarmak için izlemeniz gereken net adımlar var. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, kartın hemen iptal ettirilmesi çoğu zaman ATM'den kurtarılmasını beklemekten daha hızlı sonuç veriyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Kart okuyucuda teknik bir arıza veya kartın manyetik şeridinde/çipinde okuma sorunu</li>
      <li>İşlem sırasında bağlantı kopması veya elektrik kesintisi</li>
      <li>Kartın süresinin dolmuş olması ve ATM'nin bunu tespit edip kartı geri vermemesi</li>
      <li>Kart bilgilerinizi (PIN) art arda yanlış girmeniz sonucu ATM'nin güvenlik amacıyla kartı alıkoyması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>ATM başından ayrılmadan, kartın ait olduğu bankanın müşteri hizmetlerini hemen arayın</li>
      <li>ATM'nin seri numarasını/konumunu not edin — bankanın kartınızı doğru cihazdan tespit etmesini kolaylaştırır</li>
      <li>Kartınızı güvenlik amacıyla geçici olarak kapatmalarını (bloke) isteyin; böylece kart elinizde olmasa da başkası tarafından kullanılamaz</li>
      <li>Kartın ATM'nin kendi bankanıza mı yoksa başka bir bankaya mı ait olduğunu öğrenin — başka bankaya aitse o bankanın da sürece dahil olması gerekebilir</li>
      <li>ATM'ler genelde yutulan kartları belirli bir süre (banka uygulamasına göre değişir) sakladıktan sonra imha eder; bu nedenle kartınızı hızlıca ilgili şubeden teslim almaya çalışın veya doğrudan yeni kart talebinde bulunun</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Kart bilgileriniz</li>
      <li>ATM'nin seri numarası/konumu</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Kartım ATM'de kaldı, kaç günde geri alabilirim?</p>
      <p class="sss-cevap">Kendi bankanızın ATM'sindeyse genelde aynı gün veya birkaç gün içinde şubeden teslim alınabilir; başka bankaya aitse süreç birkaç gün daha uzayabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kartımı iptal ettirsem daha mı hızlı olur?</p>
      <p class="sss-cevap">Çoğu durumda evet — kart zaten ATM'de sıkışmışsa ve hemen ihtiyacınız varsa, kartı iptal ettirip yenisini talep etmek, eski kartı ATM'den kurtarmayı beklemekten daha hızlı olabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">ATM'nin içinde unutulan kart imha edilir mi?</p>
      <p class="sss-cevap">Bankalar genellikle alınmayan kartları belirli bir süre sonunda güvenlik amacıyla imha eder; bu yüzden mümkün olan en kısa sürede bankanızla iletişime geçmeniz önerilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/atm-parayi-yuttu-ne-yapmaliyim">ATM Parayı Yuttu, Ne Yapmalıyım?</a></li>
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kartım ATM'de Kaldı, Nasıl Alırım?", "description": "ATM kartınızı yuttu veya kart okuyucuda sıkıştı mı? Kartınızı geri almak için izlemeniz gereken adımlar.", "url": "https://parakarne.com/kartim-atm-de-kaldi-nasil-alirim", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Kartım ATM'de kaldı, kaç günde geri alabilirim?", "acceptedAnswer": {"@type": "Answer", "text": "Kendi bankanızın ATM'sindeyse genelde aynı gün veya birkaç gün içinde şubeden teslim alınabilir; başka bankaya aitse süreç birkaç gün daha uzayabilir."}}, {"@type": "Question", "name": "Kartımı iptal ettirsem daha mı hızlı olur?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu durumda evet — kart zaten ATM'de sıkışmışsa ve hemen ihtiyacınız varsa, kartı iptal ettirip yenisini talep etmek, eski kartı ATM'den kurtarmayı beklemekten daha hızlı olabilir."}}, {"@type": "Question", "name": "ATM'nin içinde unutulan kart imha edilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Bankalar genellikle alınmayan kartları belirli bir süre sonunda güvenlik amacıyla imha eder; bu yüzden mümkün olan en kısa sürede bankanızla iletişime geçmeniz önerilir."}}]}],
  },
  {
    slug: "karttan-bilgim-disinda-para-cekilmesi-itiraz",
    title: `Haberim Olmadan Karttan Para Çekildi: Harcama İtirazı`,
    description: `Kredi/banka kartınızdan bilginiz dışında yapılan harcamaya nasıl itiraz edersiniz? Chargeback süreci ve 3D Secure kuralları.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Kartınızdan bilginiz dışında para çekildiyse ilk yapmanız gereken kartı mobil uygulamadan geçici olarak kapatmak veya müşteri hizmetlerini arayıp iptal ettirmek, ardından bankanızın harcama itiraz (chargeback) formunu doldurmaktır.</p>
  <p class="lead">Kredi kartınızdan veya banka kartınızdan bilginiz dışında bir harcama yapıldığını (unutulan abonelik, yurt dışı sitelerden çekim vb.) fark ettiğiniz an, saniyeler önemlidir.</p>
  <p class="lead">Not: Bu sayfa, <strong>siz yapmadığınız/tanımadığınız</strong> işlemler içindir. Kendi yaptığınız bir alışverişte ürün/hizmeti alamadıysanız <a href="/kredi-karti-harcama-itirazi">Kartla Alışveriş Yaptım, Ürün Gelmedi</a> sayfamıza bakın.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Kart bilgilerinizin bir alışveriş sitesinde veya üçüncü bir uygulamada sızmış olması</li>
      <li>Unutulan bir abonelik/deneme süresinin otomatik ücretlendirmeye dönüşmesi</li>
      <li>Şifresiz (3D Secure olmadan) gerçekleştirilen yurt dışı kaynaklı işlemler</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Kartı hemen kapatın: mobil uygulamadan kartınızı geçici olarak nakit/internet alışverişine kapatın ya da müşteri hizmetlerini arayarak tamamen iptal ettirip yenisini talep edin</li>
      <li>Harcama itiraz formu (chargeback) doldurun: bankanızın sitesinden formu indirip işlemin tarihi, saati ve tutarını yazarak imzalayın, bankaya faks veya e-posta ile gönderin</li>
      <li>Uluslararası kuralları bilin: Visa/Mastercard kuralları gereği şifresiz (3D Secure olmadan) yapılan işlemlerde bankalar parayı karşı iş yerinden tahsil edip size iade etmekle yükümlüdür</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Kart ekstresi</li>
      <li>İşlem tarihi/saati/tutarı</li>
      <li>Harcama itiraz formu</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">3D Secure ile yapılan işleme itiraz edebilir miyim?</p>
      <p class="sss-cevap">Evet ama süreç biraz daha zor olabilir; yine de kartı kapatıp itiraz formu doldurmanız önerilir, banka işlemi inceler.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İtiraz sonucu ne kadar sürede gelir?</p>
      <p class="sss-cevap">Bankaya ve kart kuruluşunun sürecine göre değişir; genelde birkaç hafta içinde sonuçlanır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-harcama-itirazi">Kredi Kartı Harcama İtirazı</a></li>
      <li><a href="/fast-ile-yanlis-hesaba-para-gonderme">FAST ile Yanlış Hesaba Para Gönderme</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Haberim Olmadan Karttan Para Çekildi: Bankaya Harcama İtirazı Nasıl Yapılır?", "description": "Kredi/banka kartınızdan bilginiz dışında yapılan harcamaya nasıl itiraz edersiniz? Chargeback süreci ve 3D Secure kuralları.", "url": "https://parakarne.com/karttan-bilgim-disinda-para-cekilmesi-itiraz", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "3D Secure ile yapılan işleme itiraz edebilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet ama süreç biraz daha zor olabilir; yine de kartı kapatıp itiraz formu doldurmanız önerilir, banka işlemi inceler."}}, {"@type": "Question", "name": "İtiraz sonucu ne kadar sürede gelir?", "acceptedAnswer": {"@type": "Answer", "text": "Bankaya ve kart kuruluşunun sürecine göre değişir; genelde birkaç hafta içinde sonuçlanır."}}]}],
  },
  {
    slug: "kkb-findeks-kaydi-hatali",
    title: `Findeks/KKB Kaydı Hatalıysa Nasıl Düzeltilir?`,
    description: `Findeks veya KKB kaydınızda hata mı var? Düzeltme başvurusu için izlenecek adımlar.`,
    category: "Findeks ve KKB",
    bodyHtml: `<p class="lead">Kredi notunuzu etkileyen hatalı bir KKB/Findeks kaydı fark ettiyseniz öncelikle ilgili bankaya başvurmanız gerekir. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, KKB kayıt hatalarının çoğu zaman bankanın bildirim yapmayı unutmasından kaynaklandığını gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Kapatılan bir borcun sistemde hâlâ açık görünmesi</li>
      <li>Ödemenin gecikme olarak yanlış işlenmesi</li>
      <li>Kimlik hırsızlığı veya mükerrer kayıt hatası</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Findeks raporunuzu inceleyerek hatalı kaydı tespit edin</li>
      <li>Kaydın kaynağı olan bankaya yazılı itiraz başvurusu yapın</li>
      <li>Banka düzeltme yapmazsa Findeks üzerinden itiraz sürecini başlatın</li>
      <li>Sonuç alınamazsa BDDK veya Tüketici Hakem Heyeti'ne başvurabilirsiniz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Findeks raporu</li>
      <li>Ödeme dekontları</li>
      <li>T.C. kimlik belgesi</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">KKB'ye itirazımı nasıl yapabilirim?</p>
      <p class="sss-cevap">Öncelikle ilgili bankaya yazılı itiraz başvurusu yapmalısınız; banka düzeltmezse Findeks üzerinden itiraz sürecini başlatabilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İtiraz sonucu ne kadar sürede gelir?</p>
      <p class="sss-cevap">Genelde birkaç gün ile birkaç hafta arasında değişir; bankanın ve KKB'nin işlem yoğunluğuna bağlıdır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hatalı kayıt kredi başvurumu nasıl etkiler?</p>
      <p class="sss-cevap">Hatalı bir olumsuz kayıt, gerçekte krediye uygun olsanız bile başvurunuzun reddedilmesine yol açabilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/findeks-rehberi">Findeks Rehberi</a></li>
      <li><a href="/borc-kapandi-kayit-acik">Borç Kapandı, Kayıt Açık Görünüyor</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Findeks veya KKB Kaydım Hatalıysa Nasıl Düzeltebilirim?", "description": "Findeks veya KKB kaydınızda hata mı var? Düzeltme başvurusu için izlenecek adımlar.", "url": "https://parakarne.com/kkb-findeks-kaydi-hatali", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "KKB'ye itirazımı nasıl yapabilirim?", "acceptedAnswer": {"@type": "Answer", "text": "Öncelikle ilgili bankaya yazılı itiraz başvurusu yapmalısınız; banka düzeltmezse Findeks üzerinden itiraz sürecini başlatabilirsiniz."}}, {"@type": "Question", "name": "İtiraz sonucu ne kadar sürede gelir?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde birkaç gün ile birkaç hafta arasında değişir; bankanın ve KKB'nin işlem yoğunluğuna bağlıdır."}}, {"@type": "Question", "name": "Hatalı kayıt kredi başvurumu nasıl etkiler?", "acceptedAnswer": {"@type": "Answer", "text": "Hatalı bir olumsuz kayıt, gerçekte krediye uygun olsanız bile başvurunuzun reddedilmesine yol açabilir."}}]}],
  },
  {
    slug: "kredi-basvurum-neden-reddedildi",
    title: `Kredi Neden Reddedilir? Bankaların En Çok Baktığı Sebepler`,
    description: `Kredi başvurusu neden reddedilir? Gecikmiş ödeme, düşük kredi notu, borç-limit oranı, icra, e-haciz, sık başvuru ve gelir bilgisi nasıl etkiler?`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Bankalar başvuruyu kredi notu, ödeme geçmişi, mevcut borçlar, gelir, başvuru sıklığı, resmi borç kayıtları ve iç risk politikalarıyla birlikte değerlendirir. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, art arda yapılan başvuruların tek başına red sebebi olabildiğini, ama bunun çoğu kullanıcı tarafından bilinmediğini gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Açık gecikmiş ödeme veya düşük kredi notu</li>
      <li>Kart/ek hesap limitlerinin tamamen dolu olması, borç-limit oranının yüksek olması</li>
      <li>Son dönemde çok fazla başvuru yapılması — aynı gün farklı bankalara art arda başvurmak risk göstergesi olarak algılanabilir</li>
      <li>Aktif icra/e-haciz kaydı, vergi/SGK/GSS/4B borcu</li>
      <li>Gelir bilgisinin eksik/düşük görünmesi, yeni kredi kullanıldıktan sonra ilk taksidin henüz ödenmemiş olması</li>
      <li>Yasal takip geçmişi veya bankanın iç risk politikasına takılmak</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Red aldıktan sonra panikle yeni başvuru yapmayın; önce Findeks ve Risk Merkezi raporunu alın</li>
      <li>Banka uygulamalarından tüm ürünlerinizi kontrol edin, e-Devlet borçlarını inceleyin</li>
      <li>Gecikme varsa kapatın ve gelir bilginizi güncelleyin</li>
      <li>Mobilden red aldıysanız şubeden red sebebine dair bilgi isteyin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Findeks/Risk Merkezi raporu</li>
      <li>Gelir belgesi</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.findeks.com/urunler/risk-raporu" target="_blank" rel="noopener nofollow">Findeks Risk Raporu</a></li>
      <li><a href="https://www.riskmerkezi.org/risk-merkezi-raporu/hakkinda" target="_blank" rel="noopener nofollow">Risk Merkezi Raporu hakkında</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Red aldıktan sonra kaç gün beklemeliyim?</p>
      <p class="sss-cevap">Kesin bir süre yoktur ama en azından birkaç gün ile bir ay arasında beklemek, art arda başvuru yapmaktan daha sağlıklıdır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Banka red sebebini açıklamak zorunda mı?</p>
      <p class="sss-cevap">BDDK mevzuatı bankaları bu konuda bilgilendirmekle yükümlü kılar; talep ettiğinizde genel bir açıklama almanız mümkündür.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Mobilden red aldım, şubeden farklı sonuç çıkar mı?</p>
      <p class="sss-cevap">Bazen evet — mobil başvurular otomatik sistemle değerlendirilir, sınırda olan durumlarda şube üzerinden ek değerlendirme farklı sonuçlanabilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-basvurusu-oncesi-kontrol">Kredi Başvurusu Öncesi Kontrol</a></li>
      <li><a href="/yasal-takipten-cikma">Yasal Takipten Çıkma</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kredi Başvurum Neden Reddedildi, Ne Yapmalıyım?", "description": "Kredi başvurusu neden reddedilir? Gecikmiş ödeme, düşük kredi notu, borç-limit oranı, icra, e-haciz, sık başvuru ve gelir bilgisi nasıl etkiler?", "url": "https://parakarne.com/kredi-basvurum-neden-reddedildi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Red aldıktan sonra kaç gün beklemeliyim?", "acceptedAnswer": {"@type": "Answer", "text": "Kesin bir süre yoktur ama en azından birkaç gün ile bir ay arasında beklemek, art arda başvuru yapmaktan daha sağlıklıdır."}}, {"@type": "Question", "name": "Banka red sebebini açıklamak zorunda mı?", "acceptedAnswer": {"@type": "Answer", "text": "BDDK mevzuatı bankaları bu konuda bilgilendirmekle yükümlü kılar; talep ettiğinizde genel bir açıklama almanız mümkündür."}}, {"@type": "Question", "name": "Mobilden red aldım, şubeden farklı sonuç çıkar mı?", "acceptedAnswer": {"@type": "Answer", "text": "Bazen evet — mobil başvurular otomatik sistemle değerlendirilir, sınırda olan durumlarda şube üzerinden ek değerlendirme farklı sonuçlanabilir."}}]}],
  },
  {
    slug: "kredi-basvurusu-oncesi-kontrol",
    title: `Kredi Başvurusu Yapmadan Önce Nelere Bakılmalı?`,
    description: `Kredi veya kredi kartı başvurusu yapmadan önce Findeks raporu, borç-limit oranı, gecikmiş ödeme, e-Devlet borçları ve gelir bilgisi nasıl kontrol edilir?`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Banka başvuruyu sadece gelir bilgisine göre değil; kredi notu, ödeme geçmişi, açık borçlar, kart limit kullanımı, ek hesap borcu, yasal takip ve resmi borç kayıtlarıyla birlikte değerlendirir. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, kredi başvurusu reddedilen kişilerin çoğu, başvuru öncesi e-Devlet borç sorgulamasını hiç yapmamış oluyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Findeks Risk Raporu'ndaki bilgilerin finansal kurum bildirimlerine göre rapora yansıması 2 günü bulabilir; borç ödendikten hemen sonra alınan rapor her zaman en güncel sonucu göstermeyebilir</li>
      <li>Kredi kartı/ek hesap limitinin tamamına yakınının kullanılması, düzenli ödeme yapılsa bile "borç yükü yüksek" görünmesine yol açabilir</li>
      <li>TBB Risk Merkezi raporunda kredi bilgileri yanında telefon ve internet gecikmeli fatura bilgileri gibi başlıklar da yer alabilir</li>
      <li>Son 1 ayda gereksiz/çok fazla başvuru yapılması olumsuz değerlendirilebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Güncel Findeks Risk Raporu veya Risk Merkezi raporu alın; kredi notu, gecikmiş ödeme, borç-limit oranı ve açık kanuni takip olup olmadığını kontrol edin</li>
      <li>e-Devlet'ten vergi borcu, icra dosyası, e-haciz kaydı, GSS/SGK/4B borcu olup olmadığını sorgulayın</li>
      <li>Gecikmiş veya yüksek görünen borçları ödeyin/düşürün, 2-3 gün bekleyip raporu tekrar alın</li>
      <li>Rapor güncellendiyse başvurunuzu yapın; öncelik maaş bankanız veya aktif kullandığınız banka olsun</li>
      <li>Gelir bilgilerinizi (SGK'lı, emekli, serbest meslek) bankanın mobil uygulamasında güncel tutun</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Findeks/Risk Merkezi raporu</li>
      <li>Gelir belgesi</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.findeks.com/urunler/risk-raporu" target="_blank" rel="noopener nofollow">Findeks Risk Raporu</a></li>
      <li><a href="https://www.riskmerkezi.org/risk-merkezi-raporu/hakkinda" target="_blank" rel="noopener nofollow">TBB Risk Merkezi Raporu hakkında</a></li>
      <li><a href="https://www.tbb.org.tr/faaliyetler/risk-merkezi/e-devlet" target="_blank" rel="noopener nofollow">TBB Risk Merkezi e-Devlet bilgisi</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Findeks raporu almak ücretli mi?</p>
      <p class="sss-cevap">Bazı temel raporlar ücretsiz sunulabilir, detaylı raporlar için ücret talep edilebilir; Findeks'in güncel fiyatlandırmasını kontrol edin.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kaç günde bir Findeks kontrol etmeliyim?</p>
      <p class="sss-cevap">Başvuru öncesi ve borç kapatma sonrası kontrol etmeniz yeterlidir; sık sık sorgulamanın kredi notuna olumsuz etkisi olmaz ama gereksizdir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">e-Devlet'ten hangi borçları sorgulamalıyım?</p>
      <p class="sss-cevap">Vergi borcu, icra dosyası, e-haciz kaydı, GSS/SGK/4B borcunu kontrol etmeniz önerilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-basvurum-neden-reddedildi">Kredim Neden Reddedildi?</a></li>
      <li><a href="/findeks-rehberi">Findeks Rehberi</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kredi Başvurusu Yapmadan Önce Nelere Dikkat Etmeliyim?", "description": "Kredi veya kredi kartı başvurusu yapmadan önce Findeks raporu, borç-limit oranı, gecikmiş ödeme, e-Devlet borçları ve gelir bilgisi nasıl kontrol edilir?", "url": "https://parakarne.com/kredi-basvurusu-oncesi-kontrol", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Findeks raporu almak ücretli mi?", "acceptedAnswer": {"@type": "Answer", "text": "Bazı temel raporlar ücretsiz sunulabilir, detaylı raporlar için ücret talep edilebilir; Findeks'in güncel fiyatlandırmasını kontrol edin."}}, {"@type": "Question", "name": "Kaç günde bir Findeks kontrol etmeliyim?", "acceptedAnswer": {"@type": "Answer", "text": "Başvuru öncesi ve borç kapatma sonrası kontrol etmeniz yeterlidir; sık sık sorgulamanın kredi notuna olumsuz etkisi olmaz ama gereksizdir."}}, {"@type": "Question", "name": "e-Devlet'ten hangi borçları sorgulamalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Vergi borcu, icra dosyası, e-haciz kaydı, GSS/SGK/4B borcunu kontrol etmeniz önerilir."}}]}],
  },
  {
    slug: "kredi-borcu-maasa-mi-esyaya-mi-haciz-gelir",
    title: `Kredi Borcu Yüzünden Maaşa mı, Eşyaya mı Haciz Gelir?`,
    description: `Kredi/kart borcu nedeniyle icra takibinde maaşa mı yoksa evdeki eşyalara mı haciz gelir? İkisi birbirini dışlar mı, hangisi önce uygulanır?`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">İkisi birbirini dışlamaz — icra takibinde alacaklı, borcu tahsil edene kadar hem maaşınıza hem (temel eşyalar hariç) ev/işyerinizdeki mal varlığınıza haciz koydurabilir. Biz ParaKarne ekibi olarak gördük ki, kullanıcıların çoğu maaş ve eşya haczinin aynı anda uygulanabileceğini bilmiyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>İcra takibinde alacaklının amacı borcu tahsil etmektir; bu yüzden kanunen mümkün olan tüm haciz yollarını (maaş, banka hesabı, taşınır/taşınmaz mal) sırayla veya birlikte kullanabilir</li>
      <li>Maaş haczi ile ev eşyası haczi ayrı ayrı düzenlenmiştir: maaş haczinde 1/4 sınırı (İİK m.83) uygulanırken, ev eşyalarında ise haczedilemeyen temel eşyalar listesi (İİK m.82) uygulanır</li>
      <li>Genellikle alacaklılar önce maaş/banka hesabı haczini tercih eder çünkü tahsili daha hızlı ve kolaydır; ev eşyası haczi (fiilen eve gidip eşya haczetme) daha nadir ve daha maliyetli bir yoldur</li>
      <li>Borç miktarı maaş kesintileriyle uzun sürede kapanacak gibi görünüyorsa, alacaklı ek olarak mal varlığına da yönelebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Öncelikle icra dosyanızın kapsamını (hangi haciz türlerinin talep edildiğini) e-Devlet veya UYAP üzerinden kontrol edin</li>
      <li>Maaşınıza haciz geldiyse, kesintinin yasal sınır olan 1/4'ü aşmadığından emin olun</li>
      <li>Ev/işyerinize haciz memuru geldiyse, temel yaşam eşyalarınızın (buzdolabı, çamaşır makinesi, yatak vb.) muaf olduğunu hatırlatın ve haciz tutanağına itirazınızı yazdırın</li>
      <li>Her iki haciz türü için de aynı borç adına mükerrer/aşırı tahsilat yapılmadığından emin olun</li>
      <li>Ödeme gücünüz varsa, hem maaş hem eşya haczini önlemek için alacaklıyla/icra dairesiyle bir ödeme planı görüşün</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>İcra dosya numarası</li>
      <li>Maaş bordrosu</li>
      <li>Haciz tutanağı (varsa)</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Maaşıma haciz varsa evime de gelebilir mi?</p>
      <p class="sss-cevap">Evet, ikisi aynı anda uygulanabilir; maaş haczi tek başına borcu kapatmaya yetmiyorsa alacaklı ek olarak mal varlığına da yönelebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hangisi daha sık uygulanıyor?</p>
      <p class="sss-cevap">Maaş/banka hesabı haczi, tahsili daha kolay olduğu için genellikle önce ve daha sık tercih edilir; ev eşyası haczi daha nadir başvurulan bir yoldur.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İkisine birden itiraz edebilir miyim?</p>
      <p class="sss-cevap">Evet, her biri için ayrı ayrı (maaş haczinde oran aşımına, eşya haczinde muafiyet ihlaline dayanarak) itiraz hakkınız vardır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/maas-haczi-ne-kadar-kesilir">Maaş Haczi Ne Kadar Kesilir?</a></li>
      <li><a href="/ev-esyalarina-haciz-gelir-mi">Ev Eşyalarıma Haciz Gelir mi?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kredi Borcu Yüzünden Sadece Maaşa mı, Yoksa Evdeki Eşyaya mı Haciz Gelir?", "description": "Kredi/kart borcu nedeniyle icra takibinde maaşa mı yoksa evdeki eşyalara mı haciz gelir? İkisi birbirini dışlar mı, hangisi önce uygulanır?", "url": "https://parakarne.com/kredi-borcu-maasa-mi-esyaya-mi-haciz-gelir", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Maaşıma haciz varsa evime de gelebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, ikisi aynı anda uygulanabilir; maaş haczi tek başına borcu kapatmaya yetmiyorsa alacaklı ek olarak mal varlığına da yönelebilir."}}, {"@type": "Question", "name": "Hangisi daha sık uygulanıyor?", "acceptedAnswer": {"@type": "Answer", "text": "Maaş/banka hesabı haczi, tahsili daha kolay olduğu için genellikle önce ve daha sık tercih edilir; ev eşyası haczi daha nadir başvurulan bir yoldur."}}, {"@type": "Question", "name": "İkisine birden itiraz edebilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, her biri için ayrı ayrı (maaş haczinde oran aşımına, eşya haczinde muafiyet ihlaline dayanarak) itiraz hakkınız vardır."}}]}],
  },
  {
    slug: "kredi-karti-harcama-itirazi",
    title: `Kredi Kartı Harcama İtirazı Nasıl Yapılır?`,
    description: `Kartla alışveriş yapıp ürün veya hizmet alamayan kişiler bankaya nasıl harcama itirazı yapar? Chargeback süreci nedir?`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Kartla ödeme yaptınız ama ürün gelmedi, hizmet verilmedi veya satıcı iade yapmadıysa önce satıcıyla yazılı iletişim kurulmalı; sonuç alınamazsa bankaya harcama itirazı (chargeback) yapılmalıdır. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, harcama itirazlarında güçlü belge sunan kullanıcıların iade alma ihtimali belirgin şekilde daha yüksek oluyor.</p>
  <p class="lead">Not: Bu sayfa, <strong>siz bilerek yaptığınız</strong> ama karşılığını alamadığınız işlemler içindir. Kartınızdan haberiniz bile olmayan bir çekim varsa <a href="/karttan-bilgim-disinda-para-cekilmesi-itiraz">Haberim Olmadan Karttan Para Çekildi</a> sayfamıza bakın.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Visa/Mastercard, siparişin ulaşmaması veya hizmetin sağlanmaması durumunda bankanın satıcıdan parayı geri almaya çalışabileceğini; bunun yasal bir hak değil kart sistemi süreci olduğunu belirtir</li>
      <li>Chargeback kesin bir para iadesi garantisi değildir — banka süreci işletir, satıcı savunma sunabilir, süre ve belge durumu sonucu etkiler</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Önce satıcıyla yazılı olarak iletişime geçip iade/teslimat talep edin</li>
      <li>Sonuç alamazsanız mobil bankacılıkta kart hareketlerinden ilgili işlemi seçip "işleme itiraz et/harcama itirazı" seçeneğini kullanın</li>
      <li>Sebep olarak "ürün gelmedi" veya "hizmet verilmedi" seçip açıklama yazın, belge yükleyin, başvuru numarası alın</li>
      <li>Mobil uygulamada seçenek yoksa şubeye gidip yazılı dilekçe verin (işlem tarihi, tutar, satıcı adı, kartın son 4 hanesi, sipariş bilgisi ve iade talebini açıkça yazın)</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Sipariş ekran görüntüsü</li>
      <li>Ödeme dekontu</li>
      <li>Satıcıyla yazışmalar</li>
      <li>Kargo takip bilgisi</li>
      <li>İade talebi mesajları</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.visa.co.uk/how-you-pay-matters/chargeback-purchase-disputes.html" target="_blank" rel="noopener nofollow">Visa chargeback açıklaması</a></li>
      <li><a href="https://www.mastercard.com/content/dam/public/mastercardcom/na/global-site/documents/chargeback-guide.pdf" target="_blank" rel="noopener nofollow">Mastercard Chargeback Guide</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Chargeback kesin para iadesi garantisi mi?</p>
      <p class="sss-cevap">Hayır, banka süreci işletir ama satıcı savunma sunabilir; güçlü belge ve zamanında başvuru iade ihtimalini artırır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İtiraz için ne kadar sürem var?</p>
      <p class="sss-cevap">Süre kart kuruluşuna ve bankaya göre değişebilir; işlemi fark eder etmez itiraz etmeniz önerilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Satıcıyla önce konuşmam şart mı?</p>
      <p class="sss-cevap">Zorunlu olmasa da önce satıcıyla yazılı iletişime geçmeniz, banka itirazında güçlü bir kanıt oluşturur.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kart-aidati-iadesi">Kart Aidatı İadesi</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kartla Alışveriş Yaptım, Ürün Gelmedi: Harcama İtirazı Nasıl Yapılır?", "description": "Kartla alışveriş yapıp ürün veya hizmet alamayan kişiler bankaya nasıl harcama itirazı yapar? Chargeback süreci nedir?", "url": "https://parakarne.com/kredi-karti-harcama-itirazi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Chargeback kesin para iadesi garantisi mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, banka süreci işletir ama satıcı savunma sunabilir; güçlü belge ve zamanında başvuru iade ihtimalini artırır."}}, {"@type": "Question", "name": "İtiraz için ne kadar sürem var?", "acceptedAnswer": {"@type": "Answer", "text": "Süre kart kuruluşuna ve bankaya göre değişebilir; işlemi fark eder etmez itiraz etmeniz önerilir."}}, {"@type": "Question", "name": "Satıcıyla önce konuşmam şart mı?", "acceptedAnswer": {"@type": "Answer", "text": "Zorunlu olmasa da önce satıcıyla yazılı iletişime geçmeniz, banka itirazında güçlü bir kanıt oluşturur."}}]}],
  },
  {
    slug: "kredi-karti-kullanimi-ve-yapilandirma",
    title: `Kredi Kartı Nasıl Kullanılmalı? Limit, Nakit Avans ve Yapılandırma`,
    description: `Kredi kartı limiti nasıl kullanılmalı, nakit avans risk oluşturur mu, kredi kartı ve ek hesap yapılandırması nasıl yapılır?`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Kart limitinin tamamını sürekli kullanmak, düzenli ödeme yapılsa bile bankanın gözünde riskli bir görüntü oluşturabilir. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda, kart limitini tamamen dolu tutmanın kredi notuna etkisinin çoğu kullanıcı tarafından hafife alındığını gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Kart limitinin tamamı kullanılmamalı; mümkünse en az %30 boş limit bırakılmalı</li>
      <li>Sürekli nakit avans çekmek, bankalar açısından nakit akışında sıkıntı sinyali olarak görülebilir</li>
      <li>Ekstre kesildikten sonra ödeme yapılmalı, dönem borcunun tamamı ödenmeye çalışılmalı, tamamı ödenemiyorsa asgari ödeme kaçırılmamalı</li>
      <li>Kart/kredi gecikmeye girmeden banka genellikle yapılandırma önermez; yapılandırma genelde gecikme sonrası devreye girer</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Ödeme güçlüğü yaşarsanız önce mobil bankacılıktaki yapılandırma menüsünü kontrol edin</li>
      <li>Yoksa müşteri hizmetlerini arayın, sonuç alamazsanız şubeye gidin</li>
      <li>Aylık taksitin gerçekten ödenebilir olduğundan, toplam geri ödeme/vade/faizden ve yapılandırma taksiti aksarsa ne olacağından emin olun</li>
      <li>BDDK zaman zaman kredi kartı/ihtiyaç kredisi borçları için yapılandırma imkanı tanıyan kampanyalar duyurabiliyor; güncel bir kampanya olup olmadığını ve şartlarını bankanızla görüşerek öğrenebilirsiniz</li>
      <li>Yapılandırma sonrası ödeme planına sadık kalın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Kart/kredi ekstresi</li>
      <li>Gelir belgesi (varsa)</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.bddk.org.tr/Duyuru/EkGetir/2157?ekId=889" target="_blank" rel="noopener nofollow">BDDK kredi kartı/ihtiyaç kredisi yapılandırma duyurusu</a></li>
      <li><a href="https://www.tcmb.gov.tr/wps/wcm/connect/TR/TCMB+TR/Main+Menu/Istatistikler/Bankacilik+Verileri/Kredi_Karti_Islemlerinde_Uygulanacak_Azami_Faiz_Oranlari" target="_blank" rel="noopener nofollow">TCMB kredi kartı azami faiz oranları</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Kart limitimin ne kadarını boş bırakmalıyım?</p>
      <p class="sss-cevap">Genel öneri en az %30 boş limit bırakmaktır; bu, bankanın gözünde daha olumlu bir profil oluşturur.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Nakit avans kullanmak kredi notumu direkt düşürür mü?</p>
      <p class="sss-cevap">Tek seferlik kullanım büyük etki yaratmaz, ancak alışkanlık haline gelmesi bankalar tarafından risk göstergesi olarak değerlendirilebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Yapılandırma yaptırırsam kredi notum düzelir mi?</p>
      <p class="sss-cevap">Yapılandırma, borcu yönetilebilir hale getirir ama geçmiş gecikme kaydını tamamen silmez; düzenli ödeme zamanla notu iyileştirir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kart-borcu-gecikmede">Kart Borcu Gecikmede</a></li>
      <li><a href="/kredi-basvurusu-oncesi-kontrol">Kredi Başvurusu Öncesi Kontrol</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kredi Kartımı Nasıl Doğru Kullanırım, Yapılandırma Nasıl Yapılır?", "description": "Kredi kartı limiti nasıl kullanılmalı, nakit avans risk oluşturur mu, kredi kartı ve ek hesap yapılandırması nasıl yapılır?", "url": "https://parakarne.com/kredi-karti-kullanimi-ve-yapilandirma", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Kart limitimin ne kadarını boş bırakmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Genel öneri en az %30 boş limit bırakmaktır; bu, bankanın gözünde daha olumlu bir profil oluşturur."}}, {"@type": "Question", "name": "Nakit avans kullanmak kredi notumu direkt düşürür mü?", "acceptedAnswer": {"@type": "Answer", "text": "Tek seferlik kullanım büyük etki yaratmaz, ancak alışkanlık haline gelmesi bankalar tarafından risk göstergesi olarak değerlendirilebilir."}}, {"@type": "Question", "name": "Yapılandırma yaptırırsam kredi notum düzelir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Yapılandırma, borcu yönetilebilir hale getirir ama geçmiş gecikme kaydını tamamen silmez; düzenli ödeme zamanla notu iyileştirir."}}]}],
  },
  {
    slug: "kredi-karti-nakit-avansa-neden-kapanir",
    title: `Kredi Kartı Nakit Avansa Neden Kapatılır?`,
    description: `Kredi kartı nakit avansa veya alışverişe neden kapatılır? BDDK'nın asgari ödeme kuralı ve limit düşürme sorunu.`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> BDDK'nın Banka Kartları ve Kredi Kartları Hakkında Yönetmeliği'ne göre, bir takvim yılı içinde asgari ödeme tutarı toplam 3 kez ödenmeyen kredi kartları nakit kullanımına, üst üste 3 kez ödenmeyen kartlar ise hem nakit hem alışverişe kapatılır.</p>
  <p class="lead">Kredi kartınızın limiti olmasına rağmen taksitli nakit avans çekemiyor veya limitinizin aniden banka tarafından düşürüldüğünü görüyorsanız, bu durum BDDK mevzuatları veya banka risk politikalarıyla ilgilidir.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Bir takvim yılı içinde asgari ödeme tutarının toplam 3 kez altında ödeme yapılması (nakit avansa kapanma)</li>
      <li>Asgari ödeme tutarının üst üste 3 kez ödenmemesi (hem nakit hem alışverişe kapanma)</li>
      <li>Findeks kredi notunun aniden düşmesi veya diğer bankalardaki borç limitlerinin tavan yapması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Asgari ödeme kuralını bilin: BDDK yönetmeliğine göre bir takvim yılında toplam 3 kez asgari ödeme yapılmazsa kart nakit kullanımına kapatılır; üst üste 3 kez yapılmazsa hem nakit hem alışverişe kapatılır</li>
      <li>Kartın yeniden açılması için sadece geciken tutarı değil, o döneme ait ekstrenin tamamını ödemeniz gerekir</li>
      <li>Kredi notu analizi: Findeks notunuz düştüyse veya diğer bankalardaki borç limitleriniz tavan yaptıysa, bankalar risk görmemek adına limitinizi otomatik düşürebilir</li>
      <li>Çözüm için: dönem borcunun sadece asgarisini değil tamamını en az 1-2 dönem düzenli ödeyin; kredi notunuz düzeldiğinde mobil uygulamadan limit artırım/nakit avans açma talebi gönderin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Kart ekstresi</li>
      <li>Findeks raporu</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Sadece asgari ödeme yapmak güvenli mi?</p>
      <p class="sss-cevap">Gecikmeye düşmenizi engeller ama borcun tamamını kapatmadığınız için kalan kısma faiz işlemeye devam eder; sürekli asgari ödeme kredi notunuzu zamanla olumsuz etkileyebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Kart kapandıktan sonra ne kadar sürede açılır?</p>
      <p class="sss-cevap">Ekstrenin tamamını ödediğinizde genelde banka kayıtlarına yansır yansımaz kart yeniden aktif hale gelir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-kullanimi-ve-yapilandirma">Kredi Kartı Kullanımı ve Yapılandırma</a></li>
      <li><a href="/kart-borcu-gecikmede">Kart Borcu Gecikmede</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kredi Kartı Nakit Avansa Neden Kapatılır? Limit Düşürme Sorunu ve Çözümü", "description": "Kredi kartı nakit avansa veya alışverişe neden kapatılır? BDDK'nın asgari ödeme kuralı ve limit düşürme sorunu.", "url": "https://parakarne.com/kredi-karti-nakit-avansa-neden-kapanir", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Sadece asgari ödeme yapmak güvenli mi?", "acceptedAnswer": {"@type": "Answer", "text": "Gecikmeye düşmenizi engeller ama borcun tamamını kapatmadığınız için kalan kısma faiz işlemeye devam eder; sürekli asgari ödeme kredi notunuzu zamanla olumsuz etkileyebilir."}}, {"@type": "Question", "name": "Kart kapandıktan sonra ne kadar sürede açılır?", "acceptedAnswer": {"@type": "Answer", "text": "Ekstrenin tamamını ödediğinizde genelde banka kayıtlarına yansır yansımaz kart yeniden aktif hale gelir."}}]}],
  },
  {
    slug: "kredi-sigortasi-ve-hayat-sigortasi",
    title: `Kredi Hayat Sigortası İptali ve Para İadesi Nasıl Alınır?`,
    description: `Kredi kullanırken yapılan hayat sigortası, işsizlik sigortası ve kredi bağlantılı sigorta nasıl iptal edilir, iade nasıl talep edilir?`,
    category: "Kredi ve Kredi Kartı",
    bodyHtml: `<p class="lead">Bankalar kredi verirken hayat/işsizlik sigortası önerebilir; ancak tüketicinin açık talebi olmadan krediyle bağlantılı sigorta yaptırılamaz ve tüketici isterse teminatı başka bir sigorta şirketinden de sağlayabilir. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, kredi sigortasının zorunlu olduğunu düşünen kullanıcı sayısının hâlâ oldukça fazla olduğunu gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Hayat/işsizlik sigortası yasal olarak zorunlu değildir; tüketicinin açık talebi/onayı gerekir</li>
      <li>Poliçe banka mobil uygulamasındaki "Sigortalarım/Poliçelerim" bölümünden, sigorta şirketinin uygulamasından veya e-Devlet Sigorta Bilgi ve Gözetim Merkezi'nden görülebilir</li>
      <li>İade süresi garanti edilemez — bazı iadeler kısa sürede geçebilir, bazıları poliçe türüne ve incelemeye göre daha uzun sürebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Mobil bankacılıktan iptal/cayma seçeneğini kontrol edin</li>
      <li>Yoksa banka müşteri hizmetlerini arayın, ayrıca sigorta şirketine de başvurun</li>
      <li>Sonuç alamazsanız şubeden yazılı iptal ve iade talebi verin; olumsuz yanıt varsa yazılı cevap veya başvuru kayıt numarası isteyin</li>
      <li>Bankacılık tarafında BDDK e-Şikayet, sigortacılık tarafında SEDDK/e-Devlet şikayet kanallarını kullanabilirsiniz</li>
      <li>Başvuruya banka adı, sigorta şirketi, poliçe numarası, kredi numarası, prim tutarı, talep tarihi ve IBAN bilgisini ekleyin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Sigorta poliçe numarası</li>
      <li>Kredinin kapandığına dair belge (erken kapama durumunda)</li>
      <li>IBAN bilgisi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://tuketici.ticaret.gov.tr/yayinlar/tuketici-bilgi-rehberi/tuketici-kredisi-sozlesmeleri-hakkinda-bilgilendirme" target="_blank" rel="noopener nofollow">Ticaret Bakanlığı tüketici kredisi bilgilendirme</a></li>
      <li><a href="https://ticaret.gov.tr/haberler/tuketicinin-izni-olmadan-sigorta-yapilamayacak" target="_blank" rel="noopener nofollow">Ticaret Bakanlığı: tüketicinin izni olmadan sigorta yapılamayacak</a></li>
      <li><a href="https://ebulten.bddk.org.tr/esikayet/" target="_blank" rel="noopener nofollow">BDDK e-Şikayet</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Hayat sigortasını reddetmem kredimi engeller mi?</p>
      <p class="sss-cevap">Yasal olarak engellemez, ancak bazı bankalar sigortasız kredide daha yüksek faiz uygulayabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İade talebimi kime yapmalıyım, bankaya mı sigorta şirketine mi?</p>
      <p class="sss-cevap">Her ikisine de başvurabilirsiniz; banka üzerinden sonuç alamazsanız doğrudan sigorta şirketine yazılı başvuru yapın.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İade süresi ne kadar sürer?</p>
      <p class="sss-cevap">Garanti edilen bir süre yoktur; poliçe türüne ve incelemeye göre değişir, kısa sürebileceği gibi haftalar da sürebilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-kullanimi-ve-yapilandirma">Kredi Kartı Kullanımı ve Yapılandırma</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Kredi Hayat Sigortası Nasıl İptal Edilir, İade Nasıl Alınır?", "description": "Kredi kullanırken yapılan hayat sigortası, işsizlik sigortası ve kredi bağlantılı sigorta nasıl iptal edilir, iade nasıl talep edilir?", "url": "https://parakarne.com/kredi-sigortasi-ve-hayat-sigortasi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Hayat sigortasını reddetmem kredimi engeller mi?", "acceptedAnswer": {"@type": "Answer", "text": "Yasal olarak engellemez, ancak bazı bankalar sigortasız kredide daha yüksek faiz uygulayabilir."}}, {"@type": "Question", "name": "İade talebimi kime yapmalıyım, bankaya mı sigorta şirketine mi?", "acceptedAnswer": {"@type": "Answer", "text": "Her ikisine de başvurabilirsiniz; banka üzerinden sonuç alamazsanız doğrudan sigorta şirketine yazılı başvuru yapın."}}, {"@type": "Question", "name": "İade süresi ne kadar sürer?", "acceptedAnswer": {"@type": "Answer", "text": "Garanti edilen bir süre yoktur; poliçe türüne ve incelemeye göre değişir, kısa sürebileceği gibi haftalar da sürebilir."}}]}],
  },
  {
    slug: "maas-haczi-ne-kadar-kesilir",
    title: `Maaş Haczi Ne Kadar Kesilir? Yasal Sınır`,
    description: `Maaş haczinde yasal sınır nedir? Nafaka istisnası, birden fazla icra dosyası ve itiraz yolları hakkında bilgi.`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">İcra ve İflas Kanunu, maaş haczinde belirli bir yasal sınır belirler; bu sınırın üzerinde yapılan kesinti hukuka aykırıdır ve itiraz edilebilir. Biz ParaKarne ekibi olarak aldığımız sorularda en sık karşılaştığımız yanlış bilgi, maaşın tamamının haczedilebileceği inancı oluyor — oysa yasal sınır çok nettir.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Genel kural: net maaşın en fazla dörtte biri (1/4, %25) haczedilebilir</li>
      <li>Borçlunun rızası olmadan bu oran artırılamaz</li>
      <li>İSTİSNA: Nafaka alacaklarında bu sınır uygulanmaz, maaşın tamamına haciz konabilir</li>
      <li>Birden fazla icra dosyası varsa alacaklılar sıraya girer (nafaka hariç, o her zaman önceliklidir)</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Maaş bordronuzdaki kesinti oranını hesaplayıp yasal sınırı aşıp aşmadığını kontrol edin</li>
      <li>Sınır aşılmışsa işvereninize ve icra dairesine yazılı olarak bildirin</li>
      <li>Sonuç alamazsanız icra mahkemesine şikayet yoluyla itiraz edin</li>
      <li>Karmaşık veya çok dosyalı durumlarda bir icra avukatından destek alın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Maaş bordrosu</li>
      <li>Haciz bildirim yazısı</li>
      <li>İcra dosya numarası</li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Maaşımın tamamına haciz konulabilir mi?</p>
      <p class="sss-cevap">Genel kural net maaşın 1/4'ü ile sınırlıdır; ancak nafaka borcunda bu sınır uygulanmaz, maaşın tamamına haciz konabilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Birden fazla icra dosyası varsa kesinti nasıl olur?</p>
      <p class="sss-cevap">Alacaklılar sıraya girer, aynı anda birden fazla dosya için kesinti yapılmaz (nafaka her zaman önceliklidir).</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Asgari ücrete haciz gelebilir mi?</p>
      <p class="sss-cevap">Evet, asgari ücret de haczedilebilir ama yine aynı 1/4 sınırı (nafaka hariç) geçerlidir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Haciz yazısı hangi kurumdan gelir?</p>
      <p class="sss-cevap">Genelde işvereninize icra dairesinden gönderilir; işvereniniz kesintiyi yapıp doğrudan icra dosyasına aktarır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/ev-esyalarina-haciz-gelir-mi">Ev Eşyalarıma Haciz Gelir mi?</a></li>
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Maaşıma Haciz Geldi, Ne Kadarı Kesilebilir?", "description": "Maaş haczinde yasal sınır nedir? Nafaka istisnası, birden fazla icra dosyası ve itiraz yolları hakkında bilgi.", "url": "https://parakarne.com/maas-haczi-ne-kadar-kesilir", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Maaşımın tamamına haciz konulabilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Genel kural net maaşın 1/4'ü ile sınırlıdır; ancak nafaka borcunda bu sınır uygulanmaz, maaşın tamamına haciz konabilir."}}, {"@type": "Question", "name": "Birden fazla icra dosyası varsa kesinti nasıl olur?", "acceptedAnswer": {"@type": "Answer", "text": "Alacaklılar sıraya girer, aynı anda birden fazla dosya için kesinti yapılmaz (nafaka her zaman önceliklidir)."}}, {"@type": "Question", "name": "Asgari ücrete haciz gelebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, asgari ücret de haczedilebilir ama yine aynı 1/4 sınırı (nafaka hariç) geçerlidir."}}, {"@type": "Question", "name": "Haciz yazısı hangi kurumdan gelir?", "acceptedAnswer": {"@type": "Answer", "text": "Genelde işvereninize icra dairesinden gönderilir; işvereniniz kesintiyi yapıp doğrudan icra dosyasına aktarır."}}]}],
  },
  {
    slug: "maas-hesabina-tam-blokaj-konulabilir-mi",
    title: `Maaş Hesabına Tam Blokaj Konulabilir mi?`,
    description: `Maaş hesabına bankanın tamamına bloke koyması yasal mı? İİK madde 82-83, emekli maaşı koruması ve Yargıtay içtihadı çerçevesinde tüketici hakları.`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">Genel kural nettir: maaş hesabınıza, açık ve yazılı onayınız olmadan bankanın veya icra takibinin tamamına bloke koyması hukuka aykırıdır — yalnızca 1/4'üne kadar bloke/haciz mümkündür.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Genel kural (İİK madde 82-83): maaşın yalnızca 1/4'ü haczedilebilir/bloke edilebilir; bu oranın üzerinde bir bloke hukuka aykırıdır</li>
      <li>Emekli maaşları için daha güçlü koruma vardır: 5510 sayılı Kanun madde 93 uyarınca emekli maaşı, nafaka ve SGK prim borcu dışında HİÇ haczedilemez</li>
      <li>Yargıtay İçtihadı Birleştirme Büyük Genel Kurulu'nun 21 Mart 2025 tarihli kararına göre: bankanın maaş hesabından tam mahsup yapabilmesi için tüketicinin AÇIK VE YAZILI talimatı gerekir; böyle bir talimat yoksa tam bloke hukuka aykırıdır</li>
      <li>Kredi/kart sözleşmelerindeki "maaşımın tamamı kesilebilir" tarzı önceden alınmış genel onaylar, İİK madde 83/a uyarınca GEÇERSİZDİR — banka bunu öne sürse bile bağlayıcı değildir</li>
      <li>Nafaka borcu istisnadır: nafaka alacağında 1/4 sınırı uygulanmaz, öncelikli ve tam kesinti yapılabilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Blokenin kaynağını (icra dosyası mı, banka kendi alacağı için mi koydu) bankadan öğrenin</li>
      <li>Maaşınızın 1/4'ünden fazlasına bloke konulduysa, bunun bir "usulsüz haciz" olduğunu belirten yazılı bir itiraz/dilekçe ile bankaya başvurun</li>
      <li>Banka bir icra dosyası nedeniyle bloke koyduysa, "haczedilemezlik şikayeti" ile icra işleminin yapıldığı yerdeki İcra Hukuk Mahkemesi'ne, öğrendiğiniz tarihten itibaren 7 gün içinde başvurun</li>
      <li>Banka kendi alacağı (kredi/kart borcu) için, sizin açık yazılı talimatınız olmadan tam bloke koyduysa, bu işlemin Yargıtay'ın güncel içtihadına aykırı olduğunu belirterek itiraz edin</li>
      <li>Banka itirazınızı reddederse Tüketici Hakem Heyeti'ne başvurabilirsiniz — bu süreç ücretsizdir ve heyet kararı banka için bağlayıcıdır</li>
      <li>Emekli maaşınıza herhangi bir oranda bloke konulduysa (nafaka/SGK borcu hariç), doğrudan bunun 5510 sayılı Kanun'a aykırı olduğunu belirterek itiraz edin</li>
      <li>Muvafakatname iptali: kredi çekerken imzaladığınız sözleşmede "maaşımdan otomatik kesilsin" maddesi (muvafakat) varsa banka buna dayanarak kesinti yapar; şubeye giderek "maaş hesabımdaki otomatik virman/kesinti talimatının iptalini" talep eden yazılı bir dilekçe verebilirsiniz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Maaş bordrosu/emekli maaş belgesi</li>
      <li>Hesap ekstresi</li>
      <li>Varsa kredi/kart sözleşmeniz</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://avukatfatihtahanci.com/blog/maas-hesabina-bloke-konulamaz-yargitay-karari" target="_blank" rel="noopener nofollow">Yargıtay İçtihadı Birleştirme Kararı ve maaş hesabı blokesi analizi</a></li>
      <li><a href="https://www.dejure.ai/blog/maas-hesabina-bloke-konulmasi-yasal-dayanak" target="_blank" rel="noopener nofollow">Maaş hesabına bloke: yasal dayanak ve hukuka aykırılık halleri</a></li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Banka kredi borcum için maaşımın tamamını bloke edebilir mi?</p>
      <p class="sss-cevap">Hayır, açık ve yazılı talimatınız olmadıkça bankanın maaş hesabınızın tamamını bloke etmesi Yargıtay'ın 21 Mart 2025 tarihli İçtihadı Birleştirme Kararı'na göre hukuka aykırıdır. Genel kredi sözleşmesindeki maddeler bu konuda yeterli sayılmaz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Emekli maaşıma haciz gelebilir mi?</p>
      <p class="sss-cevap">Nafaka ve SGK prim borcu dışında emekli maaşı 5510 sayılı Kanun madde 93 uyarınca hiç haczedilemez; bu, çalışan maaşlarındaki 1/4 kuralından bile daha güçlü bir korumadır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İtiraz için ne kadar sürem var?</p>
      <p class="sss-cevap">İcra kaynaklı usulsüz bir bloke için haczedilemezlik şikayetini öğrendiğiniz tarihten itibaren 7 gün içinde İcra Hukuk Mahkemesi'ne yapmanız önerilir; bazı Yargıtay kararlarına göre kamu düzenine aykırılık nedeniyle bu süre sınırı olmayabilir, ama hak kaybı yaşamamak için 7 gün içinde hareket etmek en güvenlisidir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/maas-haczi-ne-kadar-kesilir">Maaş Haczi Ne Kadar Kesilir?</a></li>
      <li><a href="/hesap-blokesi">Hesabımda Bloke Var, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Maaş Hesabıma Tam Blokaj Konulabilir mi?", "description": "Maaş hesabına bankanın tamamına bloke koyması yasal mı? İİK madde 82-83, emekli maaşı koruması ve Yargıtay içtihadı çerçevesinde tüketici hakları.", "url": "https://parakarne.com/maas-hesabina-tam-blokaj-konulabilir-mi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Banka kredi borcum için maaşımın tamamını bloke edebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, açık ve yazılı talimatınız olmadıkça bankanın maaş hesabınızın tamamını bloke etmesi Yargıtay'ın 21 Mart 2025 tarihli İçtihadı Birleştirme Kararı'na göre hukuka aykırıdır. Genel kredi sözleşmesindeki maddeler bu konuda yeterli sayılmaz."}}, {"@type": "Question", "name": "Emekli maaşıma haciz gelebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Nafaka ve SGK prim borcu dışında emekli maaşı 5510 sayılı Kanun madde 93 uyarınca hiç haczedilemez; bu, çalışan maaşlarındaki 1/4 kuralından bile daha güçlü bir korumadır."}}, {"@type": "Question", "name": "İtiraz için ne kadar sürem var?", "acceptedAnswer": {"@type": "Answer", "text": "İcra kaynaklı usulsüz bir bloke için haczedilemezlik şikayetini öğrendiğiniz tarihten itibaren 7 gün içinde İcra Hukuk Mahkemesi'ne yapmanız önerilir; bazı Yargıtay kararlarına göre kamu düzenine aykırılık nedeniyle bu süre sınırı olmayabilir, ama hak kaybı yaşamamak için 7 gün içinde hareket etmek en güvenlisidir."}}]}],
  },
  {
    slug: "mobil-bankaciliga-giremiyorum",
    title: `Mobil Bankacılığım Bloke Oldu, Ne Yapmalıyım?`,
    description: `Mobil bankacılık neden bloke olur? Yanlış şifre, yeni cihaz, farklı IP, VPN, uzaktan erişim, yüksek tutarlı transfer ve şüpheli işlem blokesi nasıl çözülür?`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="lead">Mobil bankacılık genelde durduk yere bloke olmaz. Banka, farklı cihaz, farklı IP, VPN, uzaktan erişim uygulaması, normal dışı transfer veya şüpheli işlem gördüğünde müşterisini korumak için geçici güvenlik blokesi koyabilir. Biz ParaKarne ekibi olarak yaptığımız incelemelerde gördük ki, mobil bankacılık blokelerinin büyük çoğunluğu kullanıcı hatası değil, bankaların güvenlik önlemlerinden kaynaklanıyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Yanlış şifreyi art arda girmek veya yeni telefondan giriş yapmak</li>
      <li>Farklı şehir/ülke/IP adresinden bağlanmak</li>
      <li>Normalden çok yüksek tutarlı para transferi denemek veya şüpheli kart/POS/havale işlemi</li>
      <li>Banka uygulamasının güncel olmaması</li>
      <li>Not: "Güvenli olmayan cihaz/yazılım tespit edildi" gibi net bir hata mesajı görüyorsanız (root, VPN, ekran paylaşımı kaynaklı), bu farklı ve daha spesifik bir konu — <a href="/cihaz-dogrulama-hatasi-banka-uygulamasi">Cihaz Doğrulama Hatası</a> sayfamıza bakın</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Bankanın resmi müşteri hizmetleri numarasını (uygulama içinden, kart arkasından veya resmi siteden kontrol ederek) arayın</li>
      <li>Güvenlik teyidi ve işlem doğrulamasını tamamlayın; banka isterse şifrenizi sıfırlayın</li>
      <li>5-10 dakika bekleyip tekrar giriş deneyin; sorun sürerse şubeye gidin</li>
      <li>Telefon tarafında: uygulamayı güncelleyin, VPN ve uzaktan erişim/ekran paylaşımı uygulamalarını kapatın, bilinmeyen APK'ları kaldırın</li>
      <li>Bankadan geldiğini söyleyen aramalara güvenmeyin; şifre, SMS kodu veya uygulama onayını asla paylaşmayın — müşteri hizmetlerini her zaman kendiniz, resmi numaradan arayın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Cep telefonu numaranız</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://ebulten.bddk.org.tr/esikayet/" target="_blank" rel="noopener nofollow">BDDK e-Şikayet</a></li>
      <li><a href="https://www.bddk.org.tr/iletisim" target="_blank" rel="noopener nofollow">BDDK iletişim ve şikayet bilgisi</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Mobil bankacılık bloke ne kadar sürede açılır?</p>
      <p class="sss-cevap">Çoğu güvenlik blokesi, kimlik/işlem teyidi yapıldıktan sonra dakikalar içinde açılır. Bazı durumlarda banka ek inceleme için birkaç saat isteyebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Şifremi kaç kez yanlış girersem hesap kilitlenir?</p>
      <p class="sss-cevap">Bu, bankadan bankaya değişir; genelde 3-5 hatalı denemeden sonra geçici kilitlenme olur. Kesin sayı için bankanızın müşteri hizmetlerine sorabilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">VPN kullanmak gerçekten bloke sebebi olabilir mi?</p>
      <p class="sss-cevap">Evet. VPN, gerçek konumunuzu farklı gösterdiği için bankanın güvenlik sistemi bunu şüpheli erişim olarak değerlendirebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Yeni telefon aldığımda mutlaka bloke olur mu?</p>
      <p class="sss-cevap">Zorunlu değil, ama yeni cihazdan ilk girişte banka ek kimlik doğrulama isteyebilir; bu normal bir güvenlik adımıdır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Şubeye gitmeden çözülür mü?</p>
      <p class="sss-cevap">Çoğu durumda evet — müşteri hizmetlerinden güvenlik teyidiyle çözülür. Şube ziyareti genelde son çare olarak gerekir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/hesap-blokesi">Hesabımda Bloke Var, Ne Yapmalıyım?</a></li>
      <li><a href="/hesap-blokesi">Banka Şikayeti Nasıl Yapılır?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Mobil Bankacılığa Erişimim Neden Sınırlandırıldı?", "description": "Mobil bankacılık neden bloke olur? Yanlış şifre, yeni cihaz, farklı IP, VPN, uzaktan erişim, yüksek tutarlı transfer ve şüpheli işlem blokesi nasıl çözülür?", "url": "https://parakarne.com/mobil-bankaciliga-giremiyorum", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Mobil bankacılık bloke ne kadar sürede açılır?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu güvenlik blokesi, kimlik/işlem teyidi yapıldıktan sonra dakikalar içinde açılır. Bazı durumlarda banka ek inceleme için birkaç saat isteyebilir."}}, {"@type": "Question", "name": "Şifremi kaç kez yanlış girersem hesap kilitlenir?", "acceptedAnswer": {"@type": "Answer", "text": "Bu, bankadan bankaya değişir; genelde 3-5 hatalı denemeden sonra geçici kilitlenme olur. Kesin sayı için bankanızın müşteri hizmetlerine sorabilirsiniz."}}, {"@type": "Question", "name": "VPN kullanmak gerçekten bloke sebebi olabilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evet. VPN, gerçek konumunuzu farklı gösterdiği için bankanın güvenlik sistemi bunu şüpheli erişim olarak değerlendirebilir."}}, {"@type": "Question", "name": "Yeni telefon aldığımda mutlaka bloke olur mu?", "acceptedAnswer": {"@type": "Answer", "text": "Zorunlu değil, ama yeni cihazdan ilk girişte banka ek kimlik doğrulama isteyebilir; bu normal bir güvenlik adımıdır."}}, {"@type": "Question", "name": "Şubeye gitmeden çözülür mü?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu durumda evet — müşteri hizmetlerinden güvenlik teyidiyle çözülür. Şube ziyareti genelde son çare olarak gerekir."}}]}],
  },
  {
    slug: "operator-evkur-finansman-borcu-findeks",
    title: `Telefon Aldım, Findeks'te Kredi Görünüyor: Operatör ve Evkur Borçları`,
    description: `Turkcell, Vodafone, Türk Telekom, Evkur ve finansman şirketlerinden alınan ürünler Findeks ve Risk Merkezi'nde neden kredi gibi görünür?`,
    category: "Findeks ve KKB",
    bodyHtml: `<p class="lead">Birçok kişi Findeks raporunda bankadan kredi çekmediği halde kredi/finansman borcu görür — bunun nedeni çoğu zaman operatörlerden, mağazalardan veya finansman şirketlerinden alınan taksitli ürünlerdir. Biz ParaKarne ekibi olarak gördük ki, taksitli telefon veya eşya alımlarının Findeks'e yansıdığını bilmeyen kullanıcı sayısı hiç az değil.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Turkcell, Vodafone, Türk Telekom gibi operatörlerden telefon/tablet/cihaz alımı, işlem finansman şirketi üzerinden yapıldıysa raporda finansman borcu olarak görünebilir</li>
      <li>Evkur gibi mağazalardan mobilya/beyaz eşya alımı da Evkur Finansman üzerinden yapıldıysa Risk Merkezi/Findeks kayıtlarında finansman ürünü olarak görünebilir</li>
      <li>Düzenli ödeme olumlu bir ödeme geçmişi oluşturabilir; gecikme ise kredi notunu ve banka başvurularını olumsuz etkileyebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Alışveriş öncesi "bu işlem finansman şirketi üzerinden mi yapılıyor, Findeks/Risk Merkezi'ne yansır mı?" diye sorun</li>
      <li>Gecikme olursa kredi notunuzun etkilenip etkilenmeyeceğini ve erken kapama seçeneğini öğrenin</li>
      <li>Raporda tanımadığınız bir finansman kaydı görürseniz hangi işlemden geldiğini ilgili firmayla teyit edin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Findeks/Risk Merkezi raporu</li>
      <li>Satın alma/finansman sözleşmesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.bddk.org.tr/Kurulus/Liste/80" target="_blank" rel="noopener nofollow">BDDK finansman şirketleri listesi</a></li>
      <li><a href="https://www.riskmerkezi.org/risk-merkezi/uyeler" target="_blank" rel="noopener nofollow">Risk Merkezi üyeleri</a></li>
      <li><a href="https://www.riskmerkezi.org/sikca-sorulan-sorular" target="_blank" rel="noopener nofollow">TBB Risk Merkezi sıkça sorulan sorular</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Taksitli telefon alımı gerçekten kredi sayılır mı?</p>
      <p class="sss-cevap">Evet, finansman şirketi üzerinden yapılan taksitli alımlar Findeks/Risk Merkezi'ne kredi/finansman ürünü olarak bildirilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Bu borcu erken kapatabilir miyim?</p>
      <p class="sss-cevap">Çoğu finansman sözleşmesinde erken kapama mümkündür; ilgili firmayla iletişime geçip şartları öğrenebilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Gecikme banka kredisi başvurumu etkiler mi?</p>
      <p class="sss-cevap">Evet, bu tür finansman borçlarındaki gecikme de kredi notunuzu ve banka değerlendirmesini olumsuz etkileyebilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/findeks-rehberi">Findeks Rehberi</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Bankadan Kredi Çekmedim, Findeks'te Neden Kredi Görünüyor?", "description": "Turkcell, Vodafone, Türk Telekom, Evkur ve finansman şirketlerinden alınan ürünler Findeks ve Risk Merkezi'nde neden kredi gibi görünür?", "url": "https://parakarne.com/operator-evkur-finansman-borcu-findeks", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Taksitli telefon alımı gerçekten kredi sayılır mı?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, finansman şirketi üzerinden yapılan taksitli alımlar Findeks/Risk Merkezi'ne kredi/finansman ürünü olarak bildirilir."}}, {"@type": "Question", "name": "Bu borcu erken kapatabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu finansman sözleşmesinde erken kapama mümkündür; ilgili firmayla iletişime geçip şartları öğrenebilirsiniz."}}, {"@type": "Question", "name": "Gecikme banka kredisi başvurumu etkiler mi?", "acceptedAnswer": {"@type": "Answer", "text": "Evet, bu tür finansman borçlarındaki gecikme de kredi notunuzu ve banka değerlendirmesini olumsuz etkileyebilir."}}]}],
  },
  {
    slug: "ortak-hesaba-haciz-gelir-mi",
    title: `Ortak Banka Hesabına Haciz Gelir mi?`,
    description: `Eşinizle veya iş ortağınızla açtığınız ortak hesaba, taraflardan birinin şahsi borcu yüzünden haciz gelir mi? Hukuki haklarınız.`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Ortak hesaba haciz geldiğinde, icra dairesi paranın ne kadarının borçlu ortağa ait olduğunu tespit etmekle yükümlüdür; aksi ispatlanmadıkça genellikle eşit (%50-%50) pay karinesi uygulanır ve haciz sadece borçlunun payıyla sınırlı kalır.</p>
  <p class="lead">Eşinizle, kardeşinizle veya iş ortağınızla açtığınız ortak banka hesabına, taraflardan sadece birinin şahsi borcu yüzünden haciz gelip gelmeyeceği büyük bir merak konusudur.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Ortak hesaptaki paranın hangi orandan borçluya ait olduğunun net olmaması</li>
      <li>Hesap sözleşmesinde "müşterek ve müteselsil borçluluk" maddesi bulunması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Yarı yarıya kuralını bilin: aksi ispat edilmedikçe ortak hesaptaki para genellikle eşit paylaşılmış (%50-%50) kabul edilir; borçlu ortağın payı kadar (%50) kısma haciz konulabilir</li>
      <li>Borçsuz ortağın hakları: borcu olmayan tarafsanız ve hesabın tamamına bloke koyulduysa, ilgili icra dairesine "İstihkak İddiası" ile başvurup size ait kısmın üzerindeki blokenin kaldırılmasını talep edin</li>
      <li>Hesap sözleşmesini kontrol edin: sözleşmede "müşterek ve müteselsil borçluluk" maddesi varsa banka tüm hesaba bloke koyabilir; ortak hesap açarken bu maddeleri dikkatli okuyun</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Hesap açılış sözleşmesi</li>
      <li>T.C. kimlik belgesi</li>
      <li>Paranın kaynağını gösteren belgeler (varsa)</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">İstihkak iddiası davasını kim açar?</p>
      <p class="sss-cevap">Hesaptaki payının borçlu ortağa ait olmadığını iddia eden, borcu olmayan taraf açar.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hesap sözleşmesinde özel bir madde yoksa ne olur?</p>
      <p class="sss-cevap">Bu durumda genel kural (eşit pay karinesi ve icra dairesinin oran tespiti yükümlülüğü) uygulanır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/hesap-blokesi">Hesabımda Bloke Var, Ne Yapmalıyım?</a></li>
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Ortak Banka Hesabına Haciz Gelir mi? (Hukuki Haklar ve Paylaşım Esasları)", "description": "Eşinizle veya iş ortağınızla açtığınız ortak hesaba, taraflardan birinin şahsi borcu yüzünden haciz gelir mi? Hukuki haklarınız.", "url": "https://parakarne.com/ortak-hesaba-haciz-gelir-mi", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "İstihkak iddiası davasını kim açar?", "acceptedAnswer": {"@type": "Answer", "text": "Hesaptaki payının borçlu ortağa ait olmadığını iddia eden, borcu olmayan taraf açar."}}, {"@type": "Question", "name": "Hesap sözleşmesinde özel bir madde yoksa ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "Bu durumda genel kural (eşit pay karinesi ve icra dairesinin oran tespiti yükümlülüğü) uygulanır."}}]}],
  },
  {
    slug: "sim-kart-blokesi-bankaya-giremiyorum",
    title: `Telefon Değiştirince Banka Uygulamasına Nasıl Girilir? (SIM Blokesi)`,
    description: `Yeni telefon aldığınızda veya hat taşıdığınızda banka mobil uygulamasına giremiyor musunuz? Şubeye gitmeden SIM kart blokesi kaldırma yöntemleri.`,
    category: "Hesap ve Mobil Bankacılık",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Telefon değiştirince banka mobil uygulamasına giremiyorsanız, en garantili çözüm herhangi bir banka ATM'sine kartınızı takıp "Diğer İşlemler" → "Bilgi Güncelleme / SIM Kart Bloke Kaldırma" adımlarını izlemektir; cep telefonunuza gelecek onay koduyla bloke saniyeler içinde kalkar.</p>
  <p class="lead">Yeni bir akıllı telefon aldığınızda veya hattınızı başka bir operatöre taşıdığınızda (örn. Turkcell'den Vodafone'a geçiş), bankaların güvenlik sistemleri sizi korumak adına otomatik olarak SIM kart blokesi koyar. Bu bloke aktifken bankadan tek kullanımlık SMS şifreleri alamaz ve mobil şubeye giriş yapamazsınız — ama şubeye gitmeden çözebileceğiniz birkaç yol var.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>SIM kartın yenilenmesi/değiştirilmesi sonrası bankanın sistemde tanımlı numarayı henüz güncel SIM ile eşleştirmemiş olması</li>
      <li>Numara taşıma (operatör değişikliği) sonrası bankanın SMS/arama doğrulamasında gecikme yaşaması</li>
      <li>Bankanın güvenlik sistemi, SIM değişikliğini SIM-swapping dolandırıcılığına karşı bir önlem olarak algılayıp erişimi geçici kısıtlaması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>ATM üzerinden (en garantili yöntem): Herhangi bir banka ATM'sine kartınızı takıp şifrenizi girin; menüden "Diğer İşlemler" → "Bilgi Güncelleme / SIM Kart Bloke Kaldırma" adımlarını izleyin. Cep telefonunuza gelecek onay koduyla bloke genellikle saniyeler içinde kalkar</li>
      <li>Müşteri hizmetleri/sesli yanıt sistemi: Bankanızı arayıp telesekretere "SIM kart blokesi kaldırmak istiyorum" deyin; sistem sizi kimlik doğrulama adımına yönlendirip sesli yanıt sistemi üzerinden blokeyi açabilir</li>
      <li>Mobil uygulama giriş ekranı (NFC ile kimlik tarama): Bazı bankaların yeni nesil uygulamalarında giriş ekranındaki "Şifremi Unuttum / Bloke Kaldırma" seçeneğinden, çipli T.C. kimlik kartınızı telefonun arkasına (NFC ile) okutarak şubeye gitmeden bloke kaldırılabilir</li>
      <li>Bu yöntemlerden biri işe yaramazsa, son çare olarak şubeye giderek kimliğinizle işlem yapabilirsiniz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi (tercihen çipli/yeni nesil)</li>
      <li>Banka kartınız</li>
      <li>Cep telefonu numaranız</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">SIM değiştirince banka erişimim neden kısıtlanıyor?</p>
      <p class="sss-cevap">Bu, tamamen hesap güvenliğiniz için (SIM-swapping dolandırıcılığını önlemek amacıyla) yasal ve teknik bir zorunluluktur; bankalar yeni SIM ile girişte ek doğrulama ister.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">ATM'ye gitmeden çözebilir miyim?</p>
      <p class="sss-cevap">Evet — müşteri hizmetlerini arayarak sesli yanıt sistemi üzerinden veya bazı bankalarda uygulama içi NFC kimlik taramasıyla şubeye gitmeden de çözebilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Telefon değiştirdiğimde ne zaman işlem yapmalıyım?</p>
      <p class="sss-cevap">ParaKarne Notu: Telefonunuzu/hattınızı değiştirdiğiniz gün SIM blokesi kaldırma işlemini yapmayı unutmayın — geciktirmek sonraki girişlerde de sorun yaşamanıza yol açabilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
      <li><a href="/yurtdisinda-sms-onay-kodu-gelmiyor">Yurtdışında SMS Onay Kodu Gelmiyor</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Telefon Değiştirince Banka Mobil Uygulamasına Nasıl Girilir? (SIM Blokesi Kaldırma)", "description": "Yeni telefon aldığınızda veya hat taşıdığınızda banka mobil uygulamasına giremiyor musunuz? Şubeye gitmeden SIM kart blokesi kaldırma yöntemleri.", "url": "https://parakarne.com/sim-kart-blokesi-bankaya-giremiyorum", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "SIM değiştirince banka erişimim neden kısıtlanıyor?", "acceptedAnswer": {"@type": "Answer", "text": "Bu, tamamen hesap güvenliğiniz için (SIM-swapping dolandırıcılığını önlemek amacıyla) yasal ve teknik bir zorunluluktur; bankalar yeni SIM ile girişte ek doğrulama ister."}}, {"@type": "Question", "name": "ATM'ye gitmeden çözebilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evet — müşteri hizmetlerini arayarak sesli yanıt sistemi üzerinden veya bazı bankalarda uygulama içi NFC kimlik taramasıyla şubeye gitmeden de çözebilirsiniz."}}, {"@type": "Question", "name": "Telefon değiştirdiğimde ne zaman işlem yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "ParaKarne Notu: Telefonunuzu/hattınızı değiştirdiğiniz gün SIM blokesi kaldırma işlemini yapmayı unutmayın — geciktirmek sonraki girişlerde de sorun yaşamanıza yol açabilir."}}]}],
  },
  {
    slug: "varlik-sirketine-devredilen-borclar",
    title: `Varlık Şirketi Borcu Kredi Almaya Engel mi?`,
    description: `Varlık şirketine devredilen borç Findeks'te görünür mü, kredi almaya engel olur mu, anlaşma nasıl yapılır, hukuk bürosu aileyi arayabilir mi?`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">Findeks/Risk Merkezi raporunda varlık şirketine devredilmiş açık borç görünüyorsa kredi veya kredi kartı almak çok zorlaşabilir; borç kapanmadan kredi notunuz düzelmez. Biz ParaKarne ekibi olarak yaptığımız incelemelerde, varlık şirketleriyle yapılan anlaşmaların çoğu zaman peşin ödemede indirim içerebildiğini, ama kullanıcıların bunu hiç sormadığını gördük.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Bankalar tahsil edemedikleri borçları belirli bir bedelle varlık yönetim şirketlerine devredebilir</li>
      <li>Varlık şirketleri bazı dosyalarda peşin kapama indirimi veya taksitli ödeme planı sunabilir — bu kesin bir hak değildir, şirketin politikasına ve dosyanın durumuna göre değişir</li>
      <li>Sürekli farklı numaralardan arama, tehdit veya baskı hukuki sorun doğurabilir</li>
      <li>Borçlunun ailesi (kefil veya ortak borçlu değilse) borç bilgisinin paylaşılması kişisel veri ihlali sayılabilir — KVKK Kurulu bu konuda banka ve avukatlara idari para cezası uygulamıştır</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Varlık şirketini arayıp durumunuzu ve ödeme gücünüzü anlatın, varsa kampanya dahilinde anlaşma yapın</li>
      <li>Anlaşma öncesi borcun hangi bankadan devredildiği, dosya numarası, toplam borç, anlaşmalı kapama tutarı ve borcun tamamen kapanacağı bilgisini yazılı isteyin</li>
      <li>Ödeme sonrası "borcu yoktur" yazısı alın ve Findeks raporunuzla kaydın güncellendiğini kontrol edin</li>
      <li>Sürekli arama/tehdit yaşarsanız arama ve mesaj kayıtlarını saklayın, hukuk bürosuna/varlık şirketine yazılı uyarı yapın</li>
      <li>Ailenize borç bilgisi paylaşıldıysa, önce veri sorumlusuna, sonuç alamazsanız KVKK'ya başvurmayı değerlendirin; tehdit varsa savcılığa suç duyurusunda bulunabilirsiniz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Varlık şirketinden gelen bildirim/yazı</li>
      <li>Varsa arama/mesaj kayıtları</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.bddk.org.tr/Kurulus/Liste/82" target="_blank" rel="noopener nofollow">BDDK varlık yönetim şirketleri listesi</a></li>
      <li><a href="https://www.kvkk.gov.tr/Icerik/6928/2021-115" target="_blank" rel="noopener nofollow">KVKK 2021/115 - borç bilgisinin yakına iletilmesi</a></li>
      <li><a href="https://www.kvkk.gov.tr/Icerik/7589/2022-1281" target="_blank" rel="noopener nofollow">KVKK 2022/1281 - borç bilgisinin oğul ile paylaşılması</a></li>
      <li><a href="https://ebulten.bddk.org.tr/esikayet/" target="_blank" rel="noopener nofollow">BDDK e-Şikayet</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Varlık şirketiyle anlaşma yapmak zorunda mıyım?</p>
      <p class="sss-cevap">Hayır, bu bir zorunluluk değildir ama borcu kapatmadan Findeks kaydınız düzelmeyeceği için genelde tercih edilen bir yoldur.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Aileme borç bilgim verilebilir mi?</p>
      <p class="sss-cevap">Hayır, kefil veya ortak borçlu değillerse ailenize borç bilgisi verilmesi KVKK'ya aykırıdır; KVKK Kurulu bu konuda idari para cezaları uygulamıştır.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Sürekli farklı numaralardan aranıyorum, ne yapabilirim?</p>
      <p class="sss-cevap">Arama/mesaj kayıtlarını saklayıp hukuk bürosuna/varlık şirketine yazılı uyarı yapabilir, tehdit varsa savcılığa suç duyurusunda bulunabilirsiniz.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/yasal-takipten-cikma">Yasal Takipten Çıkma</a></li>
      <li><a href="/findeks-rehberi">Findeks Rehberi</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Borcum Varlık Şirketine Devredildi, Ne Yapmalıyım?", "description": "Varlık şirketine devredilen borç Findeks'te görünür mü, kredi almaya engel olur mu, anlaşma nasıl yapılır, hukuk bürosu aileyi arayabilir mi?", "url": "https://parakarne.com/varlik-sirketine-devredilen-borclar", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Varlık şirketiyle anlaşma yapmak zorunda mıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, bu bir zorunluluk değildir ama borcu kapatmadan Findeks kaydınız düzelmeyeceği için genelde tercih edilen bir yoldur."}}, {"@type": "Question", "name": "Aileme borç bilgim verilebilir mi?", "acceptedAnswer": {"@type": "Answer", "text": "Hayır, kefil veya ortak borçlu değillerse ailenize borç bilgisi verilmesi KVKK'ya aykırıdır; KVKK Kurulu bu konuda idari para cezaları uygulamıştır."}}, {"@type": "Question", "name": "Sürekli farklı numaralardan aranıyorum, ne yapabilirim?", "acceptedAnswer": {"@type": "Answer", "text": "Arama/mesaj kayıtlarını saklayıp hukuk bürosuna/varlık şirketine yazılı uyarı yapabilir, tehdit varsa savcılığa suç duyurusunda bulunabilirsiniz."}}]}],
  },
  {
    slug: "yanlislikla-gelen-parayi-harcamak-suc-mu",
    title: `Banka Hesabına Yanlışlıkla Gelen Parayı Harcamak Suç mu?`,
    description: `Hesabınıza yanlışlıkla gelen parayı harcamak suç mu? TCK madde 160 ve sebepsiz zenginleşme hükümleri çerçevesinde hukuki boyutu.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="lead">Evet — hesabınıza yanlışlıkla gelen parayı bildirmeden kendi malınız gibi kullanmak, Türk hukukunda hem cezai hem hukuki sonuçları olan bir durumdur. Biz ParaKarne ekibi olarak yaptığımız araştırmalarda gördük ki, bu konudaki en tehlikeli yanılgı, sadece "bana ait olmadığını bilmiyordum" savunmasının her zaman yeterli olacağı inancı.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>TCK madde 160 ("Kaybolmuş veya hata sonucu ele geçmiş eşya üzerinde tasarruf"): hata sonucu hesabınıza geçen parayı iade etmeden veya yetkili mercilere bildirmeden kendi malınız gibi kullanmanız, şikayet üzerine 1 yıla kadar hapis veya adli para cezasını gerektirebilir</li>
      <li>6098 sayılı Türk Borçlar Kanunu madde 77-78 ("sebepsiz zenginleşme"): haklı bir sebep olmaksızın başkasının mal varlığından fayda sağlamış olursunuz, bu tutarı iade etme yükümlülüğünüz doğar</li>
      <li>Yargı kararlarına göre, gelen parayı çekmek, başka hesaba aktarmak veya harcamak, kastın en somut göstergelerinden sayılabilir</li>
      <li>"Bana ait olmadığını bilmiyordum" savunması, durumun somut şartlarına göre her zaman yeterli kabul edilmeyebilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Paraya dokunmadan, hesabınıza kaynağı belirsiz bir tutar geldiğini fark eder etmez bankanızla iletişime geçin</li>
      <li>Bankaya durumu bildirdiğinize dair yazılı/elektronik bir kayıt (talep numarası vb.) alın</li>
      <li>Parayı doğrudan gönderene veya bilmediğiniz bir hesaba/kişiye kendiniz iade etmeye çalışmayın — bu, bir dolandırıcılık senaryosunun parçası olabilir; iade işlemini bankanız üzerinden resmi kayıtlarla yürütün</li>
      <li>"Yanlışlıkla gönderdim, geri yollar mısın" diyerek sizi doğrudan arayan/mesaj atan kişilere karşı temkinli olun; gerçek yanlış transferlerde doğru yol bankaya başvurmaktır</li>
      <li>Emin olmadığınız veya karmaşık bir durumla karşılaştığınızda bir avukata danışmanızı öneririz</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Hesap ekstresi/dekont</li>
      <li>Bankayla yaptığınız yazışmalar</li>
      <li>T.C. kimlik belgesi</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.erdemvarol.com.tr/hesaba-para-gonderip-geri-isteme-dolandiriciligi/" target="_blank" rel="noopener nofollow">TCK madde 160 ve ilgili hukuki değerlendirme</a></li>
      <li><a href="https://gulachukuk.com.tr/tr/gulac-bulten/bankacilik-hukuku/yanlis-banka-hesabina-yapilan-para-transferleri-hakkinda-bilgi-bulteni" target="_blank" rel="noopener nofollow">Sebepsiz zenginleşme (TBK) hakkında bilgi bülteni</a></li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Parayı hemen harcamazsam ceza riski var mı?</p>
      <p class="sss-cevap">Riskiniz temelde parayı iade etmeyip kendi malınız gibi kullanmanızdan doğar; durumu banka veya yetkili mercilere bildirip dokunmazsanız risk oluşmaz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Gönderen kişi beni arayıp parayı geri istiyor, direkt göndereyim mi?</p>
      <p class="sss-cevap">Önerilmez — bu tür talepler bazen dolandırıcılık senaryosunun parçası olabilir. İade işleminin bankanız üzerinden resmi kayıtlarla yürütülmesi daha güvenlidir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Parayı harcadıysam ve elimde yoksa ne olur?</p>
      <p class="sss-cevap">İyi niyetli olduğunuzu ve zenginleşmeyi sağlayan tutarı elinizden çıkardığınızı ispatlarsanız hukuki sorumluluğunuz azalabilir; ancak ceza hukuku açısından risk somut olayın şartlarına göre değerlendirilir. Bir avukata danışmanız önerilir.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/kredi-karti-harcama-itirazi">Kredi Kartı Harcama İtirazı</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Hesabıma Yanlışlıkla Gelen Parayı Harcamak Suç mu?", "description": "Hesabınıza yanlışlıkla gelen parayı harcamak suç mu? TCK madde 160 ve sebepsiz zenginleşme hükümleri çerçevesinde hukuki boyutu.", "url": "https://parakarne.com/yanlislikla-gelen-parayi-harcamak-suc-mu", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Parayı hemen harcamazsam ceza riski var mı?", "acceptedAnswer": {"@type": "Answer", "text": "Riskiniz temelde parayı iade etmeyip kendi malınız gibi kullanmanızdan doğar; durumu banka veya yetkili mercilere bildirip dokunmazsanız risk oluşmaz."}}, {"@type": "Question", "name": "Gönderen kişi beni arayıp parayı geri istiyor, direkt göndereyim mi?", "acceptedAnswer": {"@type": "Answer", "text": "Önerilmez — bu tür talepler bazen dolandırıcılık senaryosunun parçası olabilir. İade işleminin bankanız üzerinden resmi kayıtlarla yürütülmesi daha güvenlidir."}}, {"@type": "Question", "name": "Parayı harcadıysam ve elimde yoksa ne olur?", "acceptedAnswer": {"@type": "Answer", "text": "İyi niyetli olduğunuzu ve zenginleşmeyi sağlayan tutarı elinizden çıkardığınızı ispatlarsanız hukuki sorumluluğunuz azalabilir; ancak ceza hukuku açısından risk somut olayın şartlarına göre değerlendirilir. Bir avukata danışmanız önerilir."}}]}],
  },
  {
    slug: "yasal-takipten-cikma",
    title: `Yasal Takip Borcu Kapandıktan Sonra Kredi Kartı Alınır mı?`,
    description: `Yasal takip borcu kapandıktan sonra Findeks, Risk Merkezi, avukat, icra dosyası ve banka bildirimleri nasıl kontrol edilir?`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="lead">Yasal takipte önemli olan sadece borcun ödenmesi değil; borcun kapandığının avukat, icra dairesi, banka, KKB, Risk Merkezi ve Findeks kayıtlarına doğru şekilde yansımasıdır. Biz ParaKarne ekibi olarak gördük ki, borcunu kapatan kişilerin en çok yaşadığı sorun, Findeks kaydının güncellenmesini beklemeden hemen yeni bir ürün başvurusu yapması oluyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Borç ödendiği halde Findeks raporunda hâlâ "açık kanuni takip" görünüyorsa yeni başvuru büyük ihtimalle olumsuz sonuçlanır</li>
      <li>Avukat bazen bankaya "borç kapandı" bildirimini geç yapabilir veya banka KKB/Risk Merkezi'ne talimat vermeyi geciktirebilir</li>
      <li>Borç ödenmesi, icra dosyasının otomatik kapandığı anlamına gelmez — kalan harç/masraf varsa dosya açık görünmeye devam edebilir</li>
      <li>Yasal takip yaşanan bankadan yeniden ürün almak, bankanın kendi iç kayıtlarında risk algısı sürdüğü için daha zor olabilir</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Avukatla "bu tutara harç, vekalet ücreti ve tüm kapanış giderleri dahil mi?" diye netleştirip borcu ödeyin</li>
      <li>Ödeme dekontu, borcu yoktur yazısı, ibra yazısı ve dosya numarasını içeren belgeleri alın</li>
      <li>İlgili icra dairesine gidip (veya arayıp) kalan harcı ödeyerek dosyanın komple kapanmasını sağlayın</li>
      <li>7-10 gün sonra güncel Findeks/Risk Merkezi raporu alıp dosyanın kapalı statüye geçtiğini doğrulayın</li>
      <li>Hâlâ açık görünüyorsa dekontla birlikte bankaya başvurun; gerekirse Findeks'in Risk Raporu İşlemleri bölümünden itiraz sürecini başlatın</li>
      <li>Yeni ürün için önce maaş bankanızı veya aktif kullandığınız bankayı deneyin; yasal takip yaşanan bankayı en sona bırakın</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>Ödeme dekontu</li>
      <li>Avukattan alınan borcun kapandığına dair yazı</li>
      <li>Güncel Findeks/Risk Merkezi raporu</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.findeks.com/urunler/risk-raporu" target="_blank" rel="noopener nofollow">Findeks Risk Raporu</a></li>
      <li><a href="https://www.riskmerkezi.org/risk-merkezi-raporu/hakkinda" target="_blank" rel="noopener nofollow">Risk Merkezi Raporu hakkında</a></li>
      <li><a href="https://www.findeks.com/risk-raporu-islemleri" target="_blank" rel="noopener nofollow">Findeks Risk Raporu İşlemleri / itiraz</a></li>
  </ul>


  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Avukata ödediğim tutara harç dahil mi olur?</p>
      <p class="sss-cevap">Her zaman değil; ödeme öncesi avukata "bu tutara harç, vekalet ücreti ve tüm kapanış giderleri dahil mi?" diye mutlaka sorun.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Dosya kapandıktan sonra ne kadar beklemeliyim?</p>
      <p class="sss-cevap">7-10 gün bekleyip güncel Findeks/Risk Merkezi raporu almanız, dosyanın gerçekten kapalı statüye geçtiğini doğrulamanız önerilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Hangi bankaya önce başvurmalıyım?</p>
      <p class="sss-cevap">Yasal takip yaşadığınız bankayı en sona bırakıp önce maaş bankanızı veya aktif kullandığınız bankayı denemeniz daha mantıklı bir strateji.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/findeks-rehberi">Findeks Rehberi</a></li>
      <li><a href="/kredi-basvurum-neden-reddedildi">Kredim Neden Reddedildi?</a></li>
      <li><a href="/borc-kapandi-kayit-acik">Borç Kapandı, Kayıt Açık Görünüyor</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Yasal Takipten Çıktım, Tekrar Kredi Kartı/Kredi Alabilir miyim?", "description": "Yasal takip borcu kapandıktan sonra Findeks, Risk Merkezi, avukat, icra dosyası ve banka bildirimleri nasıl kontrol edilir?", "url": "https://parakarne.com/yasal-takipten-cikma", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Avukata ödediğim tutara harç dahil mi olur?", "acceptedAnswer": {"@type": "Answer", "text": "Her zaman değil; ödeme öncesi avukata \"bu tutara harç, vekalet ücreti ve tüm kapanış giderleri dahil mi?\" diye mutlaka sorun."}}, {"@type": "Question", "name": "Dosya kapandıktan sonra ne kadar beklemeliyim?", "acceptedAnswer": {"@type": "Answer", "text": "7-10 gün bekleyip güncel Findeks/Risk Merkezi raporu almanız, dosyanın gerçekten kapalı statüye geçtiğini doğrulamanız önerilir."}}, {"@type": "Question", "name": "Hangi bankaya önce başvurmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Yasal takip yaşadığınız bankayı en sona bırakıp önce maaş bankanızı veya aktif kullandığınız bankayı denemeniz daha mantıklı bir strateji."}}]}],
  },

  {
    slug: "mal-bildirimi-beyani-nedir-nasil-yapilir",
    title: `Mal Bildirimi Beyanı Nedir, Nasıl Yapılır?`,
    description: `Mal bildirimi beyanı nedir, nereye verilir, hangi bilgiler yazılır? İcra dosyasında mal beyanı gelirse ne yapılmalı, bildirim yapılmazsa ne olur?`,
    category: "İcra, Haciz ve Yasal Takip",
    bodyHtml: `<p class="on-cevap"><strong>Kısaca:</strong> Mal bildirimi beyanı, icra veya resmi borç takibi sürecinde gelir ve mal varlığı bilgilerinizi ilgili kuruma bildirmenizdir. Evrakta yazan süreyi ve kurumu kontrol edip formu eksiksiz doldurmanız gerekir.</p>

  <p class="lead">Mal bildirimi, çoğu kişinin icra dosyası, vergi borcu, kamu alacağı veya avukat takibi sırasında karşılaştığı resmi bir beyan sürecidir. ParaKarne ekibi olarak gördük ki, bu evrakı "sadece bilgi formu" sanıp önemsemeyen kullanıcılar daha sonra icra ceza, tazyik hapsi veya dosya takibi gibi daha stresli süreçlerle karşılaşabiliyor.</p>

  <h3>Mal bildirimi beyanı nedir?</h3>
  <p>Mal bildirimi beyanı, borçlunun gelirini, mal varlığını, alacaklarını ve borcunu nasıl ödeyebileceğine dair bilgileri ilgili kuruma bildirmesidir.</p>
  <p>İcra dosyalarında bu işlem genellikle <strong>mal beyanı</strong> olarak geçer. Günlük kullanımda ise "mal bildirim beyannamesi", "mal bildirimi beyanı" veya "mal beyan formu" denebilir.</p>

  <h3>Mal bildirimi neden istenir?</h3>
  <ul>
      <li>Banka veya finansman borcu için icra takibi başlatılması</li>
      <li>Avukat veya hukuk bürosu üzerinden yürüyen borç takibi</li>
      <li>Vergi dairesi veya kamu kurumlarına ait alacaklar</li>
      <li>İcra dosyası, e-haciz veya resmi takip süreci</li>
      <li>Borçlunun ödeme gücünün ve mal varlığının belirlenmek istenmesi</li>
  </ul>

  <h3>Mal bildirimi nereye verilir?</h3>
  <p>Mal bildirimi, evrakta belirtilen kuruma göre verilir. Konu icra dosyasıysa genellikle ilgili <strong>icra müdürlüğüne</strong> gidilir. Konu vergi dairesi veya kamu alacağıysa evrakta yazan vergi dairesi ya da kamu kurumunun yönlendirmesi takip edilir.</p>

  <h3>Mal bildirimi formunda hangi bilgiler olur?</h3>
  <ul>
      <li>Ad, soyad ve T.C. kimlik bilgisi</li>
      <li>Adres ve iletişim bilgisi</li>
      <li>Çalışma durumu ve aylık gelir</li>
      <li>Maaş, emekli maaşı veya düzenli gelir bilgisi</li>
      <li>Banka hesapları</li>
      <li>Adınıza kayıtlı araç bilgileri</li>
      <li>Ev, arsa, iş yeri gibi taşınmazlar</li>
      <li>Kira geliri veya başka gelirler</li>
      <li>Borcu ne şekilde ödeyebileceğinize dair açıklama</li>
  </ul>

  <h3>Üzerime ev veya araç yoksa ne yazmalıyım?</h3>
  <p>Üzerinize kayıtlı ev, arsa, araç veya başka bir mal varlığı yoksa bunu açık ve doğru şekilde yazabilirsiniz.</p>
  <p>Örneğin: <em>"Adıma kayıtlı taşınmaz bulunmamaktadır."</em> veya <em>"Adıma kayıtlı araç bulunmamaktadır."</em></p>
  <p>Burada önemli olan şey, bilerek eksik veya yanlış beyanda bulunmamaktır.</p>

  <h3>Çalışıyorsanız ne yazılır?</h3>
  <p>Çalışıyorsanız iş yeriniz, mesleğiniz/göreviniz ve yaklaşık aylık geliriniz yazılır. Örneğin:</p>
  <p><em>"Özel sektörde çalışıyorum. Aylık net gelirim yaklaşık ... TL'dir."</em></p>
  <p>Kamu çalışanı, emekli, serbest meslek sahibi, esnaf veya çalışmayan kişiler de kendi durumuna göre gelir bilgisini doğru şekilde beyan etmelidir.</p>

  <h3>Mal bildirimi yapılmazsa ne olur?</h3>
  <p>Mal bildirimi evrakı geldiyse bunu yok saymak doğru değildir. İcra ve resmi takip süreçlerinde mal beyanı yasal sonuç doğurabilen bir konudur.</p>
  <p>İcra ve İflas Kanunu'nda mal beyanı; borçlunun mal, alacak, hak, gelir ve borcunu ne şekilde ödeyebileceğine ilişkin bilgileri icra dairesine yazılı veya sözlü bildirmesi olarak düzenlenir.</p>
  <p>Mal beyanında bulunmama durumunda, alacaklının talebiyle icra mahkemesi tarafından tazyik hapsi süreci gündeme gelebilir. Bu nedenle evrakın üzerindeki süre ve başvuru yeri mutlaka kontrol edilmelidir.</p>

  <h3>Mal bildiriminden dolayı yakalama çıkar mı?</h3>
  <p>Her dosyada otomatik olarak yakalama çıkacağı söylenemez. Ancak mal beyanı yapılmadığı için icra ceza veya tazyik hapsi süreci işletilmişse, kişinin GBT/kimlik kontrolünde sorun yaşaması mümkün olabilir.</p>
  <p>Bu yüzden "nasıl olsa bir şey olmaz" diye beklemek yerine, evrak geldiyse ilgili icra dairesi veya kuruma zamanında başvurmak daha güvenlidir.</p>

  <h3>Mal bildirimi nasıl yapılır?</h3>
  <ol>
      <li>Gelen evrakı saklayın ve dosya numarasını not edin</li>
      <li>Evrakın hangi icra dairesi, vergi dairesi veya kurumdan geldiğini kontrol edin</li>
      <li>Kimlik belgenizle ilgili kuruma başvurun</li>
      <li>Mal bildirimi / mal beyanı formunu isteyin</li>
      <li>Gelir, maaş, banka hesabı, araç, taşınmaz ve diğer bilgileri doğru şekilde doldurun</li>
      <li>Formu teslim edin</li>
      <li>Teslim ettiğinize dair kayıt, evrak numarası veya belge alın</li>
  </ol>

  <h3>Örnek mal bildirimi metni</h3>
  <p>Aşağıdaki metin sadece örnek amaçlıdır. Her dosya farklı olduğu için resmi işlem yapmadan önce ilgili icra dairesi veya bir hukukçudan destek alınması daha güvenlidir.</p>
  <pre class="ornek-metin">... İcra Müdürlüğü'ne

Dosya No: ... / ...

Borçlu: Ad Soyad
T.C. Kimlik No: ...
Adres: ...

Konu: Mal bildiriminin sunulmasından ibarettir.

Açıklamalar:
Tarafıma ait gelir ve mal varlığı bilgileri aşağıda beyan edilmiştir.

Çalışma durumu: ...
Aylık gelir: ...
Adıma kayıtlı taşınmaz: ...
Adıma kayıtlı araç: ...
Banka hesapları ve diğer mal varlığı: ...

Yukarıda belirttiğim bilgilerin doğru olduğunu beyan ederim.

Tarih:
Ad Soyad:
İmza:</pre>

  <h3>Mal bildirimi yaparken dikkat edilecekler</h3>
  <ul>
      <li>Evrakı yırtıp atmayın</li>
      <li>Evrakta yazan süreyi kaçırmayın</li>
      <li>Dosya numarasını not alın</li>
      <li>Hangi kuruma verileceğini öğrenin</li>
      <li>Gelir ve mal varlığı bilgilerini eksiksiz yazın</li>
      <li>Teslim ettiğinize dair belge alın</li>
      <li>Yanlış veya eksik beyanda bulunmayın</li>
      <li>Emin değilseniz icra dairesinden veya hukukçudan destek alın</li>
  </ul>

  <h3>Kaynaklar</h3>
  <ul class="kaynaklar">
      <li><a href="https://www.mevzuat.gov.tr/mevzuatmetin/1.3.2004.pdf" target="_blank" rel="noopener nofollow">2004 sayılı İcra ve İflas Kanunu - resmi mevzuat</a></li>
      <li><a href="https://www.turkiye.gov.tr/adalet-icra-dosyasi-sorgulama" target="_blank" rel="noopener nofollow">e-Devlet icra dosyası sorgulama hizmeti</a></li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Mal bildirimi ile mal beyanı aynı şey mi?</p>
      <p class="sss-cevap">Günlük kullanımda çoğu kişi aynı anlamda kullanır. İcra dosyalarında daha çok "mal beyanı" ifadesi geçer.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Mal bildirimi e-Devlet'ten yapılır mı?</p>
      <p class="sss-cevap">Her dosya için standart bir e-Devlet gönderim yolu olmayabilir. Evrakta yazan icra dairesi veya kurumdan nasıl teslim edileceğini teyit etmek gerekir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Üzerime hiçbir mal yoksa yine beyan vermeli miyim?</p>
      <p class="sss-cevap">Evrak geldiyse, üzerinizde mal olmadığını da doğru şekilde beyan etmeniz gerekebilir. En doğru yol ilgili kurumdan dosya bazında bilgi almaktır.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/icra-tebligati">İcra Tebligatı Geldi, Ne Yapmalıyım?</a></li>
      <li><a href="/yasal-takipten-cikma">Yasal Takipten Çıkma</a></li>
      <li><a href="/maas-haczi-ne-kadar-kesilir">Maaş Haczi Ne Kadar Kesilir?</a></li>
      <li><a href="/borctan-dolayi-hapis-cezasi-var-mi">Borçtan Dolayı Hapis Cezası Var mı?</a></li>
  </ul>

  <div class="cta-box">
    <p>Bankalarla ilgili kullanıcı deneyimlerini görmek, kredi/kart onay oranlarını karşılaştırmak ve banka karnelerini incelemek için:</p>
    <a class="cta-btn" href="/#bankalar">Banka Karnelerine Bak →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. İcra, vergi ve resmi takip süreçlerinde dosyanıza özel durumlar için ilgili kurumdan veya uzman bir hukukçudan destek alınız. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Mal Bildirimi Beyanı Nedir, Nasıl Yapılır?", "description": "Mal bildirimi beyanı nedir, nereye verilir, hangi bilgiler yazılır? İcra dosyasında mal beyanı gelirse ne yapılmalı, bildirim yapılmazsa ne olur?", "url": "https://parakarne.com/mal-bildirimi-beyani-nedir-nasil-yapilir", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Mal bildirimi ile mal beyanı aynı şey mi?", "acceptedAnswer": {"@type": "Answer", "text": "Günlük kullanımda çoğu kişi aynı anlamda kullanır. İcra dosyalarında daha çok mal beyanı ifadesi geçer."}}, {"@type": "Question", "name": "Mal bildirimi e-Devlet'ten yapılır mı?", "acceptedAnswer": {"@type": "Answer", "text": "Her dosya için standart bir e-Devlet gönderim yolu olmayabilir. Evrakta yazan icra dairesi veya kurumdan nasıl teslim edileceğini teyit etmek gerekir."}}, {"@type": "Question", "name": "Üzerime hiçbir mal yoksa yine beyan vermeli miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Evrak geldiyse, üzerinizde mal olmadığını da doğru şekilde beyan etmeniz gerekebilir. En doğru yol ilgili kurumdan dosya bazında bilgi almaktır."}}]}],
  },
  {
    slug: "yurtdisinda-sms-onay-kodu-gelmiyor",
    title: `Yurtdışındayken Banka SMS Onay Kodu Gelmiyor, Ne Yapmalıyım?`,
    description: `Yurtdışındayken banka mobil onay kodu (SMS) gelmiyor hatası nasıl çözülür? Roaming, alternatif doğrulama yöntemleri ve öneriler.`,
    category: "ATM ve İşlem Sorunları",
    bodyHtml: `<p class="lead">Yurtdışına çıkınca banka işlemlerinde beklenen SMS doğrulama kodunun gelmemesi sık yaşanan bir sorundur; genellikle operatör/roaming kaynaklıdır ama çözüm yolları vardır. Biz ParaKarne ekibi olarak gördük ki, yurt dışına çıkmadan önce doğrulama yöntemini mobil onaya çeviren kullanıcılar bu sorunu neredeyse hiç yaşamıyor.</p>

  <h3>Olası nedenler</h3>
  <ul>
      <li>Telefonunuzda uluslararası dolaşım (roaming) hizmetinin kapalı veya devre dışı olması</li>
      <li>Bulunduğunuz ülkedeki operatörün, SMS'lerin geldiği kısa numarayı desteklememesi</li>
      <li>Telefonunuzda yurt dışında SMS almayı engelleyen bir ayar/uygulama olması</li>
      <li>Bankanın SMS yerine sadece mobil onay/bildirim yöntemini önceliklendirmiş olması</li>
  </ul>

  <h3>Ne yapmalısınız</h3>
  <ol>
      <li>Telefonunuzda uluslararası dolaşımın (roaming) açık olduğundan emin olun</li>
      <li>Operatörünüzü arayıp yurt dışında SMS almanın aktif olup olmadığını teyit edin</li>
      <li>Bankanızın mobil uygulamasında SMS yerine "Mobil Onay" veya "push bildirim" ile doğrulama seçeneği olup olmadığını kontrol edin (internet bağlantısı varsa bu genelde SMS'e gerek kalmadan çalışır)</li>
      <li>Yurt dışına çıkmadan önce bankanızı arayıp doğrulama yönteminizi mobil onay/uygulama içi bildirime çevirmeyi düşünün</li>
      <li>Acil bir işleminiz varsa bankanızın 7/24 çağrı merkezini arayıp kimlik doğrulamayla alternatif bir yol isteyin</li>
  </ol>

  <h3>Gerekli olabilecek belgeler</h3>
  <ul>
      <li>T.C. kimlik belgesi</li>
      <li>Cep telefonu numaranız</li>
      <li>Kullandığınız banka uygulaması bilgisi</li>
  </ul>

  <h3>Sıkça Sorulan Sorular</h3>
  <div class="sss-blok">
    <div class="sss-item">
      <p class="sss-soru">Roaming açık olduğu halde SMS gelmiyor, neden?</p>
      <p class="sss-cevap">Bazı ülkelerdeki operatörler, bankaların kullandığı kısa numaralardan gelen SMS'leri desteklemeyebilir. Bu durumda mobil onay/uygulama içi bildirim yöntemine geçmeniz gerekebilir.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">İnternetim var ama SMS yok, işlem yapabilir miyim?</p>
      <p class="sss-cevap">Çoğu bankada evet — internet bağlantınız varsa uygulama içi "mobil onay" veya push bildirim yöntemiyle SMS'e ihtiyaç duymadan işlem doğrulayabilirsiniz.</p>
    </div>
    <div class="sss-item">
      <p class="sss-soru">Yurt dışına çıkmadan önce ne yapmalıyım?</p>
      <p class="sss-cevap">Bankanızı arayıp doğrulama yönteminizi mobil onay/uygulama bildirimine çevirmeyi ve roaming'in açık olduğundan emin olmayı öneririz.</p>
    </div>
  </div>

  <h3>İlgili Konular</h3>
  <ul class="ilgili-konular">
      <li><a href="/mobil-bankaciliga-giremiyorum">Mobil Bankacılığa Giremiyorum</a></li>
  </ul>

  <div class="cta-box">
    <p>Durumunuzu ayrıntılı anlatıp size özel yol haritası almak veya gerekirse dilekçe taslağı hazırlatmak için:</p>
    <a class="cta-btn" href="/#yorumlar">ParaKarne'ye Sor →</a>
  </div>

  <p class="disclaimer">ParaKarne genel bilgilendirme sağlar; hukuki veya yatırım tavsiyesi vermez. Kişisel bilgilerinizi (T.C. kimlik no, IBAN, şifre, CVV) paylaşmayınız.</p>`,
    jsonLd: [{"@context": "https://schema.org", "@type": "Article", "headline": "Yurtdışındayken SMS Onay Kodu Gelmiyor, Ne Yapmalıyım?", "description": "Yurtdışındayken banka mobil onay kodu (SMS) gelmiyor hatası nasıl çözülür? Roaming, alternatif doğrulama yöntemleri ve öneriler.", "url": "https://parakarne.com/yurtdisinda-sms-onay-kodu-gelmiyor", "publisher": {"@type": "Organization", "name": "ParaKarne"}}, {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "Roaming açık olduğu halde SMS gelmiyor, neden?", "acceptedAnswer": {"@type": "Answer", "text": "Bazı ülkelerdeki operatörler, bankaların kullandığı kısa numaralardan gelen SMS'leri desteklemeyebilir. Bu durumda mobil onay/uygulama içi bildirim yöntemine geçmeniz gerekebilir."}}, {"@type": "Question", "name": "İnternetim var ama SMS yok, işlem yapabilir miyim?", "acceptedAnswer": {"@type": "Answer", "text": "Çoğu bankada evet — internet bağlantınız varsa uygulama içi \"mobil onay\" veya push bildirim yöntemiyle SMS'e ihtiyaç duymadan işlem doğrulayabilirsiniz."}}, {"@type": "Question", "name": "Yurt dışına çıkmadan önce ne yapmalıyım?", "acceptedAnswer": {"@type": "Answer", "text": "Bankanızı arayıp doğrulama yönteminizi mobil onay/uygulama bildirimine çevirmeyi ve roaming'in açık olduğundan emin olmayı öneririz."}}]}],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const CATEGORY_ORDER = [
  "Kredi ve Kredi Kartı",
  "İcra, Haciz ve Yasal Takip",
  "Findeks ve KKB",
  "Hesap ve Mobil Bankacılık",
  "ATM ve İşlem Sorunları",
];
