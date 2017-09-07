<?php
namespace app\common\model;
use think\Model;
use think\Db;
use think\Paginator;

class BlogSay extends Model
{
	public function addNewBlogSay()
	{
		// $re=Db::connect("db_admin")->name("worker")->where(array('account'=>$account,'del_flag'=>0))->find();
		$re = db('say')->insertGetId(array('is_show'=>0));
		return $re;
	}

	public function getBlogSayList()
	{
		$res_say_info = db('say')->alias('s')->join('blog_content c','s.say_id = c.content_id')->join('blog_worker w','c.worker_id = w.worker_id')->where(array('s.del_flag'=>0,'c.type'=>0))->order('update_time desc')->paginate(10);
		return $res_say_info;
	}

	public function getSayInfoBySayId($say_id)
	{
		$res_say_info = db('say')->alias('s')->join('blog_content c','s.say_id = c.content_id')->join('blog_worker w','c.worker_id = w.worker_id')->where(array('s.del_flag'=>0,'c.type'=>0,'s.say_id'=>$say_id))->order('update_time desc')->find();
		return $res_say_info;
	}

	public function editSayShow($say_id,$res_show)
	{
		$res = db('say')->where(array('say_id'=>$say_id,'del_flag'=>0))->update(array('is_show'=>$res_show));
		return $res;
	}
}