import Databus from 'utils/databus.js'
const databus = new Databus()

function checkArray(key) {
  let arr = databus.permission.list
  return arr.includes(key)
}
// 权限控制
const permission = function (el, binding) {
  let permission = binding.value // 获取到 v-permission的值
  if (permission) {
    let hasPermission = checkArray(permission)
    if (!hasPermission) {
      // 没有权限 移除Dom元素
      el.parentNode && el.parentNode.removeChild(el)
    }
  }
}

export default permission
