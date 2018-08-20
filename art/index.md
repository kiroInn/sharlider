# Art of Unix Programming

+ Module principle: use clean interface and simple parts
+ Rule of clarity: clarity is better than machine time
+ Rule of composition: consider splicing combinations when designing
+ Separation principle: policy is separated from mechanism, interface is separated from engine
+ Popular principle: interface design to avoid novelty

## Multiprogramming: separating processes to separate function

## Minilanguages: finding a notation that sings

微型语言的范畴从声明性(具有隐式操作)发展到命令式(具有显式操作)
现代微型语言,要么就非常通用而不紧凑,要么就非常不通用而紧凑,不通用也不紧凑的语言则完全没有竞争力

## Configuration: starting on the right foot

提高适应能力,除非这样做会产生超过0.7秒的延迟.

+ 能省掉这个功能吗?为什么在加厚手册之处还要加重用户负担
+ 能否用某种无伤大雅的方式改变程序的常规行为从而让无需这个选项
+ 这个选项是否花哨没用?是否应该少考虑用户界面的可配置性而多考虑正确性
+ 这个选项附加的行为是否应该用一个独立的程序来代替

## from -a to -a command option
+ -a all
+ -b buffer batch
+ -c check
+ -d debug -D define
+ -e execute exclude expression
+ -f file force
+ -h header help
+ -i initialize interactive -I include
+ -k keep
+ -l list load login
+ -m message mail mode
+ -n number not
+ -o output
+ -p port  protocol
+ -q quite
+ -r -R recurse
+ -s silent subject
+ -t tag
+ -u user
+ -v verbose -V version
+ -w width
+ -x extract
+ -y yes
+ -z zip
 
## Interfaces:  user-interface design in the unix environment

array assign attribute binOp block call class control dic dummy for function handler keyword module name
nameType node op raise rbfloat rbint regexp return slice starred str strembed subscript symbol try
unaryOP undef url void while yield
OP 
numeral : add sub mul div mod pow fllordiv
comparison: eq eqv eqaual lt gt 
bit: bitand bit or bitxor in lShift Rshit invert 
boolean: and or not 
synthetic: notequal noteq let gte notin  
ruby defined match notmatch


 