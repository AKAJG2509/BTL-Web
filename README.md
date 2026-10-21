# Bill Pro — BÀI TẬP LỚN CSE122

> **Học phần:** CSE122 — Thiết kế & Lập trình Web  
> **Sinh viên:** AKAJG2509  
> **MSSV:** 2551170901  
> **Trang web chạy trực tiếp (Live Demo):** [https://akajg2509.github.io/BTL-Web/](https://akajg2509.github.io/BTL-Web/)  
> **Kho mã nguồn GitHub:** [https://github.com/AKAJG2509/BTL-Web](https://github.com/AKAJG2509/BTL-Web)  

---

Website Frontend mẫu quản lý hóa đơn và công nợ cho doanh nghiệp nhỏ. Dự án được tổ chức để một sinh viên có thể phát triển lần lượt từng luồng nghiệp vụ.

## Chạy dự án
1. Giải nén thư mục.
2. Mở thư mục `cse122-billpro` bằng VS Code.
3. Cài extension **Live Server** (nếu chưa có).
4. Nhấn chuột phải `index.html` → **Open with Live Server**.

Có thể mở trực tiếp `index.html`, nhưng dùng Live Server sẽ ổn định hơn.

## Ngôn ngữ và tiền tệ
- Giao diện chính bằng tiếng Việt.
- Tiền tệ dùng Đồng Việt Nam (VND), hiển thị theo định dạng Việt Nam và không có phần thập phân.

## Chức năng hiện có
- Dashboard tổng quan hóa đơn và công nợ.
- Kế toán: danh sách hóa đơn, tạo hóa đơn, đối chiếu/ghi nhận thanh toán.
- Kinh doanh: công nợ khách hàng, tạo/sửa bản nháp nhắc thanh toán, chi tiết hóa đơn.
- Quản lý: dashboard công nợ, danh sách quá hạn, dự báo dòng tiền.
- Quản trị viên: quản lý khách hàng, người dùng demo, cấu hình hóa đơn.
- Tìm kiếm/lọc, kiểm tra form, trạng thái, lưu dữ liệu bằng LocalStorage.
- AI mô phỏng: kiểm tra hóa đơn bất thường, gợi ý nhắc thanh toán, tóm tắt dòng tiền.
- Responsive cho desktop và màn hình nhỏ.

## Dữ liệu và giới hạn
- Dữ liệu mẫu nằm trong `js/data.js`.
- Dữ liệu chỉnh sửa được lưu trong LocalStorage của trình duyệt hiện tại.
- Chưa có backend, đăng nhập thật, gửi email/SMS thật hoặc gọi API AI thật.
- Tính năng AI hiện là mô phỏng bằng JavaScript, cần ghi rõ trong báo cáo.
- Nên xóa dữ liệu demo của trình duyệt bằng DevTools → Application → Local Storage nếu muốn khởi động lại.

## Các trang HTML nền tảng
12 trang trong `pages/` tải cùng bộ giao diện dùng chung; điều hướng chính hoạt động qua `index.html#route`.
Mở `index.html` làm trang bắt đầu.

## GitHub
Commit theo từng chức năng, ví dụ:
- `docs: define project scope`
- `feat: add invoice list and filters`
- `feat: add invoice form validation`
- `feat: add payment reconciliation`
- `feat: add cashflow summary assistant`
- `fix: handle empty invoice data`

## Trước khi nộp
- Đối chiếu với bảng màn hình đã được giảng viên duyệt.
- Hoàn thiện thiết kế Figma/Canva và luồng người dùng.
- Kiểm thử form, tìm kiếm, lọc, lưu dữ liệu và responsive.
- Quay OBS theo đúng yêu cầu của giảng viên.
- Ghi nhận trung thực phần dùng AI và phần đã tự kiểm tra/chỉnh sửa.
