$(function(){
	$('.project_list li').click(function(){
		$('.project_list li').each(function(){
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});

	$('.head .head_right .glyphicon-log-in').click(function(){
		var url = '/admin/Login/logout';
		var data = {}
		$.post(url,data,function(res){
			window.location = '/admin/Login/index';
		});
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
		$('.blog_say_content .blog_add_new_say').toggle();
		$('#say_title').next().val('');
		UE.getEditor('editor').setContent('请输入内容');
		UE.getEditor('editor').setHeight(300);
	});

	$('.blog_say_content .blog_add_new_say .add_new_blog_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_say_content .blog_add_new_say .add_new_blog_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_add_new_say').toggle();
	});

	$('.blog_say_content .blog_add_new_say .add_new_blog_bottom .btn-warning').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_add_new_say').toggle();
	});

	$('.blog_add_new_say .add_new_blog_bottom .btn-info').click(function(){
		var add_say_title = $('#say_title').next().val();
		var has_content = UE.getEditor('editor').hasContents();
		var add_say_content = UE.getEditor('editor').getContent();
		if(add_say_title.length>20 || add_say_title.replace(/(^\s*)|(\s*$)/g, "") == ''){
			alert('标题不能为空，且长度不能大于20字符');
		}
		if(!has_content){
			alert("请输入说说内容");
		}
		var url = '/admin/Blog_Say/addSay';
		var data = {
			say_title: add_say_title,
			say_content: add_say_content
		}
		$.post(url,data,function(res){
			if(res.code == 0){
				alert('添加说说成功');
				$('.bg').toggle();
				$('.blog_say_content .blog_add_new_say').toggle();
				window.location = '/admin/Blog_Say/index';
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_say_content .pagination div').hover(function(){
		$(this).addClass('animated pulse');
	},function(){
		$(this).removeClass('animated pulse');
	});

	$('.blog_say_content .list_say_is_show div').hover(function(){
		$(this).addClass('animated pulse');
	},function(){
		$(this).removeClass('animated pulse');
	});

	$('.blog_say_content .list_say_is_show div span').click(function(){
		var say_id = $(this).parent().parent().parent().attr('data-say-id');
		var url = '/admin/Blog_Say/editSayShow';
		var data = {
			say_id: say_id
		}
		var that = $(this);
		$.post(url,data,function(res){
			if(res.code == 0){
				if(that.hasClass('glyphicon-ok')){
					that.attr('class','glyphicon glyphicon-remove');
					that.attr('title','不显示');
					that.parent().parent().attr('data-is-show',1);
				}else{
					that.attr('class','glyphicon glyphicon-ok');
					that.attr('title','显示中');
					that.parent().parent().attr('data-is-show',0);
				}
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_say_content .blog_say_content_list .list_say_handle .btn-danger').click(function(){
		var say_id = $(this).parent().parent().attr('data-say-id');
		$('.blog_say_content .blog_del_say .btn-warning').attr('data-say-id',say_id);
		$('.bg').toggle();
		$('.blog_say_content .blog_del_say').toggle();
	});

	$('.blog_say_content .blog_del_say .blog_del_say_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_say_content .blog_del_say .blog_del_say_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_del_say').toggle();
	});

	$('.blog_say_content .blog_del_say .btn-primary').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_del_say').toggle();
	});

	$('.blog_say_content .blog_del_say .btn-warning').click(function(){
		var say_id = $(this).attr('data-say-id');
		var url = '/admin/Blog_Say/delSay';
		var data = {
			say_id: say_id
		}
		var that = $(this);
		$.post(url,data,function(res){
			if(res.code == 0){
				$('.bg').toggle();
				$('.blog_say_content .blog_del_say').toggle();
				window.location = '/admin/Blog_Say/index';
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_say_content .blog_say_content_list .list_say_handle .btn-success').click(function(){
		var say_id = $(this).parent().parent().attr('data-say-id');
		$('.bg').toggle();
		$('.blog_say_content .blog_say_info').toggle();
		var ue = UE.getEditor('editor_info');
		UE.getEditor('editor_info').setDisabled('fullscreen');
		var url = '/admin/Blog_Say/getSayInfo';
		$.post(url,{say_id:say_id},function(res){
			if(res.code == 0){
				$('.blog_say_content .blog_say_info input').val(res.data.title);
				UE.getEditor('editor_info').setContent(res.data.content);
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_say_content .blog_say_info .blog_info_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_say_content .blog_say_info .blog_info_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_say_info').toggle();
	});

	$('.blog_say_content .blog_say_content_list .list_say_handle .btn-info').click(function(){
		var say_id = $(this).parent().parent().attr('data-say-id');
		$('.bg').toggle();
		$('.blog_say_content .blog_edit_say').toggle();
		$('.blog_say_content .blog_edit_say .blog_say_edit_bottom .btn-info').attr('data-say-id',say_id);
		var ue = UE.getEditor('editor_blog_say_edit');
		var url = '/admin/Blog_Say/getSayInfo';
		$.post(url,{say_id:say_id},function(res){
			if(res.code == 0){
				$('.blog_say_content .blog_say_edit_content input').val(res.data.title);
				UE.getEditor('editor_blog_say_edit').setContent(res.data.content);
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_say_content .blog_edit_say .blog_eidt_say_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_say_content .blog_edit_say .blog_eidt_say_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_edit_say').toggle();
	});

	$('.blog_say_content .blog_edit_say .blog_say_edit_bottom .btn-warning').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_edit_say').toggle();
	});

	$('.blog_edit_say .blog_say_edit_bottom .btn-info').click(function(){
		var say_id = $(this).attr('data-say-id');
		var blog_edit_say_title = $('#blog_edit_say_title').next().val();
		var has_content = UE.getEditor('editor_blog_say_edit').hasContents();
		var editor_blog_say_edit = UE.getEditor('editor_blog_say_edit').getContent();
		if(blog_edit_say_title.length>20 || blog_edit_say_title.replace(/(^\s*)|(\s*$)/g, "") == ''){
			alert('标题不能为空，且长度不能大于20字符');
		}
		if(!has_content){
			alert("请输入说说内容");
		}
		var url = '/admin/Blog_Say/editSay';
		var data = {
			say_id: say_id,
			say_title: blog_edit_say_title,
			say_content: editor_blog_say_edit
		}
		$.post(url,data,function(res){
			if(res.code == 0){
				alert('修改说说成功');
				$('.bg').toggle();
				$('.blog_say_content .blog_edit_say').toggle();
				window.location = '/admin/Blog_Say/index';
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_say_content .blog_say_content_list thead .check').hover(function(){
		$(this).parent().addClass('animated pulse');
	},function(){
		$(this).parent().removeClass('animated pulse');
	});

	$('.blog_say_content .blog_say_content_list thead .check').click(function(){
		if($(this).hasClass('glyphicon-ok')){
			$(this).removeClass('glyphicon-ok');
			$('.blog_say_content .blog_say_content_list tbody .check').each(function(){
				$(this).removeClass('glyphicon-ok');
			});
		}else{
			$(this).addClass('glyphicon-ok');
			$('.blog_say_content .blog_say_content_list tbody .check').each(function(){
				if(!$(this).hasClass('glyphicon-ok')){
					$(this).addClass('glyphicon-ok');
				}
			});
		}
	});

	$('.blog_say_content .blog_say_content_list tbody .check').hover(function(){
		$(this).parent().addClass('pulse');
		$(this).parent().removeClass('bounceIn');
	},function(){
		$(this).parent().removeClass('pulse');
		$(this).parent().addClass('bounceIn');
	});

	$('.blog_say_content .blog_say_content_list tbody .check').click(function(){
		var tr_num = $('.blog_say_content .blog_say_content_list tbody tr').length;
		if($(this).hasClass('glyphicon-ok')){
			$(this).removeClass('glyphicon-ok');
			$('.blog_say_content .blog_say_content_list thead .check').removeClass('glyphicon-ok');
		}else{
			$(this).addClass('glyphicon-ok');
			var checked_num = $('.blog_say_content .blog_say_content_list tbody .list_num .glyphicon-ok').length;
			if(checked_num == tr_num){
				$('.blog_say_content .blog_say_content_list thead .check').addClass('glyphicon-ok');
			}
		}
	});

	$('.blog_say_content .blog_say_del').click(function(){
		var blog_say_bitch_del_check = new Array();
		$('.blog_say_content .blog_say_content_list tbody .check').each(function(){
			if($(this).hasClass('glyphicon-ok')){
				blog_say_bitch_del_check.push($(this).parent().parent().attr('data-say-id'));
			}
		});
		if(blog_say_bitch_del_check.length <= 0){
			alert('请先勾选要删除的序号');
		}else{
			$('.blog_say_content .blog_batch_del_say .blog_batch_del_say_buttom .btn-warning').attr('data-say-id',blog_say_bitch_del_check);
			$('.bg').toggle();
			$('.blog_say_content .blog_batch_del_say').toggle();
		}
	});

	$('.blog_say_content .blog_batch_del_say .blog_batch_del_say_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_say_content .blog_batch_del_say .blog_batch_del_say_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_batch_del_say').toggle();
	});

	$('.blog_say_content .blog_batch_del_say_buttom .btn-primary').click(function(){
		$('.bg').toggle();
		$('.blog_say_content .blog_batch_del_say').toggle();
	});

	$('.blog_say_content .blog_batch_del_say_buttom .btn-warning').click(function(){
		var say_id = $(this).attr('data-say-id');
		var url = '/admin/Blog_Say/batchDelSay';
		var data = {
			say_id: say_id
		}
		$.post(url,data,function(res){
			if(res.code == 0){
				alert('删除说说成功');
				$('.bg').toggle();
				$('.blog_say_content .blog_batch_del_say').toggle();
				window.location = '/admin/Blog_Say/index';
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_about_content .blog_about_content_page .btn-primary').click(function(){
		UE.getEditor('editor_about').setEnabled();
		$(this).css('display','none');
		$('.blog_about_content .blog_about_content_page .btn-success').css('display','inline-block');
		$('.blog_about_content .blog_about_content_page .btn-warning').css('display','inline-block');
	});

	$('.blog_about_content .blog_about_content_page .btn-warning').click(function(){
		ue.setDisabled('fullscreen');
		$(this).css('display','none');
		$('.blog_about_content .blog_about_content_page .btn-primary').css('display','inline-block');
		$('.blog_about_content .blog_about_content_page .btn-success').css('display','none');
	});

	$('.blog_about_content .blog_about_content_page .btn-success').click(function(){
		var url = '/admin/Blog_About/editAbout';
		var has_content = UE.getEditor('editor_about').hasContents();
		var edit_about_content = UE.getEditor('editor_about').getContent();
		if(!has_content){
			alert("请输入内容");
		}
		var data = {
			about_content: edit_about_content
		}
		$.post(url,data,function(res){
			if(res.code == 0){
				alert('修改关于成功');
				$('.bg').toggle();
				window.location = '/admin/Blog_About/index';
			}else{
				alert(res.msg);
			}
		});
	});

	$('.blog_experience_content .blog_experience_add').click(function(){
		$('.bg').toggle();
		$('.blog_experience_content .blog_add_new_experience').toggle();
		$('#experience_title').next().val('');
		UE.getEditor('editor_experience').setContent('请输入内容');
		UE.getEditor('editor_experience').setHeight(300);
	});

	$('.blog_experience_content .blog_add_new_experience .add_new_blog_head_off').hover(function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_black.png');
	},function(){
		$(this).find('img').attr('src','/static/Image/admin/person/off_glay.png');
	});

	$('.blog_experience_content .blog_add_new_experience .add_new_blog_head_off').click(function(){
		$('.bg').toggle();
		$('.blog_experience_content .blog_add_new_experience').toggle();
	});

	$('.blog_experience_content .blog_add_new_experience .add_new_blog_bottom .btn-warning').click(function(){
		$('.bg').toggle();
		$('.blog_experience_content .blog_add_new_experience').toggle();
	});
})