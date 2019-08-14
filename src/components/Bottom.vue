<template>
	<div>
		<van-tabbar v-model="active">
		  <van-tabbar-item name="home" icon="home-o">首页</van-tabbar-item>
		  <van-tabbar-item name="search" icon="search">文章</van-tabbar-item>
		  <van-tabbar-item name="friends" icon="friends-o">朋友圈</van-tabbar-item>
		  <van-tabbar-item name="setting" icon="setting-o">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				active:'',
			}
		}
	}
</script>

<style>
</style>
