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
  这两个常量所表示的都是PrintStream类的对象
  从jdk设计的本质来讲
  out输出是希望用户可以看见的内容
  err 是不希望用户看到的。
     
  System.err也只是作为一个保留的属性提供存在的
  唯一可能使用的就是System.out,但是从另一方面来讲
  由于System.out属于PrintStream类的实例化对象
  而PrintStream又是OutputStream的实例化
  那么这个时候OutputStream输出的位置将变为屏幕

  抽象类不同的子类针对同一方法有不同的实现
  用户调用的核心参考就是OutputStream

# 系统输入

  System.in对应的类型是InputStream
  这种的输入流指的是由用户通过键盘进行输入(用户输入)
  java本身没有直接的用户输入处理
  如要想实现这种输入处理,那么需要使用java.io的模式来完成

# 利用InputStream实现数据的输入

  发现用户输入数据的时候程序需要暂停执行
  也就是说程序要进入到阻塞状态
  直到用户输入完成(按下回车)程序才能继续向下执行
  但是以上的程序有一个致命的问题
  核心就在要开辟的字节数组的长度
  那么只能够接受部分的数据
  所以这个时候很明显是由于一次读取不完所造成的问题
  那么最好的做法引入内存操作流来控制
  也就是说这些数据暂时先保存在内存流里面
  而后通过内存流一次性取出
  程序虽然实现了键盘输入数据的功能
  不过整体的实现逻辑有些

  通过以上的比较可以感受到System.in的支持度原本不高,对于英文的操作还勉强可以,对中文的操作需接口内存流来完成。

  如果要想在IO中进行中文的处理,那么最好的做法是将所有输入的输入保存在一起在处理
  这样才可以保证不出现乱码

# BufferedReader

  属于一个缓冲的输入流,而且是一个字符流的操作对象,
  但是必须清楚一点,对于缓冲流定义有两类
  字节缓冲流 BufferedInputStream
  字符缓冲流  BufferedReader

  之所以选择BufferedReader 是因为在此类中提供的readLine()方法,这个方法可以直接读取一行数据(以回车换行)
  但是如果想去使用BufferedReader类有一个问题需要注意,来观察一下BufferedReader
  public class BufferedReader extends Reader

  关系图
  ![](assets/io-13.png)

# 利用BufferedReader实现键盘输入

  由于接受数据的类型为String,那么久可以使用String类的各种方法进行处理,还可以变为各种常用的数据类型。
  在很多开支之中依然可能会发现有BufferedReader类的身影。
  但是这个类被新的类Scanner所取代了。

  BufferedReader类读取数据很方便。

# Scanner

  打印流解决的是OutputStream的缺陷
  BufferedReader解决的是InputStream的缺陷
  Scanner解决的是BufferedReader类的缺陷
  是专门进行输入流处理的程序类,利用这个类可以方便的处理各种数据类型
  同时可以结合正则表达式进行各项处理

# major method
  判断是否有指定类型的数据 public boolean hasNextxx()
  取得指定类型的数据 public xxx nextxxx()
  定义分隔符 public Scanner useDelimiter(String pattern)

  constructer
  public Scanner(InputStream is)

使用Scanner的输入可以接受各种类型的数据,并且帮助用户减少转型的处理
最为重要的问题它可以对接受的数据类型使用正则表达式进行判断

使用Scanner本身能够接受的是一个InputStream类的对象,那么也就意味着可以接受任意的输入流,例如文件输入流

Scanner实际上完美的替代了BufferedReader，而且更好的实现了InputStream的操作

除了二进制的文件拷贝的处理之外,那么只要是针对于程序的信息输出都使用打印流,信息输入都使用Scanner

# 对象序列化

所有的项目一定都有序列化的概念存在
所谓的对象序列化就是将内存中保存的对象变为二进制数据流的形式进行传输
或者是将其保存在文本中
但是并不意味着所有类的都可以被序列化
严格来讲,需要被序列化的类往往需要传输使用
这个类需要实现java.io。seriesliable这个接口
但是这个接口并没有任何的方法定义，只是一个标识接口

序列化对象时所需要保存的就是对象中的属性,所以默认情况下对象的属性将被转为二进制数据流存在

# 序列化与反序列化

java.io提供两个处理类
ObjectOuptStream
ObjectInputStream
来观察两个类的定义机构已经各自的构造方法

![](assets/io-15.png)

在以后实际的项目开发过程之中,不需要知道如何实现序列化和反序列化的操作,因为都会有各自的容器会自动处理.

# transient

  实际上序列化的处理在java.io包里有两类,Serialable是使用最多的序列化接口,采用的是自动化的模式完成,默认星狂西啊所有的属性都会被序列化。
  还有一个Externalizable接口是需要用户自己来动手处理序列化处理,一般很少使用.
  但是由于默认情况Serializable会将对象中的所有属性进行保存,如果现在某些属性不希望被保存了,那么可以使用transient

  不过大部分情况下使用序列化往往是在简单的java类上，其他类上使用序列化的操作模式相对较少,而如果是简单java类就很少使用transient关键字。








