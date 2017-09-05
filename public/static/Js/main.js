$(function(){
	$('.project_list li').click(function(){
		$('.project_list li').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});

	$('.list-group-item').hover(function(){
		$(this).addClass('list-group-item-hover');
		$(this).css('color','#3c763d');
	},function(){
		$(this).removeClass('list-group-item-hover');
		if(!$(this).hasClass('list-group-item-active')){
			$(this).css('color','#fff');
		}else{
			$(this).css('color','#778dff');
		}
	});

	$('.carousel').click(function(){
		$('.carousel_list').toggle();
	});
})