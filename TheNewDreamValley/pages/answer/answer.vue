<template>
	<view>
		<myinput @searchone='searchone'></myinput>
	</view>
</template>

<script>
	import myinput from "../../components/myinput/myinput.vue"
	import {
		useRouter
	} from 'vue-router'
	export default {
		components: {
			myinput
		},
		setup() {
			const router = useRouter()
			const searchone = () => {
				router.push('/pages/searchpages/searchpages')
			}
			return {

				searchone

			}
		}
	}
</script>

<style lang="scss">

</style>
