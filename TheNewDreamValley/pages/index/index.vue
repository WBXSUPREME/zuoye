Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@WBXSUPREME 
WBXSUPREME
/
zuoye
Public
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
Settings
zuoye/TheNewDreamValley/pages/index/index.vue
@WBXSUPREME
WBXSUPREME '新梦学谷'
Latest commit f6cb3f1 yesterday
 History
 1 contributor
203 lines (170 sloc)  3.68 KB

<template>
	<view class="content">
		<navigator url="../searchpages/searchpages">
			<myinput class="serachone"></myinput>
		</navigator>


		<view class="topbox">
			<!-- 轮播图 -->
			<view class="uni-margin-wrap">
				<swiper @change="bgcimgages" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay"
					:interval="interval" :duration="duration" indicator-color="rgba(255, 255, 255, .3)"
					indicator-active-color="white">
					<swiper-item v-for="(item,id) in data.swiperlist" :key="item.id">
						<navigator :url="item.advertUrl">
							<view class="swiper-item uni-bg-red"><img :src="item.imageUrl" alt=""></view>
						</navigator>
					</swiper-item>
				</swiper>
			</view>
		</view>

		<!-- java 前端 云计算 运维... -->
		<view class="allkindsofbutton">
			<li v-for="(item,id) in data.classificationlist" :key="item.id" v-show="item.id<8">{{item.name}}</li>
			<li>全部分类</li>
		</view>

		<!-- 热门推荐 -->
		<view class="hot-recommended">
			<view class="">
				<p>热门推荐</p>
				<li>HOT</li>
			</view>
			<p class='qb'>全部></p>
		</view>
		<hot-list></hot-list>
		
		<!-- 热门推荐 -->
		<view class="hot-recommended">
			<view class="">
				<p>近期上新</p>
				<li>NEW</li>
			</view>
			<p class='qb'>全部></p>
		</view>
		<newrecent></newrecent>
		
		<!-- 免费精选 -->
		<view class="hot-recommended">
			<view class="">
				<p>免费精选</p>
				<li>FREE</li>
			</view>
			<p class='qb'>全部></p>
		</view>
		<hot-list></hot-list>
		
		
		<!-- 付费精选 -->
		<view class="hot-recommended">
			<view class="">
				<p>付费精选</p>
				<li>NICE</li>
			</view>
			<p class='qb'>全部></p>
		</view>
		<hot-list></hot-list>

	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import myinput from "../../components/myinput/myinput.vue"
	import {
		swiper,
		classification
	} from '../../common/api.js'
	import HotList from "/pages/Hotlist/Hotlist.vue"
	import newrecent from "/pages/newrecent/newrecent.vue"
	components: {
		myinput,
		HotList,
		newrecent
	}
	// const background = reactive(['red', 'color2', 'color3'])
	let indicatorDots = ref(true)
	let autoplay = ref(true)
	let interval = ref(1000)
	let duration = ref(500)
	let data = reactive({
		swiperlist: [],
		classificationlist: [],
	})
	const bgcimgages = (e) => {
		// console.log(e);
		// if(e.detail.current==0){
		// 	console.log(1);
		// }
	}
	swiper().then((res) => { //轮播图接口
		console.log(res.data);
		data.swiperlist = res.data
		console.log(data.swiperlist);
	})
	classification().then((res) => { //分类接口
		console.log(res);
		data.classificationlist = res.data
		console.log(data.classificationlist);
	})
</script>

<style lang="scss">
	.uni-margin-wrap {
		width: 690rpx;
		width: 100%;
	}
	.swiper {
		height: 350rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
	}
	.swiper-list {
		margin-top: 40rpx;
		margin-bottom: 0;
	}
	.uni-common-mt {
		margin-top: 60rpx;
		position: relative;
	}
	.info {
		position: absolute;
		right: 20rpx;
	}
	.uni-padding-wrap {
		width: 550rpx;
		padding: 0 100rpx;
	}
	.topbox {
		width: 100%;
		height: 182px;
		padding-top: 62px;
		// background-color: skyblue;
		background: linear-gradient(to bottom, #0072b7, #ebf4f9, );
		// background-size: cover;
		// filter: blur(50px);
		// transform: scale(1);
		img {
			width: 93%;
			height: 115%;
			border-radius: 20rpx;
		}
	}
	.allkindsofbutton {
		height: 85px;
		// background-color: red;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		li {
			list-style: none;
			width: 83px;
			height: 36px;
			border-radius: 10px;
			background-color: #f8f9fb;
			text-align: center;
			line-height: 40px;
			font-size: 14px;
		}
	}
	/** 热门推荐 */
	.hot-recommended {
		// background-color: red;
		display: flex;
		justify-content: space-between;
		padding: 0 18px;
		margin-top: 30px;
		view {
			display: flex;
			justify-content: space-between;
			width: 120px;
			p {
				font-size: 19px;
			}
			li {
				width: 33px;
				height: 15px;
				font-size: 12px;
				list-style: none;
				border-radius: 15px 15px 15px 0;
				background: linear-gradient(to right, #fb6530, #fa180f);
				text-align: center;
				color: white;
			}
		}
		.qb {
			font-size: 14px;
			color: #969da5;
		}
	}
	
</style>
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
