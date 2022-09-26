<template>
	<view>
		<header>
			<navigator url="../login/login">
				<img src="../../static/images/左_left.png" alt="">
			</navigator>
			<h4>隐私权限政策</h4>
			
		</header>
		<p>隐私权限政策如下：xxxxx</p>
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
header{
	width: 100%;
	height: 40px;
	line-height: 40px;
	text-align: center;
	position: relative;
	
	img{
		position: absolute;
		left: 0;
		top: 5px;
		width: 30px;
		height: 30px;
	}
}
</style>
