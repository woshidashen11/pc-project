
$(function(){	
	
	  //首页点击注册，跳转注册页面
	    var $ActionBack2=$('.view-ActionBack2')
	        $ActionBack2.click(function(){
	    	window.location.href = 'login.html'
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
        
            //密码验证
        var $iiptp=$('.J_iptPasswdd')
        var $iptroup2=$('.ipt-group2')
           var bool=false;
           
             $iiptp.blur(function(){
        	
            var $str3=$('.J_iptPasswdd').val()
             istrue=/^\w{6,20}$/.test($str3)
        	 
        	 if(!istrue){
                bool=false;
        	}else{
                bool=true;
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
					
					// on 绑定事件  mousemove  .trag命名空间
					$(document).on("mousemove.trag",function(e){
						
						//left
					var left = e.pageX-ox-$singleNo.offset().left;
					var top = e.pageY-oy-$singleNo.offset().top;
					
						//一般情况下的left top
						
						//top 最小值  最大值
						//left 最小值 和最大值
					
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


                //注册判断
                var $iptbtn=$('.ipt-btn-area')
                
                  $iptbtn.click(function(){
                  var $str3=$('.J_iptPasswdd').val()
                  var str = $('.J_iptUsername').val();
                	if(bRrs&& rt && bool){
                	
					//校验成功
					var sCookie = $.cookie('user');
					//判断字符串是否为空
					if(sCookie=='' || sCookie==undefined){
						var obj = {type:false};
						window.location.href = 'register.html'
					}else{
						
						var aCookie = JSON.parse(sCookie); //acookie是arr
						var bRig = true  ; //用户未注册
						var Rig = false  ; //用户已注册，用户名与登录密码不匹配
						$.each(aCookie,function(){
						//、this// 遍历到的对象
							if(this.name==str && this.pws==$str3){
								bRig = false ;//登录成功
								Rig = true;
							}
							
							if(this.name==str && this.pws!=$str3){
								bRig = false ;//密码不正确
								Rig = false;
                               
							     }
						})
						
						if(bRig){
							alert('用户未注册');
							var obj = {type:false};
							setInterval(function(){
								window.location.href = 'register.html'
							},3000)
						    
						}else{
							if(Rig){
								var obj = {type:true,name:str}
								alert('登录成功');
								setInterval(function(){
								window.location.href = 'index.html'
							  },3000)
							}else{
								 $iptroup2.show()
                                $iptroup2.html('密码与用户名不匹配');
							}
							
						}
							
						}
						
						$.cookie('login',JSON.stringify(obj),{expires:7 , path:"/"});
	
               }
                })
}) 
