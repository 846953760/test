<?php
namespace app\common\model;
use think\Model;
// use think\Db;
use think\Paginator;

class Worker extends Model
{
	public function checkAccount($account)
	{
		// $re1=Db::connect("db_business")->name("user")->select();
		$re = db('worker')->where(array('account'=>$account,'del_flag'=>0))->find();
		return $re;
	}

	public function loginByAccountAndPassword($account,$password)
	{
		$re = db('worker')->where(array('account'=>$account,'password'=>$password,'del_flag'=>0))->find();
		return $re;
	}
}