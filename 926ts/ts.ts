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
// interface IArr {
//     [prop:number]: any
// }
// let arr:IArr = [1,2]
// console.log(arr);


// interface IObj {
//     [prop:string]: string
// }
// let obj1:IObj = {
//     name:'123'
// }



// 2.4.1数字枚举
// 1.递增方式新增索引

    /**
     * 数字类型
     * 1.语法使用的是es6的语法
     */

    // enum Status{
    //     Uploading,
    //     Success,
    //     Falied
    // }
    // console.log(Status.Uploading);
    // console.log(Status['Success']);
    // console.log(Status.Falied);



//    2.4.3字符串枚举
 /***
  * 字符串枚举
  */
// const getvalue=()=>{
//     return 0
// }

// const names='小明'
// enum message{
//     /**错误信息 */
//     Error='error mesage',
//     SuccessError=200,
//     ClientError=names
// }



// 1.枚举成员类型
enum Animal{
    Dog=1,
    Cat=2,
}

interface Dog{
    type:Animal.Dog

}

interface Cat{
    type:Animal.Cat
}

let cat1:Cat={
    type:Animal.Cat
}
let  dog:Dog={
    type:Animal.Dog
}



// 2.联合枚举类型
/***
 * 联合数据类型
 * 多种数据类型全部联合起来
 */




// interface接口
// interface Info{
//     firstName:string;
//     lastName:string;
// }
// const getFullName=({firstName,lastName}:Info)=>
// `${firstName} ${lastName}`

interface Info{ 
    name:string,
    age:number,
    sex:string,
}

const a=({name,age,sex}:Info)=>{
  return `${name}${age}${sex}`
}

const ruls=a({name:'王丙戌',age:18,sex:"男"})
console.log(ruls);


interface Vegetables{
    color?:string;
    type:string;
}
const getVegetables=({color,type}:Vegetables)=>{
    return `A ${color ? color +"" :""}${type}`;
}
getVegetables({
    type:"tomato",
    size:12,
    price:1.2
} as Vegetables)
   


    
    








