var hash = sessionStorage.getItem("username")
// console.log(hash.length);

if(!hash){
    alert("您目前未登录，请登录");
    location.href = './login.html'
}
var zhunjin = $('.zhunjin');
zhunjin.html(`尊敬的${hash}用户欢迎您购物`)
var ul = $(".ul");
var allgoodsnum = $(".allgoodsnum")
$.ajax({
    url: '../../php/shoppingcard.php',
    data: {},
    type: "post",
    dataType: "json",
    success: function (data) {
        console.log(data);
        var li = '';
        var num = 0;
        data.forEach(function (ele, value) {
            li += (
                `
                <li>
                <input type="checkbox" class="readio">
                <img src="${ele.goods_small_logo}" alt="">
                <h3>${ele.goods_name}</h3>
                <p class="price">单价：${ele.goods_price}</p>
                <div class="jiajian">
                    <button>-</button>
                    <input type="text" value="${ele.cart_number}" min="1">
                    <button>+</button>
                </div>
                <p class="zongjia">总价：${(ele.goods_price)*(ele.cart_number)}</p>
    
                <button class="shanchu">删除</button>
                `
            )

            num +=((ele.cart_number)*1)
            

        })
        ul.html(li);

        allgoodsnum.html(num);
    }
    
})

var all = $(".all")
all.click(function(){
    var readio = $(".readio")
    readio.attr("checked",'true')   
    
    

})