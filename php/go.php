<?php
    // 当前接口 用于返回一条商品信息
    $shopID = $_POST["numid"];

    
    // 连接数据库
    $conn = mysqli_connect("localhost", "root", "root", "gz2007");
    // 定义sql语句
    $sql = "SELECT * FROM goods WHERE goods_id = '$shopID'";

    // 执行SQL语句
    $result = mysqli_query($conn, $sql);

    // 抽取一条数据
    $obj = mysqli_fetch_assoc($result);
    // mysqli_fetch_array 是把结果当作普通数组去处理
    // mysqli_fetch_assoc 是把结果当作关联数组去处理
    // 查看是否获取到数据
    if ($obj) {
        echo json_encode(array("error" => 0, "data" => $obj));
    } else {
        echo json_encode(array("error" => 1, "data" => "数据未找到"));
    }
?>