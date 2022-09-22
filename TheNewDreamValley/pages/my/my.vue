<template>
	<view class="zbox">
		<!-- /** 头部 */ -->
		<view class="header">
			<view class="son">
				<img src="../../static/images/article-active.png" alt="">
				<view class="usertext">
					<p>毛杰</p>
					<p>用户名：Patricia Lee</p>
				</view>
				<i class="iconfont icon-right"></i>
			</view>
		</view>
		
		<!-- /** 我的订单 */ -->
		<view class="order">
			<p>
				<img src="../../static/images/article-active.png" alt="">
				<span>我的订单</span>
				<i class="iconfont icon-right"></i>
			</p>
			<p>
				<img src="../../static/images/article-active.png" alt="">
				<span>我的订单</span>
				<i class="iconfont icon-right"></i>
			</p>
			<p>
				<img src="../../static/images/article-active.png" alt="">
				<span>我的订单</span>
				<i class="iconfont icon-right"></i>
			</p>
		</view>
		
		<view class="order">
			<p>
				<img src="../../static/images/article-active.png" alt="">
				<span>我的订单</span>
				<i class="iconfont icon-right"></i>
			</p>
			<p>
				<img src="../../static/images/article-active.png" alt="">
				<span>我的订单</span>
				<i class="iconfont icon-right"></i>
			</p>
			
		</view>
		
		<view class="order">
			<p>
				<img src="../../static/images/article-active.png" alt="">
				<span>我的订单</span>
				<i class="iconfont icon-right"></i>
			</p>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.zbox{
		width: 100%;
		height: 93vh;
		background-color: gray;
	}
.header{
	width: 100%;
	height: 176px;
	background-color: #345dc2;
	overflow: hidden;
	.son{
		width: 100%;
		height: 125px;
		background-color: skyblue;
		margin-top: 51px;
		border-radius: 15px 15px 0 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		img{
			width: 80px;
			height: 80px;
		}
		.usertext{
			margin-right: 80px;
		}
	}
}
.order{
	width: 100%;
	height: 150px;
	// background-color: red;
	margin-top: 10px;
	background-color: white;
	p{
		width: 100%;
		height: 33%;
		line-height: 350%;
		padding-left: 20px;
		// overflow: hidden;
		img{
			width: 30px;
			height: 30px;
			// margin-top: 30px;
		}
		i{
			margin-left: 60%;
		}
	}
	p:nth-of-type(1){
		border-bottom: 1px solid gray;
	}
	p:nth-of-type(2){
		border-bottom: 1px solid gray;
	}
}
</style>
