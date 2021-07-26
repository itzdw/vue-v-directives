# 长按操作 longpress
实现长按，用户按下并按住按钮2秒，触发事件
## 正常用法
```vue
<template>
  <button v-longpress="longpress">长按2秒</button>
</template>

<script>
export default {
  methods: {
    longpress(e) {
      console.log(e)
      alert('触发长按')
    }
  }
}
</script>
```
<template>
  <button v-longpress="longpress">长按2秒</button>
</template>

<script>
export default {
  methods: {
    longpress(e) {
      console.log(e)
      alert('触发长按')
    }
  }
}
</script>

## 属性
|参数名|说明|类型|默认值|可选值|
|----|----|:----:|:----:|:----|
|longpress-delay|长按时间，单位ms|Number|2000|-|
