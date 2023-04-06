1. 先初始化 
```sh
PS E:\file\typescript_tutorial\03_webpack> npm init -y
```
2. 安装包
```sh
PS E:\file\typescript_tutorial\03_webpack> npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin html-webpack-plugin

PS E:\file\typescript_tutorial\03_webpack> npm i -D @babel/core @babel/preset-env babel-loader core-js
```

3. 根目录下创建webpack的配置文件webpack.config.js

4. 根目录下创建tsconfig.json，配置可以根据自己需要

5. 修改package.json添加如下配置
```json
       {
         ...略...
         "scripts": {
           "test": "echo \"Error: no test specified\" && exit 1",
           "build": "webpack",
           "start": "webpack serve --open chrome.exe"
         },
         ...略...
       }
```

6. 在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器