# js 页面跳转

#### 1 场景

在商品总览表中点击商品名称，跳转到展示这个商品的具体信息的页面。

这里使用 django 框架。

#### 2 程序

思路：给商品名称所在的 `<textarea>` 绑定一个双击事件，通过双击事件，发送 GET 请求，获取商品的唯一 id【根据业务实际情况获取】，然后将这个 id 作为 url 参数传递到 view 获取这个商品相关的所有数据，最后将数据发送到页面上。

```js
// 获取商品的唯一 id
function get_itemid(obj) {
    let itemName = obj.innerHTML;

    $.ajax({
        url: "/get-itemid/",
        data: {"itemname":itemName},
        type: "GET",
        async : false,
        success: function(data) {
            window.location.href='/go-item-page/?itemid=' + data;
        },
        error: function(textStatus) {
            console.log(textStatus);
        }
});
```

views

```python
def go_item_page(request):
    if request.GET:
        context = []
        data_lst = get_item_data()
        for item in data_lst:
            if item['itemid'] == request.GET.dict()['itemid'][0]:
                context.append(item)
        return render(request, 'itemdetail.html', {"context": context})
```