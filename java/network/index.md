[back](/)

# 网络编程

网络

将地理上分开的主机连接在一起就形成网络。

java中的网络编程不是以物理主机区分
是以不同的jvm的进程区分的

![](assets/network-1.png)

jvm隐藏了一些网络原始信息
但是有一些操作还是留给了用户来实现

# Socket编程

![](assets/network-3.jpeg)

应用层之下 
传输层之上
接口层
操作系统提供给用户访问网络的系统接口

TCP（可靠的数据连接）
UDP (不可靠的数据连接)

从网络编程的本质来讲也分为两种类型

 C/S结构
 (client/server) 
 需要服务端一套  客服端一套
 可以使用自定义协议

 B/S结构
 (browser/server)
 通过浏览器访问服务器 
 由于其使用的公共的协议
 公开的端口，所以安全性较差

# 如何进行网络编程

如果要开发网络程序，使用java.net程序包即可。

TCP
ServerSocket
Socket

UDP 
DatagramSocket
DatagramPacket

TCP数据传输：
ServerSocket和Socket
建立客户端和服务器端
建立连接后，通过Socket中的IO流进行数据的传输
关闭socket

UDP数据传输:
DatagramSocket与DatagramPacket
建立发送端，接收端
建立数据包
调用Socket的发送接收方法
关闭Socket

数据形式不同
TCP的数据是流
UDP是数据包

通信模型
![](assets/network-2.png)


