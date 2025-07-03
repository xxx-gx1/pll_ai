# 智能前端之单词学习
- 产品和商业模式
  - 学单词  
  - 拍照记单词
    - 图片交给多模态模型 word 
    - deepseek aigc 例句
    - tts 发音 
- focus
  拍照背单词，用单词
- 解决一些特定的效率性、创新性App

- npm init vite
  vite 是工程化脚手架，构建工具
- npm i 慢了点
  react ... 项目依赖
  pnpm 代替 npm
  不同的项目中 重复去安装了react ，react-dom 等包
  react等包放到一个地方，如果之前安装过，链接过，只需要安装一次

## react 语法
- 单向数据流
  数据状态流动
    - 父组件负责提供数据，和api 接口请求 
    - 拆成多个子组件 
    - 数据会从父组件流向子组件
    - 子组件负责消费数据   专注于显示
    - props
      <PictureCard 
        uploadImage={uploadImage}
      />
      函数参数一样，可以解构

## 项目中一定要安排的技能点
- pnpm
- react 思想
  - 数据状态 useState
  - 数据驱动 
  - 响应式 数据状态变化，视图会自动更新
    - 不用平凡操作DOM，只需要关注业务
  - 业务
    - 图片上传
      - 图片预览
- 组件化设计
  - App
    - 提供数据
    - 图片上传大模型
  - PictureCard
    单向数据流 
    - 子组件只负责消费数据
    - 父组件负责提供数据，数据的请求
    - 先要给父组件 
- 性能优化
  - linear-gradient 代替图片做背景
- 用户体验 
  - 上传图片的功能，预览功能
  - 无障碍访问
    label for + input#id
- es6 新特性
  - 可选链操作符
- html5 功能
  - file 文件对象
- 智能
  - 多模态模型
    ？  月之暗面 base64 
    prompt？
  - prompt 设计原则
    - 给它一个明确的身份 LLM交流 当人
    - 清晰且具体的任务
    - 限制，指定结果
      返回的结构 JSON 
      有利于接下来的业务执行
      拿着大模型的回答，接着干活
      JSON 最好的接口格式
    - 分布做

## 前端为什么要搞AI？
- 时代的需求和趋势
- vibe coding 提升了开发效率  trae cursor
- LLM的发展，产品需要更多更好的智能体验
  用户体验是前端的职责，智能前端工程师的新角色中


"{
  "image_discription": "A cartoonish depiction of a violin with a cute giraffe head on top, decorated with stars and musical notes.",
  "representative_word": "violin",
  "example_sentence": "The giraffe violin is a fun toy for kids.",
  "explaination": "Look at the picture. It shows a violin.\nA violin is a musical instrument.\nIt has four strings and a bow.\nThis violin is special because it has a giraffe head.\nDo you like to listen to music played on a violin?",
  "explaination_replys": ["Yes, I enjoy the sound of a violin.", "I've never heard a violin, but I'd like to."]
}
"