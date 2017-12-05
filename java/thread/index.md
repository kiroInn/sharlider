# 多线程编程

# 进程的概念
  操作系统之中一个程序的执行周期就称为一个进程
  一个程序执行的时候它一定要使用到电脑的IO,CPU,内存等

# 线程的概念
  进程中负责程序执行的执行单元
  一个进程中至少有一个线程

# 多线程的概念
  多线程的运行是根据CPU切换完成
  如何切换由CPU决定
  因此多线程运行具有不确定性

# java中的多线程的应用体现在哪里呢？
  
  服务器应用  
  一台服务器会有很多的客户去使用 
  一个web服务就是一个进程  
  用户的访问就是一个线程

 # thread

  多线程的主类
  想实现一个多线程的主类,二个途径
  
  继承一个Thread类
  实现Runnerable,Callable接口

# 继承Thread类实现多线程

  java.lang.Thread是一个线程操作的核心类
  覆写该类中run()方法(相当于线程的主方法)

  当现在有了线程的主体类之后
  很明显一定会想到产生对象随后调用run方法

# 为什么通过start()调用run()方法？
# 而不是通过run()方法直接执行？

  private native void start0();
  多线程的执行 native是指调用本机的原生系统函数。

# 实Runnable接口

  如果使用Thread继承实现多线程 
  会有单继承的局限
  @FunctionalInterface(Runnable)

# Thread与Runnable区别

  从使用形式上来讲
  使用Runnable实现多线程更好
  Thread类是Runnable接口的子类
  那么Thread也应该也覆写了run()方法
  在多线程的处理上使用的就是代理设计模式

  除了以上的关系之外
  Runnable描述出数据共享的概念

# 线程的状态

  ![](assets/thread-status.png)

**新建状态(New)**
**就绪状态(Runnable)**
**运行状态(Running)**
**阻塞状态(Blocked)**
  1>线程通过调用sleep方法进入睡眠状态
  2>线程调用一个在I/O上被阻塞的操作
  即该操作在输入输出操作完成之前不会返回到它的调用者；
  3>线程试图得到一个锁，而该锁正被其他线程持有；
  4>线程在等待某个触发条件
**终止状态(Dead)**

  线程调用start()方法
  不是立刻执行
  而是进入就绪状态
  等待系统调度后执行
  才可以执行多线程中的run()
  你执行了一段时间之后
  你需要让出资源
  让其他线程继续执行
  随后重新进入到就绪状态
  当线程执行完毕会进入终止状态

# Callable实现多线程

  Runnable 是jdk.1.1就推出
  从jdk1.5之后  java.util.concurrnet包 
  这个开发包中提供一些高并发操作中才会使用到的类
  
  Runnable run()方法没有返回值
  Callable call()方法有返回值

# 多线程常用操作方法

# 线程的命名与取得

   多线程的运行状态是不确定了
   多线程的操作必须有一个可以明确标识出县城对象的信息
   而这个信息就使用名称操作方法
   public Thread(Runnable target, String name) 
   public final void setName(String name)
   public final String getName()
   如果想要取得线程的对象,在Thread类中提供有一个方法
   取得当前线程对象 public static native Thread currentThread()

## 线程休眠

  所谓的线程休眠,让线程暂缓执行一下
  等到了预计的时间后继续执行
  method: public static void sleep(long millis)  

## 线程优先级

  优先级越高越有可能先执行
  但仅仅是有可能而已
  在Thread类里面有以下提供优先级的方法

  method: public final void setPriority(int priority);
  public final static int MIN_PRIORITY = 1;
  public final static int NORM_PRIORITY = 5;
  public final static int MAX_PRIORITY = 10;

# 多线程一定就快吗?

# 线程的同步与死锁

  核心问题在于  
  每一个线程对象操作的延迟问题
  轮番抢占资源的问题

# 同步处理

  指的是所有的线程不是一起进入到方法中执行
  而是按照顺序一个一个进来
  如果要想实现这把'锁'的功能
  那么可以采用synchronized 关键字进行处理
  
  其中两种处理方式
  1:使用同步代码块
  必须要设置一个要锁定的对象
  同步虽然可以保证数据完整性(线程安全操作)
  但是其执行的速度会很慢
  2:同步方法

# 死锁

  同步的本质在于
  一个线程等待另外一个线程执行完毕后才可以继续执行
  但是如果现在相关的几个线程彼此之间都存在等待着（同步了）
  那么久会存在死锁

  死锁一旦出现之后
  实际上整个程序就将暂时性中断执行了
  所以死锁属于一个严重性问题
  而一般出现的几率不高
  那么在整体的概念理念
  如果数据想要完整操作必须使用同步
  过多的同步会造成同步
 
# 生产者和消费者

  provider consumer 
  生产者负责生产数据
  消费者负责消费数据

# 解决数据的同步问题

  使用synchronized关键字来定义同步的操作方法

# 解决数据重复问题

  必须增加等待与唤醒机制

# wait() notify()  notifyAll()
  
  Java语言提供的实现线程间阻塞和控制进程内调度的底层机制
  当前线程必须是锁的持有者

# sleep() 与 wait()的区别？

# 10.29练习
# 售票厅有150张票,有三个窗口同时卖票,
# 实现1号窗口先卖5张,接着2号窗口卖5张
# 3号窗口出售5张,依次循环卖,直到票卖完
# 请用java多线程实现

# 线程池

基本思想还是一种对象池的思想
开辟一块内存空间
里面存放了众多(未死亡)的线程
池中线程执行调度由池管理器来处理

java.util.concurrent
一个类两个接口
interface ExcutorService 普通线程池
interface ScheduledExecutedService  调度线程池
Executors类 线程池的创建

创建无大小限制的线程池 newCachedThreadPool(ThreadFactory threadFactory) 
创建固定大小的线程池   newFixedThreadPool(int nThreads)
创建单个线程池  newSingleThreadExecutor()
创建定时调度池  newScheduledThreadPool()

# 线程池的优点

避免线程创建和销毁带来的性能开销
避免线程间因互相抢占系统资源导致阻塞现象
能够对线程进行简单的管理