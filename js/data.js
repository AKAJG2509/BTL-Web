/* Dữ liệu mẫu của Bill Pro. Có thể chỉnh sửa để phục vụ demo. */
window.BillProData = {
  customers: [
    {id:"CUS-001",name:"Công ty Minh Anh",email:"ketoan@minhanh.vn",phone:"0901 234 567",balance:12500000,status:"active"},
    {id:"CUS-002",name:"Thương mại An Phát",email:"finance@anphat.vn",phone:"0902 345 678",balance:8200000,status:"active"},
    {id:"CUS-003",name:"Nội thất Sao Việt",email:"admin@saoviet.vn",phone:"0903 456 789",balance:0,status:"active"},
    {id:"CUS-004",name:"Công nghệ Đại Nam",email:"accounting@dainam.vn",phone:"0904 567 890",balance:18700000,status:"active"},
    {id:"CUS-005",name:"Dịch vụ Hưng Thịnh",email:"hello@hungthinh.vn",phone:"0905 678 901",balance:4500000,status:"inactive"}
  ],
  invoices: [
    {id:"INV-2026-001",customerId:"CUS-001",customer:"Công ty Minh Anh",issueDate:"2026-10-01",dueDate:"2026-10-20",amount:12500000,paid:0,status:"Chờ thanh toán",note:"Dịch vụ phần mềm"},
    {id:"INV-2026-002",customerId:"CUS-002",customer:"Thương mại An Phát",issueDate:"2026-09-15",dueDate:"2026-10-10",amount:8200000,paid:0,status:"Quá hạn",note:"Thiết bị văn phòng"},
    {id:"INV-2026-003",customerId:"CUS-003",customer:"Nội thất Sao Việt",issueDate:"2026-09-10",dueDate:"2026-09-25",amount:15600000,paid:15600000,status:"Đã thanh toán",note:"Nội thất"},
    {id:"INV-2026-004",customerId:"CUS-004",customer:"Công nghệ Đại Nam",issueDate:"2026-10-05",dueDate:"2026-10-28",amount:18700000,paid:0,status:"Chờ thanh toán",note:"Bảo trì hệ thống"},
    {id:"INV-2026-005",customerId:"CUS-005",customer:"Dịch vụ Hưng Thịnh",issueDate:"2026-08-15",dueDate:"2026-09-01",amount:4500000,paid:0,status:"Quá hạn",note:"Tư vấn"}
  ],
  reminders: [
    {id:"REM-001",invoiceId:"INV-2026-002",customer:"Thương mại An Phát",dueDate:"2026-10-10",channel:"Email",status:"Chờ gửi",message:"Kính gửi Quý khách, hóa đơn INV-2026-002 đã đến hạn thanh toán. Mong Quý khách kiểm tra và phản hồi thời gian thanh toán dự kiến. Xin cảm ơn."}
  ],
  users: [
    {id:"USR-001",name:"Nguyễn Minh Anh",email:"accountant@billpro.demo",role:"Kế toán",status:"Hoạt động"},
    {id:"USR-002",name:"Trần Hải Nam",email:"sales@billpro.demo",role:"Kinh doanh",status:"Hoạt động"},
    {id:"USR-003",name:"Lê Thu Hà",email:"manager@billpro.demo",role:"Quản lý",status:"Hoạt động"}
  ],
  settings: {paymentDays:30,reminderBefore:3,currency:"VND",companyName:"Bill Pro Demo"}
};