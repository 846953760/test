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
			$workerInfo = Session::get('workerInfo');
			V('workerInfo',$workerInfo);
			$css_version = config('static_version_config.CSS_VERSION');
	    	$js_version = config('static_version_config.JS_VERSION');
	    	$this->assign('name',$workerInfo['name']);
	    	$this->assign('css_version',$css_version);
	    	$this->assign('js_version',$js_version);
		}
	}

	public function index()
	{
		return $this->fetch();
	}

}