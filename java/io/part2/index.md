[IO PART2](/?java/io)

# 字符编码

  计算机的世界里面
  文字是通过编码来实现描述
  如果没有正确的解码
  那么久可能产生乱码

  GBK, GB2312 
  表示的国标编码 
  GBK包含有简体中文和繁体中文
  GB2312只有简体中文

  UNICODE
  java提供的十六进制编码
  可以描述世界上任意的文字信息
  但是有个问题如果现在所有的字母也使用十六进制编码
  那么编码太庞大了
  一定会造成网络传输的负担

  ISO8859-1 
  国际通用编码,但是所有的编码都需要进行转换

  UTF
  UNICODE and ISO8859-1
  也就是说需要使用16进制就使用UNICODE
  如果是字母那么久使用原始的ISO8859-1

  常用的
  **UTF-8**

# 乱码产生分析

  节了解常用的编码
  那么下面就可以观察一下乱码的产生
  如果要想观察出乱码
  首先必须知道当前操作系统所支持的编码是什么
  (java的默认编码)

  如果说现在本地系统使用的GBK，UTF-8编码
  那么默认保存中文的时候就会选择默认使用的编码
  如果强制转换,就会出现乱码
  乱码的本质,编码和解码不统一所造成的

# 内存流

需要发生IO处理
又不希望产生文件

# 内存流分类

  字节内存流 
  **ByteArrayInputStream ByteArrayOutputStream**
  字符内存流 
  **CharArrayReader CharArrayWriter**

  观察构造方法  
  public  ByteArrayInputStream (byte[] buff)

![](assets/io-7.png)

# 练习

使用内存流实现一个大小写转换的操作

# 练习

# 内存流小功能
# 可以实现两个文件的合并处理(文件量不大)
# 现在假设有两个文件 data-a.txt data-b.txt
# 实现文件的合并处理

内存操作流
核心的就是将所有
OutputStream输出的数据
保存在了程序里面

# (思考一下)
如果只是使用InputStream类
在进行数据完整读取的时候会存在缺陷

那么结合内存流的操作会好许多

# 自定义打印流

  解决的就是OutputStream的设计缺陷
  属于OutputStream功能加强版

  缺点一 所以数据必须变为字节数组
  缺点二 输出的int double都类型 不方便

  其本质不可能脱离OutputStream

  发现进行简单的处理之后
  让OutputStream的功能变得更加强大了
  其实本质就只是对OutputStream类的功能做了一个封装而已

  java里面提供了专门的打印流处理类
  PrintStream,PrintWriter

# 打印流

  字节打印流 PrintStream
  字符打印流 PrintWriter 使用几率较高
  首先来观察这两个类的继承结构与构造方法

  PrintStream PrintWriter

  ![](assets/io-11.png)

  此时感觉非常像是代理设计模式
  但是代理设计模式有如下特点
  代理是以接口为使用原则的设计模式
  最终用户可以调用的方法一定是接口所定义的方法

  打印流的设计属于装饰设计模式
  核心依然是某一个类的功能
  为了得到更好的操作效果
  其支持的功能更多一些

 # 代理设计模式
  关注于控制对对象的访问
  
# 装饰设计模式
  关注于在对象上动态的添加方法

# 格式化输出

  C语言里面有一个println()函数
  这个函数在输出的时候可以使用一些占位符
  例如字符串(%s) 字符(%c) 数组(%d)
  从jdk1.5开始
  PrintStream类中也追加同样的操作方式.printf()方法
  格式化输出 public PrintStream printf()

  参考String.format();

# System类对IO的支持

  在System类中实际上定义了三个操作的常量
  (错误输出)err:  standard output stream
  (标准输入[键盘])in: standard input stream
  (标准输出[显示器])out: standard output stream
  原来之前使用的System.out.println()都属于IO范畴

# 系统输出

  系统输出一共有两个常量: out err

  抽象类不同的子类针对同一方法有不同的实现
  用户调用的核心参考就是OutputStream

# 系统输入

  System.in对应的类型是InputStream
  这种的输入流指的是由用户通过键盘进行输入(用户输入)
  java本身没有直接的用户输入处理
  如要想实现这种输入处理,那么需要使用java.io的模式来完成

# 利用InputStream实现数据的输入

# Scanner

  输入流处理程序类
  打印流解决的是InputStream的缺陷

# major method

constructer
public Scanner(InputStream in)

判断是否有指定类型的数据 public boolean hasNextxx()
取得指定类型的数据 public xxx nextxxx()
定义分隔符 public Scanner useDelimiter(String pattern)

# 对象序列化

对象序列化就是将内存中保存的对象变为二进制数据流的形式进行传输

这个类需要实现java.io.seriesliable标识接口
序列化对象时所需要保存的就是对象中的属性
默认情况下对象的属性将被转为二进制数据流存在

# 序列化与反序列化

java.io提供两个处理类
ObjectOuptStream
ObjectInputStream
来观察两个类的定义机构已经各自的构造方法

![](assets/io-15.png)

# transient

  默认情况Serializable会将对象中的所有属性进行保存
  如果某些属性不希望被保存了
  可以使用transient