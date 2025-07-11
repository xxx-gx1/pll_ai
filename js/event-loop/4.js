console.log('同步Start')
const promise1 = Promise.resolve('Frist Promise');
const promise2 = Promise.resolve('Second Promise');
const Promise3 = new Promise(resolve => {
    console.log('promise3')
    resolve('Third Promise');
})
promise1.then(res => {
    console.log(res);
})
promise2.then(res => {
    console.log(res);
})
Promise3.then(res => {
    console.log(res);
})

setTimeout(() => {
    console.log('下一把再相见')
    const promise4 = Promise.resolve('Forth Promise');
    promise4.then(res => {
        console.log(res);
    })
},0)
setTimeout(() => {
    console.log('下下一把再相见');
},0)

console.log('同步end')




