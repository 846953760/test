set names utf8;

DROP TABLE IF EXISTS `admin_worker`;
CREATE TABLE `admin_worker` (
 `id6d` int(6) unsigned NOT NULL AUTO_INCREMENT COMMENT '后台管理员id',
 `account` varchar(20) NOT NULL COMMENT '账号',
 `password` varchar(50) NOT NULL COMMENT '密码',
 `name` varchar(20) NOT NULL COMMENT '用户名',
 `tel` varchar(20) DEFAULT NULL COMMENT '手机号',
 `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
 `is_main` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '主账号为1，其他是0',
 `del_flag` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0未删除，1已删除',
 PRIMARY KEY (`id6d`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='后台系统账号表';
LOCK TABLES `admin_worker` WRITE;
INSERT INTO admin_worker (id6d,account,password,name,tel,avatar,is_main,del_flag) VALUES (170907,'admin','f85dd9e50390d4e0c84a94b29','超级管理员','','',1,0);
UNLOCK TABLES;


DROP TABLE IF EXISTS `blog_worker`;
CREATE TABLE `blog_worker` (
 `worker_id` int(6) unsigned NOT NULL AUTO_INCREMENT COMMENT '博客用户id',
 `id6d` int(6) DEFAULT NULL COMMENT '对应后台系统的id6d',
 `account` varchar(20) NOT NULL COMMENT '博客登陆的账号',
 `password` varchar(50) NOT NULL COMMENT '博客登陆的密码',
 `name` varchar(20) NOT NULL COMMENT '用户名',
 `tel` varchar(20) DEFAULT NULL COMMENT '博客用户手机号',
 `avatar` varchar(255) DEFAULT NULL COMMENT '博客用户头像',
 `del_flag` int(1) NOT NULL DEFAULT '0' COMMENT '0未删除，1已删除',
 PRIMARY KEY (`worker_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客用户表';
LOCK TABLES `blog_worker` WRITE;
INSERT INTO blog_worker (worker_id,id6d,account,password,name,tel,avatar,del_flag) VALUES (170907,170907,'admin','f85dd9e50390d4e0c84a94b29','超级管理员','','',0);
UNLOCK TABLES;


DROP TABLE IF EXISTS `blog_about`;
CREATE TABLE `blog_about` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '关于我id',
 `title` varchar(255) NOT NULL COMMENT '关于我标题',
 `content` text NOT NULL COMMENT '关于我内容',
 `is_show` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0显示，1不显示',
 `create_time` datetime NOT NULL COMMENT '关于我创建的时间',
 `update_time` datetime NOT NULL COMMENT '更新时间',
 `del_flag` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0未删除，1已删除',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客关于';


DROP TABLE IF EXISTS `blog_leaving`;
CREATE TABLE `blog_leaving` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '留言id',
 `worker_id` int(6) unsigned NOT NULL COMMENT '留言人的id',
 `type` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0对应心得，1对应留言',
 `content_id` int(11) unsigned NOT NULL COMMENT '留言对于的内容id',
 `content` varchar(255) NOT NULL COMMENT '留言的内容',
 `create_time` datetime NOT NULL COMMENT '留言创建的时间',
 `del_flag` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0未删除，1已删除',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客留言表';


DROP TABLE IF EXISTS `blog_say`;
CREATE TABLE `blog_say` (
 `say_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '博客说说id',
 `is_show` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0显示，1不显示',
 `del_flag` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0未删除，1已删除',
 PRIMARY KEY (`say_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客说说表';


DROP TABLE IF EXISTS `blog_experience`;
CREATE TABLE `blog_experience` (
 `experience_id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '博客心得id',
 `key_word` varchar(255) NOT NULL COMMENT '博客心得关键词',
 `main_img` varchar(255) NOT NULL COMMENT '博客心得的主图',
 `introduce` varchar(255) NOT NULL COMMENT '博客心得的简介',
 `is_show` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0显示，1不显示',
 `is_recommend` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0推荐，1不推荐',
 `browse_num` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '博客浏览数',
 `reward_num` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '博客点赞数',
 `del_flag` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0未删除，1已删除',
 PRIMARY KEY (`experience_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客心得表';


DROP TABLE IF EXISTS `blog_content`;
CREATE TABLE `blog_content` (
 `id` int(11) unsigned NOT NULL AUTO_INCREMENT COMMENT '内容id',
 `title` varchar(255) NOT NULL COMMENT '内容标题',
 `content` text NOT NULL COMMENT '内容',
 `type` int(1) unsigned NOT NULL DEFAULT '0' COMMENT '0说说，1心得',
 `content_id` int(11) unsigned NOT NULL COMMENT '说说心得对应的id',
 `create_time` datetime NOT NULL COMMENT '创建的时间',
 `update_time` datetime NOT NULL COMMENT '更新的时间',
 `worker_id` int(6) unsigned NOT NULL COMMENT '创建人的id',
 PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='博客内容表';