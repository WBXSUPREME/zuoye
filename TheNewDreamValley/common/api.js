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



export{
	swiper,
	classification,
	list,
	fenleilist,
	readinglists
}