/*
	流式文件读取也适用于一些比较大的文件，可以分多次将文件读取到内存中
 */

const fs = require("fs");

let rs = fs.createReadStream("hello.txt");
let ws = fs.createWriteStream("hello2.txt");

rs.once("close",function () {
    console.log("可读流关闭了~~");
    //数据读取完毕，关闭可写流  【注意这里】
    ws.end();
});

//监听流的开启和关闭
rs.once("open",function () {
    console.log("可读流打开了~~");
});

ws.once("open",function () {
    console.log("可写流打开了~~");
});

ws.once("close",function () {
    console.log("可写流关闭了~~");
});

// 1. 如果要读取一个可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，它会自动开始读取数据
// rs.on("data", function (data) {
//     ws.write(data);
// })

// 2. 也可以使用pipe()可以将可读流中的内容，直接输出到可写流中
rs.pipe(ws);