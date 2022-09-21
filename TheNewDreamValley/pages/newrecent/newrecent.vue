<template>
	<view>

		<!-- /** 滑动组件 */ -->
		<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">



			<view id="demo1" class="scroll-view-item_H uni-bg-red" v-for="item in data.lists" :key="item.id">
				<view class="box">
					<view class="img">
						<img :src="item.mainImage" alt="">
					</view>
					<view class="bottom">
						<h5>{{item.title}}</h5>
						<p><img src="../../static/images/my.png" alt="">{{item.nickName}}</p>
						<p>
							<span class='mf'>免费</span>
							<span><img src="../../static/images/播放.png"> {{item.studyTotal}}人在学</span>
						</p>
					</view>
				</view>
			</view>



		</scroll-view>
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
		lists: []
	})
	list().then((res) => {
		console.log(res.data.records);
		data.lists = res.data.records
		console.log(data.lists);
	})
</script>

<style lang="scss">
	// .scroll-Y {
	// 	height: 300rpx;
	// }

	.scroll-view_H {
		white-space: nowrap;
		
	}


	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
	}
	.box {
		margin-top: 20rpx;
		background-color: yellow;
		margin-left: 5%;
		width: 40%;
		height: 100%;
		border: 3px solid greenyellow;
		.img {
			img {
				border-radius: 10rpx;
				width: 294rpx;
				height: 160rpx;
			}
		}
		.bottom {
			h5 {
				margin-bottom: 46rpx;
				word-wrap: break-word;
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
				padding-bottom: 10rpx;
				.mf {
					color: red;
					font-size: 32rpx;
				}
				span {
					margin-right: 50rpx;
					font-size: 24rpx;

					img {
						width: 30rpx;
						height: 30rpx;
					}
				}
			}
		}
	}
</style>
