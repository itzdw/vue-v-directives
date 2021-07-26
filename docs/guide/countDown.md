# 倒数指令 countdown
绑定该指令实现倒数数字功能

## 正常用法
```vue
<template>
  <div ref="cd" v-countdown="10" @countdown-start="countdownStart" @countdown-end="countdownEnd"></div>
  <button @click="start">start</button>
  <button @click="stop">stop</button>
  <button @click="reset">reset</button>
</template>

<script>
export default {
  methods: {
    start() {
      this.$refs.cd.countdownStart()
    },
    stop() {
      this.$refs.cd.countdownStop()
    },
    reset() {
      this.$refs.cd.countdownRest()
    },
    countdownStart() {
      alert('start')
    },
    countdownEnd() {
      alert('end')
    }
  }
}
</script>
```
<template>
  <div ref="cd" v-countdown="10" @countdown-start="countdownStart" @countdown-end="countdownEnd"></div>
  <button @click="start">start</button>
  <button @click="stop">stop</button>
  <button @click="reset">reset</button>
</template>

<script>
export default {
  methods: {
    start() {
      this.$refs.cd.countdownStart()
    },
    stop() {
      this.$refs.cd.countdownStop()
    },
    reset() {
      this.$refs.cd.countdownReset()
    },
    countdownStart() {
      alert('start')
    },
    countdownEnd() {
      alert('end')
    }
  }
}
</script>

## 属性
|参数|说明|类型|默认值|可选值|
|---|---|:---:|:---:|---|
|countdown-delay|设置每次倒数的时间间隔（以毫秒为单位）|Number|1000|-|

## 事件回调
|事件名称|说明|回调参数|
|---|---|---|
|countdown-start|开始倒数时触发|-|
|countdown-end|倒数完成时触发|-|

## 方法
|方法名|说明|参数|
|---|---|---|
|countdownStart|开始倒数|-|
|countdownStop|停止倒数|-|
|countdownReset|重置倒数|-|

