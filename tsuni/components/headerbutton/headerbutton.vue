<template>
	<view>
		<view class="searchbutton">
			<button>搜索</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"headerbutton",
		data() {
			return {
				
			};
		}
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