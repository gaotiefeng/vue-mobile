<template>
	<div>
		<Top />

		<div>
			<div>
				<p class="user">
				<van-image
					round
					width="4rem"
					height="4rem"
					src="https://img.yzcdn.cn/vant/cat.jpeg"
					
				/>
				<span class="name">六年</span>
				</p>
			</div>
			<div>12344eshasdjfadls lasopawopweopaewourwuawaiopwjraiarew</div>
			<div>
				<span>浏览数：1233</span>
				<span>点赞数：233</span>
			</div>
		</div>

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
 import Bottom from '@/components/Bottom.vue';
 import Top from '@/components/Top.vue';
 export default {
 data() {
 return {
 currentPage: 1,
 list: [],
 loading: false,
 finished: false,
 };
 },
 components: {
 Bottom,
 Top,
 },
 methods: {
 },
};
</script>

<style lang="less" scoped>
.user {
	left: 0px;
}
</style>
