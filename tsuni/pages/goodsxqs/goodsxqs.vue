<template>
	<view>
		<h1>商品详情页面</h1>
		
	</view>
</template>

<script setup>
	import {
		goods
	} from '../../request/api.js'
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		reactive
	} from 'vue'
	onLoad((e) => {
		console.log(e);
		goods(e.id).then((res) => {
			console.log(res.message);
		})
	})
</script>

<style lang="scss">

</style>
