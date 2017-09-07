<?php
namespace app\common\model;
use think\Model;
use think\Db;
use think\Paginator;

class Worker extends Model
{
	public function checkAccount($account)
	{
		$re=Db::connect("db_admin")->name("worker")->where(array('account'=>$account,'del_flag'=>0))->find();
		// $re = db('worker')->where(array('account'=>$account,'del_flag'=>0))->find();
		return $re;
	}

	public function loginByAccountAndPassword($account,$password)
	{
		$re = db('worker')->where(array('account'=>$account,'password'=>$password,'del_flag'=>0))->find();
		return $re;
	}

	public function loginById6d($id6d)
	{
		$re = db('worker')->where(array('id6d'=>$id6d,'del_flag'=>0))->find();
		return $re;
	}
}