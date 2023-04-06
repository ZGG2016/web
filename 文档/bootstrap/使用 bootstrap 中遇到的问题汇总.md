# 使用 bootstrap 中遇到的问题汇总

[TOC]

### 打印 bootstrap-table 表

使用 jQuery.print.min.js 打印 bootstrap-table 表丢失表头.

```html
<script src="/static/jquery/jQuery.print.min.js" ></script>
<script src="/static/bootstrap/js/bootstrap.min.js" ></script>
<script src="/static/bootstrap/js/bootstrap-table.min.js" ></script>

<table id="tb" 
       class="table table-sm table-bordered"
       data-toggle="table"
       data-height="700"
>
```

在打印时，在表前面插入几个 `</br>`. 

```js
function printTable() {
    $("#tb").print({
        globalStyles: true,
        mediaPrint: false,
        stylesheet: null,
        noPrintSelector: ".no-print",
        iframe: true,
        append: null,
        prepend: "</br></br></br></br></br></br></br>",
        manuallyCopyFormValues: true,
        deferred: $.Deferred(),
        timeout: 750,
        title: null,
        doctype: '<!doctype html>'
    });
}
```

append/prepend含义：

    Default: null
    Acceptable-Values: Any valid jQuery-selector or HTML-text
    Function: Adds custom HTML before (prepend) or after (append) the selected content