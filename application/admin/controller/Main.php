<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class Main extends Common
{
	public function index()
	{
		// $request = request();
  //       $status = $request->get('status','1-2-3-4');
  //       $status = explode('-', $status);
  //       $key = $request->get('key','');
  //       $val = $request->get('val','');

		// $now_time = date('Y-m-d');
		// $re = model('common/Bespeak','model')->setOverDue($now_time);
		// $bespeak_list = model('common/Bespeak','model')->getBespeakInfo($status,$key,$val);
		// $page = $bespeak_list->render();

  //       $this->assign('page',$page);
  //       $this->assign('bespeak_list', $bespeak_list);
  //       $this->assign('status',$status);
  //       $this->assign('search_key',$key);
  //       $this->assign('search_val',$val);
		return $this->fetch();
	}
}