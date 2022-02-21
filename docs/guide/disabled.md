# 点击防抖 disabled
1. 作用在'BUTTON', 'INPUT', 'OPTION', 'SELECTION'标签上的点击防抖

:::warning 注意
1. 该指令必须作用在'BUTTON', 'INPUT', 'OPTION', 'SELECTION'标签上
:::
## 正常用法
```vue
<template>
  <button v-disabled @click="disabled1">点击1秒内作用一次</button>
</template>
```
<template>
  <button v-disabled @click="disabled1">点击1秒内作用一次</button>
</template>

```vue
<template>
  <button v-disabled="3000" @click="disabled2">点击3秒内作用一次</button>
</template>
```
<template>
  <button v-disabled="3000" @click="disabled2">点击3秒内作用一次</button>
</template>


<script>
export default {
  methods: {
    disabled1(e) {
      console.log('点击1秒内作用一次')
    },
    disabled2() {
      console.log('点击3秒内作用一次')
    }
  }
}
</script>
