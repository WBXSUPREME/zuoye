import http from '/request/http.js'
// export const switchlist = () => {
//  http('/home/swiperdata').then((res)=> res,
//  (err)=>err)
// }
// 轮播图
export const switchlist = async() => {
 let data = await http({
  url:'/home/swiperdata',
  method:'get'
 })
 return data
}
// nav导航栏
export const nav1 = async() => {
 let data = await http({
  url:'/home/catitems',
  method:'get'
 })
 return data
}
// 楼层数据
export const floorList = async() => {
 let data = await http({
  url:'/home/floordata',
  method:'get'
 })
 return data
}

//分类
export const classxx=async()=>{
	let data=await http({
		url:'/categories',
		method:'get'
	})
	return data
}