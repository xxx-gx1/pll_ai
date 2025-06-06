function Person(name, age) {
    // this 指向当前实例化的对象
    this.name = name;
    this.age = age;
}

Person.prototype.sayHello = {
     function () {
        console.log(`Hello,my name is ${this.name}`);
    }
}

var hu = new Person('小胡', 18);
console.log(hu.__proto__);
var a = {
    name:'孔子',
    contry:'中国'
}
hu.__proto__ = a;
console.log(hu.__proto__);
console.log(hu.contry);
console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.constructor);
console.log(Person);
console.log(hu.eee);// undefined
console.log(hu.constructor);
console.log(Person.constructor);