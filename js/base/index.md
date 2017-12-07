主流浏览器
IE       trident
Chrome   webkit/blink
firefox  gecko
Opera    presto
safari   webkit


# 怎样向你的页面添加 JavaScript？

1 内部的 JavaScript
  <script> ... </script>  
2 外部的 JavaScript
  <script src="script.js"></script>
3 内联 JavaScript 处理器
  <button onclick="doSomeThing()">Click me!</button>

# 为符合web标准
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

![](assets/js/keywords.png)

![](assets/js/keep-keywords.png)

# 值类型

# js语句基本规则
语句后面要用分号结束";"
js语法错误会引发后续代码终止,但不会影响其他js代码块
书写格式要规范,"= + / -"两边都应该有空格

# 运算操作符
"+" 
  数学运算、字符串链接
  任何数据类型加字符串都等于字符串
"-", "*", "/","%","=","()"
  优先级"="最弱 "()"最强
"++", "--", "+=", "-=","/=","*=", "%=" 