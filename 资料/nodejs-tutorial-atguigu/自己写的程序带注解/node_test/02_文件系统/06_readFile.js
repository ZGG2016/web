/*
	1.同步文件读取
	2.异步文件读取
	3.简单文件读取
	 fs.readFile(path[, options], callback)
	 fs.readFileSync(path[, options])
	 	- path 要读取的文件的路径
	 	- options 读取的选项
	 	- callback回调函数，通过回调函数将读取到内容返回(err , data)
	 		err 错误对象
	 		data 读取到的数据，会返回一个Buffer

	4.流式文件读取
 */


const fs = require("fs");

fs.readFile("hello.txt", function (err, data) {
    if (!err){
        // 写入到 hello2.txt 中
        fs.writeFile("hello2.txt", data,function (err) {
            if (!err){
                console.log("写入完毕");
            }
        })
    }else{
        console.log("读取失败...");
    }
})

console.log("...");