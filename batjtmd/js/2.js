//数组对象
const arr = ['1', '2', '3', '4', '5'];
console.log(typeof arr);
const data =new Date();
console.log(typeof data);
// 如何区分Object 的这些类型？
//[object Array]
//[object Date]
console.log(typeof Object.prototype.toString.call(arr));
console.log(Object.prototype.toString.call(data));

// 会在MDN 文档看一些资料
function getType(){
    // string api 的选择
    // split + substring 
    return Object.prototype.toString.call(arr).silce(8,-1);
}