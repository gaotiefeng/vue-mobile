<template>
	<div>
        <div class="mobile">
            <p>流年</p>
            <p>{{form.mobile}}</p>
        </div>
        <p class="image">
        <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        /></p>
        
        <div class="article">我的文章</div>
        <div class="article">我的朋友</div>
        <div class="article">我的地址</div>


		<Bottom />
	</div>
</template>

<script>
import Bottom from '@/components/Bottom.vue';
import {userInfo} from '@/api/user';

export default {
    data() {
            return {
                form: {
                    mobile: '',
                },
        };
    },
    components: {
        Bottom,
        },
    created() {
        this.detail();
    },
    methods: {
        async detail() {
            const result = await userInfo();
            if (result.code === 0) {
                this.form = result.data;
            }
        },
    },

};
</script>

<style>
.mobile{
    color: red;
    float: right;
    margin-right: 145px;
}
.image{

}
.article {
    font-size: 22px;
    height: 24px;
    line-height: 24px;
    margin-top: 20px;
    margin-right: 145px;
    margin-left: 54px;
    float: left;
    color: #a09d9d;
}
</style>
