/*
module.exports.name = "孙悟空";
module.exports.age = 18;
module.exports.sayName = function () {
	console.log("我是孙悟空~~~");
};*/

// 赋给了一个新的变量，不再是 module 的属性 exports 了
//exports = module.exports

/*exports  = {
	name:"猪八戒",
	age:28,
	sayName:function () {
		console.log("我是猪八戒");
	}
};*/

module.exports  = {
    name: "猪八戒",
    age: 28,
    sayName: function () {
        console.log("我是猪八戒");
    }
}

// ---------------------> 理解 exports 和 module.exports 的区别
/*var a = 10;
var b = a;
a++;*/

// console.log("a = "+a);
// console.log("b = "+b);

/*var obj = new Object();
obj.name = "孙悟空";
var obj2 = obj;
obj2.name = "猪八戒";

obj2 = null;

console.log("obj = "+obj.name);
console.log("obj2 = "+obj2);*/

