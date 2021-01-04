<?php
    
    header('Access-Control-Allow-Origin:*');

    header('Access-Control-Allow-Methods:POST');

    header('Access-Control-Max-Age:60');

    header('Access-Control-Allow-Headers:x-requested-with,content-type');

    header('Content-Type:application/json;charset=utf-8');

    // 当前接口 用于返回多条商品的信息
    // 获取前端提交的数据
    $page = $_POST["page"]; // 当前第几页
    $num = $_POST["num"]; // 每一页总共多少条

    
    // 连接数据库
    $conn = mysqli_connect("localhost", "root", "root", "gz2007");
    $skipNum = $page * $num;
    // 定义sql语句
    $sql = "SELECT * FROM goods limit $skipNum, $num";
    
    // 执行语句
    $result = mysqli_query($conn, $sql);
    if (mysqli_num_rows($result) == 0) {
        echo json_encode(array("error" => 1, "data" => "没有数据了"));
    } else {
        // 把查询出来的都放入数组中
        $arr = mysqli_fetch_all($result, MYSQL_ASSOC);
        // 判定数组的长度
        echo json_encode(array("error" => 0, "data" => $arr));
    }


?>