/*
Navicat MySQL Data Transfer

Source Server         : 192.168.41.99
Source Server Version : 50723
Source Host           : 192.168.41.99:3306
Source Database       : gin

Target Server Type    : MYSQL
Target Server Version : 50723
File Encoding         : 65001

Date: 2019-08-26 14:36:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `mobile` varchar(11) NOT NULL DEFAULT '' COMMENT '手机号',
  `password` varchar(64) NOT NULL DEFAULT '' COMMENT '密码',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mobile` (`mobile`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '15904435047', '$2y$11$9jPoidnqNmMc01GBN6SnsOSKxrQHIbadHBh7Lb01wRc44.gnqENHq', '2019-08-22 05:37:56', '2019-08-22 05:37:56');
