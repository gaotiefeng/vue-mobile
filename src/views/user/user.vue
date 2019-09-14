<template>
	<div class="login">
		
		<div class="first"></div>
		<h3 class="h3">登录</h3>
		<van-cell-group>
		  <van-field
			v-model="mobile"
			label="手机号:"
			placeholder="请输入手机号"
		  />
		  <van-field
			v-model="password"
			label="密码:"
			placeholder="请输入密码"
		  />
		</van-cell-group>
		
		

		<van-button type="info" size="large" @click="login()" style="margin:30px;">登录</van-button>

		<p @click="register()" class="resgister">立即注册</p>


		<div class="next"></div>

		<Bottom />

	</div>
</template>

<script>
import Bottom from '@/components/Bottom.vue';
import { userLogin } from '@/api/user';
import { setToken } from '@/common/js/cache';
import {ERR_OK}	from '@/common/js/config';
export default {
 data() {
 return {
 mobile : '',
 password: '',
 };
 },
 components: {
 Bottom,
 },
 methods: {
 login() {
 const data = {
 mobile : this.mobile,
 password : this.password,
 };
 this.getToken(data); },
 async getToken(data) {
 const result = await userLogin(data);
 if (result.code === ERR_OK) {
 const res = await setToken(result.data.token);
 this.$router.push({
            path: '/',
 });
 }
},
register() {
this.$router.push({
 path: '/user/register',
});
},
},

};
</script>

<style lang="less">

.login {
	width:85%;
	margin: auto 0px;
	.h3 {
		margin-top: 110px;
		margin-bottom: 40px;
		text-align: center;
	}
	.first {
	background: linear-gradient(red, blue); /* 标准的语法 */
	}
	.next {
		background: linear-gradient(blue,red); /* 标准的语法 */
	}
	.resgister {
		margin: 30px;
		color : red;
		text-align: center;
	}
}
</style>
