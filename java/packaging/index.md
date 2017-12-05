[back](/)

# Wrapper Class

数据类型分为基本类型和引用类型

包装类就是将基本数据类型封装在一个类中。

## 包装类的基本原理

将基本数据类型包装为一个类的对象的本质就在于方便的使用Object进行接受处理.

We Know
java中有八种基本数据类型

包装类分为2种类型

* 对象性(Object直接子类) 
Boolean 
Character

* 数值型(Number直接子类) 
Integer、Double
Byte、Short
Long、 Float

观察Number类

public abstract class Number implements java.io.Serializable
intValue() longValue() floatValue() byteValue() ....

## 装箱与拆箱

* 装箱：将基本数据类型变为包装类对象
  -- 利用每一个包装类型提供的构造方法实现装箱处理valueOf()

* 拆箱：将包装类型中包装的基本数据类型取出
  -- 利用Number类中提供的xxValue()方法

### 自动装箱与自动拆箱

  使用int 还是 Integer?
  -- 在接受数据使用int，在保存数据使用Integer

## 字符串与基本数据类型转换

  String->int类型  public static int parseInt(String s)
  String_>double类型 public static int parseBoolean(String s)
  ...................................................

## 基本数据类型转换为字符换

  任何的数据类型使用"+"链接空白字符串就变成了字符串
  使用String类中提供的valueOf()方法可以进行转换
