//  扩展运算符
// function kz(...arg){
//   console.log(arg[0]);
//   console.log(arg[1]);
//   console.log(arg[2]);
//   console.log(arg[3]);

// }
// kz(1,2,3);


//对象的结构
let json = {
  a:'zym',
  b:'Eamon'
}
function fun({a,b='aaa'}){
  console.log(a,b);
}
fun(json);