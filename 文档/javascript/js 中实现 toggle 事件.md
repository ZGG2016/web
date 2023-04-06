# js 中实现 toggle 事件

[TOC]

#### 1 场景

点击修改按钮可以修改，再点一次修改按钮，取消修改。

#### 2 程序

通过变量 flag 的变化，做出对应的事件。

```js 
var upd_flag = 0
function updateRow(obj){
    var row = obj.parentElement.parentElement;
    var data = row.getElementsByTagName("textarea");

    if(upd_flag === 0){
        for(var i=1,ilen=data.length;i<ilen;i++) {
            data[i].readOnly=false;
            data[i].style.border="2px solid Tomato";
        }
        upd_flag += 1;
    }else{
        for(var j=1,jlen=data.length;j<jlen;j++) {
             data[j].readOnly=true;
             data[j].style.border="0";
        }
        upd_flag -= 1;
	}	
}
```` 