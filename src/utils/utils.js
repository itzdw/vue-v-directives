// 获取属性值
function getAttr(el, attrName, def = '') {
  return el.getAttribute(attrName) || def
}

// 下划线转换驼峰
function linetoHump(name) {
  return name.replace(/\_(\w)/g, function(all, letter){
      return letter.toUpperCase();
  });
}
// 驼峰转换下划线
function humptoLine(name) {
return name.replace(/([A-Z])/g,"-$1").toLowerCase();
}
// 深度覆盖
function overwrite(A, B) {
  if (B instanceof Object && !Array.isArray(B)) {
    for(let k in B) {
      if (A.hasOwnProperty(k)) {
        A[k] = overwrite(A[k], B[k])
      }
    }
  } else {
    A = B
  }
  return A
}

const emit = (el, name, event) => {
  const myEvent = new CustomEvent(name, event)
  el.dispatchEvent(myEvent)
}

export {
  getAttr,
  linetoHump,
  humptoLine,
  overwrite,
  emit
}
