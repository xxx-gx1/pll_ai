// 作用域
// 作用域链 内部的可以访问外部
// 函数外部无法读取函数内的局部变量 ？
// 全局作用域
var n = 999

function f1() {
  // 没有使用var 声明全局  
  b = 123;
  // 函数作用域
  {
    // 块级作用域
    let a = 1;
  }
  console.log(n)
}

f1()
console.log(b)
