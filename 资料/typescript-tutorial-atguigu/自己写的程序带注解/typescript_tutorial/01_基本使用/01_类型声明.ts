// 声明一个变量a，同时指定它的类型为number
let a: number;
a = 10;
// a = '123'

// 声明完变量直接进行赋值
let b: boolean = true;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = true;
// c = 10

// 函数
// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"

function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1,2)); // 3
let res = add(1,2);
console.log(typeof res); // number


// 先执行 `tsc 01_类型声明.ts`，再执行js文件