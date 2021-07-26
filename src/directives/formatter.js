import dayjs from "dayjs"
import numeral from 'numeral'
import {getAttr} from '@/utils/utils'

// 全局变量
const formatter = {
  bind(el, binding) {
    el.format = binding.value
    handler(el)
  },
  componentUpdated(el, binding) {
    el.format = binding.value
    handler(el)
  }
}

function handler(el) {
  const $text = getAttr(el, 'formatter-value', '')
  const $perfix = getAttr(el, 'formatter-perfix', '')
  const $suffix = getAttr(el, 'formatter-suffix', '')
  let ret = $text
  if (/\d/.test(el.format)) {
    ret = numeral($text).format(el.format)
  } else {
    ret = dayjs($text).format(el.format)
  }
  el.innerText = $perfix + ret + $suffix
}

export default formatter
