# 图片懒加载 lazyLoad
给图片bind定该指令，把真实的图片路径放在data-src属性上，只加载浏览器可见区域的图片。
## 正常用法
```vue
<template>
  <ul class="container">
    <li v-for="item in 10">
      <img :key="item" data-src="https://vuepress.vuejs.org/hero.png" v-lazy-load />
    </li>
  </ul>
</template>

<style scoped>
ul.container {
  height: 200px;
  overflow: auto;
  border: 1px solid #ddd;
}
ul.container li {
  list-style: none;
}
ul.container li img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px dotted #ddd;
}
</style>
```
<template>
  <ul class="container">
    <li v-for="item in 10">
      <img :key="item" data-src="https://vuepress.vuejs.org/hero.png" v-lazy-load />
    </li>
  </ul>
</template>

<style scoped>
ul.container {
  height: 200px;
  overflow: auto;
  border: 1px solid #ddd;
}
ul.container li {
  list-style: none;
}
ul.container li img {
  width: 100px;
  height: 100px;
  object-fit: contain;
  border: 1px dotted #ddd;
}
</style>

## 特殊设置
设置占位图
1. 方式一
```javascript
// main.js
import zery from 'vue-v-directives'
zery.setOption({
  lazyLoad: {
    default: 'xxxx.png'
  }
})
```
2. 方式二
```vue
<script>
export default {
  created() {
    this.$zery.setOption({
      lazyLoad: {
        default: 'xxxx.png'
      }
    })
  }
}
</script>
```
