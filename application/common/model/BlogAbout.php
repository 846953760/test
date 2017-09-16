<?php
namespace app\common\model;
use think\Model;
use think\Db;
use think\Paginator;

class BlogAbout extends Model
{
	public function getAboutInfo()
	{
		// $re=Db::connect("db_admin")->name("worker")->where(array('account'=>$account,'del_flag'=>0))->find();
		$re = db('about')->find();
		return $re;
	}

	public function editAbout($about_content)
	{
		$re = db('about')->where(array('del_flag'=>0))->update(array('content'=>$about_content));
		return $re;
	}
}