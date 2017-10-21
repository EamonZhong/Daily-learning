//  扩展运算符
// function kz(...arg){
//   console.log(arg[0]);
//   console.log(arg[1]);
//   console.log(arg[2]);
//   console.log(arg[3]);

// }
// kz(1,2,3);


//对象的结构
// let json = {
//   a:'zym',
//   b:'Eamon'
// }
// function fun({a,b='aaa'}){
//   console.log(a,b);
// }
// fun(json);

//数组合并
// var a={a:'aa'};
// var b={b:'bb'};
// var c={c:'cc'};
 
// let d=Object.assign(a,b,c)
// console.log(d);

//字符串查找
let jspang='zym';
let blog = '我是zym今年18岁';
document.write(blog.includes(jspang));