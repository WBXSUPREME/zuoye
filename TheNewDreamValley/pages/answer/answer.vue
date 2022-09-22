<template>
	<view>
		<navigator url="../searchpages/searchpages">
			<myinput></myinput>
		</navigator>

		<!-- 搜索一栏 -->
		<view class="headerbar">
			<li>推荐</li>
			<li v-for="item in data.readingheaderlist" :key="item.id" v-show="item.id<5">{{item.name}}</li>
		</view>

		<!-- 下方阅读列表 -->
		<view class="bottomlist">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">



				<view id="demo1" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.readinglistss" :key="item.id">
						<view class="left">
							<h4>{{item.title}}</h4>
							<p>{{item.summary}}</p>
							<view class="bottomthree">
								<p>{{item.nickName}}</p>
								<p>{{item.updateDate}}</p>
								<p>{{item.viewCount}}赞</p>
								
							</view>
						</view>
						<view class="right" :class="{actives:item.imageUrl==null ? true:false}">
							<img :src="item.imageUrl" alt="">
						</view>
					</view>
				</view>
				<view id="demo2" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.readinglistss" :key="item.id">
						<view class="left">
							<h4>{{item.title}}</h4>
							<p>{{item.summary}}</p>
							<view class="bottomthree">
								<p>{{item.nickName}}</p>
								<p>{{item.updateDate}}</p>
								<p>{{item.viewCount}}赞</p>
								
							</view>
						</view>
						<view class="right" :class="{actives:item.imageUrl==null ? true:false}">
							<img :src="item.imageUrl" alt="">
						</view>
					</view>
				</view>
				<view id="demo3" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.readinglistss" :key="item.id">
						<view class="left">
							<h4>{{item.title}}</h4>
							<p>{{item.summary}}</p>
							<view class="bottomthree">
								<p>{{item.nickName}}</p>
								<p>{{item.updateDate}}</p>
								<p>{{item.viewCount}}赞</p>
								
							</view>
						</view>
						<view class="right" :class="{actives:item.imageUrl==null ? true:false}">
							<img :src="item.imageUrl" alt="">
						</view>
					</view>
				</view>
				<view id="demo4" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.readinglistss" :key="item.id">
						<view class="left">
							<h4>{{item.title}}</h4>
							<p>{{item.summary}}</p>
							<view class="bottomthree">
								<p>{{item.nickName}}</p>
								<p>{{item.updateDate}}</p>
								<p>{{item.viewCount}}赞</p>
								
							</view>
						</view>
						<view class="right" :class="{actives:item.imageUrl==null ? true:false}">
							<img :src="item.imageUrl" alt="">
						</view>
					</view>
				</view>
				<view id="demo5" class="scroll-view-item_H uni-bg-red">
					<view class="listbox" v-for="item in data.readinglistss" :key="item.id">
						<view class="left">
							<h4>{{item.title}}</h4>
							<p>{{item.summary}}</p>
							<view class="bottomthree">
								<p>{{item.nickName}}</p>
								<p>{{item.updateDate}}</p>
								<p>{{item.viewCount}}赞</p>
								
							</view>
						</view>
						<view class="right" :class="{actives:item.imageUrl==null ? true:false}">
							<img :src="item.imageUrl" alt="">
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
		fenleilist,
		readinglists
	} from '../../common/api.js'
	import {
		ref,
		reactive
	} from 'vue'
	let data = reactive({
		readingheaderlist: [],
		readinglistss: []
	})
	fenleilist().then((res) => {
		data.readingheaderlist = res.data
	})
	readinglists().then((res) => {
		console.log(res.data.records);
		data.readinglistss = res.data.records

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
		// margin-top: 83px;
		// padding-top: 40px;
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
			width: 90%;
			height: 100px;
			margin-left: 5%;
			// background-color: red;
			margin-top: 10px;
			display: flex;
			border-bottom: 1px solid #f1f1f1;

			.left {
				width: 100%;
				height: 100px;
				// background-color: skyblue;
				display: inline-block;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				.bottomthree{
					display: flex;
					justify-content: space-between;
					margin-top: 30px;
					// background-color: red;
					width: 190px;
					font-size: 15px;
					color: grey;
				}
				
			}

			.right {
				width: 35%;
				height: 100px;
				// background-color: yellow;

				img {
					width: 104px;
					height: 67px;
					border-radius: 5px;
				}
			}
			.actives{
				display: none;
			}
		}
	}
</style>
