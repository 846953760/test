<?php
namespace app\admin\controller;
use app\admin\controller\Common;

class BlogExperience extends Common
{
	public function index()
	{
		return $this->fetch();
	}
}