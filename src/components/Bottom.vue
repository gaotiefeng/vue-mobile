<template>
	<div>
		<van-tabbar v-model="active">
		  <van-tabbar-item name="home" icon="home-o" to="/">首页</van-tabbar-item>
		  <van-tabbar-item name="search" icon="search" to="/article/list">文章</van-tabbar-item>
		  <van-tabbar-item name="friends" icon="friends-o" to="/article/list">通讯录</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="setting-o" to="/user">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
 export default{
 data() {
 return {
 active: '',
 };
 },
 };
</script>

<style>
</style>
