<template>
	<div>
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
