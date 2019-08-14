<template>
	<div>
		
		<Swipe />
		<Nav />
		<Bouttom />
	</div>
</template>

<script>
	import Swipe from '@/components/Swipe.vue'
	import Bouttom from '@/components/Bottom.vue'
	import Nav from '@/components/Nav.vue'
	export default {
		components:{
			Swipe,
			Bouttom,
			Nav
		}
	}
</script>

<style>
</style>
