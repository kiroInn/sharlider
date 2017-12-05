[样式化文本](/?css#29)

# 基本的文本以及字体样式
文本、字体样式的所有基础，包括设置字体粗细（font weight）
字体系列及样式（family and style）、字体缩写（font）
文本排列（text alignment）和
行（line）以及字符间距（letter spacing）

# 字体种类
font-family
允许你为浏览器指定一个字体 (或者一个字体的列表)  
浏览器可以将这种字体应用到选中的元素上  
浏览器只会把在当前机器上可用的字体应用到当前正在访问的网站上

# 网页安全字体
只有某几个字体通常可以应用到所有    
最常用的操作系统
（Windows，Mac，最常见的Linux发行版，Android和iOS版本）

# 常见网页安全字体
![](assets/css/safe-font.jpg)

# 默认字体
CSS 定义了 5 个常用的字体名称
serif, sans-serif, monospace, cursive, fantasy. 
![](assets/css/font-name.jpg)

# 字体栈
无法保证你想在你的网页上使用的字体的可用性
(甚至一个网络字体可能由于某些原因而出错)
你可以提供一个字体栈 (font stack)
几个用逗号分离的字体名称组成
e.g. font-family: "Trebuchet MS", Verdana, sans-serif

# 字体大小
font-size

# 字体样式，字体粗细，文本转换和文本装饰
font-style 「normal ,  italic , oblique」
font-weight 「normal, bold, lighter, bolder」
text-transform「none, uppercase, lowercase, captalize, full-width」
text-decoration 「none, underline, overline, line-through」

# 文字阴影
text-shadow: 1px 2px 3px red;

1px 阴影与原始文本的水平偏移
2px 阴影与原始文本的垂直偏移
3px 模糊半径 default: 0px
red 阴影的基础颜色 default: black

# 文本对齐
控制文本如何和它所在的内容盒子对齐
text-align left right center justify

# 行高
设置文本每行之间的高
line-height

# 字母与字母间距
设置你的文本中的字母与字母之间的间距
或是字与字之间的间距
letter-spacing 和 word-spacing 

# 样式化列表
列表的行为表现跟任何文本其实差不多

# 样式化链接

当您为链接添加样式时
很重要的一点是使用伪类去修饰链接的状态
以及怎么去修饰不同的接口功能例如导航菜单和面板中所使用的链接

# 链接状态
:Link (没有访问过的)
:Visited: 被访问过(存在于浏览器的历史纪录)
:Hover: 光标停留
:Focus: 选中 
:Active: 激活 (比如被点击的时候)

# 网络字体
网络字体——这会允许您与您的网页一同下载自定义字体
来实现更为不同的个性化字体样式