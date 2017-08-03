## AJAX--异步的JavaScript和XML

### 基础概念

AJAX = 异步 JavaScrpt 和 XML   
AJAX 是一种用于创建快速动态网页的技术   
通过在后台与服务器进行少量数据交换，AJAX可以使网页实现异步更新，这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。 


### AJAX 交互模型（实现原理、实现机制）

* 用户发出异步请求；  
* 创建 XMLHttpRequest 对象；  
* 填写请求地址（method：使用什么方式请求 url:请求的地址 boolean： 是否为异步请求默认为true）  
* 发送请求， send 方法  
* 接收结果并分析  
* 实现刷新

### XMLHttpRequest对象
当需要异步与服务器交换数据的时候，需要XMLHttpRequest对象来异步交换。这个对象包含了下几个重要属性：  

* onreadystatechange---每次状态改变所触发事件的事件处理程序。
* responseText---从服务器进程返回数据的字符串形式。
* responseXML---从服务器进程返回DOM兼容的文档数据对象。
* status---从服务器返回的数字代码，如404（未找到） 和 202（已就绪）
* status Text---伴随状态码的字符串信息。
* readyState---对象状态值。对象状态值有以下几个：
	* 0-（未初始化）还没有调用send（）方法
	* 1-（载入）已调用send（）方法，正在发送请求
	* 2-（载入完成）send（）方法执行完成
	* 3-（交互）正在解析响应内容
	* 4-（完成）响应内容解析完成，可以在客户端调用了

### get 和 post 两种请求方式的不同    
1.post方式
   
* 通过send发送前端数据给后端   
* 相对安全（关于用户的信息会用post或传文件的时候）   
* 体积理论上来说是无限大。（但是后端会做限制）
* 在send前设置一个SetRequestHeader（）  

2.get方式

* 通过浏览器的url来发送数据给后端
* 相对来说就不安全（只要不跟用户信息打交道或者在数据一定范围都可以使用get）
* 体积就受到浏览器的限制（不同的浏览器有不同的限制）
* 不用设置请求头

### 在IE浏览器中可能出现的中文解析问题
在IE浏览器下中文会被解析为URL编码格式，容易出问题,所以建议只要val值会出现中文就用encodeURI()转一下。另外在post的请求方式中，我们必须在send前设置一个SetRequestHeader（bstrHeader,bstrValue），第二个参数去设置一下提交数据的规则。

### Ajax同步和异步

XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数默认设置为 true,
这时 JavScript 无需等待服务器的相应，而是可以等待服务器响应时执行其他的版本，当响应就绪后对响应进行处理。如果使用同步的方式进行数据请求，那么后续的操作必须等待服务器响应后才能继续执行。

### 缓存机制
### 常用的Http状态码
100 Continue    
  初始的请求已经接受，客户应当继续发送请求的其余部分    
101 Switching Protocols    
  服务器将遵从客户的请求转换到另外一种协议     
200 OK    
  一切正常，对GET和POST请求的应答文档跟在后面    
201 Created    
  服务器已经创建了文档，Location头给出了它的URL。    
202 Accepted       
  已经接受请求，但处理尚未完成。    
203 Non-Authoritative Information    
  文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝     
204 No Content     
  没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的     
205 Reset Content    
  没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容    
206 Partial Content    
  客户发送了一个带有Range头的GET请求，服务器完成了它    
300 Multiple Choices    
  客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。    
301 Moved Permanently    
  客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。    
302 Found    
  类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。    
303 See Other    
  类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取    
304 Not Modified     
  客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。     
305 Use Proxy     
  客户请求的文档应该通过Location头所指明的代理服务器提取    
307 Temporary Redirect     
  和302（Found）相同。许多浏览器会错误地响应302应答进行重定向，即使原来的请求是 POST，即使它实际上只能在POST请求的应答是303时才能重定向。由于这个原因，HTTP 1.1新增了307，以便更加清除地区分几个状态代码： 当出现303应答时，浏览器可以跟随重定向的GET和POST请求；如果是307应答，则浏览器只能跟随对GET请求的重定向。      
400 Bad Request    
  请求出现语法错误。    
401 Unauthorized    
  客户试图未经授权访问受密码保护的页面。应答中会包含一个WWW-Authenticate头，浏览器据此显示用户名字/密码对话框，然后在填写合适的Authorization头后再次发出请求。     
403 Forbidden     
  资源不可用。    
404 Not Found        
  无法找到指定位置的资源      
405 Method Not Allowed      
  请求方法（GET、POST、HEAD、Delete、PUT、TRACE等）对指定的资源不适用。      
406 Not Acceptable     
  指定的资源已经找到，但它的MIME类型和客户在Accpet头中所指定的不兼容    
407 Proxy Authentication Required    
  类似于401，表示客户必须先经过代理服务器的授权。   
408 Request Timeout    
  在服务器许可的等待时间内，客户一直没有发出任何请求。客户可以在以后重复同一请求。    
409 Conflict   
  通常和PUT请求有关。由于请求和资源的当前状态相冲突，因此请求不能成功。    
410 Gone    
  所请求的文档已经不再可用，而且服务器不知道应该重定向到哪一个地址。它和404的不同在于，返回407表示文档永久地离开了指定的位置，而404表示由于未知的原因文档不可用。    
411 Length Required   
  服务器不能处理请求，除非客户发送一个Content-Length头。  
412 Precondition Failed   
  请求头中指定的一些前提条件失败    
413 Request Entity Too Large   
  目标文档的大小超过服务器当前愿意处理的大小。如果服务器认为自己能够稍后再处理该请求，则应该提供一个Retry-After头    
414 Request URI Too Long   
  URI太长   
416 Requested Range Not Satisfiable   
  服务器不能满足客户在请求中指定的Range头    
500 Internal Server Error   
  服务器遇到了意料不到的情况，不能完成客户的请求   
501 Not Implemented   
  服务器不支持实现请求所需要的功能。例如，客户发出了一个服务器不支持的PUT请求   
502 Bad Gateway   
  服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答    
503 Service Unavailable   
  服务器由于维护或者负载过重未能应答。例如，Servlet可能在数据库连接池已满的情况下返回503。服务器返回503时可以提供一个Retry-After头   
504 Gateway Timeout   
  由作为代理或网关的服务器使用，表示不能及时地从远程服务器获得应答    
505 HTTP Version Not Supported  
  服务器不支持请求中所指明的HTTP版本  