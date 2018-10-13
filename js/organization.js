/*
* @Author: admin
* @Date:   2018-09-18 15:11:50
* @Last Modified by:   Kevin
* @Last Modified time: 2018-09-24 19:04:31
*/
$(function(){
	var num=1;
	$('.txt1 ul li').click(function(event) {
		
		 $('.txt1 ol li').eq($(this).index()).fadeIn().siblings().fadeOut()
	     
	})
})

