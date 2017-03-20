var index = getUrlParam('index');
var num = getUrlParam('num');
$.ajax({
	type:"get",
	url:"../data/" + num,
	success:function(data){
		var data = JSON.parse(data);
		var shop = data['shop_data'];
		$('#png img').attr('src',shop[index]['shop_ico']);
		$('.xm').html(shop[index]['shop_name']);
		$('#dz').html(shop[index]['addr']);
		$('#phone').html(shop[index]['mobile']);
		$('#cj').html(shop[index]['count']);
		$('#pj').html(shop[index]['comments']);
	}
});
function getUrlParam(name){
	var reg = new RegExp("(^|&)"+name+"=([^&]*)(&|$)");//构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);//匹配目标参数
	if(r != null) {
		return unescape(r[2]);
	}else{
		return null;//返回参数值
	}
}
window.suggest = function(data){
	$('#xixi').remove();
	//新建一个ul
	var uls = $('<ul id="xixi" />');
	//获取数据
	data = data['result'];
	//利用循环将数据添加进li中
	for(var i = 0; i < data.length; i++){
		$('<li>').html(data[i].word).appendTo(uls);
	}
	//将ul添加进#soso
	uls.appendTo($('#soso'));
}
$('#txt').on('input',function(){
	$('<script/>').attr('src','http://suggest.bang.360.cn/suggest?word='+$(this).val()+'&category=7&encodein=utf-8&encodeout=utf-8&format=json&callback=window.suggest&t=0.3514809920297852').appendTo($('body'));
})

$('#txt').on('blur',function(){
	$('#xixi').hide();
})

$.ajax({
	type:"get",
	url:"../data/4",
	dataType:'json',
	success:function(data){
		var shop = data['product'];
		$('.lis').each(function(index){
			$('.lis img').eq(index).attr("src",shop[index]['product_img']);
			$('.img').eq(index).html(shop[index]['tag_name']);
			$('.fw').eq(index).html(shop[index]['service_desc1']);
			$('.maney').eq(index).html('￥'+shop[index]['product_price']);
		})
	}
});