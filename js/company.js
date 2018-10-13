/*
* @Author: luonanhui
* @Date:   2018-09-20 18:49:31
* @Last Modified by:   Kevin
* @Last Modified time: 2018-09-24 15:46:44
*/
// var num=0;
$(function(){
	$('section ul li>span').click(function(event) {
	// var s=$(this).index()
	// num++;
	console.log($(this).index())
		$(this).siblings('p').toggleClass('ptx');
	});
})
