# Portfolio Website

Đây là website portfolio cá nhân được thiết kế với giao diện hiện đại, responsive và thân thiện với người dùng.

## 🌟 Tính năng

- **Thiết kế responsive**: Hoạt động tốt trên mọi thiết bị (desktop, tablet, mobile)
- **Giao diện hiện đại**: Sử dụng CSS3 với animations và transitions mượt mà
- **Navigation thông minh**: Menu sticky với highlight section hiện tại
- **Dark mode**: Chế độ tối/sáng có thể toggle
- **Animations**: Scroll reveal, typing effect, counter animation
- **Form liên hệ**: Form gửi tin nhắn với validation
- **SEO friendly**: Cấu trúc HTML semantic

## 📁 Cấu trúc thư mục

```
Portfolio/
├── index.html          # File HTML chính
├── styles.css          # Stylesheet chính
├── script.js           # JavaScript functionality
├── images/             # Thư mục chứa hình ảnh
│   ├── profile.jpg     # Ảnh profile (cần thêm)
│   ├── project1.jpg    # Screenshot dự án 1 (cần thêm)
│   ├── project2.jpg    # Screenshot dự án 2 (cần thêm)
│   ├── project3.jpg    # Screenshot dự án 3 (cần thêm)
│   └── project4.jpg    # Screenshot dự án 4 (cần thêm)
└── README.md           # File này
```

## 🚀 Hướng dẫn sử dụng

### 1. Thêm ảnh cá nhân và dự án
- Thêm ảnh profile của bạn vào `images/profile.jpg`
- Thêm screenshots các dự án vào thư mục `images/`
- Kích thước đề xuất: 
  - Profile: 400x400px (vuông)
  - Project screenshots: 600x400px (tỷ lệ 3:2)

### 2. Tùy chỉnh nội dung

#### Thông tin cá nhân (trong file `index.html`):
- Thay đổi tên trong `<title>` và các thẻ có text "Tên Của Bạn"
- Cập nhật mô tả trong hero section
- Thay đổi thông tin liên hệ (email, LinkedIn, GitHub, phone)

#### Kỹ năng:
- Thêm/bớt skill items trong section `.skills-grid`
- Thay đổi icon bằng cách sử dụng Font Awesome classes

#### Dự án:
- Cập nhật thông tin dự án trong section `.projects-grid`
- Thay đổi tên dự án, mô tả, công nghệ sử dụng
- Cập nhật links GitHub và demo

### 3. Tùy chỉnh màu sắc và giao diện

Trong file `styles.css`, thay đổi CSS variables trong `:root`:

```css
:root {
    --primary-color: #667eea;     /* Màu chính */
    --secondary-color: #764ba2;   /* Màu phụ */
    --accent-color: #f093fb;      /* Màu nhấn */
    --text-color: #333;           /* Màu text */
    --text-light: #666;           /* Màu text nhạt */
}
```

## 🎨 Customization

### Thay đổi font chữ:
1. Thay đổi Google Fonts import trong `<head>`
2. Cập nhật `font-family` trong CSS

### Thêm animations mới:
- Sử dụng CSS keyframes cho animations tùy chỉnh
- Tích hợp libraries như AOS (Animate On Scroll) nếu cần

### Thêm sections mới:
1. Tạo HTML structure mới
2. Thêm CSS styling tương ứng
3. Cập nhật navigation menu

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: <480px

## 🔧 Dependencies

Website sử dụng các CDN externals:
- **Font Awesome 6.0.0**: Icons
- **Google Fonts (Inter)**: Typography
- **Vanilla JavaScript**: Không cần framework

## 🌐 Deployment

### GitHub Pages:
1. Upload code lên GitHub repository
2. Vào Settings > Pages
3. Chọn source branch (usually `main`)
4. Website sẽ có địa chỉ: `https://yourusername.github.io/repository-name`

### Netlify:
1. Kéo thả thư mục vào Netlify
2. Hoặc connect với GitHub repository
3. Tự động deploy khi có changes

### Vercel:
1. Import project từ GitHub
2. Tự động build và deploy

## ✨ Tips

1. **SEO**: Thêm meta descriptions, keywords trong `<head>`
2. **Performance**: Optimize ảnh trước khi upload (WebP format khuyến khích)
3. **Analytics**: Thêm Google Analytics tracking code
4. **Contact Form**: Tích hợp với services như Formspree, Netlify Forms
5. **Blog**: Có thể extend thêm blog section bằng markdown files

## 🤝 Contributing

Nếu bạn muốn đóng góp hoặc báo bugs:
1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push và tạo Pull Request

## 📄 License

MIT License - Feel free to use for personal and commercial projects.

---

**Lưu ý**: Nhớ thay thế tất cả placeholder text và images bằng thông tin thực của bạn trước khi deploy!
