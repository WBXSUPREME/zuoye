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

const list = async () => { //分类数据
 let data = await api({
  url: 'course/api/course/search',
  method: 'post',
 })
 return data
}

export{
	swiper,
	classification,
	list
}