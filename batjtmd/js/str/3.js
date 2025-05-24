// 包装类
let a="abc";
let b= new String("abc");
console.log(a==b); // true  隐式转换  比较值
// js 给所有的简单类型提供了 相应类型的类  包装类
console.log(a===b); // false  比较地址
console.log(b.split(''))
// 为了统一面向对象写法
// js 会主动的把简单数据类型 包装成对象
// a -> new String(a)
// 之后会销毁对象，回归原来的简单类型
console.log(a.split(''))
