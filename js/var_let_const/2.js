// ReferenceError: Cannot access 'a' before initialization
// TDZ 暂时性死区 变量声明前就调用报错
console.log(a);
let a = 1;