<template>
	<div>
		
		<Bottom />
	</div>
</template>

<script>
	import Bottom from '@/components/Bottom.vue'
    import {userInfo} from '@/api/user'
export default {
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
            console.log(result);
        }
    }
}
</script>

<style>
</style>
