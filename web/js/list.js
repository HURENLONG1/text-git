var page = 0;
var num = 709;
var infotype = $(".infotype");
var list1 = $(".list1")
var shoppinginfoArr = [{}];

var newgoodstype = [];

var hash = location.hash.slice(1);

$.ajax({
    url:"../../php/list.php",
    data:{
        page,
        num
    },
    type:"post",
    dataType:"json",
    success:function(data){
        if(data.error ===0){
            shoppinginfoArr = data.data;
            console.log(shoppinginfoArr);
            var goodId = [];
            for(var i = 0; i<shoppinginfoArr.length; i++){
                if(shoppinginfoArr[i].goods_id===hash){
                    goodId.push(shoppinginfoArr[i]);
                    
                }
            }
                      
        }
        var goodstype = goodId[0].cat_one_id;
        infotype.html(goodstype)
        
        for(var k = 0; k<shoppinginfoArr.length; k++){
            if(shoppinginfoArr[k].cat_one_id===goodstype){
                newgoodstype.push(shoppinginfoArr[k])
            }
        }
        console.log(newgoodstype);
        var li = '';
        newgoodstype.forEach(function(index,value){
            li+=`
            <li>
            <div class="img">
                    <img src="${index.goods_small_logo}" alt=""  class = "img1" id = "${index.goods_id}">
                </div>
                <div class="laber">
                    <p><a href="#" class= "tiaoz" id = "${index.goods_id}">${index.goods_name}</a></p>
                    <span class="price">￥${index.goods_price}</span> <span>双11</span>
                    <button type="button" class="btn btn-danger" id="${index.goods_id}" shuliang="0">加入购物车</button>
                    </li>
            `
        })
        list1.html(li)
    }

})

var goods_id = '';
var goods_name = '';
var goods_price = '';
var goods_small_logo = '';
var cat_one_id = '';
var shoppingnum = [];
var isExist = [];
var result = [];
var obj = {};
var cart_number = '';

list1.click(function (e) {
    if (e.target.className.includes("img1")) {
        location.href = "./datalis.html" + "#" + e.target.id

    } else if (e.target.className.includes("tiaoz")) {
        location.href = "./datalis.html" + "#" + e.target.id

    }else if(e.target.className.includes("btn")){
        var disbtn = $("button");
        disbtn.attr("disabled","disabled")

        var allnum = e.target.id;

        for(let i =0; i<newgoodstype.length; i++){
            if(newgoodstype[i].goods_id===allnum){
                shoppingnum.unshift(newgoodstype[i])
                isExist = shoppingnum.find(function(value) {
                    return value.goods_id === newgoodstype[i].goods_id;
                });
                if(isExist){
                    isExist.cart_number++;
                    goods_id = isExist.goods_id ;
                    goods_name = isExist.goods_name;
                    goods_price = isExist.goods_price;
                    goods_small_logo = isExist.goods_small_logo;
                    cat_one_id = isExist.cat_one_id;
                }else{
                    
                    shoppingnum.cart_number=1;
                    
                }
                
            }
        }
        console.log(isExist)

        goods_name = isExist.goods_name;
        goods_id = isExist.goods_id;
        goods_price = isExist.goods_price;
        goods_small_logo = isExist.goods_small_logo;
        cat_one_id = isExist.cat_one_id;
        cart_number = isExist.cart_number

        $.ajax({
            url: "../../php/joinshopcar.php",
            data: {
                goods_name,
                goods_id,
                goods_price,
                goods_small_logo,
                cat_one_id,
                cart_number
            },
            type: "post",
            dataType: "json",
            success: function(data){
                alert(data.data);
                disbtn.removeAttr("disabled")
            }
        })



        
    }


})
