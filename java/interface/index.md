# strengthen interface
 从jkd1.8开始支持的新特性

# 接口使用问题
 当接口的子类很多的时候
 某一天我发现接口缺了个方法
 造成此种尴尬局面的核心问题在于：接口只是一个方法的生命,而没有具体的方式实现,随着时间的推迟,出现了以上的问题，那么该接口无法使用 
 jdk1.8开始
 可以使用default来定义普方法,需要对象调用
 可以使用static定义静态方法,通过接口名调用
 因为时间一长，许多的问题就出现两大的问题,
 但此操作不属于标准设计,它属于挽救设计


# lamdba表达式

  是从jdk1.8开始推出重要新特性
  很多开发语言都支持函数式编程
  最优代表性就是haskell

lambda表达式允许你通过表达式来代替功能接口。
lambda表达式就和方法一样,
它提供了一个正常的参数列表和一个使用这些参数的主体
(body,可以是一个表达式或一个代码块)。

传统面向对象开发要求在于: 结构必须非常完整
但是如要想要使用函数式有一个前提
@FunctionalInterface //这是一个函数式编程接口，只允许一个方法

 (参数) -> 单行语句
 多行语句? 使用'{}'了
 如果习惯使用函数式编程就继续使用,不习惯就慢慢习惯

 Scala 就是基于java开发了一套函数式语言.

# 方法引用

  从最初开始只要是进行应用基本上都是针对引用类型完成的,也就是说只有数组,类，接口具备引用的操作,但是现在开始追加了方法应用的概念.实际上引用的本质就是别名,
方法引用的形式

  引用静态方法  类名称::static 方法名称
  引用某个对象的方法 实例化对象::普通方法
  应用某个特定类的方法  类名称::普通方法
  引用构造方法 类名称::new
这些都属于lambda的补充

# 内建函数式接口
  lambda语法实际上简化了方法引用,但lamdba核心在于函数式接口,而函数式接口核心在于只有一个方法。
  功能型函数式接口  Function<String, Integer> fn = String :: valueOf; fn.apply(1000);
  供给型函数式接口  Sipplier<String> sup = "hello" :: toUpperCase;  System.out.println(cf.get());
  消费型函数式接口  Consumer<String> cf = System.out :: println;  cf.accept("hello world");
  断言型函数式接口  Predicate<String> pre = "" :: startWith; System.out.println()
  如果需要进行复杂的Lambda运算 可以利用这些函数式接口进行操作。
  只是把操作标准化了。
  