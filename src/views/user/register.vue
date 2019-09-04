<template>
<div class="register">

        <div class="first"></div>
        <van-field
            v-model="mobile"
            required
            clearable
            label="手机号:"
            placeholder="请输入手机号"
        />
        <div class="next" style="margin-top:30px;margin-bottom:30px;">  </div>
        <van-field
            v-model="password"
            type="password"
            label="密码:"
            placeholder="请输入密码"
            required
        />
        <div style="margin-top:40px"></div>
        <van-button type="danger" size="large" @click="register()">注册</van-button>

</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {userRegister} from '@/api/user';
import * as config from '@/common/js/config';
import { setToken } from '@/common/js/cache';
import { Dialog } from 'vant';
export default Vue.extend({
    data() {
        return {
            mobile: '',
            password: '',
        };
    },
    methods: {
        register() {
            this.apiRegister();
        },
        async apiRegister() {
            const data = {
                mobile : this.mobile,
                password: this.password,
            };
            const res = await userRegister(data);
            if (res.code === config.ERR_OK) {
            Dialog.alert({
            title: '注册成功',
            message: '您已经注册成功',
            }).then(() => {
                setToken(res.data.token);
                this.$router.push({
                            path: '/',
                });
            // on close
            });
            }
        },
    },
});
</script>

<style lang="less" scoped>

.register {
    width: 85%;
    margin-left: 8%;
    text-align: center;
    .first {
    height: 200px;
    }
}
</style>