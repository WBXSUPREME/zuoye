import api from '/common/request.js'

const swiper = async () => { //轮播图
	let data = await api({
		url: 'article/api/advert/show/1',
		method: 'get',
	})
	return data
}

const classification = async () => { //分类数据
	let data = await api({
		url: 'article/api/category/label/list',
		method: 'get',
	})
	return data
}

const list = async () => { //首页分类数据
	let data = await api({
		url: 'course/api/course/search',
		method: 'post',
	})
	return data
}

const fenleilist = async () => { //分类侧边栏数据&&阅读页面头部导航栏
	let data = await api({
		url: 'article/api/category/label/list',
		method: 'get',
	})
	return data
}

/** 阅读页面列表数据 */
const readinglists = async () => {
	let data = await api({
		url: 'article/api/article/search',
		method: 'post',
	})
	return data
}

/** 热门问答 */
const hotanswer = async () => {
	let data = await api({
		url: 'question/api/question/hot',
		method: 'post',
	})
	return data
}

/** 最新问答 */
const newanswer = async () => {
	let data = await api({
		url: 'question/api/question/new',
		method: 'post',
	})
	return data
}

/** 等待问答 */
const waitanswer = async () => {
	let data = await api({
		url: 'question/api/question/wait',
		method: 'post',
	})
	return data
}

/** 登录验证码接口 */
const logincode = async () => {
	let data = await api({
		url: 'system/sms/code',
		method: 'post',
	})
	return data
}

/** 登录接口 */
const login = async (item) => {
	let data = await api({
		url: 'auth/login',
		method: 'post',
		data: item
	})
	return data
}

/** 首页详情页接口 */
const indexXq = async (item) => {
	let data = await api({
		url: 'course/api/course/null',
		method: 'get',
		data: item
	})
	return data
}

export {
	swiper,
	classification,
	list,
	fenleilist,
	readinglists,
	hotanswer,
	newanswer,
	waitanswer,
	login,
	logincode,
	indexXq
}
