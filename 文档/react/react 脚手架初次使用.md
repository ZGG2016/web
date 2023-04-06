# react 脚手架初次使用

来自：[尚硅谷 react 教程](https://www.bilibili.com/video/BV1wy4y1D7JT?p=49)

[TOC]

### 创建项目并启动

第一步，全局安装：`npm i -g create-react-app`

第二步，切换到想创项目的目录，使用命令：`create-react-app hello-react`

第三步，进入项目文件夹：`cd hello-react`

第四步，启动项目：`npm start`

### react脚手架项目结构

	public ---- 静态资源文件夹
		favicon.icon ------ 网站页签图标
		index.html -------- 主页面
		logo192.png ------- logo图
		logo512.png ------- logo图
		manifest.json ----- 应用加壳的配置文件
		robots.txt -------- 爬虫协议文件
	
	src ---- 源码文件夹
		App.css -------- App组件的样式
		App.js --------- App组件
		App.test.js ---- 用于给App做测试
		index.css ------ 样式
		index.js ------- 入口文件
		logo.svg ------- logo图
		reportWebVitals.js
			--- 页面性能分析文件(需要web-vitals库的支持)
		setupTests.js
			---- 组件单元测试的文件(需要jest-dom库的支持)
