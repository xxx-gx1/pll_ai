# JSX考点
- 何为JSX
    JS in XML(HTML 是XML的一种形式)
    react 推崇的JavaScript语法扩展，允许再JavaScript
    代码中嵌入HTML结构(function return JSX 组件)
    常用于React组件的定义，使得UI结构更直观易读。
    React 的一大优点特性。
- JSX 可以直接运行吗？
    不可以 
- .styl -> stylus 编译 -> .css
<ul>
  <li key={todo.id}>{todo.title}</li>
  <li key={todo.id}>{todo.title}</li>
  ...
</ul>

- JSX -> React.createElement(tag,props,children) -> 
    document.createElement('ul')
        document.createElement('li')