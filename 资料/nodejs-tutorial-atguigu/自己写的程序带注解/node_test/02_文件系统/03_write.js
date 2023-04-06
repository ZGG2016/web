/**
 异步文件写入
 fs.open(path, flags[, mode], callback)
     - 用来打开一个文件
     - 异步调用的方法，结果都是通过回调函数的参数返回的
     - 回调函数两个参数：
         err 错误对象，如果没有错误则为null
         fd  文件的描述符
 
 fs.write(fd, string[, position[, encoding]], callback)
     - 用来异步写入一个文件
     - 回调函数三个参数：
         err
         written 写入的字节数
         string 写入的内容

 fs.close(fd, callback)
     - 用来关闭文件
     - 回调函数参数：
        err
 */

let fs = require("fs");

fs.open("hello.txt","w",function (err,fd) {
    if(!err){
        fs.write(fd, "这是异步写入的内容", 2, function (err) {
            if (!err){
                console.log("写入完毕");
            }

            fs.close(fd,function (err) {
                console.log("已关闭");
            });
        });
    }else{
        console.log("写入出错");
    }
});

console.log("还在执行异步写入....");