# HTML

超文本标记语言(Hyper Text Markup Language)
标记语言 != 编程语言
HTML构成了网页的内容

# 标记语言

一套标记标签

# 为什么会出现HTML

# html标签

尖括号包围的关键字
如<html><body><a><p>
一般都是成对出现<a></a>(<br/>)
<x></x>闭合标签

# 网页

网页 == html文档
html文档 = html标签 + 标签内的内容

# <!DOCTYPE>文件类型

不是HTML标签
告诉浏览器关于页面使用哪个HTML版本进行编写
浏览器根据使用html版本来正确地显示内容

# 常见DOCTYPE

HTML5 : <!DOCTYPE html>
HTML4.01 Strict  <!DOCTYPE html public "-//W3c//DTD html 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
HTML4.01 Transitional  <!DOCTYPE html public "-//W3c//DTD html 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
HTML4.01 Frameset  <!DOCTYPE html public "-//W3c//DTD html 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">

# 注释

<!-- ... -->
对代码进行解释 
不会显示在浏览器中

# html结构

head与body构成

# <head>

包含网页标题 描述 关键字 
引用的样式文件 引用的脚本文件

# <body>

包含网页所显示的内容 引用脚本文件

# <title>

网页标题 会显示在浏览器的标题栏
title是head标签中唯一要求包含的标签

# <link>

必须置于head
定义文档与外部资源的关系
链接样式表 引入文件

# [A]link

href: 被链接文档的地址
rel: 当前文档与被链接文档的关系
type: 链接文档类型
media: 链接文档显示在什么设备

# 地址栏icon

favicon.ico放置在网站根目录
使用link标签引入

# <base>

必须置于head
:href 默认链接地址
:target 默认打开方式

# <meta>

必须置于head里
提供有关页面的元信息
定义了与文档相关联的key/value

http-equiv 
把 content 属性关联到 HTTP 头部
name
把 content 属性关联到一个名称。
scheme
定义用于翻译 content 属性值的格式。

# [A]http-equiv

常见值
content-type 内容类型
expires 过期时间
refresh 页面刷新
set-cookie 设定cookie
X-UA-Compatible 针对ie,设置浏览器有限使用什么模式渲染页面

# [A]name

常见值
descirption 描述
keywords 关键词
renderer 设置浏览器渲染内核

# <script>
可置于head or body
定义客户端脚本或引入脚本

# [A]script
**type 指定脚本类型 text/javascript**
src 外部脚本文件地址
defer 规定是否对脚本执行进行延迟,知道页面加载完毕
async 规定异步执行脚本

![](assets/html/[html]-async-defer.png)

# style
置于head
为html文档定义样式信息

# [A]style
* type 指定样式类型 text/css
media 为样式指定应用场景
screen print handheld all

# hx
定义标题,文档的重点内容
h1是最大 h6是最小标题

# <p>
paragraph
定义段落

# br
插入一个换行符
文本内容另起一行

# 标签该不该闭合
<link> or <link/>
<br> or <br/>
<img> or <img/>
<meta> or <meta/>

# xhtml
Extensible HTML

# html5规范
一个"<"字符
标签名
此项可选,一个或多个属性空格隔开
此项可选 一个或多个空格
此项可选,一个"/"字符 此项只能在无内容元素中出现
一个">"字符

# <div>
Division
定义文档中的一个分区

# <span>
表示文档中的行内元素

# 块级元素(标签)
一个完整的区域、区块
比如: h1 div p等

# 行内元素(标签)
用于块级元素内
不能表示一个完整的区块
只能是一个区块或者一行内的某一部分
比如: span a img等


# <a>
表示一个超链接

# [A]<a>
**href 链接的目标网页**
target 打开链接的方式
title 链接的标题

# <img>
嵌入一张图片

# [A]img
**src 图片url**
**alt 图片无法显示时 显示的文本**
width 宽度
height 高度

# <ul>
unorderedList
表示多项的无序列表

# <ol>
orderList
表示多项有序列表项

# [A]ol
start 设置序号起始值
reversed 条目采用倒序
type: 'a' 表示小写字母编号；
'A' 表示大写字母编号；
'i' 表示小写罗马数字编号；
'I' 表示大写罗马数字编号；
and '1' 表示数字编号（默认值）

# <table>
表示表格数据
二维数据表表示的信息
caption colgroup
thead tbody tfoot tr th td

# [A]table
:left 表格将在文档左侧显示
:center 表格将在文档中央显示
:right 表格将在文档右侧显示


# form
 表示了文档中的一个区域
 这个区域包含有交互控制元件
 用来向web服务器提交信息

# 早期的表单
![](assets/html/form-sketch-low.jpg)

# [A]form
**method  HTTP方式来提交form**
**action  一个处理这个form信息的程序所在的URL**

# lable
表示用户界面中项目的标题

# [A]lable
**for 可标记的 form相关元素的ID**

# input
Web的表单创建交互式控件
接受来自用户的数据

# [A]input
number, password, checkbox
radio, date, file, month
color, range, time

# text(单行文本域)
# password(密码域)
# search(检索域)
# email(Email地址域)
# tel(电话号码域)
# url(URl域)
# textarea(多行文本域)
# checkbox(复选框)
# radio(单选按钮)
# select(下拉选框)


# 自动补全输入框
# datalist
为表单小部件提供建议的
自动完成的值

# number(数字)
:min
:max
:step

# range(滑块)
:min
:max
:step

# button
表示一个可点击的按钮

# [A]button
submit:  此按钮提交表单数据给服务器
reset:  此按钮重置所有组件为初始值
Anonymous: 此按钮没有默认行为

# abbr
表示缩写
# [A]abbr
title 定义对缩写的完整描述时

# strong
表示文本十分重要


# 收集你的行星
![](assets/html/table-practice.jpg)