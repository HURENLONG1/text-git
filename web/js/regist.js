var ge = $("#ge");
var phonenum = $("#phonenum");
var password1 = $("#password1");
var password2 = $("#password2");
var phonenumlock = true;
var passwordlock = true;

phonenum.blur(function () {


    var phonenum1 = $("#phonenum").val();
    console.log(phonenum1);
    var reg1 = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
    if (!reg1.test(phonenum1)) {
        $("#phonenum").css({"border": "2px solid red"})
        alert("请输入您十一位手机号码");
        $phonenumlock = false
    } 
    $.ajax({
        url: "../../php/add.php",
        data: {phonenum1},
        type: "post",
        dataType: "json",
        success: function (data) {
            if (data.error === 0) {
                $phonenumlock = true
                $("#phonenum").css({
                    "border": "2px solid green"
                });
                console.log(111);
            } else {
                $("#phonenum").css({
                    "border": "2px solid red"
                });
                alert("您输入的手机用户已注册。请您重新输入");
                $phonenumlock = false;
                console.log(data);
            }

        }
    })

})

password2.blur(function () {

    var $passwordx1 = $("#password1").val();
    var $passwordx2 = $("#password2").val();
    var reg2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,11}$/

    if (reg2.test($passwordx2) && $passwordx1 === $passwordx2) {
        $passwordlock = true;
        $("#password1").css({
            "border": "2px solid green"
        });
        $("#password2").css({
            "border": "2px solid green"
        });
    } else {
        $passwordlock = false;
        $("#password1").css({
            "border": "2px solid red"
        });
        $("#password2").css({
            "border": "2px solid red"
        });
        alert("您输入的密码有误，请重新输入")
    }

})

ge.click(function () {
    if (!$passwordlock && !$phonenumlock) {
        alert("请重新检查");
        return
    }
    var phonenum1 = $("#phonenum").val();
    var passwordx2 = $("#password2").val();

    $.ajax({
        url: "../../php/regist.php",
        data: {
            phonenum1,
            passwordx2
        },
        type: "post",
        dataType: "json",
        success: function (data) {
            console.log(data);
            if (data.error === 0) {
                console.log(1);
                setTimeout(function () {
                    location.href = "./login.html";
                }, 3000)
            }else{
                console.log(2);
                alert("用户名或密码错误")
            }
        }

    })
})