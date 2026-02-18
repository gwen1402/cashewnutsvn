# Discord Analytics Bot - Hướng dẫn sử dụng

## Giới thiệu

Hệ thống theo dõi lượng truy cập website và gửi thông báo real-time qua Discord webhook.

## Tính năng

✅ **Theo dõi real-time**: Thông báo ngay khi có người truy cập mới
✅ **Báo cáo định kỳ**: Gửi báo cáo tổng hợp mỗi 1 giờ
✅ **Thống kê chi tiết**:
- Tổng lượt truy cập
- Số người dùng duy nhất
- Trang được xem nhiều nhất
- Phân tích trình duyệt
- Phân tích hệ điều hành
- Nguồn truy cập (referrer)

## Cách cài đặt

### Bước 1: Tạo Discord Webhook

1. Mở Discord và vào server của bạn
2. Vào **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Đặt tên cho webhook (ví dụ: "Website Analytics")
5. Chọn channel để nhận thông báo
6. Click **Copy Webhook URL**

### Bước 2: Cấu hình trong website

Thêm vào file HTML (index.html, about.html, policy.html):

```html
<!-- Discord Analytics -->
<script src="js/analytics-discord.js"></script>
<script>
    // Thay YOUR_DISCORD_WEBHOOK_URL bằng webhook URL của bạn
    const analytics = new DiscordAnalytics('YOUR_DISCORD_WEBHOOK_URL');
</script>
```

**Ví dụ:**

```html
<!-- Thêm trước thẻ đóng </body> -->
<script src="js/analytics-discord.js"></script>
<script>
    const analytics = new DiscordAnalytics('https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz');
</script>
```

### Bước 3: Test thử

1. Mở website trong trình duyệt
2. Kiểm tra Discord channel đã nhận thông báo chưa
3. Nếu không nhận được, kiểm tra:
   - Webhook URL có đúng không
   - Console có báo lỗi không (F12)
   - Discord webhook có bị disable không

## Cấu trúc thông báo

### Thông báo người truy cập mới

```
🌐 Người truy cập mới

📄 Trang: [Tên trang](URL)
🌐 Trình duyệt: Chrome
💻 Hệ điều hành: Windows
🔗 Nguồn: Direct / Google / Facebook
📊 Tổng lượt truy cập: 150
👥 Người dùng duy nhất: 45
```

### Báo cáo tổng hợp (mỗi 1 giờ)

```
📊 Báo cáo lượng truy cập

📈 Tổng quan
Tổng lượt truy cập: 150
Người dùng duy nhất: 45
Lượt truy cập cuối: 18/02/2025 14:30

📄 Top trang được xem
• /index.html: 80 lượt
• /about.html: 40 lượt
• /policy.html: 30 lượt

🌐 Trình duyệt
• Chrome: 90 (60%)
• Safari: 40 (26.7%)
• Firefox: 20 (13.3%)

💻 Hệ điều hành
• Windows: 70 (46.7%)
• Android: 50 (33.3%)
• iOS: 30 (20%)
```

## Tùy chỉnh

### Thay đổi tần suất báo cáo

Mặc định: Mỗi 1 giờ

Để thay đổi, sửa trong file `analytics-discord.js`:

```javascript
// Tìm dòng này (dòng ~250)
const oneHour = 60 * 60 * 1000; // 1 giờ

// Thay đổi thành:
const oneHour = 30 * 60 * 1000; // 30 phút
const oneHour = 2 * 60 * 60 * 1000; // 2 giờ
const oneHour = 24 * 60 * 60 * 1000; // 24 giờ
```

### Tắt thông báo real-time

Nếu chỉ muốn nhận báo cáo định kỳ, comment dòng này trong `analytics-discord.js`:

```javascript
// Tìm dòng này (dòng ~140)
if (this.isNewVisitor) {
    // await this.sendVisitNotification(visitData, stats); // Comment dòng này
}
```

### Reset thống kê

Mở Console (F12) và chạy:

```javascript
analytics.resetStats();
```

## Lưu ý bảo mật

⚠️ **QUAN TRỌNG**: Webhook URL là thông tin nhạy cảm!

### Cách bảo vệ webhook URL:

1. **Không commit webhook URL lên Git**
   
   Tạo file `js/analytics-config.js`:
   ```javascript
   const DISCORD_WEBHOOK_URL = 'YOUR_WEBHOOK_URL_HERE';
   ```
   
   Thêm vào `.gitignore`:
   ```
   js/analytics-config.js
   ```
   
   Trong HTML:
   ```html
   <script src="js/analytics-config.js"></script>
   <script src="js/analytics-discord.js"></script>
   <script>
       const analytics = new DiscordAnalytics(DISCORD_WEBHOOK_URL);
   </script>
   ```

2. **Sử dụng biến môi trường** (nếu dùng build tool)

3. **Giới hạn rate limit** trên Discord webhook

## Khắc phục sự cố

### Không nhận được thông báo

1. Kiểm tra webhook URL có đúng không
2. Mở Console (F12) xem có lỗi không
3. Kiểm tra Discord webhook có active không
4. Thử gửi test message:
   ```javascript
   analytics.sendToDiscord({
       content: "Test message from website"
   });
   ```

### Thông báo bị spam

- Tăng thời gian giữa các báo cáo
- Tắt thông báo real-time
- Chỉ gửi báo cáo tổng hợp

### Dữ liệu không chính xác

- Xóa localStorage và test lại:
  ```javascript
  analytics.resetStats();
  ```
- Kiểm tra multiple tabs có ảnh hưởng không

## API Reference

### Constructor

```javascript
new DiscordAnalytics(webhookUrl)
```

**Parameters:**
- `webhookUrl` (string): Discord webhook URL

### Methods

```javascript
// Gửi báo cáo tổng hợp ngay lập tức
analytics.sendSummaryReport();

// Reset tất cả thống kê
analytics.resetStats();

// Lấy thống kê hiện tại
const stats = analytics.getStats();
console.log(stats);
```

## Ví dụ hoàn chỉnh

```html
<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Premium Cashew Nuts</title>
</head>
<body>
    <!-- Nội dung website -->
    
    <!-- Discord Analytics -->
    <script src="js/analytics-discord.js"></script>
    <script>
        // Khởi tạo analytics
        const analytics = new DiscordAnalytics('https://discord.com/api/webhooks/YOUR_WEBHOOK_ID/YOUR_WEBHOOK_TOKEN');
        
        // Optional: Gửi báo cáo ngay khi cần
        // analytics.sendSummaryReport();
    </script>
</body>
</html>
```

## Hỗ trợ

Nếu gặp vấn đề, kiểm tra:
1. Console log (F12)
2. Network tab để xem request đến Discord
3. Discord webhook settings

## License

MIT License - Sử dụng tự do cho dự án cá nhân và thương mại.
