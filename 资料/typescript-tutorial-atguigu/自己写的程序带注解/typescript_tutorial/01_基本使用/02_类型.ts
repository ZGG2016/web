// 1. 字面量
let a: 'hello';
// a = 'aa';  // 报错

// 2. 可以使用 | 来连接多个类型（联合类型）
let b: 'aa' | 'bb' | 12;
b = 'aa';
b = 'bb';
b = 12;

// 3. any
// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let c: any;
c= 'cc';
c= 12;
c= true;

// 4. unknown
// unknown 表示未知类型的值
let d: unknown;
d= 'cc';
d= 12;
d= true;


// any unknown 区别
let e: string;
// c的类型是any，它可以赋值给任意变量
e = c;
// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// e = d;  // 报错

// 可以使用类型断言，解决 unknown类型的变量不能直接赋值给其他变量 的问题
// 5. 类型断言，可以用来告诉解析器变量的实际类型
/*
* 语法：
*   变量 as 类型
*   <类型>变量
*
* */
e = d as string;
e = <string>d;

// 6. void 用来表示空，以函数为例，就表示没有返回值的函数
function f():void {
    // return;
    // return null;
    // return undefined;
}


// 7. never 表示永远不会返回结果
function f1(a,b):never {
    throw new Error("出错了");
}