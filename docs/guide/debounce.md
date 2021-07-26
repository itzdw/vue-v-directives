# 防抖操作 debounce
防止按钮在短事件内被多次点击，使用防抖函数限制在规定时间内只能点击一次

## 正常用法
```vue
<template>
  <button v-debounce="debounceClick">防抖</button>
</template>

<script>
export default {
  methods: {
    debounceClick(e) {
      console.log(e)
      alert('触发一次')
    }
  }
}
</script>
```

<template>
  <button v-debounce="debounceClick">防抖</button>
</template>

## 设置延迟时间
```vue
<template>
  <button v-debounce="debounceClick2" :debounce-delay="1000">延迟1000ms</button>
</template>

<script>
export default {
  methods: {
    debounceClick2(e) {
      console.log(e)
      alert('触发一次,2')
    }
  }
}
</script>
```
<template>
  <button v-debounce="debounceClick2" :debounce-delay="1000">延迟1000ms</button>
</template>

<script>
export default {
  methods: {
    debounceClick(e) {
      console.log(e)
      alert('触发一次')
    },
    debounceClick2(e) {
      console.log(e)
      alert('触发一次,2')
    }
  }
}
</script>

## 属性
|参数名|说明|类型|默认值|可选值|
|----|----|:----:|:----:|:----|
|debounce-delay|延迟触发时间，单位ms|Number|350|-|
