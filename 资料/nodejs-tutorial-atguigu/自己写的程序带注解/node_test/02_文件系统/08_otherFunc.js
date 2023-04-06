

const fs = require("fs");

// 检查文件是否存在
// const res = fs.existsSync("hello.txt");
// console.log(res);

// 查看文件状态
// fs.stat("hello.txt", function (err,stats) {
//     console.log(stats);
// })
// console.log("--------->");

// 监视文件变化
// 回调函数在文件发生变化时执行
// {interval:1000} 表示
fs.watchFile("hello.txt",{interval:1000},function (curStat, prevStat) {
    console.log(curStat.size);
    console.log(prevStat.size);
});
console.log("--------->");