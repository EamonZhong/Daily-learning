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
				
  **实例化对象上就有方法 > 构造函数原型下的方法 > Object.prototype**
	 	
  **对象找链 -> 构造函数的原型 -> 构造函数原型下的链 -> 构造函数的原型**


## ES6中面向对象的写法

ES6引入了Class（类）这个概念。新的class写法让对象原型的写法更加清晰、更像面向对象编程的语法，也更加通俗易懂,我们可以通过下面一段具体的代码来了解clas extends 以及 super

		class Person{
			constructor(name,age){
				this.name=name;
				this.age=age;
			}
			say(){
				alert('我的名字是'+this.name+'今年'+this.age+'岁了，我会说话');
			}
		}
		class Student extends Person{
			constructor(name,age,grade){
				super(name,age)
				this.grade=grade;
			}
			say(){
				alert(1);
			}
			study(){
				alert('我的名字是'+this.name+'今年'+this.age+'岁了，我的成绩是'+this.grade)
			}
		}
		var people = new Person('Jack',18);
		people.say();
		var student = new Student('Eamon',20,'优秀');
		student.study();


例如上面的这段代码，首先用**class**定义了一个“Person类”，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。简单地说，constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。

Class之间可以通过**extends**关键字实现继承,上面定义了一个student类，该类通过extends关键字，继承了Person类的所有属性和方法。

**super**关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。

ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数修改this。

## ES6中的箭头函数 ##

### 基本的语法 ###

1. 具有一个参数的简单函数		
 
		var fn = a => a
		fn('我是一个简单函数') //我是一个简单函数

2. 没有参数需要在箭头前面加上小括号
	
		var log = () =>{
			alert('no param')
		}
		
3. 多个参数需要用到小括号。参数之间要用逗号间隔

		var fn = (a,b) => a + b
		add(1,2) //3

4. 如果是函数体多条语句需要用到大括号

		var fn = (a,b) =>{
			if(typeof a == 'number' && typeof b == 'number'){
				return a+b;		
			else{
				return 0;
			}
		}

### 需要注意的地方 ###

1. 箭头函数的this指向永远指向它的定位父级
2. 箭头函数不能用new操作

### 关于箭头函数的操作（判断this指向） ###
op1:

		function fn(){
			alert(this);
		}
		fn()//window;
		new fn//object;		
op2:

		function fn(){
			alert(this);
		}
		document.onclick=fn;//document;

op3:

		function fn(){
			alert(this);
		}
 		document.onclick = function(){
			fn();
		};//window;

op4:

		function fn(){
			alert(this);
		}
		document.onclick = function(){
			function fn2(){
				fn(); 
			}
			fn2.call(document);
		};	//window;		

op5:	

		function fn(){
				alert(this);
		}
		document.onclick = function(){
			function fn2(){
				fn(); //window
			}
			new fn2;
		}; //window			

## 自定义事件 ##

### 概念 ###

1. 自定义事件：将某些业务中特殊情况的事件定义成一个独立的事件。
2. 事件存储器：将同一事件的所有函数存放在一个数组当中。
3. 事件触发器：当某个指定的事件触发的时候，调用这个触发器，执行触发器中的执行事件的所有函数。

### 代码模拟 ###

1. 存储器模拟：
		
		function addEvent(obj,Events,fn){		
			//若有对象，则走原来的那个对象，没有对象就创建一个对象去管理
			obj.zdy = obj.zdy || {};
			//如果obj.zdy中没有这个事件名，则复制一个空数组
			obj.zdy[Events] = obj.zdy[Events] || [];
			//把函数push到这个obj.zdy[指定事件]中
			obj.zdy[Events].push(fn);		
		};

2. 触发器模拟：
		
		function trigger(obj,Events){
			//如果obj.zdy没有这个事件，说明没有绑定这个事件
			if(!obj.zdy[Events])return;			
			obj.zdy[Events].forEach((e,i)=>{
				e.call(obj);
			});
		}