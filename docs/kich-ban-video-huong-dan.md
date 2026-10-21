# Kịch bản video: "Code web cho người mới — mổ xẻ Bill Pro trong 10 phút"

Video hướng dẫn người chưa biết gì hiểu được một trang web HTML/CSS/JS hoạt động thế nào,
dùng chính mã nguồn Bill Pro (`E:\web\cse122-invoicepilot`) làm ví dụ.

## Thông số bản quay

| Mục | Giá trị |
|---|---|
| Thời lượng mục tiêu | 9 phút 30 giây |
| Độ phân giải | 1920×1080, 30 fps |
| Công cụ quay | OBS Studio (Win + Shift + R hoặc nút Start Recording) |
| Nguồn thu | Màn hình VS Code + trình duyệt, micro đọc lời thoại |
| Tên file xuất | `billpro-huong-dan-code-web.mp4` |
| Giọng đọc | Tiếng Việt, tốc độ vừa, ngắt nghỉ ở mỗi dấu `//` trong kịch bản |

**Chuẩn bị trước khi quay (làm 1 lần, 5 phút):**

1. Mở VS Code tại thư mục `cse122-invoicepilot`, phóng to chữ: `Ctrl` + `+` hai lần (font ~18px).
2. Mở sẵn 4 tab theo thứ tự: `index.html`, `css/style.css`, `js/data.js`, `js/main.js`.
3. Mở `index.html` bằng Live Server ở một cửa sổ trình duyệt riêng, đặt cạnh VS Code.
4. DevTools → Application → Local Storage → xóa key `billpro-v1` để dữ liệu về trạng thái gốc.
5. Tắt thông báo Windows (Focus assist) để không hiện banner giữa video.

---

## Bảng cảnh

| # | Cảnh | Thời gian | Thời lượng |
|---|---|---|---|
| 0 | Mở đầu — xem thành quả | 0:00 – 0:25 | 25s |
| 1 | Công cụ cần có | 0:25 – 1:05 | 40s |
| 2 | Cấu trúc thư mục | 1:05 – 1:50 | 45s |
| 3 | HTML — bộ khung | 1:50 – 3:00 | 70s |
| 4 | CSS — màu sắc và hình dáng | 3:00 – 4:10 | 70s |
| 5 | `data.js` — dữ liệu nằm đâu | 4:10 – 5:00 | 50s |
| 6 | `main.js` — JS vẽ giao diện | 5:00 – 6:30 | 80s |
| 7 | Sự kiện và lưu dữ liệu | 6:30 – 7:40 | 70s |
| 8 | Tự tay sửa 1 chỗ | 7:40 – 8:55 | 75s |
| 9 | Lỗi hay gặp + kết | 8:55 – 9:30 | 35s |

---

## Cảnh 0 — Mở đầu: xem thành quả (0:00 – 0:25)

**Trên màn hình:** trình duyệt chạy Bill Pro. Bấm lần lượt: menu "Danh sách hóa đơn" → "Tạo hóa đơn" → "Dashboard công nợ".

**Lời thoại:**
> Đây là Bill Pro — một trang web quản lý hóa đơn và công nợ, viết hoàn toàn bằng HTML, CSS và JavaScript. //
> Không framework, không backend, không cần cài đặt gì. //
> Trong 10 phút tới, mình sẽ mở mã nguồn ra và chỉ cho bạn đúng ba thứ: khung nằm ở đâu, màu sắc nằm ở đâu, và dữ liệu được vẽ lên màn hình bằng cách nào.

---

## Cảnh 1 — Công cụ cần có (0:25 – 1:05)

**Trên màn hình:** VS Code trống → mở Extensions (`Ctrl+Shift+X`) → gõ "Live Server" → chỉ vào nút Install.

**Lời thoại:**
> Bạn chỉ cần hai thứ miễn phí. //
> Một là VS Code, trình soạn thảo code. Hai là extension Live Server — nó mở một máy chủ nhỏ trên máy bạn, và mỗi lần bạn lưu file, trình duyệt tự tải lại. //
> Cài xong, chuột phải vào file `index.html`, chọn "Open with Live Server". Trang web hiện ra. //
> Ngoài ra không cần cài gì thêm. Toàn bộ dự án này là file văn bản thuần.

**Mẹo quay:** dừng chuột 2 giây trên nút Install để người xem kịp đọc tên extension.

---

## Cảnh 2 — Cấu trúc thư mục (1:05 – 1:50)

**Trên màn hình:** Explorer của VS Code, click mở lần lượt từng thư mục khi nhắc tới.

**Lời thoại:**
> Nhìn cây thư mục. Có bốn thứ quan trọng. //
> `index.html` — trang duy nhất người dùng mở. //
> Thư mục `css` — hai file tạo nên toàn bộ hình ảnh: `style.css` và `responsive.css` cho màn hình nhỏ. //
> Thư mục `js` — `data.js` chứa dữ liệu mẫu, `main.js` chứa toàn bộ logic. //
> Và `pages` — mười hai trang HTML nền tảng, tất cả đều dùng chung một bộ CSS và JS. //
> Điểm mấu chốt: **một file CSS dùng chung, một file JS dùng chung**. Sửa một chỗ, cả web đổi theo.

---

## Cảnh 3 — HTML: bộ khung (1:50 – 3:00)

**Trên màn hình:** mở `index.html`, cuộn từ đầu tới cuối (chỉ 17 dòng).

**Code hiển thị:** [index.html:14](file:///E:/web/cse122-invoicepilot/index.html#L14)

```html
<body>
  <div id="app" data-page="dashboard"></div>
  <script src="js/data.js"></script>
  <script src="js/main.js"></script>
</body>
```

**Lời thoại:**
> Đây là toàn bộ phần thân của `index.html`. Bạn thấy gì? //
> Một thẻ `div` **rỗng**, có id là `app`. //
> Rồi hai dòng nạp JavaScript: `data.js` chạy trước, `main.js` chạy sau. Thứ tự này quan trọng — dữ liệu phải có sẵn trước khi code vẽ dùng tới nó. //
> Trang web bạn xem ban nãy không nằm trong HTML. HTML chỉ dựng lên một cái hộp rỗng, còn JavaScript sẽ đổ nội dung vào cái hộp đó. //
> Cách làm này gọi là render phía client. Lợi ích: mười hai trang dùng chung một khung, không phải chép lại menu sidebar mười hai lần.

**Thao tác nhấn mạnh:** chuột phải vào `div#app` trên trình duyệt → Inspect → chỉ cho người xem thẻ đó ban đầu trống, sau khi JS chạy thì bên trong là cả một `<div class="app-shell">`.

---

## Cảnh 4 — CSS: màu sắc và hình dáng (3:00 – 4:10)

**Trên màn hình:** mở `css/style.css`, giữ ở 44 dòng đầu.

**Code hiển thị:** [css/style.css:12](file:///E:/web/cse122-invoicepilot/css/style.css#L12)

```css
:root{
  --bg:#f2f7f4;
  --primary:#0e8a5f;
  --r:14px;
  --shadow:0 10px 30px rgba(8,42,30,.06);
}
```

**Lời thoại:**
> CSS quyết định mọi thứ bạn nhìn thấy. Và file này bắt đầu bằng một khối `:root` — đây là bảng biến màu của cả dự án. //
> `--primary` là màu xanh chủ đạo. Thay vì viết chết mã màu ở hàng trăm chỗ, ta khai báo một lần rồi dùng lại bằng `var(--primary)`. //
> Giờ xem điều thú vị.

**Demo trực tiếp (quan trọng nhất cảnh này):**

1. Sửa `--primary:#0e8a5f;` thành `--primary:#7c3aed;` (tím).
2. `Ctrl+S`.
3. Chuyển sang trình duyệt — toàn bộ nút, link, thanh tiến trình đã thành tím.
4. Sửa lại `#0e8a5f` và lưu.

**Lời thoại khi demo:**
> Lưu file. // Cả trang web đổi màu. // Một dòng. //
> Đó là lý do người ta dùng biến CSS: đổi giao diện không cần đi tìm từng chỗ.

**Lời thoại chốt cảnh:**
> Phần còn lại của file chỉ là các lớp `.panel`, `.stat-card`, `.btn` — mỗi lớp mô tả một loại hộp. JS sẽ gắn các tên lớp này vào HTML nó sinh ra, và CSS tự động áp dụng.

---

## Cảnh 5 — `data.js`: dữ liệu nằm đâu (4:10 – 5:00)

**Trên màn hình:** mở `js/data.js`.

**Code hiển thị:** [js/data.js:11](file:///E:/web/cse122-invoicepilot/js/data.js#L11)

```js
window.BillProData = {
  customers: [ ... ],
  invoices: [
    {id:"INV-2026-001", customerId:"CUS-001", customer:"Công ty Minh Anh",
     issueDate:"2026-10-01", dueDate:"2026-10-20",
     amount:12500000, paid:0, status:"Chờ thanh toán", note:"Dịch vụ phần mềm"},
  ],
  reminders: [ ... ], users: [ ... ], settings: { ... }
};
```

**Lời thoại:**
> Dự án này không có cơ sở dữ liệu. Dữ liệu mẫu nằm ngay trong file `data.js`. //
> Nó gán một object vào `window.BillProData` — nghĩa là "để dành dữ liệu này, file JS chạy sau sẽ lấy". //
> Bên trong có năm danh sách: khách hàng, hóa đơn, lời nhắc, người dùng và cấu hình. //
> Mỗi hóa đơn là một object với các cặp `tên: giá trị`. Bạn chỉ cần đọc được chừng này là đủ: `amount` là số tiền, `paid` là đã thu bao nhiêu, `status` là trạng thái. //
> Hiểu cấu trúc dữ liệu trước, rồi mới đọc code xử lý nó. Đó là thứ tự đúng.

---

## Cảnh 6 — `main.js`: JS vẽ giao diện (5:00 – 6:30)

**Trên màn hình:** mở `js/main.js`. Nhảy bằng `Ctrl+G` tới từng dòng số bên dưới.

**Bước 1 — điểm khởi động** ([js/main.js:161](file:///E:/web/cse122-invoicepilot/js/main.js#L161)):

```js
function init(){
  const route = (location.hash||"").replace("#","")
             || document.getElementById("app")?.dataset.page
             || "dashboard";
  renderShell(routeInfo[route] ? route : "dashboard");
}
init();
```

> Dòng cuối file: gọi `init()`. Mọi thứ bắt đầu từ đây. //
> `init` tìm tên trang theo ba bước. Ưu tiên một: phần sau dấu `#` trên thanh địa chỉ — mở `index.html#accountant-invoice-list` thì route là trang danh sách hóa đơn. //
> Ưu tiên hai: thuộc tính `data-page` của `div#app` — nhớ cảnh trước không? Chính là chỗ này dùng tới nó. Mười hai file trong thư mục `pages` mỗi file khai báo một `data-page` khác nhau, nhờ vậy mở thẳng file đó là vào đúng trang. //
> Ưu tiên ba: không có gì thì mặc định là dashboard. //
> Đây gọi là routing bằng hash — cách chuyển trang mà không cần tải lại cả trang.

**Bước 2 — hàm tiện ích** ([js/main.js:34](file:///E:/web/cse122-invoicepilot/js/main.js#L34)):

```js
const money = n => new Intl.NumberFormat("vi-VN",
  {style:"currency", currency:"VND", maximumFractionDigits:0}).format(Number(n)||0);
```

> Số `12500000` trong dữ liệu là số thô. Hàm `money` biến nó thành "12.500.000 ₫" đúng kiểu Việt Nam. //
> Viết một lần, dùng ở mọi trang. Đó là tinh thần của hàm: không lặp lại chính mình.

**Bước 3 — hàm sinh HTML** ([js/main.js:67](file:///E:/web/cse122-invoicepilot/js/main.js#L67)):

```js
function stat(label, value, icon, note, tone){
  return `<article class="stat-card">
    <div class="stat-top"><span>${label}</span>...</div>
    <div class="stat-value">${value}</div>
    <div class="stat-note">${note}</div>
  </article>`;
}
```

> Đây là chỗ HTML và JS gặp nhau. Hàm trả về một **chuỗi** chứa thẻ HTML, với `${label}` là chỗ trống để nhét giá trị vào. //
> Dấu backtick cho phép viết chuỗi nhiều dòng. Mỗi thẻ trên bảng dashboard là một lần gọi hàm `stat`.

**Bước 4 — bảng điều phối trang** ([js/main.js:106](file:///E:/web/cse122-invoicepilot/js/main.js#L106)):

```js
function renderPage(route){
  switch(route){
    case "accountant-invoice-list": return invoiceList();
    case "accountant-invoice-form": return invoiceForm();
    case "manager-overdue-invoices": return overduePage();
    default: return dashboard();
  }
}
```

> `renderPage` như một cái công tắc: route nào thì gọi hàm vẽ trang đó. //
> Muốn thêm trang mới? Thêm một dòng `case` ở đây. Hết.

**Lời thoại chốt cảnh:**
> Luồng đầy đủ là: `init` đọc hash → `renderShell` dựng khung sidebar và topbar → `renderPage` chọn hàm vẽ nội dung → hàm đó ghép dữ liệu từ `db` vào các thẻ HTML → nhét chuỗi kết quả vào `div#app`. //
> Đó chính xác là lý do `index.html` ban đầu trống trơn mà vẫn hiện ra cả một trang web.

---

## Cảnh 7 — Sự kiện và lưu dữ liệu (6:30 – 7:40)

**Trên màn hình:** trình duyệt, trang "Tạo hóa đơn". DevTools mở sẵn tab Console.

**Code hiển thị** ([js/main.js:136](file:///E:/web/cse122-invoicepilot/js/main.js#L136), đã rút gọn):

```js
document.getElementById("invoiceForm").addEventListener("submit", e => {
  e.preventDefault();                       // chặn trang tải lại
  const amount = Number(document.getElementById("amount").value);
  db.invoices.unshift({ id, customer, amount, paid:0, status:"Chờ thanh toán" });
  persist("Đã tạo hóa đơn thành công");      // ghi vào LocalStorage
  location.href = "index.html#accountant-invoice-list";
});
```

**Lời thoại:**
> Đọc dữ liệu thì dễ. Giờ làm sao để web phản ứng khi người dùng bấm nút? //
> `addEventListener("submit", ...)` nghĩa là: "khi form được gửi, chạy đoạn code này". //
> Dòng đầu tiên, `e.preventDefault()`, chặn hành vi mặc định của trình duyệt là tải lại trang. Người mới hay quên dòng này nhất. //
> Rồi ta đọc giá trị người dùng nhập, thêm hóa đơn mới vào đầu mảng `db.invoices`. //
> Cuối cùng `persist` ghi toàn bộ dữ liệu vào LocalStorage — bộ nhớ nhỏ của trình duyệt.

**Thao tác trực tiếp:**

1. Điền form: khách hàng "Công ty Minh Anh", số tiền `9999000`.
2. Bấm "Lưu hóa đơn".
3. Trang tự nhảy sang danh sách, hóa đơn mới nằm trên cùng, toast hiện ra.
4. DevTools → Application → Local Storage → chỉ vào key `billpro-v1`.
5. **F5 tải lại trang** — hóa đơn vẫn còn.

**Lời thoại khi demo:**
> Lưu. // Trang tự chuyển sang danh sách, hóa đơn mới nằm đầu bảng. //
> Và đây là phần hay nhất: dữ liệu nằm trong LocalStorage, nên tải lại trang nó vẫn còn. //
> Không cần server. Trình duyệt của bạn chính là nơi lưu.

---

## Cảnh 8 — Tự tay sửa một chỗ (7:40 – 8:55)

**Trên màn hình:** quay lại VS Code, mở `js/data.js`.

**Bài tập cho người xem — thêm một hóa đơn:**

```js
{id:"INV-2026-006", customerId:"CUS-001", customer:"Công ty Minh Anh",
 issueDate:"2026-10-15", dueDate:"2026-11-15",
 amount:7700000, paid:0, status:"Chờ thanh toán", note:"Học thử JavaScript"},
```

Chèn dòng này vào mảng `invoices` trong [js/data.js:10](file:///E:/web/cse122-invoicepilot/js/data.js#L10), lưu file.

**Bẫy quan trọng phải nói rõ:**

**Trên màn hình:** chuyển sang trình duyệt, F5 → hóa đơn mới **không xuất hiện**.

**Lời thoại:**
> Mình lưu rồi, tải lại trang... và hóa đơn mới không hiện ra. Tại sao? //
> Vì `main.js` ưu tiên dữ liệu đã lưu trong LocalStorage. Nó thấy có bản lưu rồi thì dùng bản đó, không đọc lại `data.js`. //
> Cách xử lý: DevTools → Application → Local Storage → chuột phải key `billpro-v1` → Delete. // Rồi tải lại trang.

**Trên màn hình:** xóa key → F5 → hóa đơn `INV-2026-006` xuất hiện, số liệu dashboard tự tính lại.

**Lời thoại:**
> Có rồi. Và để ý: mình không sửa dòng code nào ở phần hiển thị. Tổng hóa đơn, tổng công nợ, biểu đồ — tất cả tự cập nhật. //
> Vì giao diện được **tính ra từ dữ liệu**, không phải viết chết. //
> Đó là bài học lớn nhất của video này: hãy sửa dữ liệu và hàm, đừng sửa HTML thủ công.

---

## Cảnh 9 — Lỗi hay gặp và kết (8:55 – 9:30)

**Trên màn hình:** bảng chữ hiện dần (có thể dựng bằng slide hoặc gõ thẳng vào file tạm).

**Lời thoại:**
> Bốn lỗi người mới gặp nhiều nhất với dự án kiểu này. //
> **Một**, trang trắng trơn: mở Console bằng F12, lỗi ở đó, đừng đoán. Thường là sai đường dẫn file JS. //
> **Hai**, mất CSS: kiểm tra dòng `link rel="stylesheet"` trong `index.html` có đúng đường dẫn `css/style.css` không. //
> **Ba**, file trong thư mục `pages` bị lỗi ảnh và CSS: vì chúng nằm sâu một cấp, đường dẫn phải là `../css/style.css`. //
> **Bốn**, sửa dữ liệu mẫu không thấy đổi: xóa LocalStorage như mình vừa làm. //
> Bạn đã xem xong toàn bộ vòng đời của một trang web: HTML dựng khung, CSS tô màu, JavaScript đọc dữ liệu rồi vẽ giao diện và bắt sự kiện. //
> Bước tiếp theo: tự mở `js/main.js`, tìm hàm `invoiceList`, và thử thêm một cột vào bảng. Hẹn gặp lại.

---

## Ghi chú dựng hậu kỳ

- Chèn tiêu đề cảnh (lower-third) ở đầu mỗi cảnh: `Cảnh 3 — HTML: bộ khung`.
- Khi đọc code, thu nhỏ vùng hiển thị còn ~15 dòng để chữ đủ lớn trên mobile.
- Đoạn demo đổi màu CSS ở cảnh 4: để nguyên tốc độ thật, **không tua nhanh** — người xem cần thấy thao tác lưu và kết quả.
- Đoạn chờ ở cảnh 7 (bấm lưu, trang chuyển) có thể cắt bớt khoảng lặng, giữ dưới 3 giây.
- Phụ đề: bật auto-caption của YouTube rồi sửa tay các thuật ngữ `render`, `route`, `LocalStorage`, `addEventListener`.
- Ảnh thu nhỏ: chụp màn hình dashboard Bill Pro, chèn chữ "10 phút hiểu HTML/CSS/JS".

## Checklist trước khi bấm quay

- [ ] Đã xóa key `billpro-v1` trong LocalStorage (để cảnh 8 chạy đúng).
- [ ] `--primary` trong `style.css` đang là `#0e8a5f` (màu gốc).
- [ ] Font VS Code đã phóng to, đọc rõ ở độ phân giải 1080p.
- [ ] Đã mở sẵn 4 tab file và cửa sổ trình duyệt.
- [ ] Đã tắt thông báo hệ thống.
- [ ] Thu thử 10 giây, nghe lại micro.
