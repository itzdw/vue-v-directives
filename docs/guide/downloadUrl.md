# 点击url下载文件 downloadUrl
1. 将url转成bold,在创建a标签下载blob

:::warning 注意
1. 若是文件的url存在跨域的情况，则可能会下载失败，因为fetch请求连接后，由于跨域，拿不到资源，也就无法执行后续的操作，此时是失败的。
2. 也可以设置浏览器，对于一下像pdf，图片等资源不直接打开，直接下载，然后简单的创建a标签下载即可。
:::
## 正常用法
```vue
<template>
  <button v-download-url="{url:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7477f1cf89ec4fb781d52757fe682785~tplv-k3u1fbpfcp-watermark.awebp'}">
  下载图片</button>
</template>
```
<template>
  <button v-download-url="{url:'https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7477f1cf89ec4fb781d52757fe682785~tplv-k3u1fbpfcp-watermark.awebp'}">下载图片</button>
</template>
