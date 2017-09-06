<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogRecycle extends Common
{
	public function index()
	{
		return $this->fetch();
	}
}