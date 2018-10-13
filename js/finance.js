//window.onload=function(){
//	var obanner_img=banner_img.children;
//	var num=0;
//	var timer=null;
//	for(var i=0;i<obanner_img.length;i++){
//		banner_img.children[i].setAttribute('wjh',i);
//	}
//	
//	
//	
//	function gogo(){
//		timer=setInterval(function(){
//			num++;
//			if(num>3)num=0;
//			banner_img.style.left=-num*1583+'px';
//			bottom_box1.style.left=num*395+'px';
//		},5000)
//	}
//	gogo();
//	
//	banner_box.onmouseenter=function(){
//		clearTimeout(timer);
//		banner_left.style.height='50px'
//		banner_right.style.height='50px'
//	}
//	
//	banner_box.onmouseleave=function(){
//		gogo();
//		banner_left.style.height='0'
//		banner_right.style.height='0'
//	}
//	
//	banner_left.onclick=function(){
//		num++;
//		if(num>3)num=0;
//		banner_img.style.left=-num*1583+'px';
//		bottom_box1.style.left=num*395+'px';
//	}
//	
//	banner_right.onclick=function(){
//		num--;
//		if(num<0)num=3;
//		banner_img.style.left=-num*1583+'px';
//		bottom_box1.style.left=num*395+'px';
//	}
//}
$(function(){
	var num = 0;
    var timer = null;
    function gogogo(){  
        timer = setInterval(function(){ 
            num ++;
            if(num>4){
                num=0;
                $('.banner ul').stop().css('left',-(num*1583)+'px');
                num=1;
            }
            if(num==4){
            	$('.banner_bottom li').eq(0).addClass('bottom-box1').siblings().removeClass('bottom-box1')
            }
            $('.banner ul').stop().animate({left:-(num*1583)+'px'});
         	$('.banner_bottom li').eq(num).addClass('bottom-box1').siblings().removeClass('bottom-box1')
        },2000);
    };
    gogogo();
    $('.banner').hover(function() {
        clearInterval(timer);
        $('.banner .left').stop().css('height','50px');
        $('.banner .right').stop().css('height','50px');
    }, function() {
        gogogo();
        $('.banner .left').stop().css('height','0px');
      	$('.banner .right').stop().css('height','0px');
    });
    //左切换
    $('.banner .left').click(function(e) {
  		num --;
        if(num<0){
            num=4;
            $('.banner ul').stop().css('left',-(num*1583)+'px');
            
            num=3;
        }
        if(num==4){
        	$('.banner_bottom li').eq(0).addClass('bottom-box1').siblings().removeClass('bottom-box1')
        	
        }
        $('.banner ul').stop().animate({left:-(num*1583)+'px'});
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
        if(num>4){
            num=0;
           	$('.banner ul').stop().css('left',-(num*1583)+'px');
            num=1;
        }
        if(num==4){
        	$('.banner_bottom li').eq(0).addClass('bottom-box1').siblings().removeClass('bottom-box1')
        }
        $('.banner ul').stop().animate({left:-(num*1583)+'px'});
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
   
    var num1=0;
	
	$('.vehicle span.rigth').click(function(event){
		num1++;
		if(num1>12){
			$('.vehicle ul').css('left','0px');
			$('.vehicle ul li').eq(1).children('img').css('width','562.5px');
			$('.vehicle ul li').eq(1).siblings().children('img').css('width','266.25px');
			num1=1;
		}
		$('.vehicle ul').stop().animate({'left':-num1*296.25+'px'},1000)
		$('.vehicle ul li').eq(num1+1).children('img').animate({'width':'562.5px'},1000);
		$('.vehicle ul li').eq(num1+1).siblings().children('img').animate({'width': '266.25px'},1000);
		$('.vehicle ul li').eq(num1-1).stop().fadeTo(1000,0.1).siblings('li').fadeTo(100,1)
		$('.txts p').html($('.vehicle ul li').eq(num1+1).children('img').attr('alt'))
	})
	$('.vehicle span.left').click(function(event){
		num1--;
		if(num1<0){
			$('.vehicle ul').css('left','-3555px');
			$('.vehicle ul li').eq(11).children('img').css('width','562.5px');
			$('.vehicle ul li').eq(11).siblings().children('img').css('width','266.25px');
			num1=11;
		}
		$('.vehicle ul').stop().animate({'left':-num1*296.25+'px'},1000)
		$('.vehicle ul li').eq(num1+1).children('img').animate({'width':'562.5px'},1000);
		$('.vehicle ul li').eq(num1+1).siblings().children('img').animate({'width': '266.25px'},1000);
		$('.vehicle ul li').eq(num1+3).stop().fadeTo(1000,0.1).siblings('li').fadeTo(100,1)
		$('.txts p').html($('.vehicle ul li').eq(num1+1).children('img').attr('alt'))
	})
})
