<template>
	<view>
		<!-- 头部 -->
		<view class="header">
			<h3>分类</h3>
			<navigator url="../searchpages/searchpages">
				<img src="../../static/images/放大镜.png" alt="">
			</navigator>

		</view>

		<!-- 左侧导航栏 -->
		<view class="leftbar">
			<li v-for="item in data.celist" @click='leftbarbutton(item)' :class="{active:data.cid==item.id}"
				:key="item.id">{{item.name}}</li>
		</view>

		<!-- 右侧显示分类模块区域 -->
		<view class="right">
			<li v-for="item in data.item.labelList" :key="item.id">{{item.name}}</li>

		</view>
	</view>

</template>

<script setup>
	import {
		fenleilist
	} from '../../common/api.js'

	import {
		ref,
		reactive,
		toRefs
	} from 'vue'
	let data = reactive({
		celist: [],
		item: [],
		cid: 1, //侧边栏点击变色id
	})
	fenleilist().then((res) => {
		console.log(res.data);
		data.celist = res.data
		data.item = res.data[0]
		// console.log(data.celist);
	})
	const leftbarbutton = (item) => {
		console.log(item.id);
		data.cid = item.id
		data.item = item
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		height: 90rpx;
		background-color: #345dc2;
		text-align: center;

		position: relative;
		// position: fixed;
		// top: 0;

		h3 {
			color: white;
			line-height: 90rpx;
		}

		img {
			width: 20px;
			height: 20px;
			position: absolute;
			right: 12rpx;
			top: 24rpx;
		}
	}

	.leftbar {
		width: 200rpx;
		height: 547px;
		background-color: #f8f9fb;
		float: left;

		li {
			width: 100%;
			height: 30px;
			// background-color: skyblue;
			margin-bottom: 30px;
			margin-top: 40rpx;
			list-style: none;
			text-align: center;
			line-height: 60rpx;
			color: #a3a3a3;
			border-left: 3px solid transparent;
		}

		.active {
			color: #345dc2;
			border-left: 3px solid #345dc2;
			margin-right: 3px;
		}

	}

	.right {
		float: right;
		width: 70%;
		height: 500px;
		// background-color: skyblue;
		// position: fixed;
		// right: 0;
		// top: 90rpx;

		li {
			list-style: none;
			width: 30%;
			height: 30px;
			// background-color: red;
			float: left;
			// max-width: 10px;
			// margin-bottom: 20px;
			margin-top: 20px;
			margin-right: 4px;
			text-align: center;
			line-height: 30px;
			border-radius: 50px;
			border: 2px solid gray;
		}
	}
</style>
