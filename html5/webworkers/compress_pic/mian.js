// 主线程 单线程
// event loop
// 启动一个web worker 线程
// 压缩线程
const worker = new Worker('./compressWorker.js')
worker.onmessage = function (e) {
    console.log(e.data)
    if(e.data.success) {
        document.getElementById('output').innerHTML = `<img src="${e.data.data}" alt="">`
    }

}

function handleFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            resolve(reader.result);
        };
        reader.onerror = reject;
    });
}

async function compressFile(file) {
    const imgDataUrl = await handleFile(file);
    // console.log(imgDataUrl,'////');
    // 干复杂计算的同时不影响页面性能
    worker.postMessage({
        imgData: imgDataUrl,
        quality: 0.5,
    })

}


const oFile = document.getElementById('fileInput')
oFile.addEventListener('change', async function (e) {
    const file = e.target.files[0];
    if(!file) return
    await compressFile(file)


})

