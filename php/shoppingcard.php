<?php
	// 连接数据库
	$conn = mysqli_connect("localhost", "root", "root", "gz2007");


	// 定义查询语句
	$sql = "SELECT * FROM shoppingcard";


	// 执行
	$result = mysqli_query($conn, $sql);

	// 查询语句 得到的是一个结果集合
	// 我们需要一条一条的遍历出来才可以使用 
	// mysqli_fetch_all() 可以将它们全部提取出来

	$arr = mysqli_fetch_all($result, MYSQLI_ASSOC);

	echo json_encode($arr);