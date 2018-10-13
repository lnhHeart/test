$(function(){
	            var num = 0;
	            var timer = null;
	            function gogogo(){  
	                timer = setInterval(function(){ 
	                    num ++;
	                    if(num>5){
	                        num=0;
	                        $('.banner ul').stop().css('left','0px');
	                        num=1;
	                    }
	                    if(num==5){
	                    	$('.banner_bottom li').eq(0).addClass('bottom-box1').siblings().removeClass('bottom-box1')
	                    }
	                    $('.banner ul').stop().animate({left:-(num*1680)+'px'});
	                 	$('.banner_bottom li').eq(num).addClass('bottom-box1').siblings().removeClass('bottom-box1')
	                },2000);
	            };
	            gogogo();
	            $('.banner').hover(function() {
		            clearInterval(timer);
		            $(banner_left).stop().css('height','50px');
		            $(banner_right).stop().css('height','50px');
	            }, function() {
	                gogogo();
	                $(banner_left).stop().css('height','0px');
	              	$(banner_right).stop().css('height','0px');
	            });
	            //左切换
	            $('.banner .left').click(function(e) {
              		num --;
                    if(num<0){
                        num=5;
                        $('.banner ul').stop().css('left',-(num*1680)+'px');
                        num=4;
                    }
                    if(num==5){
                    	$('.banner_bottom li').eq(0).addClass('bottom-box1').siblings().removeClass('bottom-box1')
                    }
                    $('.banner ul').stop().animate({left:-(num*1680)+'px'});
                  	$('.banner_bottom li').eq(num).addClass('bottom-box1').siblings().removeClass('bottom-box1')
	           });
	           $('.banner .left').hover(function(){
	           		$(this).css('background-color','rgba(255,255,255,0.7)')
	           },function(){
	           		$(this).css('background-color','rgba(255,255,255,0.5)')
	           })
	              //右切换
	            $('.banner .right').click(function(e) {
	              	num ++;
                    if(num>5){
                        num=0;
                       	$('.banner ul').stop().css('left',-(num*1680)+'px');
                        num=1;
                    }
                    if(num==5){
                    	$('.banner_bottom li').eq(0).addClass('bottom-box1').siblings().removeClass('bottom-box1')
                    }
                    $('.banner ul').stop().animate({left:-(num*1680)+'px'});
                 	$('.banner_bottom li').eq(num).addClass('bottom-box1').siblings().removeClass('bottom-box1')
	            });
	            $('.banner .right').hover(function(){
	           		$(this).css('background-color','rgba(255,255,255,0.7)')
	           },function(){
	           		$(this).css('background-color','rgba(255,255,255,0.5)')
	           })
	             $('.ul_ol_box .right').hover(function(){
	           		$(this).children('p').fadeIn(200)
	           },function(){
	           		$(this).children('p').fadeOut(200)
	           })
	            $('.ul_ol_box .left').hover(function(){
	           		$(this).children('p').fadeIn(200)
	           },function(){
	           		$(this).children('p').fadeOut(200)
	           })
	           var cc=0;
	           $('.ul_ol_box ul li').click(function(event){
	           		$(this).addClass('ab_box').siblings().removeClass('ab_box')
	           		$('.ol_box ol').animate({'left':-1295*$(this).index()+'px'},200)
	           		cc=$(this).index()
	           		console.log(cc)
	           })
	           $('.ul_ol_box>.left').click(function(event){
	           		cc--
	           		if(cc<0)cc=5;
	           		$('.ul_ol_box ul li').eq(cc).addClass('ab_box').siblings().removeClass('ab_box')
	           		$('.ol_box ol').animate({'left':-1295*cc+'px'},200)
	           })
	           $('.ul_ol_box>.right').click(function(event){
	           		cc++
	           		if(cc>5)cc=0;
	           		$('.ul_ol_box ul li').eq(cc).addClass('ab_box').siblings().removeClass('ab_box')
	           		$('.ol_box ol').animate({'left':-1295*cc+'px'},200)
	           })

			 $('.ul_ol_box11 .right').hover(function(){
	           		$(this).children('p').fadeIn(200)
	           },function(){
	           		$(this).children('p').fadeOut(200)
	           })
	            $('.ul_ol_box11 .left').hover(function(){
	           		$(this).children('p').fadeIn(200)
	           },function(){
	           		$(this).children('p').fadeOut(200)
	           })
			var cc1=0;
	           $('.ul_ol_box11 ul li').click(function(event){
	           		$(this).addClass('ab_box').siblings().removeClass('ab_box')
	           		$('.ul_ol_box11 .ol_box ol').animate({'left':-1295*$(this).index()+'px'},200)
	           		cc1=$(this).index()
	           		console.log(cc1)
	           })
	           $('.ul_ol_box11>.left').click(function(event){
	           		cc1--
	           		if(cc1<0)cc1=2;
	           		$('.ul_ol_box11 ul li').eq(cc1).addClass('ab_box').siblings().removeClass('ab_box')
	           		$('.ul_ol_box11 .ol_box ol').animate({'left':-1295*cc1+'px'},200)
	           })
	           $('.ul_ol_box11>.right').click(function(event){
	           		cc1++
	           		if(cc1>2)cc1=0;
	           		$('.ul_ol_box11 ul li').eq(cc1).addClass('ab_box').siblings().removeClass('ab_box')
	           		$('.ul_ol_box11 .ol_box ol').animate({'left':-1295*cc1+'px'},200)
	           })




})