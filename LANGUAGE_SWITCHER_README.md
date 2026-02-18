# Language Switcher Feature - Hướng dẫn sử dụng

## 🌐 Tính năng đã triển khai

Tính năng chuyển đổi ngôn ngữ tiếng Việt ↔ tiếng Anh đã được triển khai đầy đủ cho website.

## ✅ Các phần đã được dịch

### 1. Header & Navigation
- Logo và navigation links
- Search box placeholder
- Cart button
- Language switcher (VI/EN buttons)

### 2. Hero Section
- Title
- Subtitle
- Explore button

### 3. Sidebar Filters
- Category title và tất cả categories
- Price range labels
- Sort options (tất cả 5 options)
- Apply và Clear buttons

### 4. Products Section
- Section title
- Product count text
- Product names (20 sản phẩm)
- Product descriptions
- Product categories
- Product ingredients
- In stock / Out of stock status
- Add to cart button
- Pagination (Previous/Next)
- No products found message

### 5. Product Detail Modal
- Modal title
- Product information
- Ingredients label
- Nutrition facts label
- Stock availability
- Add to cart button

### 6. Shopping Cart Modal
- Cart title
- Empty cart message
- Total label
- Checkout button
- Remove button
- Product names in cart

### 7. Checkout Modal
- All form labels (Customer info, Shipping address)
- All input placeholders
- Order information section
- Payment method section
- Bank transfer information
- All buttons (Back to cart, Confirm order)

### 8. Success Modal
- Success title
- Thank you message
- Order code label
- Total amount label
- Bank transfer info
- Contact note
- Continue shopping button

### 9. Footer
- About us section
- Contact section
- Policy section
- Copyright text

### 10. Floating Contact Buttons
- Zalo button text
- Phone button text

## 🎯 Cách sử dụng

1. **Mở website**: Mở file `index.html` trong browser

2. **Chuyển đổi ngôn ngữ**: 
   - Click nút **VI** để chuyển sang tiếng Việt
   - Click nút **EN** để chuyển sang tiếng Anh

3. **Tự động lưu**: Lựa chọn ngôn ngữ được lưu vào localStorage và sẽ được nhớ khi bạn quay lại

## 🔧 Tính năng kỹ thuật

### Translations được quản lý trong:
- `js/translations.js` - Chứa tất cả translations cho UI và products

### Language Manager:
- `js/i18n.js` - Core module quản lý ngôn ngữ

### Các file đã được update:
- `index.html` - Thêm data-i18n attributes
- `js/app.js` - Render products với translations
- `js/cart.js` - Cart và checkout với translations
- `js/utils.js` - Support i18n cho utility functions
- `css/style.css` - Styles cho language switcher

## 💡 Đặc điểm nổi bật

1. **Không reload trang**: Chuyển đổi ngôn ngữ mượt mà
2. **Giữ scroll position**: Vị trí cuộn không thay đổi
3. **Currency conversion**: VND ↔ USD (1 USD ≈ 24,000 VND)
4. **Responsive**: Hoạt động tốt trên mobile
5. **Fallback**: Tự động fallback về tiếng Việt nếu thiếu translation
6. **SEO friendly**: Meta tags được update theo ngôn ngữ

## 📝 Cấu trúc Translation

```javascript
translations = {
  vi: {
    nav: { home: "Trang chủ", ... },
    products: { title: "Sản phẩm nổi bật", ... },
    // ...
  },
  en: {
    nav: { home: "Home", ... },
    products: { title: "Featured Products", ... },
    // ...
  }
}
```

## 🚀 Test ngay

1. Mở `index.html` trong browser
2. Click nút EN ở header
3. Xem tất cả nội dung chuyển sang tiếng Anh
4. Thử các tính năng:
   - Search products
   - Filter by category
   - Add to cart
   - Checkout
   - View product details

## 📱 Responsive

Language switcher được tối ưu cho:
- Desktop: Full buttons với text
- Tablet: Compact buttons
- Mobile: Smaller buttons, vẫn dễ click

## 🎨 UI/UX

- Active language được highlight màu xanh
- Smooth transitions
- Clear visual feedback
- Accessible (keyboard navigation support)

---

**Tất cả các phần của website đã được dịch đầy đủ sang tiếng Anh!** 🎉
