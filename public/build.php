<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------

return [
    // 生成应用公共文件
    '__file__' => ['common.php', 'config.php', 'database.php'],

    // 定义index模块的自动生成 （按照实际定义的文件名生成）
    'index'     => [
        '__file__'   => ['common.php'],
        '__dir__'    => ['controller', 'view'],
        'controller' => ['Index', 'Test', 'UserType'],
        'view'       => ['index/index'],
    ],
    // 其他更多的模块定义
    'business'     => [
        '__file__'   => ['common.php'],
        '__dir__'    => ['controller', 'view'],
        'controller' => ['Index', 'Test', 'UserType'],
        'view'       => ['index/index'],
    ],
    'admin'     => [
        '__file__'   => ['common.php'],
        '__dir__'    => ['controller', 'view'],
        'controller' => ['Index', 'Test', 'UserType'],
        'view'       => ['index/index'],
    ],
    'common'     => [
        '__file__'   => ['common.php'],
        '__dir__'    => ['logic', 'model'],
        'model'      => ['User', 'UserType'],
    ],
    'api'     => [
        '__file__'   => ['common.php'],
        '__dir__'    => ['controller', 'view'],
        'controller' => ['Index', 'Test', 'UserType'],
        'view'       => ['index/index'],
    ],
];
