<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogSay extends Common
{
	public function index()
	{
		$say_info = model('common/BlogSay','logic')->getBlogSayList();
		$page = $say_info->render();
        $this->assign('page',$page);
        $this->assign('say_info', $say_info);
		return $this->fetch();
	}

	public function addSay()
	{
		$request = request();
		if($request->isPost()){
			$say_title = $request->post('say_title','');
			$say_content = $request->post('say_content','');
			if($say_title == ''){
				$data = ['code'=>1,'msg'=>'说说标题不能为空'];
    			return $data;
			}
			if($say_content == ''){
				$data = ['code'=>2,'msg'=>'说说内容不能为空'];
    			return $data;
			}
			$res_say = model('common/BlogSay','logic')->addNewBlogSay($say_title,$say_content);
			if($res_say){
				$data = ['code'=>0,'msg'=>'success'];
    			return $data;
			}else{
				$data = ['code'=>3,'msg'=>'添加说说失败，请联系管理员'];
    			return $data;
			}
		}else{
			$data = ['code'=>-1,'msg'=>'error'];
    		return $data;
		}
	}

	public function editSayShow()
	{
		$request = request();
		if($request->isPost()){
			$say_id = $request->post('say_id','');
			if($say_id == ''){
				$data = ['code'=>1,'msg'=>'修改说说状态失败，请联系管理员'];
    			return $data;
			}
			$res_show = model('common/BlogSay','logic')->editSayShow($say_id);
			if($res_show){
				$data = ['code'=>0,'msg'=>'success'];
    			return $data;
			}else{
				$data = ['code'=>2,'msg'=>'修改说说状态失败，请联系管理员'];
    			return $data;
			}
		}else{
			$data = ['code'=>-1,'msg'=>'error'];
    		return $data;
		}
	}
}