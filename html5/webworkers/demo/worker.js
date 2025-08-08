// 不是JS 单线程
// Worker 线程 复杂耗性能的计算
// 这个能力来自于浏览器
// js 还是单线程，只不过在复杂计算的时候用worker 线程
// 不可以使用document，也没有this
// 线程间的通信，消息机制
// console.log(this, 'worker 线程')
// console.log(this,document.getElementById('box'))
self.onmessage = function (e) {
    console.log(e.data)
    self.postMessage('hello from worker')

}
