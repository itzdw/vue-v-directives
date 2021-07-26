# 背景水印 watermarker
给元素添加背景水印
## 正常用法
```vue
<template>
  <div class="background" v-watermarker="'zery版权所有'"></div>
</template>

<style scoped>
.background {
  height: 400px;
}
</style>
```
<template>
  <div class="background" v-watermarker="'zery版权所有'"></div>
</template>

<style scoped>
.background {
  height: 400px;
}
</style>

## 修改颜色
```vue
<template>
  <div class="background" v-watermarker="'zery版权所有'" watermarker-text-color="yellow"></div>
</template>

<style scoped>
.background {
  height: 400px;
}
</style>
```
<template>
  <div class="background" v-watermarker="'zery版权所有'" watermarker-text-color="yellow"></div>
</template>

## 属性设置
|属性名|说明|类型|默认值|可选值|
|----|----|:----:|----|----|
|watermarker-width|水印图片的宽度|Number|200|-|
|watermarker-height|水印图片的高度|Number|150|-|
|watermarker-font-size|水印图片的字体大小|Number|16|-|
|watermarker-font-family|水印图片的字体|String|Microsoft YaHei|-|
|watermarker-text-color|水印图片的文本颜色|String|rgba(180, 180, 180, 0.3)|-|
|watermarker-text-align|水印图片的文本水平位置|String|center|center, left, right|
|watermarker-text-baseline|水印图片的文本基线位置|String|center|center, top, bottom|
|watermarker-rotate|文本旋转角度|Number|-30|-|
