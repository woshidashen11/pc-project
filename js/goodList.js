$(function(){
				$.ajax({
					type:"get",
					url:"../good.json",
					success:function(res){
						updateGoods(res.data);
					}
				})
				//刷新界面 
				var num=0;
		        function updateGoods(data){
				$.each(data,function(){
					var $li = $('<li class="view-ItemListItem last"></li>');
					var $a = $('<a href='+this.href+'></a>');
					var $span=$('<span class="price-info "><span>')
					$li.append($a);
					$('<img src='+ this.img+'/>').appendTo($a)
					$a.append($span)
					$('<div class="title">'+this.title+'</div>').appendTo($a)
					$('<span class="symbol">'+this.symbol+'</span>').appendTo($span);
					$('<span class="priceint1">'+this["priceint1"]+'</span>').appendTo($span);
					$('<span class="price-decimal">'+this["price-decimal"]+'</span>').appendTo($span);
					$('<span class="origin-price">'+this["origin-price"]+'</span>').appendTo($span);
					$('<span class="discount">'+this.discount+'</span>').appendTo($span);
					$li.appendTo($('.xxq ul'))
				})
		    }
       
                 $(window).scroll(function(){
			      	   var current=$(window).scrollTop();
			      	   var winHeight=$(window).height();
			      	   var docHeight=$(document).height();
			      	 if(current+winHeight>docHeight-100&&num<5){
			      	 	
			      	 	$.ajax({
							 	type:'get',
							 	url:'../good.json',
							 	success:function(res){
							 	 num++;
				            	updateGoods(res.data)
				            	$('.xxq').css({
				            		"height":"+=350px"
				            	})
				 	
				     	}
				      })
			      	 }
			      })
            
})