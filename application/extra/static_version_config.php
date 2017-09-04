<?php
//配置文件
return [
	/******为了保证更新CSS或者JS文件后 不会使用缓存在浏览器上的CSS和JS文件*******/
	'JS_VERSION'=>time(),
	'CSS_VERSION'=>time()
];