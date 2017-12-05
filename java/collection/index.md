# Collection

  类集合框架

  开发之中数组的使用几率并不高
  并且99%的操作都是进行简单的for循环处理
  
  数组本身最大的缺陷
  长度是固定的
  
  jdk1.2+为了解决数组长度问题
  提供动态的对象数组实现框架
  java类集框架

  所谓类集的开发框架
  就是java针对数据结构的一种实现
  而在数据结构之中
  最基础的数据结构是链表

# 链表的特点

  节点关系的处理操作
  核心就需要一个Node类(保存数据，设置引用)
  在进行链表数据的查找
  删除的时候需要equals()的方法支持

  在实际的开发之中对这些数据结构的使用都有一些共性

  类集就是动态的对象是数组。

# Collection集合接口

  在java的类集里面(java.util包)提供两个最为核心的操作接口
  Collection，Map接口
  其中Collection接口的操作形式与之前链表的操作形式类似
  每一次进行数据操作的时候只能够对单个的对象进行处理
  所以Collection是单个数据对象保存的最大父接口

  Collection接口
  public interface Collection<E> Extends Iterable<E>

  public boolean add(E e)
  public boolean addAll(Colleantion<? extends E> e)
  public boolean clear()
  public boolean contains(Object o)
  public booelean remove(Object o)
  public int size()
  public Object[] toArray() 
  public Iterator<E> iterator()

**Iterable iterator()**

  使用比率来讲 add() iterator()方法占到了95%
  Collection是一个存储数据的标准
  而并不能区分存储类型

  如果要存放数据可能需要区分重复与不重复
  就需要使用Collection的子类 List<E> Set<E>去实现

# List集合接口

  在实际的项目开发过程之中
  List接口的使用会达到Collection的80%

# List接口

  public E get(int index)
  public E set(int index, E element) 修改数据
  List与Collection的特点在于其有一个get()方法
  由于List也是一个接口，如果想要取得接口的实例化对象，就必须有子类
  在List接口下有三个常用子类: ArrayList,Vector,LinkedList
  最终的操作应该以接口为主,所以所有的方法只参考接口的定义即可

# ArrayList子类
  
  ArrayList是一个针对于List接口的数组操作实现
  通过观察List允许保存重复数据

  List本身有一个好的支持
  它存在一个get()方法
  那么利用get可以结合索引取出数据。
  但是千万要记住,get()方法是List子接口的

# 集合与简单Java类
  
  集合里面保存最多的数据类型
  就是简单java类
  从理论上讲 contains() remove() 
  需要equals()支持

# Vector

  Vector这个类是从jdk1.0的是时候推出
  ArrayList是jdk1.2推出
  考虑到后来很多人习惯使用Vector
  重新进行设计让其实现了List接口

# Different between ArrayList and Vector

![](assets/collection-1.jpg)

ArrayList,Vector问题
![](assets/collection-2.png)

# LinkedList子类
  
  在List接口里面还有一个LinkedList的子类
  这个子类如果向父接口转型的话
  使用的形式与之前使用List一模一样

# Different between ArrayList and LinkedList
  
  ArrayList 定长数组的实现
  LinkedList 一个纯粹的链表实现

  ArrayList封装的是一个数组,时间复杂度为1
  LinkedList封装的是一个链表,时间复杂度N

# Set集合接口

  Set接口与List接口最大的不同在于Set接口中的内容是不允许重复
  Set接口并没有对Collection接口扩充
  Set子接口里面有两个常用的子类 HashSet TreeSet

# HashSet
  无序

# TreeSet
  有序

# TreeSet排序分析
  
  既然TreesSet子类可以进行排序
  所以下面编写一个自己的类系统可以通过TreeSet实现数据的排列操作

  此时进行排序实际上是针对对象数组进行的排序处理，而如果要进行对象数组的排序
  对象所在的类一定要实现Comparable接口,而且要覆写compareTo()方法。
  Why 只有通过此方法才能知道对象大小关小。(没办法比较内存对象的大小,只能比较属性)

![](assets/collection-3.png)

# Set集合接口(重复元素判断)

  在使用TreeSet子类进行数据的保存时
  重复元素的判断依靠的是Comparable接口完成的.
  但是这并不是我们全部Set接口判断重复元素的方式
  因为如果使用的HashSet子类
  由于其跟Comparable没有任何关系
  所以它判断重复元素的方式依靠的是Object类中的2个方法
  hash码: public int hashCode();
  对象比较: public boolean equals(Object obj);


  在java中进行对象比较的操作有两步
  第一步要通过一个对象的唯一编码找到一个对象的信息
  当编码匹配,在调用equals()方法进行内容的比较
  如果要标识对象的唯一性,一定要hashCode()equals()

# 如果两对象的hashCode()相同,equals()不同？
# 如果两对象的hashCode()不同,equals()相同？
  
  对象判断 必须hashCode()与equals()相同

  使用Set的核心目的不是让其进行排序
  而是让其进行重复元素的过滤

# 集合输出

  集合标准的输出四种手段
  Iterator 
  ListIterator
  Enumeration
  foreach

  **List接口中的get()方法[ERROR]**

# 迭代输出: Iterator

  Iterator接口最初的设计里面有三个抽象方法
  boolean hasNext();
  E next();
  void remove();[default]

  集合的核心功能在于数据的增加和数据的取出
  所以对集合删除的操作根本没有意思

  见到了集合输出的问题
  不需要思考直接使用Iterator接口.

  Iterator有缺点

# 双向迭代接口 ListIterator
 
 public interface ListIterator extends Iterator

 是否含有前一个元素: public boolean hasPervious()
 取得当前元素:  public E pervious();

 观察ListIterator

# 枚举输出 Enumeration

  在jdk1.0的时候引入了Enumeration输出接口

  判断是否有下一个元素  public boolean hasMoreElements()
  取得元素 public E nextElement()

  最早的设计就是为Vector服务的
  取得Enumeration接口对象 public Enumeration<E> elements()

# 集合输出(foreach输出)
  jdk1.5开始foreach可以输出数组
  实际上除了数组还可以输出集合操作

# Map接口概述

  Collection集合的缺点是每次进行单个对象的保存
  那么如果要进行一对对象的保存
  就只能使用Map集合来完成
  所以Map集合中会一次性保存两个
  两个对象的关系key = value

  在Map接口里面有如下几个常用方法:
  存入数据 public V put(K key,V value)  
  取数据  public V get(Object key)
  取得所有Key信息  public Set<K> keySet();
  取得所有values public Collection<V> valuse();
  Map=>Set  public Set<Map Entry<K,V>> entrySet()

  Map本身是一个接口,要使用Map必须通过子类进行对象实例化。
  子类有4个 HashMap Hashtable TreeMap ConcurrentHashMap

# HashMap子类

# 请解释HashMap的原理
  在数据量小的时候HashMap是按照链表的模式存储
  当数据量变大之后为了快速进行查找
  那么会将链表变为红黑树(均衡二叉树)
  用hash码作为数据的定位,来进行定位

# Hashtable子类

  jdk1.0提供有三大主要类:Vector Enumeration Hashtable.
  Hashtable是最早实现二元欧对象数据结构。后期设计也让其与Vector一样多实现了Map接口而已。

# different between HashMap and Hashtable

           HashMap    Hashtable
推出版本    jdk1.2     jdk1.0
性能       异步处理     同步处理
安全性     非线程安全    线程安全
null操作   允许存放null  不能存放

# ConcurrentHashMap

  特点Hashtable的线程安全 与 HashMap的高性能 
  在使用ConcurrentHashMap处理的时候既可以保证多个线程更新数据的同步
  又可以保证很高效的查询速度

  分析ConcurrentHashMap的工作原理

  如果说现在采用一定的算法，将大量数据平均分布在不同的桶(数据区域),这样在进行数据查找的时候就避免了全部的数据扫描。

  采用了分桶之后每一个数据中必须有一个明确的分桶的标记。

# 使用Iterator输出Map集合

  在实际的开发之中，如果你存储数据是为了输出,那么悠闲考虑的一定是Collection，使用Map的主要操作就是设置我们的内容而后通过get()进行查找。使用Map迭代输出的需求会有,但是不多,不过必须掌握.
  如果想观察输出必须明确一点无iterator()方法

  ()[collectionAndMap]

  在Map集合里有方法把Map转换为Set集合,public Set<Map.Entry<K,V>> entrySet()

  ()[mapEntry]

  以上的形式相比较Collection（List,Set）而言出现的几率不高,但是需要掌握

# 关于Map中key的说明
  自定义key的一定要复写hashCode 与 equals ,而实际开发中我们不是使用String or Integer

# TreeMap子类
  TreeMap表示可以排序的map子类,他是按照key进行排序的

  Collection保存数据的目的是为了输出,Map保存数据的目的是为了根据key查找，找不到key返回null
  Map使用Iterator输出(Map.Entry的作用)
  一些类的设计原理,面试用，而开发里面大部分使用的都是HashMap

# Stack

  栈是一种先进后出的数据结构,  
  这个类是Vector的子类,但是需要注意的是,使用这个类的时候用的不是Vector类的方法,但是需要注意的是使用的时候不要进行
  向上转型,

  入栈 public E push(E item)
  出栈 public E pop()
  栈这个概念主要用于理论上,而实际的开发中使用几率不高。

# Queue
  先进先出的数据结构
  在Java中我们是用queue 

  