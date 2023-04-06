// 1. object 表示一个js对象
let obj: object;
obj = {name: 'zhangsan', age: 14};
obj = {};
obj = function () {
};

// 2. 限制对象中的属性
let a: { name: string };
a = {name: 'zhangsan'};
// a = {name: 11}; // 报错
// a = {name: 'zhangsan', age: 14}; // 报错

// 可选属性
let b: { name: string, age?: number };
b = {name: 'zhangsan'};
b = {name: 'zhangsan', age: 14};

// 3. 多个可选属性，或任意类型的属性
// [propName: string]: any  表示任意类型的属性
let c: { name: string, [propName: string]: any };
c = {name: 'zhangsan'};
c = {name: 'zhangsan', age: 14};
c = {name: 'zhangsan', age: 14, gender: "male"};

let d: { name: string, [propName: string]: string };
// d = {name: 'zhangsan', age: 14};  // 报错

/*
*   4. 设置函数结构的类型声明：
*       语法：(形参:类型, 形参:类型 ...) => 返回值
* */
let e: (a: number, b: number) => number;
e = function (a, b) {
    return a + b;
}

/*
*   5. 数组的类型声明：
*       类型[]
*       Array<类型>
* */
let f: string[];
let g: Array<number>;

/*
*   6. 元组，元组就是固定长度的数组
*       语法：[类型, 类型, 类型]
* */
let h: [string, number];
h = ['zhangsan', 13];

// 7. enum 枚举
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender };
i = {name: 'zhangsan', gender: Gender.Male};

// 8. 和&  或|
let j: { name: string } & { age: number };
// 两个属性必须同时有，且类型对应
j = {name: 'zhangsan', age:14}
// j = {name: 'zhangsan'}  // 报错

let k: { name: string } | { age: number };
k = {name: 'zhangsan', age:14}
k = {name: 'zhangsan'}

// 9. 类型的别名
type str = string // 给 string 类型取个别名
let l: str;
l = 'lll';

type myType = 1 | 2 | 3 | 4 | 5;
let m: myType;
let n: myType;