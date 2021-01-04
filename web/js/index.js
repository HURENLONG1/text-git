var hash = sessionStorage.getItem("username")
console.log(hash);

var huanying = $(".huanying");
huanying.html(hash);
huanying.css("color","red")


var ul = $(".list1");
var btn1 = document.querySelector(".btn1");
var list3 = document.querySelector(".list3")
var shoppinginfoArr = [{}];

var page = 0;
var num = 709;
$.ajax({
    url: "./php/goods.php",
    data: {
        page,
        num
    },
    type: "post",
    dataType: "json",
    success: function (data) {

        if (data.error === 0) {
            shoppininfoArr = data.data;

            var result = [];
            var obj = {};
            for (var i = 0; i < shoppininfoArr.length; i++) {
                if (!obj[shoppininfoArr[i].cat_one_id]) {
                    result.push(shoppininfoArr[i]);
                    obj[shoppininfoArr[i].cat_one_id] = true;
                }
            }
            console.log(result);
            var li = "";
            result.forEach(function (index, value) {
                li += `
                <li class = "lib">  
                <img src="${index.goods_big_logo}" alt="" class = "img" id = "${index.goods_id}">
                <div class="laber">
                    <p class = "tiaoz" id = "${index.goods_id}"><a href="#" class= "tiaoz" id = "${index.goods_id}">${index.cat_one_id}</a></p>
                    <p>全场满300减40</p>
                </div>
            </li>`
            })
            ul.html(li)

            var li = '';
            for(var i = 1; i<21; i++){
                var list3shoppininfoArr = shoppininfoArr;
              
                li += `<li>
                    <img src="${list3shoppininfoArr[i].goods_small_logo}" alt="" id = "${list3shoppininfoArr[i].goods_id}" class = "img">
                    <div class="recomment">
                        <span class="goodsType"><a href="#" id = "${list3shoppininfoArr[i].goods_id} class = "tiaoz">${list3shoppininfoArr[i].goods_name}</a></span>
                        <span class="discount">每300减40</span>
                        <span class="shuan11">双11</span>
                        <span class="prize">￥${list3shoppininfoArr[i].goods_price}</span>
                    </div>
                </li>`;

            }
            list3.innerHTML = li

            btn1.addEventListener("click", function () {
                var newshoppininfoArr = shoppininfoArr
                var li = '';
                for (var i = 0; i < 20; i++) {
                    var num = parseInt(Math.random() * 709);
                    li += `<li>
                    <img src="${newshoppininfoArr[num].goods_small_logo}" alt="" id = "${newshoppininfoArr[num].goods_id}" class = "img">
                    <div class="recomment">
                        <span class="goodsType"><a href="#" id = "${newshoppininfoArr[num].goods_id} class = "tiaoz">${newshoppininfoArr[num].goods_name}</a></span>
                        <span class="discount">每300减40</span>
                        <span class="shuan11">双11</span>
                        <span class="prize">￥${newshoppininfoArr[num].goods_price}</span>
                    </div>
                </li>`
                }
                list3.innerHTML = li;
            })

        }
    }

})

ul.click(function (e) {

    if (e.target.className.includes("img")) {
        location.href = "./web/html/list.html" + "#" + e.target.id
        console.log(e.target.id);
    } else if (e.target.className.includes("tiaoz")) {
        location.href = "./web/html/list.html" + "#" + e.target.id
        console.log(e.target.id);
    }


})

list3.onclick =function(e){
    if (e.target.className.includes("img")) {
        location.href = "./web/html/datalis.html" + "#" + e.target.id
        console.log(e.target.id);
    } else if (e.target.className.includes("tiaoz")) {
        location.href = "./web/html/datalis.html" + "#" + e.target.id
        console.log(e.target.id);
    }
}