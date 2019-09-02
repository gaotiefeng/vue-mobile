<template>
	<div>
		
		<div class="first"></div>

		<div class="userLogin">

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
		
		

		<van-button type="info" @click="login()" style="margin:30px;">登录</van-button>

		<van-button type="info" @click="register()" style="margin:30px;">注册</van-button>

		</div>
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

<style>
.first {
  height: 200px;
  background: linear-gradient(red, blue); /* 标准的语法 */
}
.next {
	height: 260px;
	background: linear-gradient(blue,red); /* 标准的语法 */
}
</style>
