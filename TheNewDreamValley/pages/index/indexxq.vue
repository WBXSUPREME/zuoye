<template>
	<view>
		<!-- <navigator url="./index"> -->
			<view class="lefttop" @click='jump'>
				<i class='fanhuis iconfont icon-fanhui'></i>
			</view>
		<!-- </navigator> -->



		<view class="header" v-show="data.scrool>50">
			<view class="headeriii"  @click='jump'>
				<i class='fanhuiss iconfont icon-fanhui'></i>
			</view>
			hjkljasdfkljasdfasd
		</view>

		<view class="xqindex">
			<img :src="data.indexxqlist.mainImage" alt="">
		</view>
		<view class="xqtexthederzbox">
			<view class="son">
				<view class="">
					<p>￥{{data.indexxqlist.priceDiscount}}</p>
					<p>￥{{data.indexxqlist.priceOriginal}}</p>
					<p>优惠价</p>
				</view>
				<view class="">{{data.indexxqlist.title}}</view>
				<view class="">
					<p>100%好评</p>
					<p>{{data.indexxqlist.studyTotal}}人在学</p>
				</view>
			</view>
		</view>
		<view class="xqbottom">
			<view class="headerli">
				<li>详情</li>
				<li>章节</li>
				<li>评论</li>
				<li>套餐</li>
			</view>
			<view class="xqimg">
				<img :src="data.indexxqlist.detailUrls" alt="">
			</view>
		</view>
		<view class="bottombutton">
			<button>立即观看</button>
		</view>
	</view>
</template>

<script>
	import {
		indexXq
	} from '../../common/api.js'
	import {
		ref,
		reactive
	} from 'vue'

	import {
		onPageScroll
	} from '@dcloudio/uni-app'

	import {useRouter} from 'vue-router'
	export default {
		setup(props, ctx) {
			const data = reactive({
				indexxqlist: [], //存放列表详情页数据
				scrool: 0
			})
			const router=useRouter()
			indexXq().then((res) => {
				console.log(res.data);
				data.indexxqlist = res.data
				console.log(data.indexxqlist);
			})

			onPageScroll((e) => {
				console.log(e.scrollTop);
				if (e.scrollTop > 0) {
					// console.log('xxxx');
					data.scrool = e.scrollTop
				}
			})
			const jump=()=>{
				console.log(11111);
				router.go(-1)
			}

			return {
				data,
				jump
			}
		}


	}
</script>

<style lang="scss">
	.xqindex {
		width: 100%;
		height: 210px;
		background-color: skyblue;

		img {
			width: 375px;
			height: 210px;
		}
	}

	.xqtexthederzbox {
		width: 100%;
		padding-top: 10px;
		padding-bottom: 10px;
		background-color: #f8f9fb;

		.son {
			width: 100%;
			// margin-left: 5%;
			height: 115px;
			padding-left: 5%;
			padding-right: 5%;
			background-color: white;

			view:nth-child(1) {
				display: flex;
				align-items: flex-end;

				p:nth-child(1) {
					color: red;
					font-size: 28px;
					margin-right: 5px;
				}

				p:nth-child(2) {
					color: gray;
					margin-right: 5px;
				}

				p:nth-child(3) {
					color: red;
					margin-right: 5px;
				}
			}

			view:nth-child(2) {
				font-weight: 700;
				font-size: 18px;
			}

			view:nth-child(3) {
				margin-top: 20px;
				display: flex;
			}
		}
	}

	.xqbottom {
		width: 100%;
		height: 500px;
		// background-color: aquamarine;

		.headerli {
			width: 100%;
			height: 40px;
			// background-color: red;
			border-bottom: 1px solid darkgray;
			display: flex;
			justify-content: space-around;
			align-items: center;

			li {
				list-style: none;
				// width: 100%;
				height: 35px;
				// background-color: yellow;
				line-height: 35px;
				border-bottom: 3px solid #007aff;
			}
		}

		.xqimg {
			img {
				width: 100%;
			}
		}
	}

	.bottombutton {
		width: 100%;
		height: 50px;
		background-color: white;
		position: fixed;
		bottom: 0;

		button {
			width: 90%;
			height: 40px;
			background-color: #345dc2;
			border-radius: 25px;
			color: white;
			margin-top: 5px;
			line-height: 40px;
		}
	}

	.lefttop {
		width: 30px;
		height: 30px;
		border-radius: 50px;
		background-color: rgba(57, 52, 39, 0.8);
		position: fixed;
		left: 10px;
		top: 10px;

		.fanhuis {
			font-size: 28px;
			color: white;
		}
	}

	.header {
		width: 100%;
		height: 47px;
		background-color: #345dc2;
		line-height: 47px;
		text-align: center;
		color: white;
		position: fixed;
		top: 0;
	}

	.headeriii {
		width: 30px;
		height: 30px;
		// background-color: red;
		position: fixed;
		left: 10px;
		top: 10px;
		text-align: center;
		line-height: 30px;

		.fanhuiss {
			font-size: 28px;
			color: white;
		}
	}
</style>
