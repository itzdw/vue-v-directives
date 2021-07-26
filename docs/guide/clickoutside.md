# 外部点击 clickOutside
1. 被绑定元素被点击之后，再点击其外部会触发一次；
2. 重复步骤1可以重复触发事件。

## 正常用法
```vue
<template>
  <div class="box" v-click-outside="clickoutside1">
    点一下box1，再点外部
  </div>
  <div class="box" v-click-outside="clickoutside2">
    点一下box2，再点外部
  </div>
</template>

<script>
export default {
  methods: {
    clickoutside1(e) {
      alert('已点了1的外部')
    },
    clickoutside2() {
      alert('已点了2的外部')
    }
  }
}
</script>

<style scoped>
.box {
  display: inline-block;
  width: 200px;
  height: 150px;
  color: #fff;
  background-color: purple;
  border-radius: 8px;
  text-align: center;
  line-height: 200px;
}
</style>
```
<template>
  <div class="box" v-click-outside="clickoutside1">
    点一下box1，再点外部
  </div>
  <div class="box" v-click-outside="clickoutside2">
    点一下box2，再点外部
  </div>
</template>

<script>
export default {
  methods: {
    clickoutside1(e) {
      alert('已点了1的外部')
    },
    clickoutside2() {
      alert('已点了2的外部')
    }
  }
}
</script>

<style scoped>
.box {
  display: inline-block;
  width: 200px;
  height: 150px;
  color: #fff;
  background-color: purple;
  border-radius: 8px;
  line-height: 150px;
  text-align: center;
}
</style>
