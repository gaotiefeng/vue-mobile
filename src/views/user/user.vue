<template>
	<div>
		<van-cell-group>
		  <van-field
			v-model="username"
			label="用户名"
			placeholder="请输入用户名"
		  />
		  <van-field
			v-model="phone"
			label="手机号"
			placeholder="请输入手机号"
		  />
		  <van-field
		  			v-model="password"
		  			label="密码"
		  			placeholder="请输入密码"
		  />
		</van-cell-group>
		
		<van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
				<van-button type="info">登录</van-button>
		</van-divider>
		
		<Bottom />
	</div>
</template>

<script>
	import Bottom from '@/components/Bottom.vue'
	import { userLogin } from '@/api/user'
export default {
	data(){
		return{
			username : '',
			phone : '',
			password:'',
		}
	},
	components: {
	  Bottom,
	},
	methods: {
		async getUsers()
		{
			let result = await userLogin();
			console.log(result);
			console.log(111);
		}
	}
}
</script>

<style>
</style>
