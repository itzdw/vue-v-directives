# 无限滚动 infiniteScroll
滚动至底部时，加载更多数据。
## 正常用法
```vue
<template>
  <div class="scroll-wrapper" v-infinite-scroll="load">
    <div class="scroll-item" v-for="item in count" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20
    }
  },
  methods: {
    load() {
      this.count += 10
    }
  }
}
</script>

<style scoped>
.scroll-wrapper {
  height: 400px;
  border: 1px solid #eee;
}
.scroll-item {
  height: 40px;
  border-radius: 6px;
  background: #e8f3fe;
  color: #7dbcfc;
  text-align: center;
  line-height: 40px;
  margin: 10px;
}
.scroll-tips {
  text-align: center;
  color: #999;
  padding-bottom: 10px;
}
</style>
```

<template>
  <div class="scroll-wrapper" v-infinite-scroll="load">
    <div class="scroll-item" v-for="item in count" :key="item">{{item}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 20
    }
  },
  methods: {
    load() {
      this.count += 10
    }
  }
}
</script>

<style scoped>
.scroll-wrapper {
  height: 400px;
  border: 1px solid #eee;
}
.scroll-item {
  height: 40px;
  border-radius: 6px;
  background: #e8f3fe;
  color: #7dbcfc;
  text-align: center;
  line-height: 40px;
  margin: 10px;
}
.scroll-tips {
  text-align: center;
  color: #999;
  padding-bottom: 10px;
}
</style>

## 属性
|参数|说明|类型|默认值|
|---|---|:---:|:--:|
|infinite-scroll-disabled|是否禁用|Boolean|false|
|infinite-scroll-delay|节流时延，单位为ms|Number|200|
|infinite-scroll-distance|触发加载的距离阈值，单位为px|Number|0|