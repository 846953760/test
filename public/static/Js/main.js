$(function(){
	function sendmessage(){}

	$('.project_list li').click(function(){
		$('.project_list li').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});

	$('.head_left .title').hover(function(){
		$(this).addClass('animated bounce');
	},function(){
		$(this).removeClass('animated bounce');
	});

	$('.head_middle li').hover(function(){
		$(this).find('img').addClass('animated wobble');
	},function(){
		$(this).find('img').removeClass('animated wobble');
	});

	$('.blog_left li').hover(function(){
		$(this).addClass('list-group-item-hover');
		$(this).find('span').addClass('list-group-item-span-hover');
		$(this).addClass('animated pulse');
	},function(){
		$(this).removeClass('list-group-item-hover');
		$(this).removeClass('animated pulse');
		$(this).find('span').removeClass('list-group-item-span-hover');
	});

	$('.head_right .name').hover(function(){
		$(this).parent().addClass('animated swing');
	},function(){
		$(this).parent().removeClass('animated swing');
	});

	$('.blog_left .carousel').click(function(){
		$('.blog_left .carousel_list').toggle();
	});

	function blogLiClick(that){
		$('.blog_left li span').each(function(){
			$(this).removeClass('list-group-item-span-active');
		});
		that.find('span').addClass('list-group-item-span-active');
	}

	$('.blog_left #blog_info').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/main/index';
	});

	$('.blog_left #blog_carousel').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_Carousel/index';
	});

	$('.blog_left #blog_recommend').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_Recommend/index';
	});

	$('.blog_left #blog_say').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_Say/index';
	});

	$('.blog_left #blog_experience').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_Experience/index';
	});

	$('.blog_left #blog_leaving').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_Leaving/index';
	});

	$('.blog_left #blog_about').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_About/index';
	});

	$('.blog_left #blog_recycle').click(function(){
		var that = $(this);
		blogLiClick(that);
		window.location = '/admin/Blog_Recycle/index';
	});

	$('.blog_say_content .blog_say_add').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_add_new_blog').toggle();
	});

	$('.blog_say_content .blog_add_new_blog .add_new_blog_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_say_content .blog_add_new_blog .add_new_blog_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_add_new_blog').toggle();
	});

	$('.blog_say_content .blog_add_new_blog .add_new_blog_bottom .btn-warning').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_add_new_blog').toggle();
	});
})