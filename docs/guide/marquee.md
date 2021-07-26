# 文本滚动 marquee
实现文本横向滚动功能
## 正常用法
```vue
<template>
  <div>
    <div v-marquee>《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？</div>
  </div>
</template>
```

<template>
  <div>
    <div v-marquee>《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？</div>
  </div>
</template>

## 手动启停
```vue
<template>
  <div>
    <div ref="ma" v-marquee>《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？</div>
    <button @click="start">启动</button>
    <button @click="stop">停止</button>
  </div>
</template>

<script>
export default {
  start() {
    this.$refs.ma.marqueeStart()
  },
  stop() {
    this.$refs.ma.marqueeStop()
  }
}
</script>
```
<template>
  <div>
    <div ref="ma" v-marquee :marquee-loop="-1">《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？</div>
    <button @click="start">启动</button>
    <button @click="stop">停止</button>
  </div>
</template>

## 事件监听
```vue
<template>
  <div>
    <div
      v-marquee
      :marquee-loop="4"
      @marquee-start="mstart"
      @marquee-bounce="mbounce"
      @marquee-finish="mfinish"
    >《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    mbounce() {
      this.count++
      console.log('bounce', this.count)
    },
    mfinish() {
      console.log('finish')
    },
    mstart() {
      console.log('start')
    }
  }
}
</script>
```
<template>
  <div>
    <div
      v-marquee
      :marquee-loop="loop"
      @marquee-start="mstart"
      @marquee-bounce="mbounce"
      @marquee-finish="mfinish"
    >《上学歌》，因为它的曲调单一，不知是巧合还是刻意为之，很多人也许不会弹钢琴，但当他在琴键上依次按下基本的音符时，耳边响起的正是这首《上学歌》，然而麻雀虽小五脏俱全或者说可谓微言大义，不是么？</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loop: 1
    }
  },
  methods: {
    mbounce(e) {
      console.log('bounce', e.detail)
    },
    mfinish() {
      console.log('finish')
    },
    mstart() {
      console.log('start')
    },
    start() {
      this.$refs.ma.marqueeStart()
    },
    stop() {
      this.$refs.ma.marqueeStop()
    }
  }
}
</script>
## 属性
|参数|说明|类型|默认值|可选值|
|---|---|:---:|:---:|---|
|marquee-scroll-amount|设置每次滚动时移动的长度（以像素为单位）|Number|6||-|
|marquee-scroll-delay|设置每次滚动时的时间间隔（以毫秒为单位）。忽略任何小于 60 的值，并改为使用 60。|Number|85|-|
|marquee-loop|设置 marquee 滚动的次数。如果未指定值，默认值为 −1，表示 marquee 将连续滚动|Number|-1|-|

## 事件回调
|事件名称|说明|回调参数|
|---|---|---|
|marquee-start|当 marquee 开始滚动时触发。|-|
|marquee-bounce|当 marquee 滚动到结尾时触发。|{detail}|
|marquee-finish|当 marquee 完成 loop 属性设置的值时触发。它只能在 loop 属性设置为大于 0 的某个数字时触发。|-|

## 方法
|方法名|说明|参数|
|---|---|---|
|marqueeStart|开始滚动 marquee。|-|
|marqueeStop|停止滚动 marquee。|-|
