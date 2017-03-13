$(function(){
	
	      var strCookie=$.cookie('goods');
//          console.log(strCookie)	      
			//加载cookie里面的数据
			var sum = 0;
			var money = 0;
			var sumnum= 0;
			if(strCookie==undefined || strCookie ==""){
				
			}else{
				
				var oCookie = JSON.parse(strCookie);
				
				$.each(oCookie,function(){
					//this
					//按照格式去刷新页面
					var $ul=$('<ul></ul>')
					var $li=$('<li></li>')
					$ul.addClass('item-entry');
					$('<li></li>').addClass("cart-td-check").append('<input class="J_itemCheck" type="checkbox" checked="checked">').appendTo($ul);
					$('<li></li>').addClass("cart-td-item-info").append('<a charset="a1"><img src='+this.data.img+'></a>').append('<a class="title" href="#">'+this.data.title+'</a>').appendTo($ul);
				    $('<li></li>').addClass("cart-td-item-sku").append('<p>颜色 : 黑色<br>尺码 : XL</p>').appendTo($ul);
				    $('<li></li>').addClass("cart-td-item-price").append('<p class="view-ItemEntryPrice">'+this.data.price+'</p>').append('<p class="strike">299.00</p>').appendTo($ul);
				    $('<li></li>').addClass("cart-td-number").append('<div class="sulang2"><div class="suliangjian">-</div><input class="suliangsumu" type="type" value="'+this.num+'"><div class="suliangjia">+</div></div>').appendTo($ul);
				    $('<li></li>').addClass("cart-td-subtotal").append('<span class="priceview">'+this.data.price*this.num+"元"+'</span>').appendTo($ul);
				    $('<li></li>').addClass("cart-td-ops").append('<a href="#" class="view-DelItemBtn">删除</a>').appendTo($ul);
				    $ul.appendTo($('.white-bg')).insertBefore('.total1')
                    
                    this.num = parseInt(this.num)
                    sumnum += this.num;
                    sumnum = parseInt(sumnum)
//                  console.log(sumnum)
                    $(".suliang").html(sumnum)
                    money += this.num * this.data.price;
                    selff = this;
				})
			}
		
    var $btn_subtraction=$(".suliangjian");
	var $input=$(".sulang2 .suliangsumu");
	var $btn_add=$(".suliangjia");
	//获取当前的value值
	var num=$input.val();
	
	//点击减少数量 ,事件委托，得到当前的点击按钮
	$(document).on("click",".suliangjian",function(){
		
	   var $input=$(this).parent().find('.suliangsumu').val();
	        $input=parseInt($input);
		    $(this).parent().find('.suliangsumu').val(--$input);
       var $price = $(this).parent().parent().parent().find('.view-ItemEntryPrice').html();
			$price=parseInt($price)
	   var $total=$(this).parent().parent().parent().find('.priceview');

		if($input<=0){
			
			$(this).parent().find('.suliangsumu').val(0)
			$total.html(0);
			
		}else{

			$total.html($input*$price+'元');
			
			var box=0; 
			$.each($('.item-entry'), function() {
			var price1=parseInt($(this).find('.priceview').html())
			box+=price1;
			$('.total2').html(box+'元')
			});
			
			}
	})
	
	
	 var $total2=$('.total2').html(money+'元')
	 //点击增加数量
	    $(document).on("click",".suliangjia",function(){
	    	
		var $input=$(this).parent().find('.suliangsumu').val();
		    $input=parseInt($input);
		    $(this).parent().find('.suliangsumu').val(++$input);
		    
		var $price = $(this).parent().parent().parent().find('.view-ItemEntryPrice').html();
			$price=parseInt($price)
			console.log($price)
			
		var $total=$(this).parent().parent().parent().find('.priceview');
	
		console.log($input)
		$total.html($price*$input+"元");
		
		
		var box=0; 
		$.each($('.item-entry'), function() {
		var price2=parseInt($(this).find('.priceview').html())
		box+=price2;
		$('.total2').html(box+"元")
		});
		
		
		 
	 })
	
        
		//删除列表
			var $deleBtn=$('.view-DelItemBtn')
			
		     $deleBtn.on('click',function(){
			
				var strCookie=$.cookie('goods');
				var ocookie=JSON.parse(strCookie)
				var title=$(this).parent().parent().find('.title').html();
				$.each(ocookie, function(index,obj) {
	
					if(this.title == title){
						//删除匹配的元素
						ocookie.splice(index,1)
					}
				});
				
			$(this).parent().parent().remove();
			
			var price1 = $(this).closest('.item-entry').find('.view-ItemEntryPrice').html();
			    price1 = parseInt(price1)
			var sum1 = $(this).closest('.item-entry').find('.suliangsumu').val();
                money -= sum1 * price1;
             
			$('.total2').html(money+'元')

			$.cookie("goods",JSON.stringify(ocookie),{expires:7 , path:"/"});
			
	   	})
		  
		  var $allChecked=$('#checked')
		  var $J_itemCheck=$('.cart-td-check .J_itemCheck')
		  
		  $allChecked.click(function(){
		  	
//		  	$J_itemCheck.prop('checked',this.checked);
		  	$.each($J_itemCheck, function() {
			    
			});
		
		  })
})

