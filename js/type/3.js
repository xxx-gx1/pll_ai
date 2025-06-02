// 独一无二的值
const sym=Symbol();
const sym1=Symbol();
const sym2=Symbol('desc');// label 标签
console.log(typeof sym,sym);
console.log(sym===sym1);// false
// symbol 可以用于对象的key 
// 使用Symbol 构造函数实例化，一个标记为id 的唯一值ID
// ID 唯一性，Symbol
const ID=Symbol('id');
// es6 之前 key string
// es6 之后 symbol 作为key 
const sex='男'
const age = Symbol('age');
const user={
  "name":'Alice',
  // 当我们在大厂，如果我们要去修改别人的代码中的对象
  // 对象动态的 不希望出错
  [ID]:123,
  [age]:18,
}
user.age=19;

// console.log(user.name,user[ID],user[age],user.age);
// 面向对象私有属性概念？
// 对象的隐私，内部需要，不希望外用
for(let key in user){ // 遍历对象
  console.log(key,user[key]);
}