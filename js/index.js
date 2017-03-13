
$(function(){
		$('#header').load('common/hearder.html',function(){
				 var $logo3=$('#logo3')
				var $na=$('.nav-cart')
				$logo3.mousemove(function(){
			       	$na.show()
			    })
				$logo3.mouseout(function(){
			       	$na.hide()
			       	
			    })
				
				
				var str = $.cookie('login');
	       
			if(str==undefined ||str==""){
			}else{
				var oCookie = JSON.parse(str);
				
				if(oCookie.type==false){
					
				}else{
					$('.li11 .view-ActionBack11').hide()
					$('.li11 .view-ActionBack22').hide()
					$('.li11 .view-ActionBack12').show()
					$('.li11 .view-ActionBack12').text(oCookie.name +"[退出]");
					
				}
			}
			})	
			
			
	      
	       var $view=$('.view-AgeListt')
				 var $sub=$('.sub-list')
				 
				   	$view.hover(function(){
				   		$sub.show()
				   	},function(){
				   		$sub.hide();
			    	})
				   	

				//开始轮播
				var $focus = $("#focus");
				var $bigpic  = $('#bigpic');
			
				var index1 = 0;
				var timer1 ;
				
				timer1 = setInterval(next1,3000)
				
				$focus.on("mouseenter",function(){
					clearInterval(timer1);
				}).on("mouseleave",function(){
					timer1 = setInterval(function(){			
					next1();	
					},3000);
				})
				next1()
				function next1(){
					
			        index1++;
				     show1();
				   }
				
			function show1(){
				if(index1 > $bigpic.find("li").length-1){
					index1 = 0;
				}
				else if(index1 < 0){
					index1 = $bigpic.find("li").length-1;
				};
				$bigpic.find("li").eq(index1).fadeTo(500,1).siblings().fadeTo(200,0);				
			}	
			
		      var $jrys=$('.jrys1')
			  var $jcyg=$('.jcyg1')
			  var $mtommorow=$('.m-brand-tommorow')
			  var $mtoday=$('.m-brand-today')
			  var $mtodaya=$('.m-brand-today-a')
              var $mtommorowa=$('.m-brand-tommorow-a')
              
				$jcyg.mouseenter(function(){
					$mtommorow.show();
					$mtoday.hide();
					$mtodaya.hide();
					$mtommorowa.show();
//					$jcyg.css('font-weight','bold').siblings().css('font-weight','normal')
//					$jcyg.css('border-bottom','2px solid #ff647c').siblings().css('border-bottom','2px solid #f8f8f8')
					$jcyg.removeClass('active2')
					$jcyg.addClass('active1')
					$jrys.removeClass('active1')
				})
				
				$jrys.mouseenter(function(){
					$mtoday.show();
					$mtommorow.hide();
					$mtodaya.show();
					$mtommorowa.hide();
//					$jcyg.css('font-weight','bold').siblings().css('font-weight','normal')
//					$jcyg.css('border-bottom','2px solid #ff647c').siblings().css('border-bottom','2px solid #f8f8f8')
					$jcyg.removeClass('active1')
					$jrys.removeClass('active2')
					$jrys.addClass('active1')
				})
				
				//小轮播开始
				
				var $oversea = $(".m-oversea");
				var $plane  = $('.u-plane');
				var $prev=$('.prev');
				var $next=$('.next')
				
				//增加一个li
				$plane.append($('.u-plane li').eq(0).clone());
				var $li =  $('.u-plane li')
				
				$plane.css({width:$li.length*$li.outerWidth()})
				
				var index2 =0;
				var timer2 ;
				
				timer2 = setInterval(show2,2000)
				
				$plane.on("mouseenter",function(){
			       clearInterval(timer2);
				}).on("mouseleave",function(){
					timer2 = setInterval(function(){			
					show2();	
					},2000);
				})
				
				function show2(){
					index2++; 
				  $plane.animate({left:-$li.outerWidth()*index2},200,function(){
				  	
				  	 if(index2>=$li.length-1){
				  	 	index2=0;
				  	 	$plane.css({left:0});
				  	 }else if(index2==-1){
				  	 	index2=3;
				  	 	$plane.css({left:-$li.outerWidth()*index2})
				  	 	
				  	 }
				  	 
				  })
					
				}
				
				//童装， 童鞋。。装换
				var $tzaa=$('.m-hotsort-tzaa')
				var $tzaa1=$('.m-hotsort-tzaa1')
				var $tzaa3=$('.m-hotsort-tzaa3')
				var $tzaa4=$('.m-hotsort-tzaa4')
				var $currentt1=$('.current1')
				var $currentt2=$('.current2')
				var $currentt3=$('.current3')
				var $nonet2=$('.br-none2')
				var $J_sort=$('.J_sort')
				
				$currentt1.mouseenter(function(){
					$tzaa.show();
					$tzaa1.hide();
					$tzaa3.hide();
					$tzaa4.hide();
					$(this).css('background','#fff').siblings().css('background','#f9f9f9')
					$(this).css('border-bottom','1px solid #fff ').siblings().css('border-bottom','1px solid #e7e7e7 ')
				})
				
				$currentt2.mouseenter(function(){
					$(this).css('border-bottom','1px solid #fff ').siblings().css('border-bottom','1px solid #e7e7e7 ')
					$(this).css('background','#fff').siblings().css('background','#f9f9f9')
				    $tzaa1.show();
					$tzaa.hide();
					$tzaa3.hide();
					$tzaa4.hide();
				})
				
				$currentt3.mouseenter(function(){
					$tzaa3.show();
					$tzaa.hide();
					$tzaa1.hide();
					$tzaa4.hide();
					$(this).css('background','#fff').siblings().css('background','#f9f9f9')
				    $(this).css('border-bottom','1px solid #fff ').siblings().css('border-bottom','1px solid #e7e7e7 ')
				
				})
				
				$nonet2.mouseenter(function(){
					$tzaa4.show();
					$tzaa.hide();
					$tzaa3.hide();
					$tzaa1.hide();
					$(this).css('background','#fff').siblings().css('background','#f9f9f9')
				    $(this).css('border-bottom','1px solid #fff ').siblings().css('border-bottom','1px solid #e7e7e7 ')
				
				})
	
              //回到顶部
              var $hddb1=$('.hddb1')
              
                $hddb1.click(function(){
                	
              	$(document.body).animate({scrollTop:0},300)
              	   
              })
                
                
           var number = 132230;
	       setInterval(function (){
		var day = document.getElementsByClassName('day')[0];
		var hour = document.getElementsByClassName('hour')[0];
	    var minutes = document.getElementsByClassName('minutes')[0];
	    var seconds = document.getElementsByClassName('seconds')[0];

		number--;
		//把number总秒数转成分和时
		var tempDay = parseInt(number /(3600*24));
		var tempHour = parseInt(number / 3600%24);
		//12000 / 60 = 200.xx
		var tempMinute = parseInt( number / 60 % 60);
		var tempSeconds = number % 60;
		day.innerHTML = tempDay<10?"0"+tempDay:tempDay;
		hour.innerHTML = tempHour < 10 ? '0' + tempHour:tempHour;
		minutes.innerHTML = tempMinute < 10 ?'0' + tempMinute:tempMinute;
		seconds.innerHTML = tempSeconds < 10 ?'0' + tempSeconds:tempSeconds;

	},1000);
	
	
	      
})
 
