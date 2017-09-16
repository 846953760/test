<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogAbout extends Common
{
	public function index()
	{
		$about_info = model('common/BlogAbout','model')->getAboutInfo();
		$this->assign('about_content', $about_info['content']);
		$this->assign('about_about', $about_info);
		return $this->fetch();
	}

	public function editAbout()
	{
		$request = request();
		if($request->isPost()){
			$about_content = $request->post('about_content','');
			if($about_content == ''){
				$data = ['code'=>1,'msg'=>'修改关于失败，请联系管理员'];
    			return $data;
			}
			$res_show = model('common/BlogAbout','model')->editAbout($about_content);
			if($res_show){
				$data = ['code'=>0,'msg'=>'success'];
    			return $data;
			}else{
				$data = ['code'=>2,'msg'=>'修改关于失败，请联系管理员'];
    			return $data;
			}
		}else{
			$data = ['code'=>-1,'msg'=>'error'];
    		return $data;
		}
	}
}