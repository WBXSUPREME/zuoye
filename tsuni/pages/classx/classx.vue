<template>
	<view>
		<headerbutton class='headerbuttons'></headerbutton>
	</view>
	<view class="wrap">
		<u-row gutter="16" justify="space-between">
			<u-col span="4">
				<view>
					<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
						@scrolltolower="lower" @scroll="scroll">
						<view id="demo1" class="scroll-view-item uni-bg-red">
							<view class="demo-layout bg-purple">
								<li class='li1' v-for="item in data.classlist" :key="item.cat_id" @click="qie(item)"
									:class="{active:data.i==item.cat_id}">{{item.cat_name}}</li>
							</view>
						</view>
					</scroll-view>
				</view>
			</u-col>

			<u-col span="8">
				<view>
					<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
						@scrolltolower="lower" @scroll="scroll">
						<view id="demo1" class="scroll-view-item uni-bg-red">
							<view class="demo-layout bg-purple-light">
								<view class="imglist" v-for="item in data.classlists.children" :key="item.cat_id">
									<p>/{{item.cat_name}}/</p>
									<view class="imglistson">
										<view class="imglistsonli" v-for="citem in item.children" :key="item.cat_id">
											<img class='img1' :src="citem.cat_icon" alt="">
											<p>{{citem.cat_name}}</p>
										</view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</u-col>

		</u-row>

	</view>
</template>

<script setup>
	import headerbutton from '../../components/headerbutton/headerbutton.vue'
	import {
		classxx
	} from '../../request/api.js'
	import {
		reactive
	} from 'vue'
	const data = reactive({
		classlist: [], //存放分类数据列表
		classlists: [], //存放分类数据子列表
		i: 1, //默认选中左侧列表第一个
		scrollTop: 0,
		old: {
			scrollTop: 0
		}
	})
	classxx().then((res) => {
		console.log(res.message);
		data.classlist = res.message
		data.classlists = res.message[0]
		console.log(data.classlist);
		console.log(data.classlists);
	})
	const qie = (item) => {
		// console.log(id);
		data.i = item.cat_id
		data.classlists = item
	}
</script>

<style lang="scss" scoped>
	.u-row {
		margin: 40rpx 0;
	}
	.demo-layout {
		height: 85vh;
		border-radius: 8rpx;
	}
	.bg-purple {
		
		text-align: center;
		

		.li1 {
			
			height: 80rpx;
			line-height: 80rpx;
			border-left: 4rpx solid transparent;
		}
		.active {
			color: red;
			border-left: 4rpx solid red;
		}
	}
	.bg-purple-light {
		.imglist {
			width: 440rpx;
		    margin: 20rpx;
			text-align: center;
			margin-bottom: 20rpx;
			.imglistson {
				margin-top: 20rpx;
				overflow: hidden;
				.imglistsonli {
					width: 136rpx;
					height: 160rpx;
					float: left;
					margin: 4rpx;

					.img1 {
						width: 70%;
						height: 70%;
					}
				}
			}
		}
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

</style>
