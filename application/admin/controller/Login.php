<?php
namespace app\admin\controller;
use think\Controller;
use think\Session;

class Login extends Controller
{
    /**
     * 登录主页面
     * @param string $serverId
     */
    public function index()
    {
    	$css_version = config('static_version_config.CSS_VERSION');
    	$js_version = config('static_version_config.JS_VERSION');
        $account = cookie('account');
        $password = cookie('password');
    	$this->assign('css_version',$css_version);
    	$this->assign('js_version',$js_version);
        $this->assign('account',$account);
        $this->assign('password',$password);
    	return $this->fetch();
    }

    /**
     * 登录操作
     * @param account password
     * @return code -1:not post 0:success 1:account_abnormal 2:password_error  3:账号已登录
     */
    public function login()
    {
    	$request = request();
    	if($request->isPost()){
    		$account = $request->post('account','');
            $password = $request->post('password','');
            cookie('account',$account);
            cookie('password',$password);
            $passwd = $this->passwdMd5($password);
            $re = model('common/Worker','model')->checkAccount($account);
            if(!$re){
                $data = array('code'=>1,'msg'=>'账号不存在或者已被删除');
            }else{
                // $workerInfo = model('common/Worker','model')->loginByAccountAndPassword($account,$passwd);
                $workerInfo = model('common/Worker','model')->loginById6d($re['id6d']);
                if(!$workerInfo){
                    $data = array('code'=>2,'msg'=>'密码错误');
                }else{
                    $this->loginSuccess($workerInfo);
                }
            }
	    	return json_encode(array('code'=>0,'msg'=>$workerInfo));
    	}else{
    		$data = ['code'=>-1,'msg'=>'error'];
    		return json_encode($data);
    	}
    }

    /**
     * 密码加密
     * @param password
     * @return 加密后密码  
     */
    public function passwdMd5($password)
    {
        return substr(md5(config('person_config.PASSWD_PREFIX').$password.config('person_config.PASSWD_SUFFIX')), config('person_config.PASSWD_START'),config('person_config.PASSWD_LENGTH'));
    }

    /**
     * 登录成功跳转
     * @param string $serverId
     */
    private function loginSuccess($workerInfo)
    {
        $this->setSession($workerInfo);
    }
    
    /**
     * 设置session和全局变量
     * @param string $serverId
     */
    public function setSession($workerInfo)
    {
        Session::set('workerInfo',$workerInfo);
    }

    /**
     * 退出,清掉session和全局变量
     */
    public function logout()
    {
        $w_id = Session('workerInfo')['w_id'];
        $re = model('common/Worker','model')->setStatusByWid($w_id,1);
        $redis = new \Kf_redis\Kf_redis();
        $redis = $redis->Kf_redis();
        $redis->del('kqadmin_'.$w_id.'_status');
        return json_encode(array('code'=>0,'msg'=>'success'));
    }

    public function into()
    {
        $this->redirect('admin/Main/index');
    }

}