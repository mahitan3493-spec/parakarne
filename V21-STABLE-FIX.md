# ParaKarne V21 Stable Build Fix

Bu sürüm, Netlify'da başarıyla çalışan V18 kaynak tabanı üzerine güvenli biçimde hazırlanmıştır.

- Dinamik `sitemap.ts` / `robots.ts` rotaları kaldırıldı; doğrulanmış statik `public/sitemap.xml` ve `public/robots.txt` korundu.
- Önceki V19/V20 paketlerindeki geniş kapsamlı ve build riski taşıyan mimari değişiklikler geri alınarak yalnızca güvenli güncellemeler eklendi.
- Puan ortalamaları ondalıklı saklanır ve okunur.
- 500 yorum sınırı kaldırıldı.
- Liderlik/onay rozetlerine minimum örneklem şartı eklendi.
- Kullanıcı adları yorumlarda kısaltılır; Findeks ve çalışma durumu yorum kartlarında gösterilmez.
- Kullanıcı kendi yorumunu ve hesabını silebilir; doğrulama e-postasını yeniden gönderebilir.
- Yönetici ekranı yalnızca Firebase `admin: true` custom claim ile açılır.
- PWA sürümü V21'e yükseltildi.
