<template>
	<div>
		<Top />
		<van-pagination 
		  v-model="currentPage" 
		  :total-items="125" 
		  :show-page-size="3" 
		  force-ellipses
		/>
		
		<Bottom />
	</div>
</template>

<script>
	import Bottom from '@/components/Bottom.vue'
	import Top from '@/components/Top.vue'
export default {
data() {
	return {
	 currentPage: 1,
	  list: [],
	  loading: false,
	  finished: false
	}
	},
	components: {
	  Bottom,
	  Top,
	},
	  methods: {
		onLoad() {
			
		}
	  }
}
</script>

<style>
</style>
