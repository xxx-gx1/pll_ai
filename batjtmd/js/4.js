//全局的 js 代码在执行之前会有一个编译
//变量提升了 
console.log(value,'------');
var value;
var a;
a=1;
if(false){
    var value = 1;// 声明变量 
}
// undefined 有
console.log(value);