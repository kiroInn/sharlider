## Archery Game
In Nock

![](assets/js/nock/trans.png)

![](assets/js/nock/nock.jpg)

![](assets/js/nock/nock1.jpg)

HTTP
Mocking
Expectations
for Node.js

## 如何工作

Override http.request函数

## Using nock

最基本的用法
拦截给定 URL 的 GET 请求

![](assets/js/nock/using.png)

## 还可以通过设置数据查询字符串

![](assets/js/nock/byString.png)

## 缩小 GET 和 POST 匹配的范围

![](assets/js/nock/using2.png)

## 在响应请求之前做一些高级的处理逻辑
  可以用一个函数来reply

![](assets/js/nock/advance.png)

## 配合REST使用

HTTP verb
GET, POST, PUT, HEAD, DELETE, PATCH
使用.intercept('/path', 'PATCH')

![](assets/js/nock/intercepter.png)

# Http Setting

hostname,path,request body,
query string,replies,headers,Reply Headers

## Restoring

nock.restore() <=> nock.activate()

## Expectations

当Nock一个Http后
可以期望一些事情

e.g.
isDone
cleanAll
isActive
persist

# Recording

![](assets/js/nock/record.png)

Ref:https://github.com/node-nock/nock
https://davidwalsh.name/nock

# Thanks a lot!
