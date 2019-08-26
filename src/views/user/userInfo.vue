<template>
	<div>
		<van-cell-group>
        <van-field
            v-model="username"
            required
            clearable
            label="用户名"
            right-icon="question-o"
            placeholder="请输入用户名"
            @click-right-icon="$toast('question')"
        />
        </van-cell-group>
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
