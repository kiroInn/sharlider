[样式化CSS盒子](/?css#29)

# 理解盒模型
# 背景 边框 

# CSS盒模型
盒模型是网页布局的基础
每个元素被表示为一个矩形的方框
框的内容、内边距、边框和外边距
像洋葱的膜那样一层包着一层构建起来

# 框属性
文档的每个元素被构造成文档布局内的一个矩形框
框每层的大小都可以使用一些特定的CSS属性调整

![](assets/css/box-model.png)

# width 和 height
设置内容框（content box）的宽度和高度
# padding
表示一个 CSS 框的内边距
# border
CSS 框的边框（border）是一个分隔层
位于内边距的外边缘以及外边距的内边缘之间
# margin
外边距（margin）代表 CSS 框周围的外部区域


# Overflow
当使用绝对的值设置了一个框的大小（如，固定像素的宽/高）
允许的大小可能不适合放置内容，这种情况下内容会从盒子溢出
我们使用overflow属性来控制这种情况的发生

auto: 溢出的内容被隐藏
然后出现滚动条来让我们滚动查看所有的内容。
hidden: 溢出的内容被隐藏。
visible: 溢出的内容被显示在盒子的外边
（这个是默认的行为）

# 快递的包裹
需要你包裹与包裹间有10个px
需要你包裹的边框2个px 
需要你包裹的内边距(上左 为5px 其余不设置)

# CSS 框(盒)类型
块框（ block box）
定义为堆放在其他框上的框（例如：其内容会独占一行）
而且可以设置它的宽高

行内框（ inline box）与块框是相反的
它随着文档的文字
对行内盒设置宽高无效
设置padding, margin 和 border都会更新周围文字的位置
但是对于周围的的块框不会有影响

行内块状框（inline-block box）
上述两种的集合
它不会重新另起一行但会像行内框（ inline box）
一样随着周围文字而流动
而且他能够设置宽高
并且像块框一样保持了其块特性的完整性
它不会在段落行中断开

# 背景样式

# 什么是背景？
元素的背景是指
在元素内容、内边距和边框下层的区域

background-color: 为背景设置一个纯色。
background-image: 指定在元素的背景中出现的背景图像。
这可以是静态文件，也可以是生成的渐变。
background-position:指定背景应该出现在元素背景中的位置。
background-repeat: 指定背景是否应该被重复(平铺)。
background-attachment: 当内容滚动时，指定元素背景的行为，例如，它是滚动的内容，还是固定的?
background: 在一行中指定以上五个属性的缩写。
background-size: 允许动态调整背景图像。

# 背景颜色
background-color

# 背景图像
background-image 
属性指定了在元素背景中显示的背景图像
该属性用法是使用 url() 函数
以一个参数的路径作为参数

# 与img标签的区别？

# 背景重复
background-repeat 
允许指定背景图像是如何重复的
默认值是repeat

no-repeat: 图像将不会重复:它只会显示一次
repeat-x: 图像将在整个背景中水平地重复
repeat-y: 图像会在背景下垂直地重复

# 背景位置
background-position
允许我们在背景中任意位置放置背景图像
使用两个通过空格分隔的值
该空间指定了图像的水平(x)和垂直(y)坐标

# 背景图像：渐变
background-image还有另一组可用的值——颜色渐变
渐变就是在背景中平滑的颜色过渡
线性渐变是通过linear-gradient()函数
to bottom，to right

# 背景附件
指定当内容滚动时它们是如何滚动的
background-attachment属性来控制的

scroll
这将把背景修改为页面视图
它将在页面滚动时滚动
fixed 
这可以在页面的位置上固定背景
所以当页面滚动时不会滚动
local 值将背景设置为它所设置的元素的背景
因此当您滚动元素时，背景会随之滚动

# 背景尺寸
background-size
允许动态地改变背景图像的大小

# Play BackGround

设置不同的背景颜色。
包含一个不同的背景图像
找到一个在url()函数中使用的图像的绝对路径。
应用背景渐变。linear-gradient()
应用多个背景。
包括一个background-size的属性来改变你的背景图片的大小。

# 样式边框
元素有一个边框
它位于元素的内边距(padding)
外边距(margin)之间
默认情况下边框的大小为0不可见

# border

# 边框半径
border-radius
