<template>
	<view>

		<view class="box">
			<i class="back-btn iconfont icon-close" @click="back()"></i>
			<view class="middle">
				<p>欢迎回来!</p>
				<view class="input">
					<span>手机号码</span>
					<input type="text" v-model="inp.mobile" placeholder="请输入手机号">
				</view>
				<view class="input2">
					<span>验证码</span>
					<input type="text" v-model="inp.code" placeholder="请输入手机验证码">
					<button class="verificationcode" @click="GetVerificationCode">获取验证码</button>
				</view>
				<view class="button">
					<button @click="loginbutton(inp)">登录</button>
				</view>
			</view>
			<view class="bottom">
				<p>
					<i class="iconfont icon-roundcheckfill active" @click='ibutton' v-if="inp.i===0"></i>
					<i class="iconfont icon-roundcheckfill" @click='ibutton' v-else></i>
				</p>
				<p>
					<span>请认真阅读并同意</span>
					<navigator url="../login/agreement">《用户服务协议》</navigator>
					<navigator url="../login/policy">《隐私权政策》</navigator>
				</p>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		login,
		logincode
	} from '../../common/api.js'
	import {
		ref,
		reactive
	} from 'vue'
	import {
		useRouter
	} from 'vue-router'
	const router = useRouter()
	let inp = reactive({
		mobile: '',
		code: '',
		i: 1, //我是下方阅读并同意的i标签的初始状态值
	})
	const back = () => {
		router.go(-1)
		console.log("a");
	}


	const loginbutton = (inp) => { //登录按钮
		// console.log(inp);
		let regs = /^1[3,5,7,8,9,6][0-9]{9}$/
		let coderegs = /^[0-9]{6}$/
		if (!regs.test(inp.mobile)) {
			uni.showToast({
				title: '请输入有效手机号',
				icon: 'none'
			})
			return
		} else if (!coderegs.test(inp.code)) {
			uni.showToast({
				title: '请输入有效验证码',
				icon: 'none'
			})
			return
		} else if (inp.i === 1) {
			uni.showToast({
				title: '请阅读并同意用户服务及隐私协议',
				icon: 'none'
			})
			return
		}
		login({
			code: inp.code,
			mobile: inp.mobile
		}).then((res) => {
			console.log(res);
			uni.setStorage({
				key: 'storage_key',
				data: res.data.access_token,
				success: function() {
					console.log('success');
				}
			});
		})
	}

	const GetVerificationCode = () => { //获取验证码按钮
		console.log(1);
		logincode().then((res) => {
			console.log(res);
		})
	}

	const ibutton = () => { //我是下方阅读并同意的i标签按钮
		console.log(inp.i);
		if (inp.i === 1) {
			inp.i = 0
		} else {
			inp.i = 1
		}
	}
</script>

<style lang="scss">
	.box {
		width: 100%;
		height: 100vh;
		// background-color: skyblue;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		i {
			margin-left: 20px;
			margin-top: 20px;
		}

		.middle {
			width: 90%;
			margin-left: 5%;
			height: 322px;
			// background-color: bisque;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin-bottom: 83px;

			p {
				font-size: 28px;
			}

			.input {
				background-color: #f8f6fc;
				height: 60px;
				padding-left: 15px;
				padding-top: 10px;
			}

			.input2 {
				background-color: #f8f6fc;
				height: 60px;
				padding-left: 15px;
				padding-top: 10px;
				position: relative;

				.verificationcode {
					width: 98px;
					height: 35px;
					background-color: #345dc2;
					border-radius: 5px;
					position: absolute;
					bottom: 0;
					right: 0;
					color: white;
					font-size: 14px;
				}
			}

			.button {
				button {
					background-color: #345dc2;
					width: 100%;
					height: 47px;
					border-radius: 5px;
					color: white;
				}
			}
		}

		.bottom {
			font-size: 12px;
			display: flex;
			justify-content: center;
			margin-bottom: 20px;

			p:nth-of-type(2) {
				display: flex;
				color: blue;

				span {
					color: black;
				}
			}
		}
	}

	.bottom .iconfont {
		font-size: 18px;
		color: #ccc;
		margin-right: 4px;
	}

	.bottom .iconfont.active {
		color: #345dc2;
	}
</style>
