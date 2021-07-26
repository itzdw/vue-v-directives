# vue-v-directives
Vue custom directive extensions, including long press, copy, watermark, permissions and more.

## 安装
```bash
npm install --save vue-v-directives
```
## 引用
```javascript
import Vue from 'vue'
import zery from 'vue-v-directives'
Vue.use(zery)
```
## 使用文档
[vue-v-directives使用文档](https://zhouzelin.github.io/zery/)
## 版本
### 1.0.0
新增了clickOutside，copy，debounce，draggable，focus，lazyload，limitText，longpress，permission，watermarker指令

### 1.0.1
修改了draggable指令，兼容移动端，修改了watermarker的使用方法

### 1.0.3
新增了ellipsis，formatter，infiniteScroll，marquee指令，修改了copy的使用方法，lazyload的bug

### 1.0.5
修复了watermarker的textAlgin和textBaseline属性不能正确调整文本位置的问题
longpress新增了delay属性控制长按时间

### 1.0.6
修复模块无法引入问题

### 1.0.7
修复marquee的delay属性

### 1.0.8
修复clickOutside不能绑定多个元素的错误
新增marquee的监听事件、属性和方法，新增longpress的dalay属性

### 1.0.9
新增fullScreen指令，新增drag的监听事件
修复ellpsis正常用法不传参报错问题

### 1.0.10
修复clickOutside指令无法解析的问题

### 1.1.0
新增countdown指令
修改marquee指令文档
