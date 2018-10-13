/*
* @Author: Kevin
* @Date:   2018-09-21 10:26:25
* @Last Modified by:   Kevin
* @Last Modified time: 2018-09-24 19:52:37
*/
$(function(){
	var num=$('.banner li').index();
	var time;
	function play(){
		time=setInterval(function(){
			num++;
		if(num>5){
			num=0;
			$('.banner ul').css({'left': -num*li_width+'px'});
			num=1;
		}
		if(num==5){
			$('.banner-nav ol li').eq(0).addClass('blue').siblings().removeClass('blue');
		}
		$('.banner ul').animate({'left':-num*li_width+'px'},400);
		$('.banner-nav ol li').eq(num).addClass('blue').siblings().removeClass('blue');
		},5000)
	}
	$('.banner').hover(function() {
		clearInterval(time);
		// console.log(1);
	}, function() {
		play();
	});
	var li_width=$(window).width();
	$('.banner ul li').css('width', li_width);
	$('.banner-right').click(function(event) {
		num++;
		if(num>5){
			num=0;
			$('.banner ul').css({'left': -num*li_width+'px'});
			num=1;
		}
		if(num==5){
			$('.banner-nav ol li').eq(0).addClass('blue').siblings().removeClass('blue');
		}
		$('.banner ul').animate({'left':-num*li_width+'px'},800);
		$('.banner-nav ol li').eq(num).addClass('blue').siblings().removeClass('blue');
	});
	$('.banner-left').click(function(event) {
		num--;
		if(num<0){
			num=5;
			$('.banner ul').css('left', -num*li_width+'px');
			num=4;
			$('.banner-nav ol li').eq(4).addClass('blue').siblings().removeClass('blue');
		};
		if(num==5){
			$('.banner-nav ol li').eq(0).addClass('blue').siblings().removeClass('blue');
		}
		$('.banner ul').animate({'left':-num*li_width+'px'},800);
		$('.banner-nav ol li').eq(num).addClass('blue').siblings().removeClass('blue');
	});
	play();
	$('.car_top li').click(function(event) {
		var nums=$(this).index()-1;
		// $('.car_topCtn').children('ul').css('display', 'none');
		$('.car_topCtn').children('ul').eq(nums).slideToggle(800).addClass('car_dspl');
	});
	$('.car_bottom li').click(function(event) {
		var nums=$(this).index();
		// $('.car_topCtn').children('ul').css('display', 'none');
		$('.car_botCtn').children('ul').eq(nums).slideToggle(800).addClass('car_dspl');
	});
	$('.content_banner ul li').click(function(event) {
		var index=$(this).index();
		$(this).addClass('banner_color').siblings().removeClass('banner_color');
		$('.content_bannerPic ol').animate({'margin-left':-index*1183+'px'},800)
	});
});