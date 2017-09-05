$(function(){
	$('.project_list li').click(function(){
		$('.project_list li').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});

	$('.blog_left .list-group-item').hover(function(){
		$(this).addClass('list-group-item-hover');
		$(this).css('color','#3c763d');
	},function(){
		$(this).removeClass('list-group-item-hover');
		if(!$(this).hasClass('list-group-item-active')){
			$(this).css('color','#fff');
		}else{
			$(this).css('color','#53c3ff');
		}
	});

	$('.blog_left .carousel').click(function(){
		$('.blog_left .carousel_list').toggle();
	});
})