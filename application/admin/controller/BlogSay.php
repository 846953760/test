<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogSay extends Common
{
	public function index()
	{
		return $this->fetch();
	}
}