<template>
	<view>
		<!-- input框 -->
		<view class="inputbox">
			<!-- <input type="text" placeholder="搜索你想要的内容"> -->
			<view class="input" >
				<img src="../../static/images/iconsearch.png" alt="">
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		setup(props, context) {
			

			
		}
	}
</script>

<style lang="scss">
	.inputbox {
		width: 100%;
		height: 43px;
		// background-color: red;
		display: flex;
		justify-content: center;
		background-color: #0072b7;
		align-items: center;
		// margin-bottom: 40px;
		position: fixed;
		top: 0;
		z-index: 999;
		.input {
			width: 98%;
			height: 30px;
			background-color: #f0f1f2;
			border-radius: 50px;
			font-size: 14px;
			text-align: center;

			img {
				width: 153px;
				height: 20px;
				margin-top: 4px;
			}
		}
	}
</style>
