# 输入限制 limitText
绑定该指令，该元素内的input/textinput的输入会被限制，可以自定义限制的规则
## 正常用法
默认限制表情文字和非键盘符号
```vue
<template>
  <input v-limit-text placeholder="试试用win键 + . 输入emoji">
</template>
```
<template>
  <input v-limit-text placeholder="试试用win键 + . 输入emoji">
</template>

## 自定义规则
```vue
<template>
  <input v-limit-text="/\D/g" placeholder="只能输入数字">
  <br>
  <input v-limit-text="/[^A-Za-z]/g" placeholder="只能输入英文字符">
</template>
```
<template>
  <input v-limit-text="/\D/g" placeholder="只能输入数字">
  <br>
  <input v-limit-text="/[^A-Za-z]/g" placeholder="只能输入英文字符">
</template>