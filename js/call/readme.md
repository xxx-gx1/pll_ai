# 手写call

- 手写指定函数内部的this
- 参数 一个个 apply []
- 当第一个参数时null 或undefined时 this？
  严格模式报错
- 应用场景的区别
  - call apply 立即执行的，区别是参数的传递方式，可以互换使用
  - bind 延迟执行

## 手写call
- call是属于所以函数的，Function 原型链上的方法
  gretting.call

## 包含的技能点
- 原型 Function
- 函数参数的理解
  context， rest运算符
- context 为空，null，undefine -> window
- 在context 上挂载方法，轻松实现函数内部的this 指向 context
  js 动态性 污染了context
  es6 symbol 唯一值，不会有覆盖context的属性
  delete context上的方法
- return 返回值