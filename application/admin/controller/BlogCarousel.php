<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogCarousel extends Common
{
	public function index()
	{
		return $this->fetch();
	}
}