/*
* @Author: Kevin
* @Date:   2018-09-23 20:23:11
* @Last Modified by:   Kevin
* @Last Modified time: 2018-09-24 00:25:41
*/
$(function(){
	$('.active3_nav dt').children().click(function(event) {
		$('.active3_nav dl').css('left', '25%');
		$('.active3_nav dt').hide();
		$(this).parent().siblings('dd').fadeIn();
	});
	$('.active3_nav span').click(function(event) {
		$('.active3_nav dl:last-child').css('left', '43%');
		$(this).parent().hide();
		$('.active3_nav dt').fadeIn();
	});
	$('.active4_nav dt').children().click(function(event) {
		$('.active4_nav dl').css('top', '50px');
		$('.active4_nav dt').hide();
		$(this).parent().siblings('dd').fadeIn();
	});
	$('.active4_nav span').click(function(event) {
		$('.active4_nav dl:nth-of-type(1)').css('top', '30px');
		$('.active4_nav dl:nth-of-type(2)').css('top', '78px');
		$('.active4_nav dl:nth-of-type(3)').css('top', '127px');
		$('.active4_nav dl:nth-of-type(4)').css('top', '175px');
		$(this).parent().hide();
		$('.active4_nav dt').fadeIn();
	});
})