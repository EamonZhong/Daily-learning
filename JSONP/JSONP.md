## JSONP

### 基本概念
1. 什么是JSONP  
JSONP可用于解决主流浏览器的跨域数据访问的问题。由于同源策略，一个网页是无法访问不同域名或不同接口或者不同协议的服务器的（跨域问题)，而 HTML 的`<script>` 元素是一个例外。利用 `<script>` 元素的这个开放策略，网页可以得到从其他来源动态产生的 JSON 资料，而这种使用模式就是所谓的 JSONP。用 JSONP 抓到的资料并不是 JSON，而是任意的JavaScript，用 JavaScript 直译器执行而不是用 JSON 解析器解析。
2. 跨域问题的解决方案   
上面一个概念已经提及到了跨域的问题，解决的办法有以下几种：      
	* 新版本XMLHttpRequest + 后端设置请求头权限`Access-Control-Allow-Origin`。（基于ajax）
	* 服务器代理---使用服务器文件，在默认情况下可以直接跨域,那么只要把这个服务器文件与请求文件同源就可以实现跨域。（基于ajax）
	* flash
	* iframe
	* jsonp---json + padding,json格式的数据内填充 （填充式 JSON 或参数式 JSON）。

### JSONP的实现
1. 首先数据必须要为一个函数名加括号的数据------fn([{},{},{}]); 
2. 需要在**全局**下声明一个与数据的函数名一致的函数。
3. 想在哪里使用就创建一个srcipt标签，src等于数据的地址即可

### 创建script标签后的删除问题
当创建script并且插入到页面的时候 （动态加载）都是异步，这个时候本次请求已经提交，后端只要返回正确的数据fn()，那么不管什么时候删除script前端都会接受到后端的数据。

> 参考自 [http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html](http://www.cnblogs.com/dowinning/archive/2012/04/19/json-jsonp-jquery.html "说说JSON和JSONP，也许你会豁然开朗，含jQuery用例")