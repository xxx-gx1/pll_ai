# WebLLM 智能应用

一个现代化的原生 HTML/CSS/JavaScript 聊天应用，提供智能对话体验。

## 🌟 特性

- **💬 智能对话**：支持实时聊天交互
- **🎨 现代化UI**：美观的渐变背景和毛玻璃效果
- **🌙 主题切换**：支持明暗主题切换
- **💾 数据持久化**：自动保存聊天历史
- **⌨️ 快捷键支持**：提供便捷的键盘操作
- **📱 响应式设计**：完美适配各种设备
- **✨ 动画效果**：流畅的交互动画

## 🚀 快速开始

1. **直接运行**：
   ```bash
   # 打开 index.html 文件即可运行
   open index.html
   ```

2. **或使用本地服务器**：
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 使用 Node.js
   npx http-server .
   ```

3. **访问应用**：
   在浏览器中打开 `http://localhost:8000`

## 📁 项目结构

```
webllm/
├── index.html          # 主页面
├── css/
│   └── style.css      # 样式文件
├── js/
│   └── app.js         # 应用逻辑
└── README.md          # 项目说明
```

## ⌨️ 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Enter` | 发送消息（单独按下） |
| `Shift + Enter` | 换行 |
| `Ctrl/Cmd + Enter` | 快速发送消息 |
| `Ctrl/Cmd + D` | 切换深色主题 |
| `Ctrl/Cmd + L` | 清空对话历史 |

## 🛠️ 技术栈

- **HTML5**：语义化结构
- **CSS3**：现代化样式和动画
- **Vanilla JavaScript**：原生 JavaScript，无依赖
- **LocalStorage**：本地数据存储
- **Web APIs**：现代浏览器 API

## 🎨 UI 特性

- **渐变背景**：美观的紫色渐变效果
- **毛玻璃效果**：现代化的半透明设计
- **消息气泡**：区分用户和助手消息
- **加载动画**：处理过程中的视觉反馈
- **滚动条美化**：自定义滚动条样式
- **响应式布局**：适配移动端和桌面端

## 🔧 自定义配置

### 修改主题颜色

编辑 `css/style.css` 文件中的渐变色：

```css
body {
  background: linear-gradient(135deg, #你的颜色1 0%, #你的颜色2 100%);
}
```

### 添加新的响应逻辑

在 `js/app.js` 的 `getResponseForMessage` 方法中添加：

```javascript
if (lowerMessage.includes('你的关键词')) {
    return ['你的回复内容'];
}
```

### 连接真实 AI API

替换 `processMessage` 方法中的模拟逻辑：

```javascript
async processMessage(userMessage) {
    const response = await fetch('你的API端点', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
    });
    const data = await response.json();
    return data.reply;
}
```

## 🌐 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 🎯 后续计划

- [ ] 支持文件上传
- [ ] 集成语音识别
- [ ] 添加表情符号支持
- [ ] 多语言国际化
- [ ] PWA 支持
- [ ] 云端同步

---

**享受与 WebLLM 的智能对话体验！** 🎉 