/** Mô hình 3 khối
 * 
 * Khối 1 : input
 *   num1,num2,num3,num4,num5 : 5 số thực 
 * 
 * Khối 2 : Các bước xử lý
 *     B1: Tạo hàm tính Trung bình
 *     B2: gắn hàm vào sự kiện click button
 *     B3: trong hàm  : lấy giá trị từ form
 *     B4: trong hàm : lập công thức tính toán
 *    trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /5 ;
 *     B5: trong hàm : Thông báo kết quả lên UI
 * 
 * Khối 3 : Output
 *    btTrungBinh = Trung bình cộng
 * 
 */
 function tinhTrungBinh() {
    var num1 = document.getElementById("number1").value;
    var num2 = document.getElementById("number2").value;
    var num3 = document.getElementById("number3").value;
    var num4 = document.getElementById("number4").value;
    var num5 = document.getElementById("number5").value;
    
    var trungBinh = ( Number(num1) + Number(num2) + Number(num3) + Number(num4) + Number(num5)) /5 ;

    document.getElementById("result").innerHTML = "Trung bình cộng là <br>" + trungBinh;
    document.getElementById("result").style.textAlign = "center";
}

document.getElementById("btnTrungBinh").onclick = tinhTrungBinh;

