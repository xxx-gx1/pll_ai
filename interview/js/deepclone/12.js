let arr1 = [
    {
        name:'cxk',
        hobbies: ['篮球','rap']
    },
    function() {
        console.log('函数拷贝不了')

    }
]
let arr2 = JSON.parse(JSON.stringify(arr1));
arr2[0].name = 'kobe(深拷贝)';
arr2[0].hobbies.push('跳');
console.log(arr2,arr1)

