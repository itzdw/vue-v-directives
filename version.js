/*
 * @Author: davidZhou
 * @Date: 2020-04-22 10:09:33
 * @LastEditors  : davidZhou
 * @LastEditTime : 2020-04-22 10:22:40
 */
const fs = require('fs');
const path = './package.json';
const charset = 'utf-8';
const partmax = 99;
const spaceNum = 2;
const rf = fs.readFileSync(path, charset);
let json = JSON.parse(rf);
json.version = increase_version(json.version);
json.publishTime = '' + formatTime('Y/M/D h:m:s');
const text = JSON.stringify(json, null, spaceNum);
fs.writeFileSync(path, text);
console.log(`修改版本号成功，当前版本号为:${json.version}-${json.publishTime}`);

function increase_version(version) {
  let [h, m, b] = version.split('.');
  ++b;
  if (b > partmax) {
    b = 0;
    ++m;
  }
  if (m > partmax) {
    m = 0;
    ++h;
  }
  return [h, m, b].join('.');
}

/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 * formatTime(1488481383,'Y/M/D h:m:s'); // 2017/03/03 03:03:03
 */
function formatTime(format) {
  var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
  var returnArr = [];
  var date = new Date();
  returnArr.push(date.getFullYear());
  returnArr.push(formatNumber(date.getMonth() + 1));
  returnArr.push(formatNumber(date.getDate()));
  returnArr.push(formatNumber(date.getHours()));
  returnArr.push(formatNumber(date.getMinutes()));
  returnArr.push(formatNumber(date.getSeconds()));

  for (var i in returnArr) {
    format = format.replace(formateArr[i], returnArr[i]);
  }
  return format;
}

// 数据转化
function formatNumber(n) {
  n = n.toString();
  return n[1] ? n : '0' + n;
}
