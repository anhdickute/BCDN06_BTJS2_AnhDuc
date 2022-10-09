/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   luongNgay : lương một ngày
 *   soNgay : số ngày làm
 * 
 * Khối 2 : Các bước xử lý
 *  B1: Tạo hàm tính tổng tiền lương
 *  B2: Gắn hàm vào sự kiện click button
 *  B3: trong hàm  : lấy giá trị từ form
 *  B4: trong hàm : lập công thức tính toán
 *   tongLuong = soNgaylam * luongNgay;
 *  B5: trong hàm : Thông báo kết quả lên UI
 * 
 * Khối 3 : Output
 *    tongLuong (Tổng lương)
 * 
 * 
 */
function tinhLuong() {
    
    var tongLuong = document.getElementById("soNgaylam").value * document.getElementById("luongNgay").value;

    document.getElementById("txtKetqua").innerHTML = "Tổng lương là : <br>" +Intl.NumberFormat('vn-VN').format(tongLuong)+ "vnd";
  
    document.getElementById("txtKetqua").style.textAlign = "center";
}

document.getElementById("btnTinh").onclick = tinhLuong;