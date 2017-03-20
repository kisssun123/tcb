$('.swiper-pagination-bullet-active').css({'background':' #888',"opacity":"1"});
$('.swiper-container').mousemove(function() {
	$('.swiper-pagination-bullets .swiper-pagination-bullet').css({border:'1px solid #aaa',background:'white',opacity:'1'});
	$('.swiper-pagination-bullet-active').css({'background':' #888',"opacity":"1"});
}).mouseout(function() {
	$('.swiper-pagination-bullets .swiper-pagination-bullet').css({border:'none',background:'white',opacity:'0.2'});
	// $('.swiper-pagination-bullet-active').css({'background':' #888',"opacity":"1"});
});
$('.center_one li').mousemove(function() {
	$(this).find('.link_us').show()
}).mouseout(function() {
	$('.link_us').hide()
});
	function move(){
		$(".seven_one").delay(1000);
		$(".seven_one").animate({top:"-100px"},1000,"linear",function(){
			$(".seven_one").css("top",0);
			$(".seven_one>li:first").appendTo($(".seven_one"));
			move();
		})
	}
		move();