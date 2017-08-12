## ECMAScript 6 

### let 和 const 命令   
#### let 命令         
**基本用法**    
所声明的变量，只在let命令所在的**代码块**内部有效：       
		
	{
	  let a = 10;
	  var b = 1;
	}
	
	a // 报错
	b // 1    

上述代码b可以返回正确的值，但是用let声明的变量a会报错，所以说明let声明的变量只在代码块中有效。  
可以利用这个特性在for循环中使用let命令：
				       	
	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6]();    

上述代码的结果为6,因为变量i是let声明的，当前的i只在当此循环有效，所以每一次循环的i都是一个新的变量（	在Javascript引擎内部会记住上一次循环的值，初始化本轮的变量i时，就在上一轮循环的基础上计算）

**不存在变量提升**    
用let声明的变量，不能在定义前使用，这点是不同于var命令声明变量的，var声明的变量，由于预解析，当在声明前使用，变量的值为undefined。但是let声明的变量，在声明之前使用就会报错。
	
	// var 的情况
	console.log(foo); 
	var foo = 2;
	
	// let 的情况
	console.log(bar);
	let bar = 2;     
上述代码中，在声明前使用var声明的变量，返回undefined，而在声明前使用let生命的变量，就会报错。

**暂时性死区**   

只要块级作用域内存在let命令，它所声明的变量就绑定这个区域，不再受外部的影响。
 
	var tmp = 123;
	
	if (true) {
	  tmp = 'abc'; 
	  let tmp;
		}
上属代码，将会报错，因为在块级作用域内，使用了还未被let声明的变量。

**不允许重复声明**	    
let不允许在相同的作用域内声明同一个变量，例如：
	
	function () {
	  let a = 10;
	  var a = 1;
	}	
	function () {
	  let a = 10;
	  let a = 1;
	}	
上述两段代码均会报错，可以证明let在相同作用域内声明同一个变量报错。

#### const命令    
**基本用法**  
1. const声明一个只读的常量。一旦声明，常量的值就不能改变。 
        
	const PI =3.1415926;
	pI=3
上述代码的运行结果会报错，因为无法改变一个常量的值  
2. const声明的变量不得改变值，这意味着，const一旦声明变量，就必须初始化，不能留到以后再赋值。  
3. const的作用域与let命令相同：只能在声明所在块级作用域内有效。  
4. 必须在const声明的常量位置后面使用，例如：     
5. const声明的常量不能重复声明，例如：    
  
	var message = "Hello!";
	let age = 25;
	// 以下两行都会报错
	const message = "Goodbye!";
	const age = 30;

---

### Promise对象
**基本用法**       
Promise是一种异步编程的解决方案，体现在代码中它是一个对象，可以通过Promise构造函数来实例化。   
Promise对象有两个特点：   
1.	对象的状态不受外界影响---	Promise对象代表一个异步操作，它共有三个状态	Pending（进行中）、Resolved（已完成）和Rejected（已失败），异步操作的结果决定了当前是哪一种状态。
2.	一旦状态改变，就不会发生变化---Promise对象状态发生改变只有两种情况，一种是由Pending到Resolved,另一种是Pending到Rejected，若这两种情况之一发生了，则对象的状态将不会再发声改变。   
**两个原型上的方法**   
1. Promise.prototype.then()   
then方法是定义在原型对象Promise.prototype上的。第一个参数是Resolved状态的回调函数，第二个参数（可选是Rejected）状态的回调函数。  
2. Promise.prototype.catch()   
Promise.prototype.catch方法是.then(null, rejection)的别名，用于指定发生错误时的回调函数。
 		