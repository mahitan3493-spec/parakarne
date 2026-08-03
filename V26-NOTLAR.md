# ParaKarne V26 — Finans Tutar Alanı Düzeltmesi

- İhtiyaç, konut, taşıt ve mevduat hesaplama alanlarındaki tüm sayısal kutular artık tamamen silinebilir.
- Kutuya dokunulduğunda mevcut değer seçilir; yeni rakam yazıldığında eski değer tek hamlede değiştirilir.
- TL tutarları yazılırken Türkçe binlik ayıracı otomatik uygulanır (`500000` → `500.000`).
- Faiz oranlarında hem virgül hem nokta girişi kabul edilir ve ekranda Türkçe ondalık biçimi kullanılır (`3.29` → `3,29`).
- Alan boş bırakılıp çıkılırsa son geçerli değer geri yüklenir; hesaplama motoru geçici boş giriş nedeniyle bozulmaz.
- Minimum ve maksimum değerler yazım sırasında kullanıcıyı engellemez, alandan çıkıldığında güvenli biçimde uygulanır.
- PWA görünür sürümü, manifest ve service worker önbelleği V26'ya yükseltildi.
- Firestore kuralları ve Firebase veri yapısı değişmedi.
