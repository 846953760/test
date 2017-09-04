<?php
//配置文件
return [
	/******密码加密*******/
	'PASSWD_PREFIX'=>'@#$!',	//工号密码md5时的前缀混淆码
	'PASSWD_SUFFIX'=>'*)_(*{',	//工号密码md5时的后缀混淆码
	'PASSWD_START'=>3,			//工号密码md5时截取的开始位置
	'PASSWD_LENGTH'=>25,		//工号密码md5时截取的长度
];