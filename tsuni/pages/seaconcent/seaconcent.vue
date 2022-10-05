<template>
	<view class="zbox">
		<!-- ///** 头部搜索框 */ -->
		<view class="header">
			<input type="text" @input="searchinput" v-model="data.inp" placeholder="请输入搜索内容">
			<button type="default">取消</button>
		</view>

		<view class="searchlist">
			<view class="srearchlistss" v-for="item in data.searchlists" :key="item.goods_id" @click="goodsxq(item)">
				{{item.goods_name}}
			</view>
		</view>

	</view>
</template>

<script setup>
	import {
		searchs
	} from '../../request/api.js'
	import {
		reactive
	} from 'vue'
	const data = reactive({
		inp: '',
		searchlists: [], //存放搜索列表
	})


	const searchinput = () => {
			searchs(data.inp).then((res) => {
				console.log(res.message);
				data.searchlists = res.message
			})
	}

	const goodsxq = (item) => {
		console.log(item.goods_id);

		uni.navigateTo({
			url: `/pages/goodsxqs/goodsxqs?id=${item.goods_id}`,
			success: res => {
				console.log('商品详情页面跳转成功');
			},
			fail: () => {
				console.log('商品详情页面跳转失败');
			},
			complete: () => {}
		});
	}
</script>

<style lang="scss" scoped>
	.zbox {
		width: 100%;
		height: 100vm;
		background-color: #cccccc;

		.header {
			width: 100%;
			height: 40px;
			// background-color: skyblue;
			display: flex;
			align-items: center;
			padding: 15px;

			input {
				flex: 3;
				margin-right: 5px;
				height: 30px;
				background-color: white;
			}

			button {
				flex: 0.5;
				height: 30px;
				line-height: 30px;
			}
		}

		.searchlist {
			width: 100%;
			padding: 15px;

			.srearchlistss {
				width: 100%;
				// background-color: red;
				height: 30px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				// margin-bottom: 10px;
				font-size: 20px;
				background-color: white;
			}
		}
	}
</style>
