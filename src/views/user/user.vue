<template>
	<div>
		<van-cell-group>
		  <van-field
			v-model="mobile"
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

				<van-button type="info" @click="login()">登录</van-button>

		</van-divider>
		
		<Bottom />
	</div>
</template>

<script>
	import Bottom from '@/components/Bottom.vue'
	import { userLogin } from '@/api/user'
	import { setToken } from '@/common/js/cache'
	import {ERR_OK}	from '@/common/js/config'
export default {
	data(){
		return{
			mobile : '',
			password:'',
		}
	},
	components: {
	  Bottom,
	},
	created() {

	},
	methods: {
		login(){
			let data = {
				mobile : this.mobile,
				password : this.password,
			}
			this.getToken(data)
		},
		async getToken(data)
		{
			let result = await userLogin(data)
			if(result.code == ERR_OK){
				let res = await setToken(result.data.token)
				
				this.$router.push({
                'path':'/'
            	})
			}
			console.log(result)
		},
	},
}
</script>

<style>
</style>
