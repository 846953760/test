<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class Index extends Common
{
    public function index()
    {
    	echo "string";
    	$this->redirect('admin/Login/index');
    }
}
