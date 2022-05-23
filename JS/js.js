$(document).ready(function(){
    var i = 1;
    $("#btnDK").click(function(){
        $("#myModal").modal();
    });

    function KTMa() {
        let makt = /^[0-9]{10}/;
        if($("#txtMa").val()==""){
            $("#tbMa").html("Không được để trống");
            return false;
        }
        if(!makt.test($("#txtMa").val())){
            $("#tbMa").html("Mã gồm 10 số");
            return false;
        }
        $("#tbMa").html("*");
        return true;
    }
    $("#txtMa").blur(KTMa);

    function KTten() {
        let maukt =/^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#txtHT").val()==""){
            $("#tbHT").html("Không được để trống");
            return false;
        }
        if(!maukt.test($("#txtHT").val())){
            $("#tbHT").html("Họ tên viết hoa chữ cái đầu không được sử dụng số");
            return false;
        }
        $("#tbHT").html("*");
        return true;
    }
    $("#txtHT").blur(KTten);
    
    function KTNgay(){
        var today = new Date();
        var ngay =   new Date($("#txtNgay").val());
        today = today.setDate(today.getDate()+7);
        if($("#txtNgay").val()==""){
            $("#tbNgay").html("Không được để trống");
            return false;
        }
        if(today>ngay){
            $("#tbNgay").html("Ngày tham gia sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNgay").html("*");
        return true;
    }

    $("#txtNgay").blur(KTNgay);

    function KTEmail() {
        let maukt = /^([A-Za-z]{1}([\-.]?)\w+)*@iuh.edu.vn$/;
        if($("#txtEmail").val()==""){
            $("#tbEmail").html("Không được để trống");
            return false;
        }
        if(!maukt.test($("#txtEmail").val())){
            $("#tbEmail").html("Email bắt đầu bằng chữ và có định dạng xxxxx@iuh.edu.vn");
            return false;
        }
        $("#tbEmail").html("*");
        return true;
    }
    $("#txtEmail").blur(KTEmail);

    function KTSDT() {
        let makt = /^[0-9]{10}/;
        if($("#txtSDT").val()==""){
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if(!makt.test($("#txtSDT").val())){
            $("#tbSDT").html("Số điện thoại gồm 10 số");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#txtSDT").blur(KTSDT);

    $("#btnSave").click(function() {
        {
            var ma = $("#txtMa").val()
            var hoten = $("#txtHT").val();
            var ngay = $("#txtNgay").val();
            var email = $("#txtEmail").val();
            var sdt = $("#txtSDT").val();
           
            var them = "<tr><td>" + (i++) + "</td><td>" + ma + "</td><td>" + hoten +
            "</td><td>" + ngay + "</td><td>" + email + "</td><td>" + sdt + "</td></tr>"
            $("#danhsach").append(them);
            $("#myModal").modal("hide");
            
        }
    });
});