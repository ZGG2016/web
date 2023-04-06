// nodemon server.js  启动服务

const express = require('express');
const app = express();

app.get('/server', (request, response)=>{
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
    //设置响应体
    response.send('HELLO AJAX');
});

app.post('/server', (request, response)=>{
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.send('HELLO AJAX POST');
});

//可以接收任意类型的请求 
app.all('/server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    response.send('HELLO AJAX POST');
});


//可以接收任意类型的请求 
app.all('/json-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    data = JSON.stringify({"name":"zhangsan","age":"12"});
    response.send(data);
});

app.all('/ie', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    response.send('HELLO IE - 2');
});

app.all('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    //响应头
    response.setHeader('Access-Control-Allow-Headers', '*');
    setTimeout(()=>{
        response.send('延迟响应');
    },3000);
    
});

app.all('/jquery-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    data = JSON.stringify({"name":"zhangsan","age":"12"});
    response.send(JSON.stringify(data));
});

app.all('/axios-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    data = JSON.stringify({"name":"zhangsan","age":"12"});
    response.send(JSON.stringify(data));
});

app.all('/fetch-server', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    
    data = JSON.stringify({"name":"zhangsan","age":"12"});
    response.send(JSON.stringify(data));
});

app.all('/jsonp-server', (request, response) => {

    const data = {
        "name":"zhangsan",
        "age":"12"
    };
    let str = JSON.stringify(data);

    response.end(`handle(${str})`);
});

app.all('/check-username', (request, response) => {

    const data = {
        "exist":"1",
        "msg":"用户已存在"
    };
    let str = JSON.stringify(data);

    response.end(`handle(${str})`);
});

app.all('/jquery-jsonp-server', (request, response) => {

    const data = {
        "name":"zhangsan",
        "age":"12"
    };
    let str = JSON.stringify(data);
    let cb = request.query.callback;

    response.end(`${cb}(${str})`);
});

app.all('/cors-server', (request, response)=>{
    //设置响应头
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.send('hello CORS');
});

app.listen(8000, ()=>{
    console.log('服务已经启动, 8000 端口监听中....');
});