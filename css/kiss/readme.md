# css animation

- html
  div
  眉毛
  嘴巴
  小酒窝

- css
  ? 在一起？
  border-radius
  animation 世界

- html结构快捷输入方式
  div#l-ball.ball  emmet 语法 css 选择器
- id 唯一
- class 类名（可以重复）
- .container？
  盒子  页面居中
  水平垂直居中
- .container>#l-ball.ball+#r-ball.ball
  > 子元素选择器
  + 兄弟元素选择器

- display 属性
  div block  块级元素
  span，i a inline  行内元素
  display 切换行内块级的格式化上下文能力
  inline-block 行内块级 设置宽高 占一行
  inline 行内 不可以设置宽高
  block 块级 独占一行

- 面向对象的css
  多态
  复用 多类名 
- 定位
  - position 定位
    static 静态定位（默认定位）没有定位能力
    relative 相对定位
      - 子元素相对于它定位
      - 相对于自身的位置定位
    absolute 绝对定位
      - 相对于最近的定位祖先（管着它的）元素定位，不找static的属性定位
    .container absolute body
