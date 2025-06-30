// 完成的功能
// function oobjectFactory(){
//     var obj = {};
//     // 类数组上没有shift方法，所以借用数组的shift方法
//     var Constructor = [].shift.call(arguments);// 构造函数
//     obj.__proto__ = Constructor.prototype;
//     var ret = Constructor.apply(obj,arguments);
//     // ||null 的情况 仍然会返回object 构造函数 return 简单类型，忽略
//     return typeof ret ==='object'? ret || obj : obj;
// }

// es6 版本
function oobjectFactory(Constructor,...args){
    var obj = {};
    // 类数组上没有shift方法，所以借用数组的shift方法
    // var Constructor = [].shift.call(arguments);// 构造函数
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj,args);
    // ||null 的情况 仍然会返回object 构造函数 return 简单类型，忽略
    return typeof ret ==='object'? ret || obj : obj;
}

function Person(name,age){
    this.name=name
    this.age=age
    return null;
    // return{
    //     name,
    //     age,
    //     label:'haha'
    // }
}

Person.prototype.sayHi = function(){
    console.log(`你好，我是${this.name}`)
}

let p1 = new Person('zs',18)
console.log(p1)
// let p = new Person('zs',18)
// p.sayHi()

let p =oobjectFactory(Person,'zs',18)
console.log(p)
p.sayHi();
console.log(p instanceof Person)
// new Person(...) -> function[[constuct]] -> {} &&this -> {} -> [[call]]
// -> {}.__proto__ -> Constructor.prototype -> return {}