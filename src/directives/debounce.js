// 防抖
import {getAttr} from '@/utils/utils'

const debounce = {
  bind(el, binding) {
    el.timer = null
    el.handler = binding.value
    el.delay = getAttr(el, 'debounce-delay', 350)
    el.handlerClick = (e) => {
      if (el.timer) {
        clearTimeout(el.timer)
      }
      el.timer = setTimeout(() => el.handler(e), el.delay)
    }
    el.addEventListener('click', el.handlerClick)
  },
  componentUpdated(el, binding) {
    el.handler = binding.value
    el.delay = getAttr(el, 'debounce-delay', 350)
  },
  unbind(el) {
    el.removeEventListener('click', el.handlerClick)
  }
}

export default debounce
