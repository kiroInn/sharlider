[Exception](/)

不期而至的各种状况
文件找不到
网络连接失败
非法参数等
异常是一个事件
它发生在程序运行期间
干扰了正常的指令流程
导致程序中断执行的一种指令流

Throwable类的子类
描述各种不同的异常
Java异常都是对象
Throwable子类的实例
描述了出现在一段编码中的 错误条件。
当条件生成时，错误将引发异常。
阻止当前方法或作用域继续执行的问题

Exception in thread "main" java.lang.ArithmeticException: / by zero
at MyExecption.main(MyExecption.java:4)

异常出现之前的代码正常执行，而异常产生之后的代码将直接结束。
我们为了保证程序出现异常之后可以继续向下执行，就需要进行异常处理。

## 异常体系

![](assets/exception.jpg)

## Error

不应该试图捕获的严重问题
VirtualMachineError

## Exception

想要捕获的条件
CheckedException
可恢复
UncheckedException
(RunTimeException)
不可恢复

## UncheckedException

## ArithmeticException

异常的运算条件时
for example
一个整数“除以零”时

## ClassCastException

将对象强制转换为不是实例的子类时
for example
Object x = new Integer(0);

## IllegalArgumentException

抛出的异常表明向方法传递了一个不合法或不正确的参数。


## IndexOutOfBoundsException

指示某排序索引（例如对数组、字符串或向量的排序）超出范围时抛出
应用程序可以为这个类创建子类，以指示类似的异常。

## NullPointerException

当应用程序试图在需要对象的地方使用null时，抛出该异常。这种情况包括：
调用null对象的实例方法。
访问或修改null对象的字段。
将null作为一个数组，获得其长度。
将null作为一个数组，访问或修改其时间片。
将null作为Throwable值抛出。
应用程序应该抛出该类的实例，指示其他对null对象的非法使用。

# 异常处理格式

  try {
   有可能出现异常的语句;
  }catch(异常类  对象) {
    异常处理语句；
  }finally{
    执行代码 
  }

  发现出现异常之后，整个程序由于存在异常处理机制，那么依然可以正常执行完毕。
  以上的代码虽然进行了异常的处理，但存在一个问题，但是你根本不知道你的程序

  取得异常的完整信息 对象.printStackTrace();
  不管是否产生异常，最终都会进入到finally执行代码

# thorws关键字

  在进行方法定义的时候
  若要告诉调用者本方法可能产生那些异常
  就可以使用throws进行声明
  如果该方法出现异常后不希望进行处理
  可以用throws进行抛出
  如果你调用了throws声明的方法，那么在调用时就必须明确的使用try...catch进行异常捕获，因为该方法有可能产生异常，所以必须按照异常的方式来进行处理。
  主方法本身也属于一个方法。所以主方法上也可以使用throws进行异常的抛出,这个时候如果产生了异常就会交给jvm进行处理。

# throw

  直接编写在语句之中的
  表示人为的进行异常的抛出

# throw与throws的区别？

  throw用于方法内部
  表示进行手工的异常抛出
  thorws主要在方法声明上使用
  告诉用户本方法可能产生的异常
  同时该方法可能不处理此异常。

# 异常处理模型

  异常处理标准格式(重要)

# 练习

  * 现在要求编写一个方法---进行除法操作
  * 在进行除法计算操作之前首先要进行打印一行语句
  * 在除法计算的过程之中出现有错误，应该将异常返回到调用处
  * 不管最终是否有错误产生，都要求打印一行计算结束的信息

 # 什么是RuntimeException类?
   
# Excepiton与RuntimeException的区别

  
   Exception是RuntimeException的父类, 用Exception定义的异常都要求必须使用异常处理。
   RuntimeException可以由用户选择性的来进行异常处理。 
   常见的RuntimeException ArithmeticException NullPointerException ..

# 列举几个常用的RuntimeException

# 断言 （assert）

  断言是jdk1.4引入的概念
  指的是当我们的程序执行到某些语句之后
  其数据的内容一定是约定的内容
  使用-ea(enableAssertion)参数

# 自定义异常类

  在java中实际上针对可能出现的公共的程序问题都会提供相应的异常信息
  但是很多时候这些异常信息往往不够我们去使用
  自定义异常类可以继承2中父类
  Excepiton or RuntimeException

# http://docs.oracle.com/javase/7/docs/api/

