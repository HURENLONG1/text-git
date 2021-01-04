<?php
    // 获取前端提交的数据
    $goods_name = $_POST['goods_name'];
    $goods_id = $_POST['goods_id'];
    $goods_price = $_POST['goods_price'];
    $goods_small_logo = $_POST['goods_small_logo'];
    $cat_one_id = $_POST['cat_one_id'];
    $cart_number = $_POST['cart_number'];

    // 连接数据库
    $conn = mysqli_connect("localhost", "root", "root", "gz2007");

    $sql = "SELECT * FROM shoppingcard WHERE goods_id = '$goods_id'";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_affected_rows($conn);
    // 判定
    if ($num == 0) {
        $conn1 = mysqli_connect("localhost", "root", "root", "gz2007");

         // 定义sql语句
        $sql1 = "INSERT INTO shoppingcard VALUES('$goods_id','$goods_name','$goods_price','$goods_small_logo','$cat_one_id','$cart_number')";
        // 执行sql语句
        $result1 = mysqli_query($conn1, $sql1);
        
        echo json_encode(array("error" => 0, "data" => '成功添加到购物车'));
    } else {
        $conn2 = mysqli_connect("localhost", "root", "root", "gz2007");
        $sql2 = "UPDATE shoppingcard SET cart_number='$cart_number' WHERE goods_id='$goods_id'";
        $result2 = mysqli_query($conn2, $sql2);

        echo json_encode(array("error" => 1, "data" => '增加成功'));
    };
    
?>