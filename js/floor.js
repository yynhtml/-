$(function(){
	if(window.localStorage["floor"]){
		console.log(window.localStorage["floor"]);
	}
	
	//轮播图
	var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    
    //自动播放
    autoplay : 2000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    
    //滑动速度
    speed: 800,
    
  	})
	
	//瀑布流实现
	
	/*判断最小高度函数*/
	function minHeight(){
		var ul1 = $(".s_left");
		var ul2 = $(".s_center");
		var ul3 = $(".s_right");
		var minH = ul1;
		if(minH.height() > ul2.height()){
			minH = ul2;
		}
		if(minH.height() > ul3.height()){
			minH = ul3;
		}
		return minH;
	}
	
	/*加载图片函数*/
	function jiazai(n){
		/*图片数据*/
		var data = [
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/612785920.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/1659513467.jpg"},
			{"imgUrl":"img/612785920.jpg"}
		]
		if(n > 0){
			for(var i = 0;i < 10;i++){
				var minUl = minHeight();
				console.log(minUl);
				minUl.append("<li><img src='"+data[i].imgUrl+"'/></li>");
			}
		}else if(n == 0){
			$("#content").append("<div style='clear:both;color:#fff;text-align:center;height:4rem;background:rgba(0,0,0,0.8);line-height:4rem;'>更多商家信息敬请期待</div>");
		}
	}
	var n = 8;
	jiazai(n);
	window.onscroll = function(){
		var documentH = $(document).height();
		var scrollH = $(document).scrollTop();
		var pageH = $(window).height();
		if(scrollH + pageH > documentH*0.8){
			jiazai(n);
			n--;
		}
	}
	
	
	
	//跳转页面
	$("#content ul").on("click","li",function(){
		window.location = "shop.html";
	})
})









