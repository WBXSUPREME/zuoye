<template>
	<view>
		<navigator url="../searchpages/searchpages">
			<myinput></myinput>
		</navigator>

		<!-- 搜索一栏 -->
		<view class="headerbar">
			<li>热门回答</li>
			<li>最新问题</li>
			<li>等待回答</li>
		</view>

		<!-- 下方阅读列表 -->
		<view class="bottomlist">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
				<view id="demo1" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.hotlist" :key="item.id">
							<view class="top">
								<h4>{{item.title}}</h4>
							</view>
							<view class="bottom">
								<view class="left">
									<p>{{item.reply}} 回答</p>
									<p>{{item.viewCount}} 浏览</p>
								</view>
								<view class="right">
									<p>{{item.nickName}}</p>
									<p>1980年5月8日</p>
								</view>
							</view>
					</view>
				</view>
				<view id="demo1" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.newlist" :key="item.id">
							<view class="top">
								<h4>{{item.title}}</h4>
							</view>
							<view class="bottom">
								<view class="left">
									<p>{{item.reply}} 回答</p>
									<p>{{item.viewCount}} 浏览</p>
								</view>
								<view class="right">
									<p>{{item.nickName}}</p>
									<p>1980年5月8日</p>
								</view>
							</view>
					</view>
				</view>
				<view id="demo1" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.waitlist" :key="item.id">
							<view class="top">
								<h4>{{item.title}}</h4>
							</view>
							<view class="bottom">
								<view class="left">
									<p>{{item.reply}} 回答</p>
									<p>{{item.viewCount}} 浏览</p>
								</view>
								<view class="right">
									<p>{{item.nickName}}</p>
									<p>1980年5月8日</p>
								</view>
							</view>
					</view>
				</view>
			
			</scroll-view>
		</view>
	</view>
</template>

<script setup>
	import myinput from "../../components/myinput/myinput.vue"
	components: {
		myinput
	}
	import {
		hotanswer,
		newanswer,
		waitanswer
	} from '../../common/api.js'
	import {
		ref,
		reactive
	} from 'vue'
	let data = reactive({
		hotlist:[],
		newlist:[],
		waitlist:[]
	})
	hotanswer().then((res) => {
		data.hotlist=res.data.records
	})
	newanswer().then((res) => {
		console.log(res.data.records);
		data.newlist=res.data.records
	})
	waitanswer().then((res) => {
		console.log(res.data.records);
		data.waitlist=res.data.records
	})
	
	
</script>

<style lang="scss">
	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}



	.scroll-view-item_H {
		display: inline-block;
		width: 100%;
		height: 100%;
		// line-height: 300rpx;
		// text-align: center;
		// font-size: 36rpx;

	}

	.headerbar {
		width: 100%;
		height: 40px;
		background-color: skyblue;
		display: flex;
		justify-content: space-around;
		line-height: 40px;
		list-style: none;
		border-bottom: 1px solid grey;
		position: fixed;
		z-index: 888;
		top: 40px;
	}

	.bottomlist {
		width: 100%;
		height: 800px;
		margin-top: 80px;
		// background-color: aquamarine;
		.listbox {
			width: 100%;
			height: 65px;
			// background-color: red;
			padding-left: 5%;
			padding-right: 5%;
			margin-top: 10px;
			border-bottom: 1px solid #f8f8fa;
			.bottom{
				display: flex;
				// justify-content: space-between;
				// margin-top: 20px;
				.left{
					display: flex;
					p{
						margin-right: 20px;
						color: grey;
					}
				}
				.right{
					margin-left: 48px;
					display: flex;
					p{
						margin-right: 20px;
						color: grey;
					}
				}
			}
		}
	}
</style>
