---
home: true
heroText: vue-v-directives
tagline: vue自定义指令扩展
footer: MIT Licensed | Copyright @ 2021-present Zery Chou
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
import zery from 'vue-v-directives'
Vue.use(zery)
```
# 按需加载，防止冲突
```javascript
import Vue from 'Vue'
import zery from 'vue-v-directives'
zery.use(['clickOutside', 'watermarker', 'copy', 'debounce', 'limitText'])
Vue.use(zery)
```
