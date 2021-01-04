var hash = sessionStorage.getItem("username")
var huanying = $(".huanying");
huanying.html(hash)
huanying.css("color", "red")
if (sessionStorage.length === 0) {
    alert("您目前还未登录哦");
    
    location.href = "./login.html"
}
console.log(sessionStorage.length);

var hash = location.hash.slice(1);

var goodsname = $(".goodsname")
var goodsinfoinfo = $(".goodsinfo")

var imgs = $(".imgs");

var goods_intorduce1 = $(".goods_intorduce")


var listinfo = [];
$.ajax({
    url: "../../php/detalis.php",
    data: {
        hash
    },
    type: "post",
    dataType: "json",
    success: function (data) {
        if (data.error === 0) {
            listinfo = data.data;
            var goodsinfoname = '';
            goodsname.html(
                `
                <h6><b>${listinfo.goods_name}</b></h6>
                <p class="price"><b>价格</b> <span class="price1"><b>￥${listinfo.goods_price}</b></span></p>
                <div class="inputnum">
                    <p>数量 : </p>
                    <div class="inputbox">
                         <input type="number" min="0" class="goodsnum" value="1">
                    </div>
                </div>
                <div class="allnum">总价：￥<span class="inall">${listinfo.goods_price}</span></div>
                <span>监测到您当前处于非安全网络状态，部分商品信息可能不准确，请在交易支付页面再次确认商品价格信息</span><br>
                <button class="btnl">立即购买</button>
                <button class="btnr">加入购物车</button>
                `
            )
            var src1 = listinfo.goods_big_logo;
            imgs.attr("src", src1);

            goodsinfoinfo.html(
                `
                <h5 class="goodsinfo1"><b>商品详情</b></h5>
                <p>品牌名称：<span>${listinfo.goods_name}</span></p>
                <p>价格：<span>${listinfo.goods_price}</span></p>
                <p>商品类型：<span>${listinfo.cat_three_id}</span></p>
                <p>其他：<span>...</span></p>
                `

            )
            var info = listinfo.goods_introduce;
            goods_intorduce1.html(info)
            var goodsnum = $(".goodsnum");

            var inall = $(".inall");


            goodsnum.blur(function () {
                var nums = goodsnum.val();
                inall.html(nums * listinfo.goods_price);
            })
        }

    }
})