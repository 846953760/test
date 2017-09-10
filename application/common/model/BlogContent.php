<?php
namespace app\common\model;
use think\Model;
use think\Db;
use think\Paginator;

class BlogContent extends Model
{
	public function addNewContent($data)
	{
		// $re=Db::connect("db_admin")->name("worker")->where(array('account'=>$account,'del_flag'=>0))->find();
		$re = db('content')->insert($data);
		return $re;
	}

	public function editContentTimeByContentIdAndType($content_id,$type)
	{
		$re = db('content')->where(array('content_id'=>$content_id,'type'=>$type))->update(array('update_time'=>date('Y-m-d H:i:s')));
		return $re;
	}

	public function editBlogContent($data)
	{
		$re = db('content')->where(array('content_id'=>$data['content_id'],'type'=>$data['type']))->update($data);
		return $re;
	}
}