# 手写React

- Didact
    - 命名空间 namespace
    - 对象字面量

- VDOM
    UI 表达 JSX
    JSX -> 转成VDOM ？

- JSX react 优点
    js 里编写HTML，及其简便的表达UI
    babel React.createElement
    Didact.createElement

- App.jsx -> babel -> Didact.createElement(tag,props,...children)
    返回的结果 VDOM
-> render 生成真正的DOM 

- babel 将 JSX 转译为React.createElement方法调用，
    给相应的参数， 生成VDOM
    @babel/preset-react pragma 编译后的函数名
    pragma JSX 不是react 的专属，vue中也可以用jsx