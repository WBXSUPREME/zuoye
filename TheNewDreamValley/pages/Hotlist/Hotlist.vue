<template>
	<view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				
				
				
				<view id="demo1" class="scroll-view-item_H uni-bg-red">
					<view class="hotlistBox">
						<view class="hotlistboxs">
							<img src="../../static/images/article-active.png" alt="">
							<view class="right">
								<p>asdfasd</p>
								<p>asdfasd</p>
								<p>asdfasd</p>
								<!-- <li>梦老师</li>
								<span>
									<p>免费</p>
									<p>165人在学</p>
								</span> -->
							</view>
						</view>
					</view>
				</view>
				
				
				
				
				<view id="demo2" class="scroll-view-item_H uni-bg-green">B</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
// 横向滚动
	.scroll-Y {
		height: 300rpx;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item {
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
		font-size: 36rpx;
	}
	
	
	.hotlistBox{
		width: 100%;
		height: 100px;
		background-color: red;
		
		.hotlistboxs{
			width: 90%;
			height: 95px;
			background-color: skyblue;
			margin-left: 5%;
			display: flex;
			img{
				width: 50%;
				height: 95px;
				background-color: yellow;
			}
			.right{
				width: 50%;
				height: 95px;
				background-color: greenyellow;
				p{
					background-color: white;
					width: 100px;
					height: 30px;
				}
			}
		}
	}
</style>
