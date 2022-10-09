/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   soTien : số tiền USD cần đổi
 * 
 * Khối 2 : Các bước xử lý
 *  B1: Tạo hàm tính tiền quy đổi
 *  B2: Gắn hàm vào sự kiện click button
 *  B3: trong hàm  : lấy giá trị từ form
 *  B4: trong hàm : lập công thức tính toán
 *   tienQuydoi = soTien 8 * 23000;
 *  B5: trong hàm : Thông báo kết quả lên UI
 * 
 * Khối 3 : Output
 *    tienQuydoi (Tổng quy đổi thành vnd)
 * 
 * 
 */
 function doiTien() {
    var soTien = document.getElementById("soTien").value;
    var tienQuydoi = soTien * 23500;

    document.getElementById("txtDoitien").innerHTML = "Thành tiền: <br>" +Intl.NumberFormat('vn-VN').format(tienQuydoi)+ "vnd";
  
    document.getElementById("txtDoitien").style.textAlign = "center";
}

document.getElementById("btnTinhtien").onclick = doiTien;