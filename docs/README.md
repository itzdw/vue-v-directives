---
home: true
heroText: vue-v-directives
tagline: vue自定义指令扩展
footer: MIT Licensed | Copyright @ 2021-present directives Chou
actionText: 快速上手 →
actionLink: /guide/
---

# 安装方便
```bash
npm i -S vue-v-directives
// or
yarn add vue-v-directives
```
# 使用简单
```javascript
import Vue from 'Vue'
import directives from 'vue-v-directives'
Vue.use(directives)
```
# 按需加载，防止冲突
```javascript
import Vue from 'Vue'
import directives from 'vue-v-directives'
directives.use(['clickOutside', 'watermarker', 'copy', 'debounce', 'limitText'])
Vue.use(directives)
```
