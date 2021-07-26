# 权限控制 permission
对需要权限控制的元素进行显示或隐藏
## 正常用法
默认权限列表值为['1', '2', '3', '4']
```vue
<template>
  <div v-permission="'1'">菜单一</div>
  <div v-permission="'2'">菜单二</div>
  <div v-permission="'3'">菜单三</div>
  <div v-permission="'4'">菜单四</div>
  <div v-permission="'5'">菜单五</div>
</template>
```
<template>
  <div v-permission="'1'">菜单一</div>
  <div v-permission="'2'">菜单二</div>
  <div v-permission="'3'">菜单三</div>
  <div v-permission="'4'">菜单四</div>
  <div v-permission="'5'">菜单五</div>
</template>

## 特殊设置
设置权限列表
1. 方式一
```javascript
import zery from 'vue-v-directives'
zery.setOption({
  permission: {
    list: ['A', 'B', 'C', 'D']
  }
})
```
2. 方式二
```vue
<template>
  <div v-permission="'A'">菜单一</div>
  <div v-permission="'B'">菜单二</div>
  <div v-permission="'C'">菜单三</div>
  <div v-permission="'D'">菜单四</div>
  <div v-permission="'E'">菜单五</div>
</template>

<script>
export default {
  created() {
    this.$zery.setOption({
      permission: {
        list: ['A', 'B', 'C', 'D']
      }
    })
  }
}
</script>
```
