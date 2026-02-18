# 🚀 Hướng dẫn lấy Discord Webhook URL (2 phút)

## Bước 1: Mở Discord Server

1. Mở Discord (desktop hoặc web: https://discord.com)
2. Chọn server của bạn (hoặc tạo server mới nếu chưa có)

## Bước 2: Tạo Webhook

### Cách 1: Từ Channel Settings

1. **Click chuột phải** vào channel muốn nhận thông báo (ví dụ: #analytics, #website-stats)
2. Chọn **"Edit Channel"** (Chỉnh sửa kênh)
3. Chọn tab **"Integrations"** (Tích hợp)
4. Click **"Webhooks"**
5. Click nút **"New Webhook"** (Webhook mới)

### Cách 2: Từ Server Settings

1. Click vào tên server → **"Server Settings"**
2. Chọn **"Integrations"** → **"Webhooks"**
3. Click **"New Webhook"**

## Bước 3: Cấu hình Webhook

1. **Đặt tên**: "Website Analytics" hoặc "Cashew Nuts Analytics"
2. **Chọn channel**: Channel nào sẽ nhận thông báo
3. **Avatar** (tùy chọn): Upload ảnh đại diện cho bot

## Bước 4: Copy Webhook URL

1. Click nút **"Copy Webhook URL"**
2. URL sẽ có dạng: `https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz`

## Bước 5: Paste vào Website

### Mở file `index.html` và tìm dòng này:

```javascript
const WEBHOOK_URL = 'YOUR_DISCORD_WEBHOOK_URL';
```

### Thay thế bằng URL vừa copy:

```javascript
const WEBHOOK_URL = 'https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz';
```

### Làm tương tự với `about.html` và `policy.html`

## Bước 6: Test

1. Lưu file
2. Mở website trong trình duyệt
3. Kiểm tra Discord channel → Sẽ nhận thông báo ngay!

---

## ⚠️ LƯU Ý BẢO MẬT

**QUAN TRỌNG**: Webhook URL là thông tin nhạy cảm!

### ❌ KHÔNG làm:
- Đăng webhook URL lên mạng xã hội
- Commit webhook URL lên GitHub public
- Chia sẻ webhook URL cho người khác

### ✅ NÊN làm:
- Giữ webhook URL riêng tư
- Nếu bị lộ, xóa webhook cũ và tạo mới
- Sử dụng file `.gitignore` để bảo vệ

---

## 🎯 Kết quả

Sau khi cấu hình xong, bạn sẽ nhận được:

### 1. Thông báo Real-time
Mỗi khi có người truy cập mới:
```
🌐 Người truy cập mới

📄 Trang: Premium Cashew Nuts
🌐 Trình duyệt: Chrome
💻 Hệ điều hành: Windows
🔗 Nguồn: Google
📊 Tổng lượt truy cập: 1
👥 Người dùng duy nhất: 1
```

### 2. Báo cáo định kỳ (mỗi 1 giờ)
```
📊 Báo cáo lượng truy cập

📈 Tổng quan
Tổng lượt truy cập: 150
Người dùng duy nhất: 45

📄 Top trang được xem
• /index.html: 80 lượt
• /about.html: 40 lượt
• /policy.html: 30 lượt

🌐 Trình duyệt
• Chrome: 90 (60%)
• Safari: 40 (26.7%)

💻 Hệ điều hành
• Windows: 70 (46.7%)
• Android: 50 (33.3%)
```

---

## 🔧 Khắc phục sự cố

### Không nhận được thông báo?

1. **Kiểm tra webhook URL**
   - Mở Console (F12) → Xem có lỗi không
   - Đảm bảo URL đúng format

2. **Kiểm tra Discord**
   - Webhook có bị disable không?
   - Channel có đúng không?

3. **Test thủ công**
   - Mở Console (F12)
   - Chạy lệnh:
   ```javascript
   fetch('YOUR_WEBHOOK_URL', {
       method: 'POST',
       headers: {'Content-Type': 'application/json'},
       body: JSON.stringify({content: 'Test message'})
   });
   ```

### Thông báo bị spam?

Sửa trong `js/analytics-discord.js`:
- Tắt thông báo real-time (dòng 140)
- Tăng thời gian báo cáo (dòng 250)

---

## 📞 Hỗ trợ

Nếu gặp khó khăn:
1. Đọc file `DISCORD_ANALYTICS_README.md`
2. Kiểm tra Console log (F12)
3. Xem Network tab để debug

---

## ✅ Checklist

- [ ] Đã tạo Discord webhook
- [ ] Đã copy webhook URL
- [ ] Đã paste vào index.html
- [ ] Đã paste vào about.html
- [ ] Đã paste vào policy.html
- [ ] Đã test và nhận được thông báo
- [ ] Đã thêm webhook URL vào .gitignore (nếu dùng Git)

**Chúc mừng! Bạn đã hoàn thành cài đặt Discord Analytics! 🎉**
