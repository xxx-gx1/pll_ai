# react 旅游 APP
Readme.md 很重要 方便面试官
- 移动的App
- 模仿 App
    - 喜欢的、国外的
    - 有点改变
- 绝大多数的考点
    - 都适用于任何App 

## 技术栈
- React全家桶
    React 组件开发
    组件的封装
    第三方组件
    受控和非受控
    hooks编程 自定义hooks
    React-Router-DOM
        单页应用
        路由守卫
        懒加载
    Zustand
- mock 接口模拟
- axios 请求拦截和代理
- jwt 登录 
- module css
- vite 配置
- 性能优化
    防抖节流
    useCallback useMemo ..... 
- css 预处理器 stylus
    flex transition transform....
- LLM
    - chat
    - 生图
    - 语音
    - coze  工作流 调用
    - 流式输出
- 移动端适配
    rem
- 单例模式 设计模式的理解
- git 提交等编程风格
## 项目的架构
- components
- pages
- store
- hooks
- api
- mock

## 开发前的准备
- 安装的包
    react-router-dom
    axios
    zustand
    react-vant(UI组件库)
    开发期间的依赖
    vite-plugin-mock
    jwt
- vite 配置
    - alias
    - mock
    - .env.local
    llm apiKey
    - user-scalable
    - css 预处理 
        index.jsx reset
        box-sizing  font-family:-apply-system
        App.css 全局通用样式
        module.css 模块化样式
    - 移动端适配 rem
        不能用px,相对单位rem html
        不同设备上要体验一致
        不同尺寸手机 等比例缩放
        设计师设计稿  750px iphone 4 375pt *2 = 750px
        小米 
        css 一行代码  手机不通尺寸 
        html font-size 等比例
        layout
        flexible.js 阿里 在任何设备上
        1rem= 屏幕宽度/10
- lib-flexible
    阿里开源
    设置html fontSize = window.
    innerWidth / 10
    css px 宽度 = 手机设备宽度 = 375
    1px = 2发光源
    750px 设计稿

- 设计稿上一个盒子的大小？
    - 1像素不差的还原设计稿
    - 设计稿中像素单位
    - /75 

## 项目亮点
- 移动端适配
    - lib-flexible  1rem = 屏幕宽度/10
    - 设计稿 尺寸是iPhone 标准尺寸 750px
    - 前端的职责是还原设计稿
    - 频繁的单位 260/75 换算
    - 自动化？
        postcss + postcss-pxtorem
        postcss 是css 预编译器，很强大
        vite 自动读取postcss.config.js 将css 内容编译
        px => rem
## git 提交规范
- 项目初始化
## 功能模块
- UI 组件库
    - react-vant 第三方组件库  70%的组件已经有了，不用写
    - 选择一个适合业务的UI组件库 或者公司内部的组件库
- 配置路由及懒加载
    - 懒加载
    - 路由守卫
    - Layout 组件
        - 嵌套路由Outlet 分组路由配置
        - 网页有几个模板 Layout
            - Route 不加path 对应的路由自动选择
            - tabbar 模板
            - blank 模板
    - tabbar
        - react-vant + @react-vant/icons
        - value + onChange 响应式
        - 直接点击分享 active 的设置下
- chatbot 模块
    - llm 模块 chat 封装
    - 迭代chat ， 支持任意模型
## 项目亮点和难点
- 前端智能
    - chat 函数
    - 对各家模型比较感兴趣  ，升级为kimiChat，豆包chat... 灵活
        性能、能力、性价比
        随意切换大模型，通过参数抽象
- 自定义Hooks
    - useTitle
    一定要设置

- es6 特性使用
    tabbar 的高亮
    - arr.findIndex
    - str.startsWith
    - promise

- 项目迭代
    - 项目由浅入深
    - chatbot deepseek 简单chat
    - deepseek-r1 推理模型
    - 流式输出
    - 上下文
    - coze 工作流接口调用