# 怎样向你的页面添加 JavaScript？

1 内部的 JavaScript
  <script> ... </script>  
2 外部的 JavaScript
  <script src="script.js"></script>
3 内联 JavaScript 处理器
  <button onclick="doSomeThing()">Click me!</button>
结构 行为 样式 相分离

# 基础语法

## 变量(variable)

# 变量声明
  声明、赋值分解
  单一var

# 命名规则  
  变量名必须以英文字母、_、$ 开头
  变量名可以包裹英文字母、_、$、数字
  不可以用系统的关键字、保留字作为变量名

# 关键字
break do instanceof typeof case else 
new var catch finally return void continue 
for switch while debugger function this 
with default if throw delete in try let

![](assets/js/keywords.png)

# 保留字
abstract enum int short boolean export
interface static byte extends long
char final native synchronized class float
package throws const goto private transient
debugger implements protected volatile double import public

![](assets/js/keep-keywords.png)

# 值类型分为二种
# 原始类型
# 引用类型

# 原始类型
Undefined、Null、Boolean、Number 和 String

# 引用类型
Object, Array ...

# typeof操作符

# js语句基本规则
语句后面要用分号结束";"
js语法错误会引发后续代码终止,但不会影响其他js代码块
书写格式要规范,"= + / -"两边都应该有空格

# 注释
javaScript 代码中书写会被浏览器忽略掉的注释是可行的
并且注释只用来为你的开发者同事提供关于代码如何工作的指引

单行注释书写在一个双正斜杠后 (//)
 // I am a comment

多行注释书写在字符串 /* 和 */ 之间， 比如：
/*
I am also
  a comment
*/