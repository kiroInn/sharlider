# Intercept HTTP Requests with Nock

## Nock

HTTP mocking
HTTP expectations library
for Node.js

## 如何工作
Override http.request函数来工作

## Using nock

nock 的最基本的用法是拦截给定 URL 的 GET 请求

hostname,path,request body,
query string,replies,headers,Reply Headers

## 还可以通过设置数据查询字符串

## 缩小 GET 和 POST 匹配的范围

## 如果你想在响应请求之前做一些高级的处理逻辑 可以用一个函数来reply

## 配合REST使用

HTTP verb
GET, POST, PUT, HEAD, DELETE, PATCH
使用.intercept('/path', 'PATCH')


## Expectations
HTTP请求会

## Restoring
