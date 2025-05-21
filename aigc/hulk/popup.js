/*
 * @desc 页面背景切换
 * @author pll
 * @date 2025-0-5-10 11.18.58
 * */
// JS面向对象 语言
// 事件监听
// 弹窗加载完后
document.addEventListener('DOMContentLoaded', function() {
    //获取按钮元素
    const changeColorButton = document.getElementById('changeColorButton');
    if (changeColorButton) {
        changeColorButton.addEventListener('click', function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.scripting.executeScript({
                    target: {tabId: tabs[0].id},
                    function: function() {
                        document.body.style.backgroundColor = 'green';
                    }
                });
            });
        });
    }
});