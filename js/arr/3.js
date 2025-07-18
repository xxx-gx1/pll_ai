const arr = new Array(5);
// console.log(arr[0]);
let obj = {
    name:'蔡徐坤'
}
let obj2 = {
    skill:'小黑子'
}
obj.__proto__ = obj2;
console.log(obj.skill);
for (let key in obj) {
    console.log(obj[key]);
}
console.log(
    obj.hasOwnProperty('name'),
    obj.hasOwnProperty('skill')
);
console.log(arr.hasOwnProperty(0));