// 1. var的问题
// 1.1 变量提升
// console.log(a); // undefined
// var a = 1;
// console.log(a); // 1

// 以上代码就会被编译成：
// var a;
// console.log(a);
// a = 1;
// console.log(a);

// 1.2 作用域
// console.log(a);  // undefined
// if (true){
//     var a = 2;
//     console.log(a);  // 2
// }
// console.log(a); // 2

// 1.3 变量覆盖
// var a = 3.1
// var a = 3.2
// console.log(a); // 3.2

// 2. let
// 2.1 let 解决变量提升
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// let a = 1;
// console.log(a);

// 2.2. let 块级作用域
// console.log(a);  // ReferenceError: Cannot access 'a' before initialization
// if (true){
//     let a = 2;
//     console.log(a);  // 2
// }
// console.log(a); // ReferenceError: Cannot access 'a' before initialization

// 2.3 let 解决变量覆盖
// let a = 3.1;
// let a = 3.2;
// console.log(a); // SyntaxError: Identifier 'a' has already been declared

// 3 const 具有let的以上三个特点，
// 3.1 但一般用来声明常量，声明后，就不能再修改了
// const a = 4;
// a = 5; // 飘红   Attempt to assign to const or readonly variable

// 3.2 声明对象
// const person = {name: 'zhangsan'}
// person.name = 'lisi'; // 可以修改
// console.log(person);
// const person = {age: 12}  // 类似于 --> 2.3 let 解决变量覆盖
// console.log(person); // SyntaxError: Identifier 'person' has already been declared

//////////////////////////////////////////////////////
// let 的作用
// 1. 应用在 for 循环中
// const arr = [];
// for(var a = 0; a < 10; a++){
//     arr[a] = function () {
//         return a;
//     }
// }
// console.log(arr);  // 一堆函数
// console.log(arr[6]());  // 10   因为变量提升，原因如下：

// 以上相当于:   当循环结束后，a=10，函数就都返回10
// const arr = [];
// var a;
// for(a = 0; a < 10; a++){
//     arr[a] = function () {
//         return a;
//     }
// }
// console.log(arr[5]());  // 10
// console.log(arr[6]());  // 10

// 所以这里使用 let
// const arr = [];
// for(let a = 0; a < 10; a++){
//     arr[a] = function () {
//         return a;
//     }
// }
// console.log(arr[5]());  // 5
// console.log(arr[6]());  // 6

// 2 不会污染全局变量


// 在默认情况下用const, 而只有你在知道变量值需要被修改的情况下使用let