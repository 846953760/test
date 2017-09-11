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

	public function delSay()
	{
		$request = request();
		if($request->isPost()){
			$say_id = $request->post('say_id','');
			if($say_id == ''){
				$data = ['code'=>1,'msg'=>'删除说说失败，请联系管理员'];
    			return $data;
			}
			$res_del = model('common/BlogSay','model')->delSayBySayId($say_id);
			if($res_del){
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

	public function getSayInfo()
	{
		$request = request();
		if($request->isPost()){
			$say_id = $request->post('say_id','');
			if($say_id == ''){
				$data = ['code'=>1,'msg'=>'获取说说详情失败，请联系管理员'];
    			return $data;
			}
			$res_info = model('common/BlogSay','model')->getSayInfoBySayId($say_id);
			if($res_info){
				$data = ['code'=>0,'msg'=>$say_id,'data'=>$res_info];
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

	public function editSay()
	{
		$request = request();
		if($request->isPost()){
			$say_id = $request->post('say_id','');
			$say_title = $request->post('say_title','');
			$say_content = $request->post('say_content','');
			if($say_id == ''){
				$data = ['code'=>1,'msg'=>'获取说说详情失败，请联系管理员'];
    			return $data;
			}
			if($say_title == ''){
				$data = ['code'=>1,'msg'=>'说说标题不能为空'];
    			return $data;
			}
			if($say_content == ''){
				$data = ['code'=>2,'msg'=>'说说内容不能为空'];
    			return $data;
			}
			$res_say = model('common/BlogSay','logic')->editBlogSay($say_id,$say_title,$say_content);
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

	public function batchDelSay()
	{
		$request = request();
		if($request->isPost()){
			$say_id = $request->post('say_id','');
			if($say_id == ''){
				$data = ['code'=>1,'msg'=>'删除说说失败，请联系管理员'];
    			return $data;
			}
			$say_id = explode(",", $say_id);
			$res_del = model('common/BlogSay','model')->batchDelSayBySayId($say_id);
			if($res_del){
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