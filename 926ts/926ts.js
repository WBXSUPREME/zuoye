// let a:number=1
// let b:string=1
// let c:number=0
// c=a+b
// let foo=1
// foo.split('')
//字符串类型
var myName = '王丙戌';
var myAge = 12;
//造句
var sentence = "My name is ".concat(myName, ",My age is ").concat(myAge);
document.body.innerHTML = sentence;
//第一种，可以在元素类型后面接上[]，表示由此类型元素组成 的一个数组
var list = [1, 2, 3, 4];
var listString = ['1', '2', '3'];
var list = [1, 2, 3, '4'];
create({ props: 0 });
create(null);
create(3222);
// 元组 
//数组：合并了相同类型的对象，长度不限制
//元组（Tuple）：合并了不同类型的对象，乙知长度
var tom = ['Tom', 25];
// any类型
// JavaScript的类型是灵活的，程序又是也是多变的，
// 有时，我们在编写代码的时候，并不能清楚的知道一个值到底是什么样的类型
// void类型
//void和any相反，any时表示任意类型，
// 而void时表示没有任意类型，就是什么类型都不是，这在我们定义还能输，函数没有返回值时会用到
function alertName() {
    console.log('my name is void');
    return 'myasdjhfjasdjfnasdfadsfasdf';
}
//如果有返回值，那么就要根据返回值进行定义，就
