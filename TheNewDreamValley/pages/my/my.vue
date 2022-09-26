<template>
	<view class="zbox">
		<!-- /** 头部 */ -->
		<view class="header">
			<navigator url="../login/login">
				<view class="son">
					<img src="../../static/images/article-active.png" alt="">


					<!-- <view class="usertext">
					<h2>毛杰</h2>
					<p>用户名：Patricia Lee</p>
				</view> -->

					<view class="usertext">
						<h2>请登录</h2>
					</view>

					<i class="iconfont icon-right"></i>
				</view>
			</navigator>
		</view>

		<!-- /** 我的订单 */ -->
		<view class="order">
			<p>
				<view class="img"><img src="../../static/images/article-active.png" alt=""></view>
				<view class="dj">我的订单</view>
				<view class="i"><i class="iconfont icon-right"></i></view>
			</p>
			<p>
				<view class="img"><img src="../../static/images/article-active.png" alt=""></view>
				<view class="dj">我的余额</view>
				<view class="i"><i class="iconfont icon-right"></i></view>
			</p>
			<p>
				<view class="img"><img src="../../static/images/article-active.png" alt=""></view>
				<view class="dj">我的学习</view>
				<view class="i"><i class="iconfont icon-right"></i></view>
			</p>
		</view>

		<!-- 设置 -->
		<view class="order">
			<p>
				<view class="img"><img src="../../static/images/article-active.png" alt=""></view>
				<view class="dj">设置</view>
				<view class="i"><i class="iconfont icon-right"></i></view>
			</p>
			<p>
				<view class="img"><img src="../../static/images/article-active.png" alt=""></view>
				<view class="dj">意见反馈</view>
				<view class="i"><i class="iconfont icon-right"></i></view>
			</p>
		</view>

		<!-- 关于我们 -->
		<view class="order">
			<p>
				<view class="img"><img src="../../static/images/article-active.png" alt=""></view>
				<view class="dj">关于我们</view>
				<view class="i"><i class="iconfont icon-right"></i></view>
			</p>
		</view>



	</view>
</template>

<script setup>

</script>

<style lang="scss">
	.zbox {
		width: 100%;
		height: 93vh;
		background-color: #f8f9fb;
	}

	.header {
		width: 100%;
		height: 176px;
		background-color: #345dc2;
		overflow: hidden;

		.son {
			width: 100%;
			height: 125px;
			background-color: white;
			margin-top: 51px;
			border-radius: 15px 15px 0 0;
			display: flex;
			justify-content: space-around;
			align-items: center;

			img {
				width: 80px;
				height: 80px;
			}

			.usertext {
				margin-right: 80px;

				p {
					color: #98a7b5;
				}
			}
		}
	}

	.order {
		width: 100%;
		// height: 100%;
		margin-top: 10px;
		background-color: white;

		p {
			width: 100%;
			height: 50px;
			padding-left: 20px;
			display: flex;
			align-items: center;
			position: relative;

			.img {
				width: 25px;
				height: 25px;

				img {
					width: 25px;
					height: 25px;
				}
			}

			.dj {
				margin-left: 15px;
			}

			.i {
				// margin-left: 226px;
				position: absolute;
				left: 350px;
			}
		}


	}
</style>
