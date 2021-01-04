var btn = $(".btn")

btn.click(function () {

    var inp1 = $(".inp1").val();
    var inp2 = $(".inp2").val();
    $.ajax({
        url: "../../php/login.php",
        data: {
            inp1,
            inp2
        },
        type: "post",
        dataType: "json",
        success: function (data) {
            var newdata = data
        
            if (newdata.error===0) {
                sessionStorage.setItem("username", inp1);
                location.href = "../../index.html";


            } else {
               
                alert("您输入的用户名或密码有误，请重新输入")
            }
        }
    })
})