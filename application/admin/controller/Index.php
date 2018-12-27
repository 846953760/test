<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class Index extends Common
{
    public function index()
    {
    	$this->redirect('admin/Login/index');
    }
}
