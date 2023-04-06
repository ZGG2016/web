/*
	Buffer(缓冲区)
		- Buffer的结构和数组很像，操作的方法也和数组类似
		- 数组中不能存储二进制的文件，而buffer就是专门用来存储二进制数据
		- 使用buffer不需要引入模块，直接使用即可
		- 在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示
			buffer中每一个元素的范围是从00 - ff   0 - 255
			00000000 - 11111111

			计算机 一个0 或一个1 我们称为1位（bit）

			8bit = 1byte（字节）
			1024byte = 1kb
			1024kb = 1mb
			1024mb = 1gb
			1024gb = 1tb

			buffer中的一个元素，占用内存的一个字节

		- Buffer的大小一旦确定，则不能修改，Buffer实际上是对底层内存的直接操作

 */

// const str = "hello 世界";
// 将一个字符串保存到buffer中
// const buf = Buffer.from(str);
// console.log(buf);
// console.log(buf.length);  //占用内存的大小
// console.log(str.length);  //字符串的长度

// ---------------------------------------

//创建一个指定大小的buffer
//buffer构造函数都是不推荐使用的
//var buf2 = new Buffer(10);//10个字节的buffer
//console.log(buf2.length);

// ---------------------------------------

//创建一个10个字节的buffer
// let buf2 = Buffer.alloc(10);
// // console.log(buf2); // <Buffer 00 00 00 00 00 00 00 00 00 00>
// //通过索引，来操作buf中的元素
// buf2[0] = 88
// buf2[1] = 255
// buf2[2] = 0xaa
// buf2[10] = 156   // 超出了 Buffer 的大小，不会保存在它对应的内存中
// console.log(buf2); // <Buffer 58 ff aa 00 00 00 00 00 00 00>

// buf2[3] = 400  // buffer中每一个元素的范围是 00000000 - 11111111 (二进制)，而 400 的二进制超过了最大范围，就被截断了
// console.log(buf2); // <Buffer 58 ff aa 90 00 00 00 00 00 00>

// //只要数字在控制台或页面中输出一定是10进制，若要改变，可以调用 toString()，传入要改变成的进制
// console.log(buf2[2]); // 170
// console.log(buf2[2].toString(16)); // aa

// 遍历
// for(let i=0 ; i<buf2.length ; i++){
//     console.log(buf2[i]);
// }

// Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
// 为这个 buffer 分配的内存是不会先清空内存上的数据，所以可能仍会存在之前的数据
// let buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);

/*
	Buffer.from(str) 将一个字符串转换为buffer
	Buffer.alloc(size) 创建一个指定大小的Buffer
	Buffer.alloUnsafe(size) 创建一个指定大小的Buffer，但是可能包含敏感数据
 	buf.toString() 将缓冲区中的数据转换为字符串
 */

let buf4 = Buffer.from("啊啊啊啊");

console.log(buf4.toString());