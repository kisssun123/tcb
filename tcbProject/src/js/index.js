//初始化Swiper,返回初始化后的Swiper示例
var mySwiper = new Swiper ('.swiper-container', {
		 	//direction滑动方向 vertical垂直切换  horizontal水平切换
	direction: 'horizontal',
		    //设置为true 则开启loop模式。loop模式：会在原本slide前后复制若干个slide并在合适的时候切换，让Swiper看起来是循环的。 
	loop: true,
		    // 如果需要分页器
	pagination: '.swiper-pagination',
		    //分页器样式 bullets圆点（默认） 	fraction分式 		progress进度条 	custom自定义
	paginationType:'bullets',
		    //speed滑动速度单位是ms
	speed:600,
		    //自动切换的时间间隔单位为ms
	autoplay:3000,
	paginationClickable :true,
})
//分页
var num = 1;
$('#pages ul li').on('click',function(){
	//获取分页的页数
	num = $(this).html();
	num = Number(num);
	//发起ajax请求
	$.ajax({
		type:"GET",
		url:"../data/" + num,
		dataType:'json',
		success:function(data){
				//初始化对象
				var shop = $(data["shop_data"]);
				$('.LCont').each(function(index){
					$('.imgs img').eq(index).attr("src",shop[index]['shop_ico']);
					$('.txt h3 a').eq(index).html(shop[index]['shop_name']);
					$('.zy span').eq(index).html(shop[index]['main']);
					$('.dz span').eq(index).html(shop[index]['addr']);
				})
				//获取地图信息
				$(shop).each(function(index) {
						//获取经纬度
						var map_longitude = shop[index]["map_longitude"];
						var map_latitude = shop[index]["map_latitude"];
						var masker = [];
						//添加标注信息
						masker.push("<h4 class='masker-top'>"+shop[index]["shop_name"]+"</h4>");
		                masker.push("<p class='masker-center'>主营："+shop[index]["main"]+"</p>");
		                masker.push("<p class='masker-bottom'>地址："+shop[index]["addr"]+"</p>");
		                var infoWindow = new AMap.InfoWindow({
		                    content: masker.join("")
		                });
		                //获取水标注
		                var marker = new AMap.Marker({
		                    position: [map_longitude, map_latitude],
		                    map:map
		                });
		                //点击水标注显示信息
		                marker.on('click', function(e){
		                    infoWindow.open(map, e.target.getPosition());
		                });
		        })
		}
	});
	//模拟点击第一次
}).triggerHandler("click");
//进入店铺
$(".LCont").on("mouseover",function(){
		$(this).css("background","#f8f8f8")
		$(this).children(".jr").css('display','inline-block');
		$(this).on("mouseout",function(){
			$(this).css("background","#fff")
			$(this).children(".jr").css('display','none');
		})
})
//地图模式
$('#dt').on('click',function(){
	$('#mb').show();
	$('#container').click(function(e){
		e.stopPropagation();
	})
	$('#mb').click(function(){
		$('#mb').hide();
	})
})
//创建地图对象
var map = new AMap.Map('container',{
   zoom: 10,
   center: [116.39,39.9]
});
function refresh(e) {
        map.setMapStyle("light");
}
//鹰眼
AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
    function(){
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());

        map.addControl(new AMap.OverView({isOpen:true}));
});
$('.jr').each(function(index){
	$('.jr').eq(index).on('click',function(){
		$('.jr').attr('href',"http://127.0.0.1:8888/shop.html/?index="+index+"&num="+num);
	})
})

//分页变色
$('#pages ul li').each(function(a){
	$('#pages ul li').on('click',function(){
		$('#pages ul li').css('background','white');
		$(this).css('background','orange');
	}).triggerHandler("click");
})
