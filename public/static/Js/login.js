$(function(){
	$('#submit').hover(
		function(){
			if($(this).attr('class') == 'login_after'){
				$('#submit').css('background-image',"url('/static/Image/admin/person/login_hover.png')");
			}
		},
		function(){
			if($(this).attr('class') == 'login_after'){
				$('#submit').css('background-image',"url('/static/Image/admin/person/login_original.png')");
			}
		}
	);

	$('#submit').mousedown(function(){
		if($(this).attr('class') == 'login_after'){
			$('#submit').css('background-image',"url('/static/Image/admin/person/login_active.png')");
		}
	});

	$('#account').change(function(){
		$('.account_null').hide();
		$('.account_error').hide();
		$('#account').css('border','1px #fff solid');
	});

	$('#password').change(function(){
		$('.password_null').hide();
		$('.password_error').hide();
		$('#password').css('border','1px #fff solid');
	});

	$('#submit').on('click',function(){
		var account = $('#account').val();
		var password = $('#password').val();
		if($(this).attr('class') != 'login_after'){
			return false;
		}
		if(!account){
			$('.account_null').show();
			$('#account').css('border','1px red solid');
			return;
		}
		if(!password){
			$('.password_null').show();
			$('#password').css('border','1px red solid');
			return;
		}
		var data = {
			account: account,
			password: password
		}
		var url = '/admin/login/login';
		$.ajax({
			type: "POST",
	        crossDomain: true,
	        url: url,
	        data: data,
	        dataType: "json",
	        xhrFields: {withCredentials: true},
	        success: function(msg) {
	            if(msg.code == 1){
	            	$('.account_error').show();
	            	$('#account').css('border','1px red solid');
	            }else if(msg.code == 2){
	            	$('.password_error').show();
	            	$('#password').css('border','1px red solid');
	            }else if(msg.code == 0){
	            	console.log('登录成功');
	            	window.location = 'into';
	            }
	        },
	        error: function(msg) {
	            console.log('系统错误');
	        }
		})
	});
});