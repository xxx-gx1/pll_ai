# 回流重绘
- 布局的难点 列式布局和理解BFC/FFC
  - html 根元素 最外层的第一个BFC 元素
    Block Formatting Context 块级从上到下，行内从左到右 ， BFC 格式化上下文有了文档流
  - float overflow:hidden flex
  - 有没有什么标签  可以做列式布局table
  tr td
  - 为什么不用？
    - 触发太多的回流和重绘
    - 语义不和 table数据表
      tr row
      td column
    - 不够灵活 

## 回流和重绘
- 回流 重排reflow
  当RenderTree 中部分或全部元素的尺寸，结构、或某些属性发生改变时，
  浏览器重新渲染部分或全部文档的过程叫回流。
  table 不合适，tablr中局部的改变，会触发整个table的回流重排
  火烧赤壁
  display: none 不参与回流重绘 性能优化的一种方案
- 重绘 repaint
  当页面元素样式的改变并不影响它在文档流中的位置
  color background-color visibility hidden show

## 页面时怎么渲染的？
- 输入url
- 下载html
- link  css 下载css
- 
    