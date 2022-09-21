<template>
	<view>
		<view>
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red">

					<view class="box" v-for="item in data.hotlist.slice(1,6)" :key="item.id">
						<view class="img">
							<img :src="item.mainImage" alt="">
						</view>
						<view class="right">
							<h5>{{item.title}}</h5>
							<p><img src="../../static/images/my.png" alt="">{{item.nickName}}</p>
							<p>
								<span><img src="../../static/images/钱袋.png"
										alt="">{{item.isFree==1?'免费':item.priceDiscount}}</span>
								<span><img src="../../static/images/播放.png"> {{item.studyTotal}}人在学</span>
							</p>
						</view>
					</view>
				</view>


				<view id="demo2" class="scroll-view-item_H uni-bg-green">
					<view class="box" v-for="item in data.hotlist.slice(5,10)" :key="item.id">
						<view class="img">
							<img :src="item.mainImage" alt="">
						</view>
						<view class="right">
							<h5>{{item.title}}</h5>
							<p><img src="../../static/images/my.png" alt="">{{item.nickName}}</p>
							<p>
								<span><img src="../../static/images/钱袋.png"
										alt="">{{item.isFree==1?'免费':item.priceDiscount}}</span>
								<span><img src="../../static/images/播放.png"> {{item.studyTotal}}人在学</span>
							</p>
						</view>
					</view>

				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import {
		list
	} from '../../common/api.js'
	import {
		ref,
		reactive
	} from 'vue'
	const data = reactive({
		hotlist: []
	})
	list().then((res) => {
		console.log(res.data.records);
		data.hotlist = res.data.records
		console.log(data.hotlist);
	})
</script>

<style lang="scss">
	// 横向滚动
	// .scroll-Y {
	// 	height: 300rpx;
	// }

	.scroll-view_H {
		white-space: nowrap;
		// width: 100%;
	}

	// .scroll-view-item {
	// 	height: 300rpx;
	// 	line-height: 300rpx;
	// 	text-align: center;
	// 	font-size: 36rpx;
	// }

	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 100%;
		// line-height: 300rpx;
		// text-align: center;
		// font-size: 36rpx;
		// background-color: skyblue;
	}



	.box {
		width: 90%;
		margin-left: 5%;
		// margin-top: 20rpx;
		padding: 20rpx;
		display: flex;
		// background-color: yellow;
		border-bottom: 2rpx solid lightgray;

		.img {
			img {
				border-radius: 10rpx;
				width: 294rpx;
				height: 160rpx;
			}
		}

		.right {
			margin-left: 20rpx;

			h5 {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;

				width: 100%;

			}

			p:nth-of-type(1) {
				margin-top: 20rpx;
				font-size: 32rpx;
				color: darkgray;
				img {
					width: 34rpx;
					height: 34rpx;
				}
				
			}
			p:nth-of-type(2) {
				span{
					margin-right: 50rpx;
					font-size: 32rpx;
					img{
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
		}
	}
</style>
