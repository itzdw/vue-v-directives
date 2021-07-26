# 文本复制 copy
绑定该指令，点击元素才能实现复制功能

## 正常用法
```vue
<template>
  <textarea v-model="content"></textarea>
  <br>
  <button v-copy="success" :copy-text="content">文本复制</button>
</template>

<script>
export default {
  data() {
    return {
      content: 'Hello Zery!'
    }
  },
  methods: {
    success(val) {
      alert('复制成功，内容为：' + val)
    }
  }
}
</script>
```
<template>
  <textarea v-model="content"></textarea>
  <br>
  <button v-copy="success" :copy-text="content">文本复制</button>
</template>

## 属性
|参数|说明|类型|默认值|
|:---|:---|:---:|:----:|
|copy-text|复制文本内容|String|-|


<script>
export default {
  data() {
    return {
      content: 'Hello Zery!'
    }
  },
  methods: {
    success(val) {
      alert('复制成功，内容为：' + val)
    }
  }
}
</script>
