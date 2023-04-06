/*
	同步、异步、简单文件的写入都不适合大文件的写入，性能较差，容易导致内存溢出

    创建一个可写流
	fs.createWriteStream(path[, options])
		- 可以用来创建一个可写流
		- path，文件路径
		- options 配置的参数
 */

const fs = require("fs");

let ws = fs.createWriteStream("hello.txt");

/*
    可以通过监听流的open和close事件来监听流的打开和关闭

	on(事件字符串,回调函数)
		- 可以为对象绑定一个事件

	once(事件字符串,回调函数)
		- 可以为对象绑定一个一次性的事件，该事件将会在触发一次以后自动失效
* */

ws.once("open", function () {
    console.log("可写流打开了....");
});

ws.once("close", function () {
    console.log("可写流关闭了....");
});

ws.write("aaaaaaaa");
ws.write("bbbbbbbb");
ws.write("cccccccc");

ws.end();
// ws.close();  // 使用 close 会导致仅第一条数据写入