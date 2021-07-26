// 点击元素外部触发事件
export default {
  bind(el, binding) {
    el.clickoutside = binding.value
    el.clicked = false
    el.handler = function (e) {
      if (el && !el.contains(e.target) && el.clicked) {
        el.clickoutside(e)
        el.clicked = false
      }
    }
    el.handlerClick = function handlerClick(e) {
      if (!el.clicked) {
        el.clicked = true
      }
    }
    el.addEventListener('click', el.handlerClick)
    document.addEventListener('click', el.handler)
  },
  unbind(el, binding) {
    el.clickoutside = binding.value
    document.removeEventListener('click', el.handler)
  }
}
