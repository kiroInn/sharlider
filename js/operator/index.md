# 操作符
操作符包括算术操作符、位操作符、关系操作符和相等操作符

ECMAScript 操作符的与众不同之处在于，它们能够适用于很多值
例如字符串、数字值、布尔值，甚至对象

不过，在应用于对象时，相应的操作符通常都会调用对象的valueOf()
（或）toString()方法，以便取得可以操作的值

# 一元操作符
递增与递减操作符

# 位操作符

按位非（NOT）
按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的补码

按位与（AND）
按位与操作只在两个数值的对应位都是1 时才返回1，任何一位是0，结果都是0

按位或（OR）
按位或操作在有一个位是1 的情况下就返回1，而只有在两个位都是0 的情况下才返回0

按位异或（XOR）
这个操作在两个数值对应位上只有一个1 时才返回1，如果对应的两位都是1 或都是0，则返回0

# 布尔操作符

逻辑非(!)
如果操作数是一个对象，返回false
如果操作数是一个空字符串，返回true
如果操作数是一个非空字符串，返回false
如果操作数是数值0，返回true
如果操作数是任意非0 数值（包括Infinity），返回false
如果操作数是null或NaN或undefined，返回true

逻辑与(&&)
如果第一个操作数是对象，则返回第二个操作数
如果第二个操作数是对象，则只有在第一个操作数的求值结果为true 的情况下才会返回该对象
如果两个操作数都是对象，则返回第二个操作数
如果有一个操作数是null，则返回null
如果有一个操作数是NaN，则返回NaN
如果有一个操作数是undefined，则返回undefined

逻辑或(||)
如果第一个操作数是对象，则返回第一个操作数
如果第一个操作数的求值结果为false，则返回第二个操作数
如果两个操作数都是对象，则返回第一个操作数
如果两个操作数都是null，则返回null
如果两个操作数都是NaN，则返回NaN
如果两个操作数都是undefined，则返回undefined

## 乘性操作符
乘法、除法、求模

## 加性操作符

## 关系操作符

When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.
An empty string converts to 0. A non-numeric string converts to NaN which is always false.

When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

## 相等操作符
相等和不相等

## 条件操作符
三元条件操作符

## 赋值操作符
在等于号（=）前面再添加乘性操作符、加性操作符或位操作符

## 逗号操作符