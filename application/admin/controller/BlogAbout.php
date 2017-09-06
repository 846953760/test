<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogAbout extends Common
{
	public function index()
	{
		return $this->fetch();
	}
}