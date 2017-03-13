
$(function(){
	
	
	function sum(){
		console.log('999');
//		    var $active1=$(this);
//          $active1.parent().css('border','2px solid #ff5482').siblings().css('border','2px solid #fff')
//			var img =  $(this).attr('src');
//			img = img.replace('min','max')
//			console.log(img)
//			$('.view-MainImg').attr('src',img);
//			$('.view-MainImg1').attr('src',img);
}

 
             $.ajax({
					type:"get",
					url:"../good.json",
					success:function(res){
//						console.log('test1')
						update(res.data);
					}
				})


	function update(data){
	    var index =location.search.replace('?','');
        var $mainimgcont=$('.main-img-cont');
        $('.bigpic img').attr('src',data[index].img3);
          
            //中图
		var $mainimg = $('<img class="view-MainImg" src='+data[index].img3+'/>')
			    $mainimg.appendTo($mainimgcont)
			    
			//小图1
		var $active=$('.active') 
	    var $mainmin1= $('<img class="xtt1" src='+data[index].img1+'>')
		     $mainmin1.appendTo($active);
		     

	        //小图2
	    var $active1=$('.active1')
	    var $mainmin2= $('<img class="xtt2"  src='+data[index].img2+'>')
		     $mainmin2.appendTo($active1)
		 
	    var $top=$('.top')
	    var $h3 =$('<h3 class="befor">'+data[index].title+'</h3>')
	        $h3.appendTo($top).insertBefore('.top p')
	        
	    var $pink=('.pink')
//	    console.log(data[index].priceint1);
	    var $em1=$('<em class="price">'+data[index].priceint1+'</em>')
	        if($('.pink .price').length<2){
	        	$em1.insertAfter('.pink .f-16')
	        }
	       
	};
		    

	  
	 //放大镜
    var $smallPic = $('.main-img-cont');
	var $pos = $('.pos');
	var $bigpic = $('.bigpic img');
	var $wrapper =('.carousel-wrapper')
	
	$(document).mousemove(function(e){
	  
		if(e.pageX>$smallPic.offset().left && e.pageX<$smallPic.offset().left+$smallPic.outerWidth()&&
		e.pageY>$smallPic.offset().top && e.pageY<$smallPic.offset().top+$smallPic.outerHeight()){
//			console.log($bigpic.attr('src'));
			 $('.pos').show()
			 $('.bigpic').show()
			 
			$('.pos').css({
				top:e.pageY-$smallPic.offset().top-$pos.outerHeight()/2,
				left:e.pageX-$smallPic.offset().left-$pos.outerWidth()/2,
			})
			
			if(e.pageX<=$smallPic.offset().left+$pos.outerWidth()/2){
				$pos.css({
				  left:0,
			})
			}
			
			if(e.pageY<=$smallPic.offset().top+$pos.outerHeight()/2){
				$pos.css({
				  top:0,
			})
			}
			
			if(e.pageX>=$smallPic.offset().left+$smallPic.outerWidth()-$pos.outerWidth()/2){
				$pos.css({
				 left:$smallPic.outerWidth()-$pos.outerWidth(),
			})
			}
			
			if(e.pageY>=$smallPic.offset().top+$smallPic.outerHeight()-$pos.outerHeight()/2){
				$pos.css({
				 top:$smallPic.outerHeight()-$pos.outerHeight(),
			})
			}
			
			$('.bigpic img').css({
				left:-$pos.offset().left*5+1080,
				top:-$pos.offset().top*5+1250,
			})
			
		}else{
			$('.pos').hide()
			$('.bigpic').hide()
		}
		
	})
	
	var $active1=$('.active')
	var $active2=$('.active1')

	$active1.mouseenter(function(){
		$active1.css('border','2px solid #ff5482').siblings().css('border','2px solid #fff')
		var img =  $(this).find('img').attr('src');
//		console.log(img);
		img  = img.replace('min','max')
//		console.log(img);
		$('.view-MainImg').attr('src',img);
		$('.view-MainImg1').attr('src',img);
		
		
	})
   $active2.mouseenter(function(){
		$active2.css('border','2px solid #ff5482').siblings().css('border','2px solid #fff')
	    var img =  $(this).find('img').attr('src');
		img  = img.replace('min','max')
		$('.view-MainImg').attr('src',img);
		$('.view-MainImg1').attr('src',img);
   })
      //详情的数量加减
    var $btn_subtraction=$(".suliangjian1");
	var $input=$(".sulang3 .suliangsumu1");
	var $btn_add=$(".suliangjia1");
	//获取当前的value值
	var num=$input.val();
	//点击减少数量
	$btn_subtraction.on("click",function(){

		if(num<=1){
			$input.val(1)
		}else{
			$input.val(--num);
		}
		
	})
	//点击增加数量
	$btn_add.on("click",function(){
		$input.val(++num);
	  })
         
         
        //立即抢购，加入购物车
     
		 $('.ljqg2').on('click',function(e){
	           $input3=parseInt($input.val())
		  var title = $('.top').find('h3').html();
			 //price
	      var price = $('.price-inf').find('.price').html();
			 
			 //img
			var img = $('.active').find('img').attr('src');
			
			var obj = {"title":title,"price":price,"img":img};
			
			var strCookie = $.cookie("goods");
			
			var  bGood = false;  //代表没有信息
			
			if(strCookie == undefined || strCookie =="" ){

				var oCookie = [];
				
				var newGood = {"title":title,"data":obj,num:$input3}//新的完整的产品信息
				    oCookie.push(newGood);
				
			}else{
				var oCookie = JSON.parse(strCookie);
			
				$.each(oCookie,function(){
					
					  if(this.title == title){
						var num = parseInt(this.num)+$input3;   //为了防止num是字符串 讲字符串转换成int
						  console.log()
						this.num = num;
						bGood =true;  //表示产品有信息
						
					}
				})
				
				if(bGood==false){
					
					var newGood = {"title":title,"data":obj,"num":$input3}//新的完整的产品信息
					oCookie.push(newGood);
				}
			}
			$.cookie("goods",JSON.stringify(oCookie),{expires:7 , path:"/"});					
			
		})
 }) 