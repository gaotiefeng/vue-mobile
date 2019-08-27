<template>
	<div>
        <p style="color:red">{{form.mobile}}</p>
        <p style="">
        <van-image
        round
        width="5rem"
        height="5rem"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        /></p>
        




		<Bottom />
	</div>
</template>

<script>
	import Bottom from '@/components/Bottom.vue'
    import {userInfo} from '@/api/user'
export default {
    data(){
            return {
                form:{
                    mobile:'',
                }
        }
    },
    components: {
        Bottom,
        },
    created(){
        this.detail()
    },
    methods:{
        async detail()
        {
            let result = await userInfo()
            if(result.code == 0){
                this.form = result.data
            }
        }
    }
}
</script>

<style>
</style>
