console.log(0/0);
// 平方根 NaN
console.log(Math.sqrt(-1));// js 内置的Math 对象
console.log(parseInt('123'),parseFloat('a123.123'),parseInt('123a'));
console.log(Number(undefined));// NaN
console.log(NaN===NaN);// false  Not a Number 的方式不等
console.log(isNaN(NaN));// true
console.log(typeof NaN);