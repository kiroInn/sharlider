# 对象类

## Constructor

对象初始化器（Object initialiser）或对象字面量（literal）
{[nameValuePair1[, nameValuePair2[, ...nameValuePairN]]]}

以构造函数形式来调用
new Object([value])

nameValuePair1,nameValuePair2
成对的名称（字符串）与值（任何值）
其中名称通过冒号与值分隔

value
任何值

## 对象属性基本操作
Create
Retrieve
Update
Delete

## 对象的创建
字面量/直接量
构造函数
  系统自带的构造函数new Object()
  自定义

## What is the 'new' keyword?

1.create new object simply object
2.current scope varibale initialaztion linked this
3.return this

# Array类型

数组是一种类列表对象，它的原型中提供了遍历和修改元素的相关操作

Create
Retrieve
Iterator
Push
Pop
Shift
Unshift
IndexOf
Splice
Sort

JavaScript 数组的长度和元素类型都是非固定的
并且其数据在内存中也可以不连续
所以 JavaScript 数组不一定是密集型的

但如果这些特性不适用于你的特定使用场景的话
可以考虑使用类型数组 TypedArray

![](assets/js/typearray.png)

## Date类型
## Constructor
new Date();
new Date(vale);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);

![](assets/js/datearguments.png)

![](assets/js/dateDesc.png)

## 练习测试你机器的性能

## Function类型

## Constructor
new Function ([arg1[, arg2[, ...argN]],] functionBody)

arg1, arg2, ... argN
被函数使用的参数的名称必须是合法命名的
参数名称是一个有效的JavaScript标识符的字符串
functionBody
一个含有包括函数定义的JavaScript语句的字符串。

## Attributes
Function.arguments
以数组形式获取传入函数的所有参数。此属性已被arguments替代。

Function.caller
获取调用函数的具体对象

## Method
Function.prototype.apply()
在一个对象的上下文中应用另一个对象的方法
参数能够以数组形式传入

Function.prototype.bind()
bind()方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 bind()方法的第一个参数作为 this,传入 bind()方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.
Function.prototype.call()
在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。

## 包装类

# Boolean
true & new Boolean(true)
# Number
valueOf 返回对象表示的基本数据类型
toString 传递一个表示基数的参数,返回几进制数值字符串
toFixed 返回指定小数位的字符串表示
可以表示0-20位小数位数值
toExponential 返回指数表示字符串

## String

## Syntax
字面量表达 / String函数

![](assets/js/Escape.png)

## Method

concat 一个或多个字符串拼接起来
slice 摘取一个字符串区域，返回一个新的字符串
split 通过分离字符串成字串，将字符串对象分割成字符串数组
substring 返回在字符串中指定两个下标之间的字符

substr 通过指定字符数返回在指定位置开始的字符串中的字符
charAt 返回特定位置的字符
charCodeAt 返回表示给定索引的字符的Unicode的值