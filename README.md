# v-directivejs
Vue custom directive extensions, including long press, copy, watermark, permissions and more.

## 安装
```bash
npm install --save v-directivejs
```
## 引用
```javascript
import Vue from 'vue'
import directives from 'v-directivejs'
Vue.use(directives)
```
## 使用文档
[v-directivejs使用文档](https://itzdw.github.io/v-directivejs/)
## 版本
### 0.0.1
新增了clickOutside，copy，debounce，draggable，focus，lazyload，limitText，longpress，permission，watermarker指令
### 0.0.2
新增了downloadUrl指令
### 0.0.3
新增了emoji指令

注意：Cannot find module 'worker_threads'报错
需要升级一下node版本
