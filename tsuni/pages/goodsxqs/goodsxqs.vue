<template>
	<view>
		<swiper class="swiper" circular indicator-dots="true" indicator-active-color="#111" indicator-color="#ccc"
			autoplay="true">
			<swiper-item v-for="(item,index) in img" :key="index">
				<view class="swiper-item uni-bg-red">
					<image :src="item.pics_mid" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="price">￥{{list.goods_price}}</view>
		<view class="goods_name_row">
			<view class="goods_name">{{list.goods_name}}{{list.goods_name}}</view>
			<view class="goods_collect" @click="handleCollect">
				<text class="iconfont   {{isCollect?'icon-shoucang1':'icon-shoucang'}} "></text>
				<view class="collect_text">收藏</view>
			</view>
		</view>
		<view class="goods_info">
			<view class="goods_info_title">图文详情</view>
			<view class="goods_info_content">
				<view v-html="list.goods_introduce"></view>
			</view>
		</view>

		<uni-goods-nav class="footnav" :fill="true" :options="options" :buttonGroup="buttonGroup
			@buttonClick="buttonClick" />

	</view>
</template>

<script lang="ts">
	import {
		goods
	} from '../../request/api.js'
	import {
		onLoad
	} from "@dcloudio/uni-app";
	import {
		reactive,
		toRefs
	} from 'vue'
	export default {
		setup() {
			const data = reactive({
				id: null,
				img: [],
				list: [],//存放接口里获取到的商品数据
				newlist:[],//新建一个空数组
				isCollect: false,
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "red"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff',
						click: 'addcar'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			})
			onLoad((option) => {
				console.log(option.id);
				data.id = option.id
				goods(data.id).then(res => { //当前商品请求的接口  data.list
					console.log(res.message);
					data.img = res.message.pics
					data.list = res.message
				})
			});
			const handleCollect = () => {
				console.log(1);
				data.isCollect = !data.isCollect
			};


			const buttonClick = (e) => {
				console.log(e)
				if (e.index === 0) { //如果e.index===0,则是点击添加到购物車
					data.newlist=uni.getStorageSync('info') || [];
					console.log(data.newlist);
					let index=data.newlist.findIndex(item=>item.goods_id==data.list.goods_id)
					if(index==-1){
						data.list.num=1;
						data.newlist.push(data.list)
					}else{
						data.newlist[index].num++
					}
					uni.setStorage({
						key:'info',
						data:data.newlist
					});
					console.log('加入购物車成功');
				}

			}
			
			

			return {
				...toRefs(data),
				handleCollect,
				buttonClick,
				
			}
		}
	}
</script>

<style lang="scss">
	.footnav {
		width: 100%;
		position: fixed;
		bottom: 0;
	}

	.goods_name_row {
		border-top: 5rpx solid #dedede;
		border-bottom: 5rpx solid #dedede;
		padding: 10rpx 0;
		display: flex;
	}

	.goods_name_row .goods_name {
		flex: 5;
		color: #000;
		font-size: 30rpx;
		padding: 0 10rpx;
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.goods_name_row .goods_collect {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-left: 1rpx solid #000;
	}

	.goods_name_row .goods_collect .icon-shoucang1 {
		color: orangered;
	}

	.goods_info .goods_info_title {
		font-size: 32rpx;
		color: var(--themeColor);
		font-weight: 600;
		padding: 20rpx;
	}

	.price {
		color: red;
		padding: 10rpx 20rpx;
		// border-bottom: 1px solid #ccc;
		font-weight: 600;
		font-size: 36rpx;
	}

	.swiper {
		height: 65vw;
		text-align: center;
	}

	.swiper image {
		width: 60%;
	}
</style>
