# 文本格式 formatter
实现对文本中的时间和数字的格式化
## 格式时间
支持字符串或时间字符串
```vue
<template>
  <div>
    <div v-formatter="'YYYY-MM-DD'" formatter-value="20210520"></div>
    <div v-formatter="'YYYY/MM/DD'" formatter-value="20210520"></div>
    <div v-formatter="'YYYY年MM月DD日'" formatter-value="20210520"></div>
    <div v-formatter="'YYYY-MM-DD HH:mm:ss'" formatter-value="Thu Jun 17 2021 15:57:54 GMT+0800 (中国标准时间)
    "></div>
    <div v-formatter="'YYYY-MM-DD HH:mm:ss'" :formatter-value="new Date(1623916708267)"></div>
  </div>
</template>
```

<template>
  <div>
    <div v-formatter="'YYYY-MM-DD'" formatter-value="20210520"></div>
    <div v-formatter="'YYYY/MM/DD'" formatter-value="20210520"></div>
    <div v-formatter="'YYYY年MM月DD日'" formatter-value="20210520"></div>
    <div v-formatter="'YYYY-MM-DD HH:mm:ss'" formatter-value="Thu Jun 17 2021 15:57:54 GMT+0800 (中国标准时间)
    "></div>
    <div v-formatter="'YYYY-MM-DD HH:mm:ss'" :formatter-value="new Date(1623916708267)"></div>
  </div>
</template>

## 格式数组
支持千分位，保留小数点后几位
```vue
<template>
  <div>
    <div v-formatter="'0,00'" :formatter-value="20210520"></div>
    <div v-formatter="'0.0'" :formatter-value="20210520.1234"></div>
    <div v-formatter="'0,0.00'" :formatter-value="20210520.1234"></div>
    <div v-formatter="'0%'" :formatter-value="0.45"></div>
    <div v-formatter="'0a'" :formatter-value="20210520"></div>
  </div>
</template>
```
<template>
  <div>
    <div v-formatter="'0,00'" :formatter-value="20210520"></div>
    <div v-formatter="'0.0'" :formatter-value="20210520.1234"></div>
    <div v-formatter="'0,0.00'" :formatter-value="20210520.1234"></div>
    <div v-formatter="'0%'" :formatter-value="0.45"></div>
    <div v-formatter="'0a'" :formatter-value="20210520"></div>
  </div>
</template>

## 属性
|参数|说明|类型|默认值|
|---|---|:---:|:--:|
|formatter-value|被格式化的文本|String,Number|-|
|formatter-perfix|文本前缀|String|-|
|formatter-suffix|文本后缀|String|-|

## 数值格式符
参考[Numeral.js](http://numeraljs.com/)支持的格式化占位符列表
1. 数字 Numbers

|Number|Format|String|
|----|----|----|
|10000|	`0,0.0000`|10,000.0000|
|10000.23|`0,0`|10,000|
|10000.23|`+0,0`|+10,000|
|-10000|`0,0.0`|-10,000.0|
|10000.1234|`0.000`|10000.123|
|100.1234|`00000`|00100|
|1000.1234|`000000,0`|001,000|
|10|`000.00`|010.00|
|10000.1234|`0[.]00000`|10000.12340|
|-10000|`(0,0.0000)`|(10,000.0000)|
|-0.23|`.00`|-.23|
|-0.23|`(.00)`|(.23)|
|0.23|`0.00000`|0.23000|
|0.23|`0.0[0000]`|0.23|
|1230974|`0.0a`|1.2m|
|1460|`0 a`|1 k|
|-104000|`0a`|-104k|
|1|`0o`|1st|
|100|`0o`|100th|

2. 汇率 Currency

|Number|Format|String|
|----|----|----|
|1000.234|`$0,0.00`|$1,000.23|
|1000.2|`0,0[.]00 $`|1,000.20 $|
|1001	|`$ 0,0[.]00`|$ 1,001|
|-1000.234|`($0,0)`|($1,000)|
|-1000.234|`$0.00`|-$1000.23|
|1230974|`($ 0.00 a)`|$ 1.23 m|

3. 字节 Bytes

|Number|Format|String|
|----|----|----|
|100|`0b`|100B|
|1024|`0b`|1KB|
|2048|`0 ib`|2 KiB|
|3072|`0.0 b`|3.1 KB|
|7884486213|`0.00b`|7.88GB|
|3467479682787|`0.000 ib`|3.154 TiB|

4. 百分比 Percentages

|Number|Format|String|
|----|----|----|
|1|`0%`|100%|
|0.974878234|`0.000%`|97.488%|
|-0.43|`0 %`|-43 %|
|0.43|`(0.000 %)`|43.000 %|

5. 时间 Time

|Number|Format|String|
|----|----|----|
|25|`00:00:00`|0:00:25|
|238|`00:00:00`|0:03:58|
|63846|`00:00:00`|17:44:06|

5. 指数 Exponential

|Number|Format|String|
|----|----|----|
|1123456789|`0,0e+0`|1e+9|
|12398734.202|`0.00e+0`|1.24e+7|
|0.000123987|`0.000e+0`|1.240e-4|

## 时间格式符
参考[dayjs](https://dayjs.fenxianglu.cn/category/parse.html)支持的格式化占位符列表
|标识|示例|描述|
|----|----|----|----|
|`YY`|18|年，两位数|
|`YYYY`|2018|	年，四位数|
|`M`|1-12|月，从1开始|
|`MM`|01-12|月，两位数字|
|`MMM`|Jan-Dec|月，英文缩写|
|`D`|1-31|日|
|`DD`|01-31|日，两位数|
|`H`|0-23|24小时|
|`HH`|00-23|24小时，两位数|
|`h`|1-12|12小时|
|`hh`|01-12|12小时，两位数|
|`m`|0-59|分钟|
|`mm`|00-59|分钟，两位数|
|`s`|0-59|秒|
|`ss`|00-59|秒，两位数|
|`S`|0-9|毫秒（百），一位数|
|`SS`|00-99|毫秒（十），两位数|
|`SSS`|000-999|毫秒，三位数|
|`Z`|-05:00|UTC偏移|
|`ZZ`|-0500|UTC偏移，两位数|
|`A`|AM / PM|上/下午，大写|
|`a`|am / pm|上/下午，小写|
|`Do`|1st...|31st	月份的日期与序号|