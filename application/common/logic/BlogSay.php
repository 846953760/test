<?php
namespace app\common\logic;
/**
 * 博客说说 逻辑操作层
 */
class BlogSay {
	public function addNewBlogSay($title,$content)
	{
		$res_say_id = model('common/BlogSay','model')->addNewBlogSay();
		if($res_say_id>0){
			$content_data['title'] = $title;
			$content_data['content'] = $content;
			$content_data['type'] = 0;
			$content_data['content_id'] = $res_say_id;
			$content_data['create_time'] = date('Y-m-d H:i:s');
			$content_data['update_time'] = date('Y-m-d H:i:s');
			$content_data['worker_id'] = V('workerInfo')['worker_id'];
			$res_content = model('common/BlogContent','model')->addNewContent($content_data);
			return $res_content;
		}else{
			return false;
		}
	}

	public function getBlogSayList()
	{
		$res_say_info = model('common/BlogSay')->getBlogSayList();
		return $res_say_info;
	}

	public function editSayShow($say_id)
	{
		$res_say_info = model('common/BlogSay','model')->getSayInfoBySayId($say_id);
		$res_show = ($res_say_info['is_show'] == 0) ? 1 : 0;
		if($res_say_info){
			$res_edit_say_show = model('common/BlogSay','model')->editSayShow($say_id,$res_show);
			if($res_edit_say_show){
				$res_update_content_time = model('common/BlogContent','model')->editContentTimeByContentIdAndType($say_id,0);
				if($res_update_content_time){
					return true;
				}else{
					return false;
				}
			}else{
				return false;
			}
		}else{
			return false;
		}
	}

	public function editBlogSay($say_id,$say_title,$say_content)
	{
		$res_say_info = model('common/BlogSay','model')->getSayInfoBySayId($say_id);
		if($res_say_info){
			$content_data['title'] = $say_title;
			$content_data['content'] = $say_content;
			$content_data['type'] = 0;
			$content_data['content_id'] = $res_say_info['say_id'];
			$content_data['update_time'] = date('Y-m-d H:i:s');
			$res_content = model('common/BlogContent','model')->editBlogContent($content_data);
			return $res_content;
		}else{
			return false;
		}
		
	}
}