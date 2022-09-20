<template>
	<view>
		<view class="fullsearchbox">
			<img src="../../static/images/左_left.png" alt="" @click="jump">
			<view>
				<img src="../../static/images/放大镜.png" alt="">
				<input type="text" icon='search' placeholder="搜索你想要的内容">
			</view>
			<p>取消</p>
		</view>
	</view>
</template>

<script>
	export default {
		setup(props, context) {
			const jump=()=>{
				context.emit('jump')
			}
			return{
				jump
			}
		}
	}
</script>

<style lang="scss">
.fullsearchbox{
	width: 100%;
	height: 40px;
	// background-color: lightskyblue;
	display: flex;
	justify-content: space-around;
	align-items: center;
	img{
		width: 25px;
		height: 25px;
	}
	view{
		position: relative;
		img{
			position: absolute;
			left: 6px;
			top: 4px;
			width: 20px;
			height: 20px;
		}
		input{
		width: 265px;
		height: 30px;
		background-color: #f0f1f2;
		border-radius: 15px;
		font-size: 14px;
		padding-left: 30px;
	}
	}
	
}
</style>