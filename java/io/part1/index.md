[IO PART1](/?java/io)

# Google I/O 

# 什么鬼?

innovation in the open

   提供了系统输入和输出数据流,序列化和文件系统。
   整个IO的核心组成
   五个类(File，OutputStream,InputStream,Writer,Reader) 
   一个接口(Serializable)

# File

  java.io包之中
  File类与文件(创建，删除，取得文件信息等)操作相关

# 实例化

  public File(String pathName)
  public File(File parent,String child)

# 文件的基本操作

  创建一个新文件
  public boolean createNewFile()
  删除一个文件
  public boolean delete()
  判断一个文件是否存在
  public boolean exists()

  * File类只创建文件
  * 对于内容并不负责任
  * 对于项目的开发只有windows最好用，但是在实际的项目部署环境都要求在UNIX,Linux之中，那么这个时候路径的问题就很麻烦了。windows下使用的是'\'，Unix一遍使用'/'，所有统一使用File.seperator.

# 目录操作

  取得父路径 
  *public File getParentFile();*
  创建目录 
  *public boolean mkdir()*
  *public boolean mkdirs()*

# 取得文件信息

  判断路径是否是文件
  *public boolean isFile()*
  判断路径是否是目录
  *public boolean isDirectory()*
  最后一次修改日期
  *public long lastModified()*
  获取路径
  *public String getPath()*

# 练习

  实现参数传入目录(文件)
  判断目录下(文件)是否有后缀名为.jpg的文件
  如果有就输出该文件名称

# File的局限性

  File类不支持文件内容的处理
  如果要处理文件内容
  那么需要通过流的操作模式来完成

# 流

   当程序需要读取(写入)数据的时候
   就会开启一个通向数据源(目的地)的流
   这个数据源可以是文件，内存，或是网络连接
   流分为输入流和输入流

#  在java.io包中分为
   字符流与字节流

# 如何理解?

  ![](assets/io-1.png)   

# 字节流与字符流的区别?

   字节流是原生的操作
   字符流是经过处理后的操作
   在你进行网络数据传输，磁盘数据保存的支持类型只有，字节
   所有磁盘中的数据必须先读到内存后才可以操作
   内存里面会帮助我们将字节变为字符
   字符更加适合处理中文

  字节流： inputStream,outputStream
  字符流： Reader Writer

# 使用两种类型的的基本流程

 * 1 根据文件的路径创建File类对象
 * 2 根据字节流或字符流的子类实例化父类对象
 * 3 进行数据读或写操作
 **4 关闭流**

  对于IO操作属于资源处理
  所有的资源处理操作的最后必须要进行关闭
  如果没有进行关闭
  之后就再也执行不了

# OutputStream

  观察类的定义
*public abstract class OutputStream implements Closeable, Flushable*
**abstract**

# meaning?

  OutputStream是一个抽象类
  所以按照抽象类的原则来讲
  如果要为父类实例化
  那么就需要使用子类

# major method

  将给定的字节数组全部输出
  *public void write(byte b[])*
  将部分的字节数组内容输出
  *public void write(byte b[], int off, int len)*
  输出单个字节 
  *public abstract void write(int b)*

  因为方法名称已经被父类定义好了
  所以此处我们所关注的只是子类的构造
  如果要进行文件的操作,可以使用
  FileOutputStream类进行处理

  覆盖文件 
  *public FileOutputStream(File file)*
  追加文件 
  *public FileOutputStream(File file, boolean append)*

# Relation Structure

![](assets/io-3.png)

# AutoCloseable

  从jdk1.7开始追加有一个AutoCloseable接口
  实际上这个接口的主要目的是进行自动关闭的处理

# InputStream

  利用OutputStream实现了程序输出内容到文件的处理
  下面就需要通过程序读取文件内容
  就需要使用InputStream

  观察其类的定义
  *public abstract class InputStream implements Closeable* 

# major method

  * 读取数据到字节数组之中
   *public int read(byte b[])*

# argument byte b[]???

# read()情况分析

  如果开辟的字节数组长度大于 可读的字节数组  则返回可读的字节数组长度
  如果现在要读取的数据大于字节的内容,那么这个时候返回的就是数组的长度
  如果没有数据了还要继续读，那么久返回-1

  读取部分数据到字节数组之中
  *public int read(byte b[], int off, int len) throws IOException*

  读取单个字节
  *public abstract int read() throws IOException*

  InputStream是一个抽象类，如果想对file进行读取操作使用FileInputStream。

![](assets/io-2.png)

# 练习

  统计自编写的类文件中 
  字符'I' 与 'i' 出现的总次数
  字符'O' 与 'o' 出现的总次数
  **public  int read()**
  **public int read(byte b[])**

# 字符IO流

![](assets/io-5.png)

# 字符输出流Writer

与OutputStream相似
![](assets/io-6.png)

# 字符输入流Reader

与InputStream相似
![](assets/io-4.png)

# 字符流的特点

![](assets/io-im.png)

# 字符流与字节流的区别

  字节流优先考虑
  处理中文的时候才考虑到字符流
  因为所有的字符都需要通过内存缓冲进行处理数据传输
  在以后进行IO处理的时候,处理图片,音乐,文字都可以使用字节流
  而只有处理中文的时候使用字符

# 转换流

  OutputStreamWriter
  将字节输出流变为字符输出流

# 观其构造

  public OutputStreamWriter(OutputStream)

   -- public class OutputStreamWriter extends Writer

  InputStreamReader
  将字节输入流变为字符输入流

  public InputStreamReader(InputStream)

   -- public class InputStreamReader extends Reader


![](assets/io-12.png)

#  证明了什么?

  从继承结构来讲
  发现字符流处理的时候
  是经过字节流转换后得来的

# 文件拷贝

在windows下有一个copy命令,使用格式 copy 源目标 目的文件路径

而现在希望程序实现这样的操作命令.
这个程序通过初始化参数接受源文件 目标文件路径

# 分析

  想实现数据的拷贝肯定是要通过流的模式来完成
  对于流有两类：字节流，字符流
  由于要拷贝的数据不是文字数据，
  也有可能是二进制的数据
  所以用字节流会比较好

# 拷贝模式？

    --在程序中开辟一个数组
    这个数组的长度为文件的长度
    将所有的数据一次性读到改数组之中,随后进行输出。
    --应该采用边读,边写的方式完成