// 模块功能主要由两个命令构成：export和import。
// export命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

// 一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。
// 如果你希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量

// export const name = 'zhangsan';
// export const age = 18;
// export const color = 'red';
// export const sayName = function() {
//     console.log('zhangsan');
// }

//也可以这样
// const name = 'zhangsan ';
// const age = 18;
// const color = 'red ';
// const sayName = function() {
//     console.log('zhangsan');
// }
// export {name,age,color,sayName}

// const obj = {
//     foo:'foo'
// }
// export default {obj}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName(){
        return this.name;
    }
}

// 使用export default命令为模块指定默认输出
export default {Person}