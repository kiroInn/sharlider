# reflection
  反射指的是对象的反向处理操作
  首先需要观察一下'正'的操作,在默认情况下,必须要导入一个包,而后才能产生类的实例化。
  所谓的反 指的是根据对象来取得对象的信息,而这个反的操作核心的处理就在于Object类的一个方法
    取得class对象  public final Class<?> getClass()
  该方法返回的是一个Class类的一个对象,这个Class描述的就是类。
  constructor method fields class

  在反射的世界里面它所看重的不再是一个对象,而是对象身后的组成

# Class类对象的三种实例化模式

    Class类是描述整个类的概念,也是整个反射的操作源头,那么在使用Class类的时候需要关注的依然是这个类的对象,而这个类的对象的产生模式一共有三种
        * 任何类的实例化对象可以通过Object类中的getClass()取得Class类对象
        * "类.class"直接根据某一个具体的类来取得class类的实例化对象
        * 使用Class类中提供的方法 public Class<?> forName(String className
    第一种会产生实例化对象,于是取得了Class类对象最直接的好处:可以直接通过反射实例化对象,在Class类里面定义有如下方式:public T newInstance()

    除了关键字new之外,对象的实例化模式有了第二种做法,通过反射进行

    取得了Class类对象就意味着取得了一个指定类的操作权

# 反射与工厂设计模式
  工厂设计模式有一个原则,如果自己编写的接口,要想取得本接口的实例化对象,最好使用工程类来设计。
  但是也需要知道传统工厂设计所带来的问题
  view code
  传统工厂最大弊端 new

  如果要想解决关键字new所带来的问题,我们就使用反射来处理,因为Class类可以使用newInstance()实例化对象,同事Class.forName()能够接受String这个类名称
  通过反射类改进的工厂设计模式,其最大的特征在于:可以方便动态进行子类的扩充操作,而关键字new会造成耦合。

  以上的程序依然存在缺陷,如果说现在有 十万个接口,那么按照此类模式就意味着有十万个工程，且完成的都是相同的功能,所以使用泛型来解决。
  从实际的开发来讲，工厂类上使用泛型之后,就可以更好的为更多的接口进行服务了。

  在实际开发之中如果可以掌握这种泛型和反射的组合操作原则,那么对于整体的代码你就可以编写出高可用的程序了。


  利用反射可以做出一个对象所具备的所有操作行为,而且最关键这一切的操作都可以基于Object类型进行。
# 取得父类信息
  在java里面任何的程序类实际上都一定有一个父类,那么在Class类里面就可以通过此方式来取得父类或者是实现的副接口,有如下两种方法提供:

  取得类的包名称 public Package getPackage();
  取得父类的Class对象  public native Class<? super T> getSuperclass();
  取得父接口:  public Class<?>[] getInterfaces();

  通过反射可以取得类结构上的所有的关键信息。

# 调用构造
  一个类中可以存在多个构造方法,如果要取得类中构造方法调用,就可以使用Class类提供的多多重方法

  取得指定参数类型的构造 public Constructor<T> getConstructor(Class<?>... parameterTypes)
  取得类中所有构造  public Constructor<?>[] getConstructors()

  以上两个方法返回的都是Constructor类的实例化对象,关注实例化对象方法。
  public T newInstance(Object ... initargs)

  我们在IDE上提示出来的信息 都是通过反射取来的。

  讲解Constructor类的目的并不是让你去分析类的构造方法取得组成.
  而是
  分析定义简单java类的时候一定要保留一个无参构造。
  观察Class实例化对象产生的问题。
  Class类通过反实例化对象的时候，只能够调用类中午的无参构造,那么如果现在类中没有参构造,无法使用Class类操作只能够通过明确的构造调用执行实例化处理.

  以后写简单java类要写参构造,你就不需要会

# 调用方法(major)
  实际上类中的构造方法你可能很难会碰到,但是类中的普通方法的反射调用,你在开发中一定会使用到,而且使用好了可以节省大量重复编码,在Class类中定义了有如下两个取得类中普通方法的定义.
  ** 取得全部方法      public Method[] getMethods()
  ** 取得指定方法      public Method getMethod(String name, Class<?>... parameterTypes)

  以上两个方法是java.lang.reflect包中的

  那么之前所编写的程序对于类中的setter,getter方法采用的都是明确的对象调用.
  有了反射机制处理之后,这个时候的程序即使没有明确的Person类型的对象(依然需要实例化对象,所有的普通方法必须在有实例化对象之后才可以进行调用),就可以使用反射来完成。

  这样操作的好处 不在局限于某一具体类型的对象,而是可以通过Object类型进行所有类的方法调用。

# 调用成员

  在之前已经成功的实现了调用构造 调用方法, 那么除了这两种模式之外还需要成员调用.前提:类中的所有属性一定要在类对象实例化对象之后才会进行空间的分配,所以此时如果想要调用类的属性,必须保证有实例化对象,而通过反射的newInstance()方法可以直接去的实例化对象.
  在Class类里面提供有两组取得属性的方法。
  **取得父类类属性**
    取得全部属性   public Field[] getFields()
    取得指定名称的属性 public Field getField(String name)
  **取得本类类属性**
    取得全部属性     public Field[] getDeclaredFields()
    取得指定名称的属性   public Field getDeclaredField(String name)
  
  关注属性的核心描述类
# major method 
  设置属性内容    public void set(Object obj, Object value)
  取得属性内容    public Object get(Object obj)