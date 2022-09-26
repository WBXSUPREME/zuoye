// let a:number=1
// let b:string=1
// let c:number=0
// c=a+b


// let foo=1
// foo.split('')


//字符串类型
// let myName:string='王丙戌'
// let myAge:number=12
// //造句
// let sentence=`My name is ${myName},My age is ${myAge}`
// document.body.innerHTML=sentence


//第一种，可以在元素类型后面接上[]，表示由此类型元素组成 的一个数组
// let list:number[]=[1,2,3,4]
// let listString:string[]=['1','2','3']

// let list:number[]=[1,2,3,'4']



// declare function  create(o:object|null) :void
// create({props:0})
// create(null)
// create(3222)


// 元组 
//数组：合并了相同类型的对象，长度不限制
//元组（Tuple）：合并了不同类型的对象，乙知长度
// let tom:[string,number]=['Tom',25]


// any类型
// JavaScript的类型是灵活的，程序又是也是多变的，
// 有时，我们在编写代码的时候，并不能清楚的知道一个值到底是什么样的类型



// void类型
//void和any相反，any时表示任意类型，
// 而void时表示没有任意类型，就是什么类型都不是，这在我们定义还能输，函数没有返回值时会用到
function alertName():string{
    console.log('my name is void');
    return 'myasdjhfjasdjfnasdfadsfasdf'
}
//如果有返回值，那么就要根据返回值进行定义，就

