# 获取焦点 focus
1. 给input或textarea添加该指令，页面加载完成时，会给该控件获取焦点的效果
2. 给最外层的元素添加该指令，会给该元素的第一个input/textarea子元素获取焦点效果

:::warning 注意
同页面上只会有一个元素获取焦点。
:::
## 正常用法
```vue
<template>
  <input placeholder="请输入" v-focus>
</template>
```
<template>
  <input placeholder="请输入" v-focus>
</template>

## 添加到最外层
```vue
<template>
  <form v-focus>
    <div>
      <label>姓名：</label>
      <input placeholder="请输入">
    </div>
    <div>
      <label>年龄：</label>
      <input placeholder="请输入">
    </div>
  </form>
</template>
```
<template>
  <form v-focus>
    <div>
      <label>姓名：</label>
      <input placeholder="请输入">
    </div>
    <div>
      <label>年龄：</label>
      <input placeholder="请输入">
    </div>
  </form>
</template>
