<template>
	<view class="content">
		<!-- <view class="searchbutton">
			<button>搜索</button>
		</view> -->
		<!-- 头部搜索组件 -->
		
		<headerbutton></headerbutton>

		<!-- 轮播图 -->

		<view class="wrap">
			<u-swiper height="350" :list="data.list"></u-swiper>
		</view>


		<!-- 分类秒杀超市购母婴品 -->
		<view class="fmcm">
			<img class="img" v-for="item in data.navlist" :key="item.id" :src="item.image_src" alt="">
		</view>

		<!-- 下方商品列表 -->
		<view class="footrzbox" v-for="item in data.louceng" :key="item.id">
			<img class='img2' :src="item.floor_title.image_src" alt="">
			<view class="footer">
				<view class="" v-for="citem in item.product_list" :key="citem.id">
					<img class='img3' :src="citem.image_src" alt="">
				</view>

			</view>
		</view>



	</view>
</template>

<script setup lang="ts">
	import headerbutton from '../../components/headerbutton/headerbutton.vue'

	import {
		nav1,
		floorList
	} from '../../request/api.js'
	import {

		reactive
	} from 'vue'
	const data = reactive({
		list: [{
				image: 'https://api-hmugo-web.itheima.net/pyg/banner1.png',
			},
			{
				image: 'https://api-hmugo-web.itheima.net/pyg/banner2.png',
			},
			{
				image: 'https://api-hmugo-web.itheima.net/pyg/banner3.png',
			}
		],
		navlist: [], //分类数据
		louceng: [], //楼层数据
	})
	nav1().then((res) => { //nav
		// console.log(res.message);
		data.navlist = res.message
	})


	floorList().then((res) => { //楼层数据
		console.log(res.message);
		data.louceng = res.message
	})
	
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}


	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.wrap {
		//轮播图
		background-color: skyblue;
		width: 100%;
	}

	.fmcm {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-top: 40rpx;

		.img {
			width: 130rpx;
			height: 140rpx;
		}
	}

	.footrzbox {
		width: 100%;

		.img2 {
			width: 500px;
			height: 50px;
			margin-bottom: 80rpx;
			margin-top: 40rpx;
		}

		.footer {
			display: grid;
			grid-template:
				'a1 a2 a3'170rpx 'a1 a2 a3'170rpx /1fr 1fr 1fr;
			grid-gap: 20rpx 20rpx;

			view {
				.img3 {
					width: 100%;
					height: 100%;
				}
			}

			view:nth-of-type(1) {
				grid-area: a1;
				border: 1px solid greenyellow;
			}
		}
	}
</style>
