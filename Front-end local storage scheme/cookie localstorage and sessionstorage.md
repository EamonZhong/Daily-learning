## Cookie
### 基础概念
前端使用cookie跟后端做的事情不一样，不过都是通过cookie的特性来操作，比如说可以用cookie来记录当前的用户信息。cookie原则上必须要在服务器环境下才可以运行，他能够将当前域名下的数据保存在浏览器中，cookie的存储量很小 ，一般只有4k左右，默认情况下它的声明周期到浏览器关闭就结束了。
### 基本的操作
1. 写操作: document.cookie= key=value
2. 读操作: document.cookie
3. 设置声明周期的时间:expires=设置的时间

## localStorage
### 基础概念
HTML5标准引入的新技术，用来本地存储，他是专门用来前端存储数据的，可以说是前端的数据库，存在在浏览器中，localStorage存储的内容可以比cookie更多（5M左右），比cookie的操作更加的简便。
###基本操作
1. 设置: localStorage.setItem(key,val);
2. 读取: localStorage.getItem(key);
3. 删除:	 localStorage.removeItem(key);
4. 清空:	 localStorage.clear();
		
## sessionStorage
###基本概念
sessionStorage 与 localStorage 的接口类似，但保存数据的生命周期与 localStorage 不同。它可以将一部分数据在当前会话中保存下来，刷新页面数据依旧存在。但当页面关闭后，sessionStorage 中的数据就会被清空。

## 三者的异同
1. 生命周期
	* cookie：可设置失效事件，默认是关闭浏览器后失效。
	* localStorage：除非被清除否则永久保存。
	* sessionStorage:仅在当前页面有效，关闭页面或者浏览器后被清除。
2. 存放数据大小
	* cookie：4k左右。
	* localStorage and sessionStorage：一般为5M。
3. 与服务器通信
	* cookie：每次都会携带在HTTP头中，如果使用cookie保存过多数据会带来性能问题
  	* localStorage and sessionStorage： 仅在客户端中保存，不参与和服务器的通信。