[CSS](/)

# 什么是CSS?

层叠样式表(Cascading Style Sheets)
是一种用来描述网页样式的语言
HTML用来构造网页的结构和内容
CSS用来设置网页内容的颜色、背景、字体大小、位置

# 如何将你的CSS应用到你的HTML上？
浏览器缺省设置
外部样式表
内部样式表
内联样式

# BadBoy
![](assets/css/bad-boy.jpeg)

几种方式同时使用:p

# 优先级确定

# 实际上是如何工作
浏览器将 HTML 和 CSS 转化成 DOM （文档对象模型）
DOM在计算机内存中表示文档。它把文档内容和其样式结合在一起
浏览器显示 DOM 的内容

![](assets/css/how-to-work.svg)

# 关于DOM
DOM是一种树形结构
标记语言中的每个元素,属性,文本片段都是一个DOM 节点
这些节点由它们与其它 DOM 节点的关系来定义
有的元素是某些子节点的父节点
且这些子节点有兄弟（节点）

e.g.
![](assets/css/dom.jpg)


# 该用哪一种?

# CSS基础语法

两部分构成
选择器 声明*N
格式: selector{statement,statement...}
selector:要改变那个dom元素的样式
statement: 告诉浏览器dom元素变为什么样式
**大小写不敏感,推荐小写

# 声明
由两部分构成 属性 与 值
格式 property: value
property: 要改变dom元素的哪个样式
value: 改变某个样式的具体值

# 选择器介绍
元素选择器
类选择器
id选择器
属性选择器
伪选择器

# 元素选择器
选择某一种标签
某一种标签都会被设置某些样式
元素 选择器已 "标签名" 来定义
e.g. 标签名{statement...}

# 类选择器
选择一类(组)元素的样式
类 选择器以 "." 来定义

# id选择器
标有特定 id 的 HTML 元素指定特定的样式
id 选择器以 "#" 来定义

# 思考id 与 类 选择器的区别?

# 属性选择器
属性 / 属性值 匹配一个或多个元素
[attr]
[attr=val]
[attr~=val]

# 伪选择器
不选择实际元素
而是元素的某些部分
或仅在某些上下文中的元素

# 伪类
一个以冒号(:)作为前缀的关键字
希望样式在特定状态下才被呈现到指定的元素
e.g :visited :focu :hover ...

# 伪元素
伪元素前缀是两个冒号 (::)
添加到选择器后面达到指定某个元素的某个部分
e.g ::after ::before


# 组合器
一次使用一个选择器是很有用的
但某些情况下却可能效率低下


![](assets/css/combinators.jpg)


# 通用选择器(Universal selector)
通用选择（*）是最终的小丑

# CSS的值和单位

CSS的属性值可以有很多种类
数值: 用于指定大小 宽高
百分比: 用于指定尺寸或长度占比。
颜色: 用于指定背景颜色，字体颜色等。
坐标位置: 例如，用于指定定位元素相对于屏幕的左上方的位置。
函数: 例如，用于指定背景图片或背景图片渐变。

# 数值
绝对数值
px(pixels) mm(millimeters) 
cm(centimeters) in(inches)
相对数值
em rem


# 分享你的喜好的website
# 通过unorderlist
# website可以点击(至少分享5个)
# 当hover上去给一种你喜欢的颜色(使用RGBA)
# 最喜欢的website给与另一种颜色以示区分(使用#XXXXX)

[样式化文本](/?css/styling-text)
[样式化盒子](/?css/styling-boxes)
[CSS布局](/?css/css-layout)