# Ajax

Asynchronous Javascript And XML
异步JavaScript和XML
通过HTTP协议与服务器交互数据
可以在不重新加载整个网页的情况下
对网页的某部分进行更新

## 目的
提高用户体验
较少网络数据的传输量

## 原理
![](assets/js/ajax.png)

## XHR实例的创建
new XMLHttpRequest(); 
IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
new ActiveXObject("Microsoft.XMLHTTP");
IE6, IE5 浏览器执行代码

## XHR请求STEP1 OPEN
open方法用于创建HTTP请求，但是请求并未发送
open(method, url [, async = true [, username = null [, password = null]]])

## XHR请求STEP2 SEND
send([body = null])
参数body定义HTTP请求的数据
当HTTP请求的方法为GET、HEAD时

## XHR取消请求 ABORT
abort()
发送后如果想终止这个请求
则可以调用abort

## XHR 事件回调
readyState描述XHR的状态
UNSENT 0
OPENED 1
HEADERS_RECIEIVED 2
LOADING 3
DONE 4

onreadystatechange
当XHR的状态发生改变时就调用
