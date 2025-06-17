const addItems = document.querySelector('.add-items'); //  from 
const itemsList = document.querySelector('.plates'); // 列表

function addItem(e){
    e.preventDefault(); // 阻止默认提交
}

addItems.addEventListener('submit', addItem); // 监听提交事件