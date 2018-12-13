$(document).ready(function () {


    var data = {};


    //页面跳转
    $(".home-fl").click(function () {
        window.location.href = "/index/";
    });
    $(".show_register").click(function () {
        window.location.href = "/register/";
    });
    $(".show_login").click(function () {
        window.location.href = "/login/";
    });
    $(".nav-list li").eq(0).click(function () {
        window.location.href = "/index/";
    })
    //显示隐藏
    $(".shoppingcar").mouseenter(function () {
        $(".empty_cart").show();
    })
    $(".shoppingcar").mouseleave(function () {
        $(".empty_cart").hide();
    })
    $(".customer_service").mouseenter(function () {
        $(".service_none").show();
    })
    $(".customer_service").mouseleave(function () {
        $(".service_none").hide();
    })
    $(".xiaodian").mouseover(function () {
        $(".myxiaodian").show();
    })
    $(".xiaodian").mouseout(function () {
        $(".myxiaodian").hide();
    })
    $(".user-info").mouseenter(function () {
        $(".shop_info").show();
        $(".shop_info").mouseenter(function () {
            $(".shop_info").show();
        })
    })
    $(".user-info").mouseleave(function () {
        $(".shop_info").hide();
    })
    $(".nav-list .all").mouseenter(function () {
        $(".sec_list").show();
        $(".sec_list").mouseenter(function () {
            $(".sec_list").show();
        })
        $(".sec_list").mouseleave(function () {
            $(".sec_list").hide();
        })
    })
    $(".nav-list .all").mouseleave(function () {
        $(".sec_list").hide();
    })


    // //先获取传入的title
    // var myTitle = location.search.slice(1);
    // $.get("json/productList.json",function(data){
    // 	var obj = data;
    // 	for(var i =0;i<obj.length;i++){
    // 		if(obj[i].title == myTitle){
    // 			$(".goodstitle span").append(obj[i].name);
    // 			var img = $("<img>");
    // 			img.attr("src",obj[i].img);
    // 			$(".bigImg").append(img);
    // 			$(".price-show .oldprice").append(obj[i].oldprice);
    // 			$(".fl .price").append(obj[i].price)
    // 			$(".salenum").append(obj[i].sales);
    // 			$(".store .storenum").append(obj[i].store);
    // 			//切换背景
    // 			var bgimg = $("<img>");
    // 			bgimg.attr("src",obj[i].beijing);
    // 			$(".shopBanner").append(bgimg);
    // 			var smallImg = $("<img>");
    // 			smallImg.attr("src",obj[i].smallImg);
    // 			var bigImg = $("<img class='bigimg'>");
    // 			bigImg.attr("src",obj[i].img);
    // 			$(".rebig").append(bigImg);
    // 			//放大镜
    // 			var smallImg = $(".bigImg")//小图
    // 			var smallArea = $(".smallArea")//小区域
    // 			var bigImg = $(".bigimg");//大图
    // 			var bigArea = $(".rebig")//大区域
    // 			//计算宽高
    // 			//放大系数(放大倍数)
    // 			var scale = bigImg.width() / smallImg.width();
    // 			//console.log(scale)
    // 			smallImg.mousemove(function(e){
    // 				smallArea.show();
    // 				bigArea.show();
    // 				//移动小区域, 跟随鼠标移动
    // 				var x = e.pageX - smallImg.offset().left - smallArea.width()/2;
    // 				var y = e.pageY - smallImg.offset().top - smallArea.height()/2;
    // 				//判断x不超出左边界,也不超出右边界
    // 				if (x < 0) {
    // 					x = 0;
    // 				}
    // 				else if (x > smallImg.width() - smallArea.width()) {
    // 					x = smallImg.width() - smallArea.width();
    // 				}
    // 				//判断y不超出上边界,也不超出下边界
    // 				if (y < 0) {
    // 					y = 0;
    // 				}
    // 				else if (y > smallImg.height() - smallArea.height()) {
    // 					y = smallImg.height() - smallArea.height();
    // 				}
    // 				smallArea.css({left: x, top: y});
    // 				//移动大图
    // 				bigImg.css({left: -x*scale, top: -y*scale});
    // 			})
    // 			//鼠标移出
    // 			smallImg.mouseleave(function(){
    // 				smallArea.hide(); //隐藏小区域
    // 				bigArea.hide();
    // 			})
    // 		}
    // 	}
    // })
    // 跳转到购物车
    // $(".addtocart").click(function(){
    // 	//将当前点击的商品加入购物车(使用cookie存储商品信息)
    // 	var goodsId = myTitle //商品ID
    // 	var goodsImg = $(".bigImg img").attr("src");
    // 	var goodsName = $(".goodstitle span").html(); //商品名称
    // 	var goodsPrice = $(".fl .price").html(); //商品价格
    // 	var goodsList = $.cookie("cart") ? JSON.parse( $.cookie("cart") ) : [];
    // 	var isExists = false; //表示是否存在相同商品
    // 	for (var i=0; i<goodsList.length; i++) {
    // 					//如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
    // 					if (goodsId == goodsList[i].id) {
    // 						goodsList[i].num++;
    // 						isExists = true; //表示存在相同商品
    // 					}
    // 				}
    // 	//如果不存在相同商品, 则添加新商品
    // 				if (!isExists) {
    // 					//添加一个新商品到购物车
    // 					var goods = {
    // 						id: goodsId,
    // 						name: goodsName,
    // 						price: goodsPrice,
    // 						Img:goodsImg,
    // 						num: 1
    // 					}
    // 					goodsList.push(goods);
    // 				}
    // 				$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"});
    // 				console.log( $.cookie("cart") );
    // })

    // $(".buynow").click(function(){
    // 	window.location.href = "shopping.html";
    // })

    //商品加减
    data['number'] = 1
    $(".minus").click(function () {
        var n = $(".countnum").val();
        if (n <= 1) {
            return;
        }
        var num = parseInt(n) - 1;
        $(".countnum").val(num);
        data['number'] = $(".countnum").val();
    })
    $(".plus").click(function () {
        var n = $(".countnum").val();
        var i = $(".storenum").html();
        var stonum = parseInt(i);
        var num = parseInt(n) + 1;
        if (num >= stonum) {
            alert("所选商品数量大于库存数量");
            num = stonum;
        }
        ;
        $(".countnum").val(num);
        data['number'] = $(".countnum").val();
    });
    //勾选
    var smallimg;
    $(".small-img li").css({borderColor: "#cfcfcf"});
    $(".small-img img").click(function () {
        $(this).parent().css({borderColor: "red"}).siblings().css({borderColor: "#cfcfcf"});
        smallimg = $(this).attr("src")
        data['smallimg'] = smallimg
    })
    var size;
    $(".each-size li").css({background: "#cfcfcf"})
    $(".each-size li").click(function () {
        $(this).css({background: "url(/static/detailsImg/gouxuan.png) 100% 100% no-repeat"}).siblings().css({background: "#cfcfcf"});
        size = ($(this).html())
        data['size'] = size
    })
    var bigimg_;
    $('.small-img img').mouseover(function () {
        bigimg_ = $('.bigImg img').attr("src");
        $('.bigImg img').attr("src", $(this).attr("src"))
    });
    $('.pro-style').mouseout(function () {
        $('.bigImg img').attr("src", bigimg_)
    })
    data['name'] = $('.goodstitle span').html();
    data['price'] = $('.saleprice b').html();
    // console.log(data)
    // 跳转到购物车
    $('.buynow').click(function () {
        if (data['size']){
            if (data['smallimg']){
                $.post('/mgj/shopping/', data, function (response) {
                        console.log(response)
                        if (response.status){
                            window.open('/shopping/')
                        }
                    }
                )
            } else {alert("请选择商品款式")}
        }else{
            alert("请选择商品尺码")
        }
    })

});