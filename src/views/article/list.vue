<template>
	<div>
		<Top />

		<div class="article">
			<div class="title">
				<span>你知道这5年我怎么过的吗</span>
			</div>
			<div class="content">阿伟已经死了，你选的吗？阿伟已经死了，你选的吗阿伟已经死了，你选的吗阿伟已经死了，你选的吗阿伟已经死了，你选的吗</div>
			<div class="date">
				<span class="date1">2019-09-14</span>
				<span class="">浏览数</span><span>1</span>
			</div>
		</div>

		<div class="article">
			<div class="title">
				<span>你知道这5年我怎么过的吗</span>
			</div>
			<div class="content">阿伟已经死了，你选的吗？</div>
			<div class="date">
				<span class="date1">2019-09-14</span>
				<span class="">浏览数</span><span>1</span>
			</div>
		</div>
		
		<div class="article">
			<div class="title">
				<span>你知道这5年我怎么过的吗</span>
			</div>
			<div class="content">阿伟已经死了，你选的吗？</div>
			<div class="date">
				<span class="date1">2019-09-14</span>
				<span class="">浏览数</span><span>1</span>
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
width:85%;
margin: 10px;
.title {
	font-size: 20px;
	color:#00000;
}
.content {
	margin-top:10px;
	font-size: 16px;
    color: #666;
    margin-bottom: 10px;
    line-height: 24px;
}
.date {
	font-size: 12px;
    color: royalblue;
    line-height: 16px;
	margin-right: 4px;
	.date1{
		margin-right: 8px;	
	}
}
}
</style>
