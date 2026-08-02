# ParaKarne V20 build düzeltmesi

V19 kopyalanırken eski `public/sitemap.xml` ve `public/robots.txt` dosyaları klasörde kalabildiği için App Router metadata rotalarıyla çakışıyordu. V20 build öncesinde bu eski dosyaları otomatik temizler.

# ParaKarne V20 yayın notu

1. Kaynak kodu GitHub `main` dalına gönderin ve Netlify build'inin `Published` olmasını bekleyin.
2. Firestore kurallarını bir kez yayınlayın:
   `firebase deploy --only firestore:rules`
3. Firebase hesabında `admin: true` custom claim bulunan yetkili kullanıcıyla `/admin/` sayfasına girin.
4. "Hassas Veri Temizliği" kartındaki "Gizliye Taşı" düğmesini bir kez çalıştırın. Bu işlem eski yorumlardaki çalışma durumu ve Findeks aralığını `reviewPrivate` koleksiyonuna taşır.

Not: Yönetici erişimi e-posta eşleşmesiyle değil, yalnızca Firebase custom claim ile verilir.
