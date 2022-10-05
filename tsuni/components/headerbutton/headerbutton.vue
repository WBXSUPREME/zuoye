<template>
	<view>
		<view class="searchbutton">
			<button @click="jumpserch">搜索</button>
		</view>
	</view>
</template>

<script setup>
	
	const jumpserch=()=>{
		console.log(1);
		uni.navigateTo({
			url: '/pages/seaconcent/seaconcent',
			success: res => {
				console.log('跳转成功');
			},
			fail: () => {
				console.log('跳转失败');
			},
			complete: () => {}
		});
	}
</script>

<style lang="scss" scoped>
	.searchbutton {
		//头部搜索按钮
		width: 380px;
		height: 50px;
		background-color: #d75255;
		button {
			width: 96%;
			margin-left: 2%;
		}
	}
</style>