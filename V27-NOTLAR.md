# ParaKarne V27 — Finans Girişi ve Gerçek Banka Logoları

## Finans hesaplama alanları
- Tutar alanları tamamen silinebilir; eski rakam zorla geri gelmez.
- `500000` yazıldığında anında `500.000`, `1000000` yazıldığında `1.000.000` görünür.
- Her sayısal alana erişilebilir bir temizleme (`×`) düğmesi eklendi.
- Alan boşken hesaplama sonucu uydurma `1 TL` üzerinden çalışmaz; sonuçlar `—` olur ve kullanıcıdan tutar/vade ister.
- Aynı davranış ihtiyaç, konut, taşıt ve mevduat hesaplarında uygulanır.

## Gerçek SVG banka logoları
- `scripts/import-bankpuan-logos.mjs`, BankPuan logo arşivindeki 32 gerçek SVG dosyasını ParaKarne banka kimlikleriyle eşleştirir.
- Komut eksik logo varsa deploy işleminden önce hata verir; geçici harf logolarının yanlışlıkla yayınlanmasını engeller.
- Kullanım: `npm run logos:import -- /tam/yol/bankpuan-logo-kompakt.zip`

## PWA
- Görünür sürüm, manifest, ikon yolları ve service worker önbelleği V27'ye yükseltildi.

### Otomatik aktarım
Logo arşivi İndirilenler klasöründeyse proje kökünde şu komut yeterlidir:

```bash
bash scripts/import-bankpuan-logos-auto.sh
```
