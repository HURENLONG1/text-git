<?php
    // 获取前端提交的数据
    $username = $_POST["inp1"];
    $password = $_POST["inp2"];

    // 连接数据库
    $conn = mysqli_connect("localhost", "root", "root", "gz2007");

    // 定义sql语句
    $sql = "SELECT * FROM userinfo WHERE username='$username' and password='$password'";


    // 执行sql语句
    $result = mysqli_query($conn, $sql);

    // 获取结果集中的条数
    $num = mysqli_num_rows($result);

    // echo($num);

    // 判定
    if ($num == 0) {
        echo json_encode(array("error" => 1, "data" => '用户名或密码错误'));

    } else {
        // setcookie 
        setcookie("isLogin", "1", time() + 3600 * 4, "/");
        $arr = mysqli_fetch_all($result, MYSQL_ASSOC);
        echo json_encode(array("error" => 0, "data" => $arr));
        // echo($num);
    }
?>