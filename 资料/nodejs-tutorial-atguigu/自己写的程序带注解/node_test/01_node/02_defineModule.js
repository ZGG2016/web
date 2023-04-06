/*
    【定义模块】

	模块化
		- 在Node中，一个js文件就是一个模块
		- 在Node中，每一个js文件中的js代码都是独立运行在一个函数中
			而不是全局作用域，所以一个模块的中的变量和函数在其他模块中无法访问

	我们可以通过 exports 来向外部暴露变量和方法，
	只需要将需要暴露给外部的变量或方法设置为exports的属性即可
 */

console.log("02_defineModule.js");

exports.x = "02_defineModule.js -- x";
exports.y = "02_defineModule.js -- y";

exports.f = function test() {
    console.log("02_defineModule.js -- f");
}