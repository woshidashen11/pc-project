
$(function(){	
	
	 //首页点击注册，跳转注册页面
	    var $ActionBack1=$('.view-ActionBack1')
	    $ActionBack1.click(function(){
	    	window.location.href = 'register.html'
	    })
	    
	  
	  
//	手机号验证
	var $Username = $('.J_iptUsername')
	    var bRrs = false;
    
        $Username.blur(function() {

	    var str = $('.J_iptUsername').val();
       
         var reg1 = /\w+@[a-zA-Z0-9]+\.[a-zA-Z]+/;
         var reg2 = /^1[35678]\d{9}$/;
		 var aa1 = reg1.test(str);
		 var aa2 = reg2.test(str);
       
		if(aa1 == false && aa2 == false) {
			$('.ipt-group1').show()
			$('.ipt-group1').html('手机号码或者邮箱错误：' + str);
			bRrs = false;
		} else {
			$('.ipt-group1').show()
			$('.ipt-group1').html('用户名正确：'+str);
			bRrs = true;
		}

         })
   
      //验证码验证
          var $singleNo = $("#J_singleNo");//大盒子
          var $ln=$('.ln')//滑动的小盒子
       	  var $singleNotice=$(".J_singleNotice")
       	  var $J_singleNot=$('#J_singleNot')
       	  var rt=false
                $ln.on("mousedown.trag",function(e){
					var ox = e.offsetX;
					var oy = e.offsetY;
					
					$(document).on("mousemove.trag",function(e){
						
						//left
					var left = e.pageX-ox-$singleNo.offset().left;
					var top = e.pageY-oy-$singleNo.offset().top;
					
						if(left<=0){
							left=0;
						}
						
						if(top<=0){
							top=0;
						}
						
						//left
						if(left>=$singleNo.outerWidth()-$ln.outerWidth()){
							left = $singleNo.outerWidth()-$ln.outerWidth();
							$singleNotice.html('恭喜您.验证通过!')
							$singleNo.css({background:'green'})
							rt=true;
						}
						//top
						if(top>=$singleNo.outerHeight()-$ln.outerHeight()){
							top =$singleNo.outerHeight()-$ln.outerHeight();
						}
						
						$ln.css({
							left:left
						})
						
						$(document).mouseup(function(){
							$(document).off('mousemove.trag');
							//不能移除$('#box2') mousedow
						//	$('#box2').off('mousedown.trag');
						})
					})
				})


  //短信校验码

	   var $iptPhonecode=$('.ipt-input-phonecode')
	   var $iptgroup2=$('.ipt-group2')
	   var Rrs=false;
	   
	         $iptPhonecode.blur(function(){
	  	     
	  	    if($iptPhonecode.val()=='8888'||$iptPhonecode.val()=='6666'){
	  	    	  Rrs=true;
	  	    }else{
	  	    	Rrs=false;
	  	    }
  	          
  	         if(Rrs) {
					$iptgroup2.show()
					$iptgroup2.html('短信验证码正确：'+ $iptPhonecode.val());
				} else {
					$iptgroup2.show()
					$iptgroup2.html('短信验证码错误：'+ $iptPhonecode.val());
				} 
  	          
          })
	        	
	    //密码验证
	            var $iiptp=$('.J_iptPasswdd')
	            var $iptroup3=$('.ipt-group3')
	               var bool=false;
	               
	                 $iiptp.blur(function(){
	            	
	                var $str3=$('.J_iptPasswdd').val()
	            	
	                 istrue=/^\w{6,20}$/.test($str3)	
	              
	            	if(!istrue){
	            		$iptroup3.show()
		                $iptroup3.html('密码格式错误：' + $str3);
		                bool=false;
	            	}else{
	            		$iptroup3.show()
		                $iptroup3.html('密码可用：' + $str3);
		                bool=true;
	            	}
	            	
	            })

                //注册判断
                var $iptbtn=$('.ipt-btn-area')
                
                  $iptbtn.click(function(){
                 
                	if(bRrs&& rt && Rrs && bool){
                		alert('恭喜您，注册成功！')
                		 //储存到cookie
                
                	var $Username = $('.J_iptUsername').val();
                	var $psw=$('.J_iptPasswdd').val()
					
						//新用户
				   var  newUser = {"name":$Username,"pws":$psw};

						var sCookie = $.cookie('user');
						
						if(sCookie==undefined  || sCookie==""){
						
							var aCookie = [];
							aCookie.push(newUser);
							
						}else{
							
							var aCookie = JSON.parse(sCookie);
							
							var  bReg  = false //用户没有被注册
							
							$.each(aCookie,function(){
								if(this.name==$Username){
									bReg = true;
								}
							})
							
							if(bReg){
								$('.ipt-group1').show()
		                        $('.ipt-group1').html('您输入的用户名已经被注册：' + str);
							}else{
								aCookie.push(newUser);
							}
						}
					
					//修改cookie
					$.cookie('user',JSON.stringify(aCookie),{expires:7 , path:"/"});
					
				           window.location.href = 'login.html'
                	}
                	
                })
                
                
               
			
}) 
