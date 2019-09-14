<template>
	<div>
		<Top />

		<div class="article">
			<div class="user">
				<p class="userimage">
				<van-image
					round
					width="4rem"
					height="4rem"
					src="https://img.yzcdn.cn/vant/cat.jpeg"
					
				/>
				</p>
				<p class="name">
				<span>六年</span>
				</p>
			</div>
			<div class="content">12344eshasdjfadlslaso  pawo  pweopaewourwuawaiopwjraiarew</div>
			<div class="foot">
				<span class="foot1">浏览数：1233</span>
				<span class="foot2">点赞数：233</span>
			</div>
		</div>

<div class="article">
			<div class="user">
				<p class="userimage">
				<van-image
					round
					width="4rem"
					height="4rem"
					src="https://img.yzcdn.cn/vant/cat.jpeg"
					
				/>
				</p>
				<p class="name">
				<span>六年</span>
				</p>
			</div>
			<div class="content">12344eshasdjfadlslaso  pawo  pweopaewourwuawaiopwjraiarew</div>
			<div class="foot">
				<span class="foot1">浏览数：1233</span>
				<span class="foot2">点赞数：233</span>
			</div>
		</div>

		<div class="article">
			<div class="user">
				<p class="userimage">
				<van-image
					round
					width="4rem"
					height="4rem"
					src="https://img.yzcdn.cn/vant/cat.jpeg"
					
				/>
				</p>
				<p class="name">
				<span>六年</span>
				</p>
			</div>
			<div class="content">12344eshasdjfadlslaso  pawo  pweopaewourwuawaiopwjraiarew</div>
			<div class="foot">
				<span class="foot1">浏览数：1233</span>
				<span class="foot2">点赞数：233</span>
			</div>
		</div>

		<div class="article">
			<div class="user">
				<p class="userimage">
				<van-image
					round
					width="4rem"
					height="4rem"
					src="https://img.yzcdn.cn/vant/cat.jpeg"
					
				/>
				</p>
				<p class="name">
				<span>六年</span>
				</p>
			</div>
			<div class="content">12344eshasdjfadlslaso  pawo  pweopaewourwuawaiopwjraiarew</div>
			<div class="foot">
				<span class="foot1">浏览数：1233</span>
				<span class="foot2">点赞数：233</span>
			</div>
		</div>
		<!-- <van-pagination 
		  v-model="currentPage" 
		  :total-items="125" 
		  :show-page-size="3" 
		  force-ellipses
		/> -->
		
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
.article {
	overflow: hidden;
width:85%;
.user {
	.userimage {
	position: absolute;
	left: 30px;
	top: 36px;
	}
	.name {
		font-size: 24px;
		color:red;
	}
}
.content {
	margin-top:22px;
	font-size: 20px;
    color: rosybrown;
    margin-bottom: 20px;
    margin-left: 30px;
    line-height: 24px;
}
.foot {
	font-size: 17px;
    color: royalblue;
    line-height: 16px;
	margin-right: 4px;
	.foot1{
		margin-right: 4px;	
	}
}
}
</style>
