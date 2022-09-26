// 定义接口
interface Iuser{
    readonly name:string,//添加只读属性
    age:number,
    flag:boolean,
    gender?:any,
    readonly id: string,//添加只读属性
    [prop:string]:string|number|boolean |undefined // 添加任意属性
    // gender?: string, //给接口添加不确定属性，这个属性在定义对象的时候可有可无，
    // [prop:string]:string|number //给接口添加不确定属性
}
let obj:Iuser = {
    gender:'jjj',
    name:'张三',
    age:28,
    flag:false,
    email:'123123@123',
    id:''

    
}
// 综上所述：增加变量和减少变量是不允许的，改变属性的数据类型是不允许的；可见，赋值的时候，变量的形状必须和接口的形状保持一致
// obj.desc = '灌灌灌灌'// 接口里面没有定义的属性，不能添加
// 接口里面定义的属性，不能删除
// obj.sex = 123

// obj.name = '李四' //无法更改只读属性的值
// 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
// obj.id = '123333'
console.log(obj); 




// 定义一个接口，
interface IParams {
    method: string
    url: string
    data?: any
}
// 将 请求方法、请求连接和请求参数封装到函数参数内
function request(params:IParams){
    let ajax = new XMLHttpRequest()
    ajax.open(params.method,params.url)
    ajax.send(params.data)
    ajax.onreadystatechange = function(){
        if(ajax.status==200 && ajax.readyState==4){
            console.log(JSON.parse(ajax.response));  
        }
    }
}
request({method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'})



// 定义一个接口，约束数组
// 定义一个接口
interface IArr {
    [prop:number]: any
}
let arr:IArr = [1,2]
console.log(arr);


interface IObj {
    [prop:string]: string
}
let obj1:IObj = {
    name:'123'
}









