<template>
	<div>
		<div>
			<van-button type="default">默认按钮</van-button>
			<van-button type="primary">主要按钮</van-button>
			<van-button type="info">信息按钮</van-button>
			<van-button type="warning">警告按钮</van-button>
			<van-button type="danger">危险按钮</van-button>
			<van-button disabled type="primary">禁用状态</van-button>
			<van-button disabled type="danger">禁用状态</van-button>
		</div>
		<div>
			<van-button plain type="primary">朴素按钮</van-button>
			<van-button plain type="danger">朴素按钮</van-button>
		</div>
		<div>
			<van-button plain hairline type="primary">细边框按钮</van-button>
			<van-button plain hairline type="danger">细边框按钮</van-button>
		</div>
		<div>
			<van-button loading type="primary" />
			<van-button loading type="primary" loading-type="spinner" />
			<van-button loading type="danger" loading-text="加载中..." />
		</div>
		<div>
			<van-button square type="primary">方形按钮</van-button>
			<van-button round type="danger">圆形按钮</van-button>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>
