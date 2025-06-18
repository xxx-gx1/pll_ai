// 业务流水账代码
// 封装
function Button(id){
    this.element = document.querySelector(`#${id}`);
    console.log(this.element);
    this.bindEvent();
}

Button.prototype.bindEvent = function(){
    // this 丢失问题 this => Button
    // this.element.addEventListener('click',function(){
    //     // this => this.element    解决 => 箭头函数也可以 或者去除element 或者bind(this)
    //     this.element.style.background = 'red';
    // }.bind(this))
    this.element.addEventListener('click',this.setBgColor.bind(this))
}
Button.prototype.setBgColor = function(){
    this.element.style.background = '#1abc9c';
    // this.element2...
}