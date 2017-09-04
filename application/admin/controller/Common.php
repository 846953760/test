<?php
namespace app\admin\controller;
use think\Controller;
use think\Session;

class Common extends Controller
{
	public function _initialize()
	{
		if(!session('workerInfo')){
			$this->redirect('admin/Login/index');
		}else{
			echo "11";
		}
	}

	public function index()
	{
		return $this->fetch();
	}

}