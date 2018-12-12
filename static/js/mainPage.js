// //头部显示隐藏
// $(document).ready(function(){
// 	//购物篮
// 	$(".shoppingcar").click(function(){
// 		window.location.href = "shopping.html";
// 	})
// 	//客服服务
// 	$(".customer_service").hover(function(){
// 		$(".service_none").show();
// 	},function(){
// 		$(".service_none").hide();
// 	});
// 	$(".service_none").hover(function(){
// 		$(".service_none").show();
// 	},function(){
// 		$(".service_none").hide();
// 	});
// 	//小店
// 	$(".xiaodian").hover(function(){
// 		$(".myxiaodian").show();
// 	},function(){
// 		$(".myxiaodian").hide();
// 	});
// 	$(".myxiaodian").hover(function(){
// 		$(".myxiaodian").show();
// 	},function(){
// 		$(".myxiaodian").hide();
// 	});
// //显示二级菜单
// 	$(".primary_nav_li").eq(0).mouseenter(function(){
// 		$(".nav_more").show();
// 	});
// 	$(".primary_nav_li").eq(0).mouseleave(function(){
// 		$(".nav_more").hide();
// 	});
// //	轮播
// 	$.get("json/lunbo.json",function(data){
// 		for(var i = 0;i<data.length;i++){
// 			var obj = data[i];
// 			var li = $("<li></li>");
// 			var img = $("<img>");
// 			img.attr("src",obj.src);
// 			li.append(img);
// 			$(".lunbo").append(li);
// 		}
// 		var list1 = $(".lunbo");
// 		var list2 = $(".cicrl");
// 		var li1 = $(".lunbo li");
// 		var li2 = $(".cicrl div");
// 	//复制第一张图使之成为第六张图
// 		li1.first().clone().appendTo(list1);
// 		var size = $(".lunbo li").length;
// //		console.log(size); 6
// 		//显示图片下标
// 		var i =0;
// 		//启动定时器
// 		var timer = setInterval(function(){
// 			i ++;
// 			move();
// 		},2000)
// 		//移动
// 		function move(){
// 			if(i<0){
// 				list1.css("left",-(size - 1)*715);
// 				i = size -1;
// 			}
// 			if(i>=size){
// 				list1.css("left",0);
// 				i = 1;
// 			}
// 			list1.stop().animate({left: -i*715},500);
// 			//按钮的选中状态改变
// 			li2.eq(i).removeClass().addClass("active").siblings().removeClass("active")
// 				if (i == size-1) {
// 					li2.eq(0).removeClass().addClass("active").siblings().removeClass("active")
// 					}
// 		}
// 		//初始化
// 		$("#left,#right").hide();
//
// 		//上一页
// 		$("#left").click(function(){
// 			i--;
// 			move()
// 		})
// 		//下一页
// 		$("#right").click(function(){
// 			i++;
// 			move();
// 		});
// 		//按钮的移入事件
// 		li2.mouseenter(function(){
// 			var index = $(this).index();
// 				i = index;
// 				move();
// 			});
// 			$(".slide_pic").hover(function(){
// 					//移入 mouseenter
// 					$("#left,#right").show().css({opacity:"0.6"});
// 					clearInterval(timer); //停止定时器, 停止自动轮播
// 				},
// 				function(){
// 					//移出, mouseleave
// 					clearInterval(timer);
// 					$("#left,#right").hide();
// 					timer = setInterval(function(){
// 						i++;
// 						move();
// 					}, 2000);
// 				})
// 	})
// 	//吸顶效果
// 	$(window).scroll(function(){
// 		var _scrollTop = $(document).scrollTop();
// 		if(_scrollTop >= 750){
// 			$(".top_container").fadeIn().css({position:"fixed",top:"200"});
// 			$(".selected").mouseenter(function(){
// 				$("ol").show();
// 			});
// 			$(".selected").mouseleave(function(){
// 				$("ol").hide();
// 			});
// 			$("ol").mouseenter(function(){
// 				$("ol").show();
// 			});
// 			$("ol").mouseleave(function(){
// 				$("ol").hide();
// 			})
// 		}
// 		else{
// 			$(".top_container").fadeOut();
// 		}
// 	})
// 	//动态产品获取
// 	$.get("json/new_file.json",function(data){
// 			var obj = data;
// 			var div1 = $("<div class='title'>" + obj[0].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[0].decription + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[0].img);
// 			$(".pro_brand_fl").eq(0).append(div1,div2,img);
// 			//2
// 			var div1 = $("<div class='title'>" + obj[1].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[1].description + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[1].img);
// 			$(".pro_brand_mid_fl").eq(0).append(div1,div2,img);
// 			//3
// 			var div1 = $("<div class='title'>" + obj[2].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[2].description + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[2].img);
// 			$(".mid_fr_top").eq(0).append(div1,div2,img);
// 			//4
// 			var div1 = $("<div class='title'>" + obj[3].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[3].description + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[3].img);
// 			$(".mid_fr_bottom").eq(0).append(div1,div2,img);
// 			//1
// 			var div1 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[4].img);
// 			var title = $("<div class='title'>" + obj[4].title + "</div>");
// 			div1.append(img,title);
// 			div1.appendTo($(".pro_brand_fr").eq(0));
// 			//2
// 			var div2 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[5].img);
// 			var title = $("<div class='title'>" + obj[5].title + "</div>");
// 			div2.append(img,title);
// 			div2.appendTo($(".pro_brand_fr").eq(0));
// 			//3
// 			var div3 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[6].img);
// 			var title = $("<div class='title'>" + obj[6].title + "</div>");
// 			div3.append(img,title);
// 			div3.appendTo($(".pro_brand_fr").eq(0));
// 			//4
// 			var div4 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[7].img);
// 			var title = $("<div class='title'>" + obj[7].title + "</div>");
// 			div4.append(img,title);
// 			div4.appendTo($(".pro_brand_fr").eq(0));
// 			//运动
// 			$(".look").mouseenter(function(){
// 				$(this).animate({bottom:"20px"},"slow")
// 			});
// 			$(".look").mouseout(function(){
// 				$(this).animate({bottom:"0px"},"slow")
// 			})
// 	})
// 	$.get("json/new_file02.json",function(data){
// 		var obj = data;
// 		var div1 = $("<div class='title'>" + obj[0].title + "</div>");
// 		var div2 = $("<div class='decription'>" + obj[0].decription + "</div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[0].img);
// 		$(".pro_brand_fl").eq(1).append(div1,div2,img);
// 		var div1 = $("<div class='title'>" + obj[1].title + "</div>");
// 		var div2 = $("<div class='decription'>" + obj[1].description + "</div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[1].img);
// 		$(".pro_brand_mid_fl").eq(1).append(div1,div2,img);
// 		var div1 = $("<div class='title'>" + obj[2].title + "</div>");
// 		var div2 = $("<div class='decription'>" + obj[2].description + "</div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[2].img);
// 		$(".mid_fr_top").eq(1).append(div1,div2,img);
// 		var div1 = $("<div class='title'>" + obj[3].title + "</div>");
// 		var div2 = $("<div class='decription'>" + obj[3].description + "</div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[3].img);
// 		$(".mid_fr_bottom").eq(1).append(div1,div2,img);
// 		var div1 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[4].img);
// 		img.appendTo(div1);
// 		$(".pro_brand_fr").eq(1).append(div1);
// 		var div2 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[5].img);
// 		img.appendTo(div2);
// 		$(".pro_brand_fr").eq(1).append(div2);
// 		var div3 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[6].img);
// 		img.appendTo(div3);
// 		$(".pro_brand_fr").eq(1).append(div3);
// 		var div4 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[7].img);
// 		img.appendTo(div4);
// 		$(".pro_brand_fr").eq(1).append(div4);
// 		var div5 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[8].img);
// 		img.appendTo(div5);
// 		$(".pro_brand_fr").eq(1).append(div5);
// 		var div6 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[9].img);
// 		img.appendTo(div6);
// 		$(".pro_brand_fr").eq(1).append(div6);
// 		var div7 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[10].img);
// 		img.appendTo(div7);
// 		$(".pro_brand_fr").eq(1).append(div7);
// 		var div8 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[11].img);
// 		img.appendTo(div8);
// 		$(".pro_brand_fr").eq(1).append(div8);
// 		var div9 = $("<div class='fl-box'></div>")
// 		var img = $("<img>");
// 		img.attr("src",obj[12].img);
// 		img.appendTo(div9);
// 		$(".pro_brand_fr").eq(1).append(div9);
// 	})
// 	$.get("json/new_file03.json",function(data){
// 			var obj = data;
// 			var div1 = $("<div class='title'>" + obj[0].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[0].decription + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[0].img);
// 			$(".pro_brand_fl").eq(2).append(div1,div2,img);
// 			var div1 = $("<div class='title'>" + obj[1].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[1].description + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[1].img);
// 			$(".pro_brand_mid_fl").eq(2).append(div1,div2,img);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[2].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[2].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[2].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_top").eq(2).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[3].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[3].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[3].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_top").eq(2).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[4].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[4].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[4].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_bottom").eq(2).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[5].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[5].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[5].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_bottom").eq(2).append(div);
// 			var div1 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[6].img);
// 			var title = $("<div class='title'>" + obj[6].title + "</div>");
// 			div1.append(img,title);
// 			div1.appendTo($(".pro_brand_fr").eq(2));
// 			//2
// 			var div2 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[7].img);
// 			var title = $("<div class='title'>" + obj[7].title + "</div>");
// 			div2.append(img,title);
// 			div2.appendTo($(".pro_brand_fr").eq(2));
// 			//3
// 			var div3 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[8].img);
// 			var title = $("<div class='title'>" + obj[8].title + "</div>");
// 			div3.append(img,title);
// 			div3.appendTo($(".pro_brand_fr").eq(2));
// 			//4
// 			var div4 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[9].img);
// 			var title = $("<div class='title'>" + obj[9].title + "</div>");
// 			div4.append(img,title);
// 			div4.appendTo($(".pro_brand_fr").eq(2));
// 		})
// 		$.get("json/new_file04.json",function(data){
// 			var obj = data;
// 			var div1 = $("<div class='title'>" + obj[0].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[0].decription + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[0].img);
// 			$(".pro_brand_fl").eq(3).append(div1,div2,img);
// 			var div1 = $("<div class='title'>" + obj[1].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[1].description + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[1].img);
// 			$(".pro_brand_mid_fl").eq(3).append(div1,div2,img);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[2].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[2].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[2].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_top").eq(3).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[3].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[3].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[3].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_top").eq(3).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[4].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[4].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[4].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_bottom").eq(3).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[5].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[5].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[5].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_bottom").eq(3).append(div);
// 			var div1 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[6].img);
// 			var title = $("<div class='title'>" + obj[6].title + "</div>");
// 			div1.append(img,title);
// 			div1.appendTo($(".pro_brand_fr").eq(3));
// 			//2
// 			var div2 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[7].img);
// 			var title = $("<div class='title'>" + obj[7].title + "</div>");
// 			div2.append(img,title);
// 			div2.appendTo($(".pro_brand_fr").eq(3));
// 			//3
// 			var div3 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[8].img);
// 			var title = $("<div class='title'>" + obj[8].title + "</div>");
// 			div3.append(img,title);
// 			div3.appendTo($(".pro_brand_fr").eq(3));
// 			//4
// 			var div4 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[9].img);
// 			var title = $("<div class='title'>" + obj[9].title + "</div>");
// 			div4.append(img,title);
// 			div4.appendTo($(".pro_brand_fr").eq(3));
// 		});
// 		$.get("json/new_file05.json",function(data){
// 			var obj = data;
// 			var div1 = $("<div class='title'>" + obj[0].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[0].decription + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[0].img);
// 			$(".pro_brand_fl").eq(4).append(div1,div2,img);
// 			var div1 = $("<div class='title'>" + obj[1].title + "</div>");
// 			var div2 = $("<div class='decription'>" + obj[1].description + "</div>")
// 			var img = $("<img>");
// 			img.attr("src",obj[1].img);
// 			$(".pro_brand_mid_fl").eq(4).append(div1,div2,img);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[2].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[2].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[2].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_top").eq(4).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[3].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[3].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[3].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_top").eq(4).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[4].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[4].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[4].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_bottom").eq(4).append(div);
// 			var div = $("<div class='fl_box'></div>")
// 			var div1 = $("<div class='title'>" + obj[5].title + "</div>");
// 			var div2 = $("<div class='description'>" + obj[5].description + "</div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[5].img)
// 			div.append(div1,div2,img);
// 			$(".mid_fr_bottom").eq(4).append(div);
// 			var div1 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[6].img);
// 			var title = $("<div class='title'>" + obj[6].title + "</div>");
// 			div1.append(img,title);
// 			div1.appendTo($(".pro_brand_fr").eq(4));
// 			//2
// 			var div2 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[7].img);
// 			var title = $("<div class='title'>" + obj[7].title + "</div>");
// 			div2.append(img,title);
// 			div2.appendTo($(".pro_brand_fr").eq(4));
// 			//3
// 			var div3 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[8].img);
// 			var title = $("<div class='title'>" + obj[8].title + "</div>");
// 			div3.append(img,title);
// 			div3.appendTo($(".pro_brand_fr").eq(4));
// 			//4
// 			var div4 = $("<div class='fr-box'></div>");
// 			var img = $("<img>");
// 			img.attr("src",obj[9].img);
// 			var title = $("<div class='title'>" + obj[9].title + "</div>");
// 			div4.append(img,title);
// 			div4.appendTo($(".pro_brand_fr").eq(4));
// 		})
//
//
//
//
// 	//动态获取商品列表
// 	$.get("json/productList.json",function(data){
// 		for(var i = 0;i<data.length;i++){
// 			var obj = data[i];
// 			var li = $("<li></li>");
// 			var img = $("<img>");
// 			img.attr("src",obj.img);
// 			var p = $("<p>" + obj.name + "</p>");
// 			var div = $("<div></div>");
// 			var b = $("<b>" + obj.price + "</b>");
// 			var span = $("<span>" + obj.sales + "</span>");
// 			div.append(b,span);
// 			li.append(img,p,div);
// 			li.addClass("each_box");
// 			$(".content").append(li);
// 		}
// 		//商品详情页跳转
// 			$(".each_box").click(function(){
// 				var index = $(this).index();
// 				var obj = data[index];
// 				//console.log(obj.title);
//
// 				location.href = "productDetail.html?" + obj.title;
// 			})
// 	})
// 	//登录注册页面跳转
// 	$(".show_register").click(function(){
// 		window.location.href = "register.html"
// 	});
// 	$(".show_login").click(function(){
// 		window.location.href = "login.html"
// 	});
// 	var usernames = JSON.parse($.cookie("users"));
//
// 	if(usernames){
// 		var obj = usernames[usernames.length-1];
// 		console.log(obj.name)
// 		$(".show_register a").html("你好"+obj.name);
// 		$(".show_register a").css({color:"red"});
// 		$(".show_login a").html("退出登录");
// 		$(".show_login a").click(function(e){
// 			e.preventDefault();
// 			$.cookie("users", "", {expires:0, path:"/"});
// 		})
// 	}else{
// 		$(".show_login a").html("登录");
// 		$(".show_register a").html("注册")
// 	}
//
//
// 	//返回顶部
// 	$(".goTop").click(function(){
// 		$('body,html').animate({scrollTop:0},1000);
// 	})
// })
