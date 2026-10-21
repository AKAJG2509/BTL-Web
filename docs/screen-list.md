# Bảng kiểm kê màn hình Bill Pro (bản khởi đầu)

> Cần trình giảng viên duyệt và điều chỉnh theo luồng nghiệp vụ thực tế trước khi coi là danh sách cuối cùng.

| Vai trò | Mục tiêu | Nhiệm vụ | Màn hình | Tệp | CRUD | AI |
|---|---|---|---|---|---|---|
| Kế toán | Quản lý hóa đơn | Xem, tìm kiếm, lọc hóa đơn | Danh sách hóa đơn | pages/accountant-invoice-list.html | R | Invoice Anomaly Check |
| Kế toán | Tạo/sửa hóa đơn | Nhập thông tin và kiểm tra hợp lệ | Biểu mẫu hóa đơn | pages/accountant-invoice-form.html | C/R/U | Invoice Anomaly Check |
| Kế toán | Đối chiếu khoản thu | Ghi nhận thanh toán | Đối chiếu thanh toán | pages/accountant-reconciliation.html | C/R/U/D | Không |
| Kinh doanh | Theo dõi công nợ | Xem số dư từng khách | Công nợ khách hàng | pages/sales-customer-balance.html | R | Không |
| Kinh doanh | Nhắc khách thanh toán | Soạn, sửa, theo dõi nhắc | Nhắc thanh toán | pages/sales-payment-reminders.html | C/R/U | Reminder Draft AI |
| Kinh doanh | Tra cứu hóa đơn | Xem chi tiết và trạng thái | Chi tiết hóa đơn | pages/sales-invoice-detail.html | C/R/U/D | Không |
| Quản lý | Tổng hợp công nợ | Xem chỉ số tổng quan | Dashboard công nợ | pages/manager-receivable-dashboard.html | R | Cashflow Summary |
| Quản lý | Theo dõi khoản quá hạn | Lọc và ghi nhận xử lý | Hóa đơn quá hạn | pages/manager-overdue-invoices.html | C/R/U | Không |
| Quản lý | Dự báo khoản thu | Tóm tắt dòng tiền mô phỏng | Dự báo dòng tiền | pages/manager-cashflow-forecast.html | C/R/U/D | Cashflow Summary |
| Quản trị viên | Quản lý khách hàng | Thêm, sửa, lưu trữ | Quản lý khách hàng | pages/admin-customer-management.html | C/R/U/D | Không |
| Quản trị viên | Quản lý người dùng | Thêm, sửa, bật/tắt demo | Quản lý người dùng | pages/admin-user-management.html | C/R/U | Không |
| Quản trị viên | Cấu hình hóa đơn | Lưu quy tắc thanh toán | Cấu hình hóa đơn | pages/admin-invoice-settings.html | C/R/U/D | Không |