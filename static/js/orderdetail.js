$(document).ready(function () {
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
    //二级菜单
    $(".shoppingcar").mouseenter(function () {
        $(".empty_cart").show()
        $(".empty_cart").mouseenter(function () {
            $(this).show();
        });
        $(".empty_cart").mouseleave(function () {
            $(this).hide();
        })
    });
    $(".shoppingcar").mouseleave(function () {
        $(".empty_cart").hide()
    })

    $(".customer_service").mouseenter(function () {
        $(".service_none").show()
        $(".service_none").mouseenter(function () {
            $(this).show();
        });
        $(".service_none").mouseleave(function () {
            $(this).hide();
        })
    });
    $(".customer_service").mouseleave(function () {
        $(".empty_cart").hide()
    })

    $(".xiaodian").mouseenter(function () {
        $(".myxiaodian").show()
        $(".myxiaodian").mouseenter(function () {
            $(this).show();
        });
        $(".myxiaodian").mouseleave(function () {
            $(this).hide();
        })
    });
    $(".xiaodian").mouseleave(function () {
        $(".empty_cart").hide()
    })
    //初始化隐藏
    $(".cartEmpty").hide();

    if ($('.show_login a').html().indexOf("未登录") >= 0) {
        $(".cartEmpty").show();
    } else if ($('.cart_num').html() == "0") {
        $(".cartEmpty").show()
    } else {
        $(".cartEmpty").hide()
    }
    // $('#od_delete').click(function () {
    //     var cartid = $(this).attr('cartid')
    //     $.get('/mgj/delorder/', {'cartid': cartid}, function (response) {
    //         console.log("response")
    //         if (response.status == 1) {
    //             window.location.reload()
    //         }
    //     })
    // })
    // $('#addorder').click(function () {
    //     var name = $('.od_name b1').html();
    //     var number = $('.od_number').html();
    //     var price = $('.od_price').html();
    //     var smallImg = $('.smallImg img').attr("src");
    //     var od_size = $('.od_name b2').html();
    //     data = {
    //         'status': 0,
    //         'name': name,
    //         'number': number,
    //         'price': price,
    //         'size': od_size,
    //         'smallimg': smallImg
    //     }
    //     $.get('/mgj/generateorder/', data, function (response) {
    //         console.log(data)
    //         // 订单详情
    //         if (response.status == 1) {
    //             window.location.reload()
    //             // window.open('/mgj/orderdetail/' + response.identifier + '/', target='_self')
    //             console.log(response)
    //         }
    //
    //     })
    // })
    //获取cookie
    // var goodsList = $.cookie("cart");
    // if(goodsList){
    // 	goodsList = JSON.parse(goodsList);
    // 	//console.log(goodsList)一个对象
    // 	for(var i = 0;i<goodsList.length;i++){
    // 		var goods = goodsList[i]//每个商品
    // 		//创建节点
    // 		var img = $("<img>");
    // 		img.attr("src",goods.Img);
    // 		var pictd = $("<td class='propic'></td>");
    // 		img.appendTo(pictd);
    // 		var nametd = $("<td class='name'>" + goods.name + "</td>");
    // 		var pricetd = $("<td class='price'>" + goods.price + "</td>")
    // 		var numtd = $("<td class='num'>" + goods.num + "</td>")
    // 		var del = $("<td class='del'>删除</td>");
    // 		var tr = $("<tr id="+goods.id+"></tr>");
    // 		tr.append(pictd,nametd,pricetd,numtd,del)
    // 		$(".data-con").append(tr);
    // 		$(".empty_cart").append(tr.clone(true));
    // 	}
    // 	$(".del").click(function(){
    // 		var trID = $(this).parent().attr("id");
    // 		console.log(trID);
    // 		for(var i = 0;i<goodsList.length;i++){
    // 			if(trID==goodsList[i].id) {
    // 				console.log(0000);
    // 				goodsList.splice(i,1);
    // 				$(this).parent().remove()
    // 				$.cookie("cart", JSON.stringify(goodsList), {expires:22, path:"/"})
    // 			}
    // 		}
    // 	})
    //
    // 	$(".deleteall").click(function(){
    // 		$(".data-con").remove();
    // 		$.cookie("cart", JSON.stringify(goodsList), {expires:0, path:"/"})
    // 	})
    //
    // 	console.log($.cookie("cart"));
    // }
})