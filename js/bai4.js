/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   chieuDai, chieuRong : nhập chiều dài, rộng hình chữ nhật
 * 
  Khối 2 : Các bước xử lý
 *  B1: Tạo hàm tính diện tích, chu vi
 *  B2: Gắn hàm vào sự kiện click button
 *  B3: trong hàm  : lấy giá trị từ form
 *  B4: trong hàm : lập công thức tính toán
 *      dienTich = chieuDai * chieuRong;
 *      chuVi = (Number(chieuDai) + Number(chieuRong)) * 2; 
 *  B5: trong hàm : Thông báo kết quả lên UI
 * 
 * Khối 3 : Output
 *    dienTich, chuVi : diện tích, chu vi hình chữ nhật
 * 
 * 
 */
function tinhToan() {
    var chieuDai = document.getElementById("chieuDai").value;
    var chieuRong= document.getElementById("chieuRong").value;
    
    var dienTich = chieuDai * chieuRong;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2; 

    document.getElementById("txtNotify").innerHTML= "Diện tích là:" +dienTich+ "<br> Chu vi là:" + chuVi;
    document.getElementById("txtNotify").style.textAlign = "center";
}

document.getElementById("btnCalc").onclick = tinhToan;