1.理解对象

## 属性类型
数据属性和访问器属性

## 数据属性
[[configruable]] 能否delete 删除属性
[[Enumerable]] 能否for in循环遍历属性
[[Writable]] 能否修改属性的值
[[Value]] 属性的数据值

## 如何操作数据属性?
Object.defineProperty(obj,property,desc)

## 访问器属性
[[Configurable]]
[[Enumerable]]
[[Get]]
[[Set]]

## 太麻烦
Object.defineProperties()

## 读取属性的特性
Object.getOwnPropertyDescriptor()

## 创建对象

### 工厂模式

### 工厂模式缺点
对象无法识别
需要创建对象

### 构造函数模式
使用new 关键字
没有显示的创建对象
直接将属性与方法赋给了this对象;
没有return语句

## new的声明周期
创建一个新对象
将构造函数的作用域赋给新的对象
执行构造函数中的代码
返回新对象

## 问题
构造函数内的函数会重复多次创建

## 原型模式
每个函数有prototype
特定类型的所有实例共享的属性和方法


## 继承

## JS中有继承吗?

## 构造函数、原型和实例的关系？

构造函数都有一个原型对象
原型对象都包含一个指向构造函数的指针
实例都包含一个指向原型对象的内部指针

## 原型链


function test(name,test){
    var obj = {};
    obj.__proto__ = test.prototype;
    test.call(obj) 
}