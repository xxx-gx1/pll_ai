# 单例模式

## 实现Stroage，使得该对象成为**单例**，基于LocalStorage 进行封装。实现方法
setItem(key,value) 和getItem(key)
- 分析Storage  类
- 设计模式 design pattern
- 封装 
    getItem
    setItem

## 单例
单例是一种设计模式(static getInstance), 高级程序的交流语言。
一个类只能实例化一次。
- static 属性 instance 持有唯一的一次实例
- static getInstance 方法 判断 instance 并返回
    实例的时候一定要这样 
    const storage = Storage.getInstance()
- 性能特别好， 好管理

## 单例模式

- 实现一个登录弹窗
    - 体验
    不用跳转路由,盖在页面上 
    z-index display none|block
    - 性能
    90% 用户 不登录
    Model html css js 比较多
    推迟到第一次用的时候,单例
    复用