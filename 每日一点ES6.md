# ECMAScript 6 #

### let and const ###
       
1.let命令      
*** 基本用法 *** 
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

***不存在变量提升***    
用let声明的变量，不能在定义前使用，这点是不同于var命令声明变量的，var声明的变量，由于预解析，当在声明前使用，变量的值为undefined。但是let声明的变量，在声明之前使用就会报错。
	
		// var 的情况
		console.log(foo); 
		var foo = 2;
		
		// let 的情况
		console.log(bar);
		let bar = 2;     
上述代码中，在声明前使用var声明的变量，返回undefined，而在声明前使用let生命的变量，就会报错。

***暂时性死区***   

只要块级作用域内存在let命令，它所声明的变量就绑定这个区域，不再受外部的影响。
 
		var tmp = 123;
		
		if (true) {
		  tmp = 'abc'; 
		  let tmp;
		}
上属代码，将会报错，因为在块级作用域内，使用了还未被let声明的变量。