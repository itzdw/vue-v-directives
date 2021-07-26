import {getAttr} from '@/utils/utils'
// 无限滚动
const infiniteScroll = {
  bind(el) {
    init(el)
  },
  inserted(el, binding) {
    el.callback = binding.value
    el.delay = getAttr(el, 'infinite-scroll-delay', 200)
    el.distance = getAttr(el, 'infinite-scroll-distance', 0)
    el.disabled = getAttr(el, 'infinite-scroll-disabled', false)
    listenerScroll(el)
  },
  componentUpdated(el, binding) {
    el.callback = binding.value
    el.delay = getAttr(el, 'infinite-scroll-delay', 200)
    el.distance = getAttr(el, 'infinite-scroll-distance', 0)
    el.disabled = getAttr(el, 'infinite-scroll-disabled', false)
  },
  unbind(el) {
    el.removeEventListener('scroll', () => {
      handler(el)
    })
  }
}

// 初始化
function init(el) {
  el.style.overflow = "auto"
}
// 监听scroll事件
function listenerScroll(el) {
  const handler = throttle(() => load(el), el.delay)
  load(el)
  el.addEventListener('scroll', () => {
    handler()
  })
}
// 加载真实图片
function load(el) {
  const clientHeight = el.clientHeight
  const scrollHeight = el.scrollHeight
  const scrollTop = el.scrollTop
  if (scrollHeight - clientHeight - scrollTop <= el.distance && !el.disabled) {
    el.callback()
  }
}
// 节流
function throttle(fn, delay) {
  let timer
  let prevTime
  return function (...args) {
    const currTime = Date.now()
    const context = this
    if (!prevTime) prevTime = currTime
    clearTimeout(timer)

    if (currTime - prevTime > delay) {
      prevTime = currTime
      fn.apply(context, args)
      clearTimeout(timer)
      return
    }

    timer = setTimeout(function () {
      prevTime = Date.now()
      timer = null
      fn.apply(context, args)
    }, delay)
  }
}

export default infiniteScroll