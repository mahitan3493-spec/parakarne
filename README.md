# ParaKarne

ParaKarne, Türkiye'deki bankaları kullanıcı yorumları ve karne mantığıyla karşılaştırmak için hazırlanmış Next.js + Firebase tabanlı bir web projesidir.

## İçerik

- 32 bankalık başlangıç veri seti
- Banka karşılaştırma tablosu
- Banka detay modalı
- Üyelik, giriş, Google ile giriş ve şifre sıfırlama
- E-posta doğrulama gönderimi
- Yorum, yıldız puanı ve bildirim sistemi
- Bildirim alan yorumları incelemek için admin/moderasyon paneli
- KVKK, gizlilik, kullanım şartları, iletişim ve itiraz süreci sayfaları
- SEO dosyaları: `robots.txt`, `sitemap.xml`, `site.webmanifest`, Open Graph görseli
- Netlify static export ayarı
- Firebase boşken sitenin patlamasını engelleyen yerel demo veri fallback'i

## Kurulum

```bash
npm install --legacy-peer-deps
cp .env.example .env.local
```

`.env.local` içine Firebase Web App bilgilerini girin:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

Geliştirme sunucusu:

```bash
npm run dev
```

Production build:

```bash
npm run build
```

Build sonucu `out/` klasörüne üretilir.

## Netlify ayarı

Projede `netlify.toml` hazırdır:

```toml
[build]
  command = "npm run build"
  publish = "out"
```

Netlify > Site configuration > Environment variables bölümüne Firebase değişkenlerini ekleyin.

## Firebase Authentication

Firebase Console > Authentication > Sign-in method bölümünden şunları açın:

- Email/Password
- Google

Google giriş için Firebase Authorized domains bölümünde canlı domainin olduğundan emin olun:

- `parakarne.com`
- `www.parakarne.com`
- Netlify test domaini

## Firestore veri yapısı

### `banks`

Bankalar seed script ile yazılır. Örnek alanlar:

- `name`
- `grade`
- `rate`
- `app`
- `rating`
- `reviewCount`
- `quote`
- `summary`
- `sub`
- `color`
- `order`

### `reviews`

Yorumlar kullanıcıdan gelir:

- `uid`
- `userName`
- `bankId`
- `bankName`
- `stars`
- `text`
- `note`
- `status`
- `reportCount`
- `reportedBy`
- `createdAt`

## Bankaları seed etme

Önce `.env.local` dolu olmalı. Sonra:

```bash
node scripts/seed-banks.mjs
```

Firestore kuralları normalde banka yazımını sadece admin'e açar. Seed sırasında geçici olarak Firebase Console üzerinden yazma izni vermeniz ya da admin claim ile çalışmanız gerekir.

## Firestore güvenlik kuralları

`firestore.rules` dosyası güncellendi:

- Banka verisi herkes tarafından okunur.
- Banka yazma işlemi sadece admin custom claim ile yapılır.
- Yorum oluşturmak için giriş gerekir.
- Yorum en az 25 karakterdir.
- Kullanıcı kendi yorumunu bildiremez.
- Aynı kullanıcı aynı yorumu ikinci kez bildiremez.
- Admin yorumları onaylayabilir, gizleyebilir veya silebilir.

Kuralları Firebase'e yüklemeyi unutmayın.

## Admin paneli

Panel adresi:

```text
/admin
```

Güvenli yöntem: Firebase Admin SDK ile kullanıcıya custom claim verin:

```js
await admin.auth().setCustomUserClaims("KULLANICI_UID", { admin: true });
```

Geçici yöntem: `.env.local` veya Netlify environment değişkenlerine kendi e-postanızı ekleyin:

```env
NEXT_PUBLIC_ADMIN_EMAIL=seninmailin@example.com
```

Not: E-posta yöntemi sadece arayüz kontrolüdür. Gerçek güvenlik için Firestore rules tarafında `admin: true` custom claim kullanılmalıdır.

## Yorumlardan puan hesaplama

Canlı yorumlar geldikçe ekran tarafında banka puanı ve yorum sayısı otomatik güncellenir. Hesaplama:

```text
(seed puan toplamı + canlı yorum yıldızları) / toplam yorum sayısı
```

3 veya daha fazla bildirim alan yorumlar karne ortalamasından çıkarılır.

## Önemli canlı yayın notları

Canlıya çıkmadan önce şu alanları gerçek bilgilerle güncelleyin:

- `src/app/iletisim/page.tsx` içindeki destek e-postası
- KVKK sayfasındaki veri sorumlusu bilgileri
- Google Search Console doğrulaması
- Firebase Authorized domains
- Gerçek banka logoları kullanılacaksa `public/bank-logos` içindeki SVG rozetlerini resmî/izinli dosyalarla değiştirin

## Komutlar

```bash
npm run dev       # geliştirme
npm run build     # Netlify/static export build
npm run build:next # direkt Next build
npm run lint      # ESLint kontrolü
```
