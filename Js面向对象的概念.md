# JS的面向对象编程 

## 基础概念

1.	面向对象：把功能类似或者相同代码抽离出来，归为一类，把一些描述性的特征挂在这个类的原型上的一种编程方式。
2.	原型：是函数下的一个属性（prototype），去修改对象下公用的方法和属性，让公用的方法和属性在内存中只占一份，提高系统的的性能。
3.	原型链：实例化对象的原型链是构造函数的原型，对象身上没有原型只有原型链，函数既有原型又有原型链，原型链是实例化对象和构造函数之间的桥梁。
4.	对象的组成：方法（行为、操作）——函数和属性——变量。
5.	new：new过之后的函数的返回值就变成了对象，函数里的this全部指向这个对象，默认return这个对象，如果在构造函数中return了一个简单的类型，那么返回值还是这个对象。如果在构造函数中return了一个复合类型包括函数，那么返回值就是这个复合类型。new函数之后就叫做实例化，他的返回值就是实例化对象（函数既是实例化对象，又是构造函数）。

## 分析代码（搞懂原型链和原型）

			function fn(name,age){
				this.name=name;
				this.age=age;
			}
			fn.prototype.say=function(){
				alert('this is a fnss');
			}
			Object.prototype.say=function(){
				alert('this is a object');
			}
			Function.prototype.say=function(){
				alert('this is a function');
			}
			var obj = new fn('aa',12);
			obj.say();
  
   上述代码执行后的结果应该为 this is a fnss

			function fn(name,age){
				this.name=name;
				this.age=age;
			}
			Object.prototype.say=function(){
				alert('this is a object');
			}
			Function.prototype.say=function(){
				alert('this is a function');
			}
			var obj = new Object;
			obj.say();

   上述代码执行后的结果为 this is a object

			function fn(name,age){
				this.name=name;
				this.age=age;
			}
			fn.prototype.say=function(){
				alert('this is a fnss');
			}
			Object.prototype.say=function(){
				alert('this is a object');
			}
			Function.prototype.say=function(){
				alert('this is a function');
			}
			fn.say();

  上述代码执行后的结果是 this is a function


			function fn(name,age){
				this.name=name;
				this.age=age;
			}
			fn.prototype.say=function(){
				alert('this is a fnss');
			}
			Object.prototype.say=function(){
				alert('this is a object');
			}
			Function.prototype.say=function(){
				alert('this is a function');
			}
			Object.say()

  上述代码执行后的结果是 this is a function

			function fn(name,age){
				this.name=name;
				this.age=age;
			}
			fn.prototype.say=function(){
				alert('this is a fnss');
			}
			Object.prototype.say=function(){
				alert('this is a object');
			}
			Function.prototype.say=function(){
				alert('this is a function');
			}
			Function.say();

  上述代码执行后的结果是 this is a function


			function fn(name,age){
				this.name=name;
				this.age=age;
			}
			Object.prototype.say=function(){
				alert('this is a object');
			}
			Function.say();
			fn.say();
			var obj = new Function;
			obj.say();
 
  上述代码执行后的结果都是 this is a object

  从上面几个情况可以分析出，一个实例化对象去调用某个方法无论何种情况都是遵循以下特点：
				
  *实例化对象上就有方法 > 构造函数原型下的方法 > Object.prototype*
		
  *对象找链 -> 构造函数的原型 -> 构造函数原型下的链 -> 构造函数的原型*