<template>
	<view>
		<fullsearch @jump='jump'></fullsearch>
		<h1>我是搜索页面</h1>
		<p>历史搜索等等等埃里克你都iv奥迪不能离开收入高那地方v</p>
		
	</view>
</template>

<script>
	import fullsearch from "../../components/fullsearch/fullsearch.vue"
	import {useRouter} from 'vue-router'
	export default {
		components: {
			fullsearch
		},
		setup() {
			const router=useRouter()
			const jump=()=>{
				router.go(-1)
			}
			return{
				jump
			}
		}
		
	}
</script>

<style lang="scss">

</style>
