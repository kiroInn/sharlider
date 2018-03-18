# DOM

文档对象模型
Document Object Model

是一个针对HTML和XML文档的一个API
它描绘了一个层次化的节点树.

## NodeRelation
![](assets/js/nodeRelation.png)

## NodeType
![](assets/js/nodeType.png)


## 操作节点
appendChild
用于向 childNodes 列表的末尾添加一个节点，返回新增的节点。

insertBefore/replaceChild 
方法接受的两个参数是：要插入的节点和要作为参照/替换的节点。

## 事件
文档或浏览器窗口中发生的一些特定的交互瞬间
由用户的操作而引起的js被调用的时机


## 事件分类
鼠标 / 键盘 / 状态

## 鼠标事件
onclick ondblclick onmouseover onmouserout

## 键盘事件
onkeydown onkeyup onkeypress

## 状态事件
onload onchange onblur

## 事件绑定(定义)
dom.onType
dom.addEventListener(type, func, useCapture)
dom.attachEvent('on' + type, func)

## 事件解除
dom.onType = false / null;
dom.removeListener(type, ref, false)
dom.detachEvent('on'+ type)

## Result

![](assets/js/event-modal.png)

## 事件流模型
DOM2.0模型规定
一事件捕获阶段
二事件目标阶段
三事件起泡阶段

![](assets/js/event-flow.png)

## 事件冒泡
结构上(非视觉上)嵌套的元素
会存在事件冒泡的功能
即同一个事件
自子元素冒泡向父元素
(自底向上)

## 事件捕获
结构上(非视觉上)嵌套关系的元素
会存在事件捕获的功能
即同一个事件
自父元素捕获至子元素(事件源元素)
(自顶向下)


## 事件对象
浏览器创建的封装事件信息的对象叫事件对象
event || window.event

## 如何获取事件对象
1直接定义事件时
2动态绑定事件时
在调用时传入参数event
调用函数时，浏览器会自动传入event

## 取消冒泡
W3C标准 event.stopPropagation()
IE独有 event.cancelBubble = true

## 内存和性能

## 事件委托



 