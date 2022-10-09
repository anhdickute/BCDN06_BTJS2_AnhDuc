/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   num : số nguyên dương có 2 chữ số
 * 
 * 
 * Khối 2 : Các bước xử lý
 *    B1: Tạo hàm tính tổng ký số
 *    B2: Gắn hàm vào sự kiện click button
 *    B3: trong hàm  : lấy giá trị từ form
 *    B4: trong hàm : lập công thức tính toán
 *     soHangchuc= Math.floor(num/10); // Lấy phần nguyên
 *     soHangdonvi = num%10;
 *     tongKyso = soHangchuc + soHangdonvi; 
 *  B5: trong hàm : Thông báo kết quả lên UI
 * 
 * 
 * Khối 3 : Output
 *     tongKyso : Tổng 2 ký số
 * 
 */
 function tinhTongkyso() {
    var numVal = document.getElementById("soCantinh").value;
    
    var soHangchuc= Math.floor(numVal/10); 
    var soHangdonvi = numVal%10;
     
    var tongKyso = soHangchuc + soHangdonvi; 
    
   document.getElementById("txtrels").innerHTML= "Tổng 2 Ký số là:" +tongKyso;
   document.getElementById("txtrels").style.textAlign = "center";
    
}
    document.getElementById("btnTongky").onclick = tinhTongkyso;