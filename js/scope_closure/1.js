function foo() {
    console.log(myname);
}
    
function bar() {
    var myname = "极客邦";
    bar();
    console.log(myname);
}
var myname = "极客时间";
foo();