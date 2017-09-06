<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogLeaving extends Common
{
	public function index()
	{
		return $this->fetch();
	}
}