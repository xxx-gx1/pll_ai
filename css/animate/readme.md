# 动画

从 url 输入要页面渲染

- transition 过渡
- transform 变换
- animation 关键帧动画
- js
  - dom 对象
  - 频繁修改 dom 节点的 style 属性
  - requestAnimationFrame 方法
    请求 动起来 关键帧
    dom 动画和屏幕的刷帧率一致
    - 递归
- web 程序

  - 浏览器程序 c++
  - 输入是 html css
  - 输出 静态页面 页面完成渲染
  - domContentLoaded 事件还没有完成页面渲染
  - setTimeout(()=>{ },0) 会以页面渲染优先

- js 动画和 css transition 动画选择哪一个

  - js 复杂
  - 性能 js 差？ 不推荐这么做动画
    频繁的操作 DOM js 性能开销的主要问题
    页面的重新绘制 (重新绘制)
  - css 简单
  - 性能好 (挺好 transform opacity)
    比 js 省去了 dom 对象的操作
    transition 不用去不停的绘制？真不会那么像 js 一样触发那么多次的重新绘制

- DOM 树的构建

  - 字节开始 网络层的传输
  - 转换 根据编码 utf-8 ， html 字符串
  - 令牌化 令牌 标签名 属性 解析
  - 转成一个 DOM 节点对象
    <div id="box">
      div 。。。
    </div>
    {
      type: 'div',
      attrs:{
        id: 'box'
      },
      children:[
        {

        }

    ]
    }

  - DOM 树的构建
    与树数据结构的结合，在查找和操作这块，非常的高效 作为 render 的输入

- CSSOM 树的构建

- DOM 树和 CSSOM 树 结合 生成 渲染树 renderTree
- Layout 概念 布局 BFC 盒子模型和大小计算
  文档流的位置和大小 计算在屏幕上的确切位置
  应用规则和计算的过程
  平面
- 图层 z-index 离开文档流 transformer opacity ..
  新的涂层来计算 绘制(修改的时候只要改这一个涂层)
  GPU 去计算 性能

- 绘制出来 画图
  像素点

- 第一次的绘制
  更新？ JS, transition
  - 修改了他的颜色 背景颜色 重绘 性能可以
  - 改变了盒子， 重排 开销就大了 js width 的改变
  - transition left 的修改, position: absolute;离开文档流
