// 复制
import {getAttr} from '@/utils/utils'

const noop = () => {}

const copy = {
  bind(el, binding) {
    el.value = getAttr(el, 'copy-text', '')
    el.success = binding.value || noop
    el.handler  = () => {
      const textarea = document.createElement('textarea')
      textarea.readOnly = 'readonly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      textarea.value = el.value
      document.body.appendChild(textarea)
      textarea.select()
      const result = document.execCommand('Copy')
      if (result) {
        el.success(el.value)
      }
      document.body.removeChild(textarea)
    }
    el.addEventListener('click', el.handler)
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
  componentUpdated(el, binding) {
    el.value = getAttr(el, 'copy-text', '')
    el.success = binding.value || noop
  }
}

export default copy
