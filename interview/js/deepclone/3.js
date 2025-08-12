const target = {
    a:1
}
const source = {
    // 对象的嵌套
    b:{
        name:'cxk',
        hobbies: ['篮球','rap']
    },
    c:1
}
// 浅拷贝
const result = Object.assign(target,source);
target.b.name = 'kobe';
target.b.hobbies.push('足球');
target.c = 2;


console.log(target,source);

