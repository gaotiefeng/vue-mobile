<template>
<div>
    <div class="register">
        <van-cell-group>
    <van-field
        v-model="mobile"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
    />

    <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
    />
    <van-button type="primary" size="large" @click="register()">注册</van-button>

    </van-cell-group>
    </div>
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
            if(res.code === config.ERR_OK) {
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

<style scoped>
.register  {
    font-size: 24px;
}
</style>