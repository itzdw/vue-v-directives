// 防抖[输入框防抖指令]
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


/***
 * 背景：在开发中，有些提交保存按钮有时候会在短时间内被点击多次，这样就会多次重复请求后端接口，造成数据的混乱，比如新增表单的提交按钮，多次点击就会新增多条重复的数据。
 * 需求：防止按钮在短时间内被多次点击，使用防抖函数限制规定时间内只能点击一次。
 * 思路：
 * 1、定义一个延迟执行的方法，如果在延迟时间内再调用该方法，则重新计算执行时间。
 * 2、 将时间绑定在 click 方法上。
 * 使用：给 Dom 加上 v-debounce 及回调函数即可
 * <button v-debounce="debounceClick">防抖</button>
 * 
 const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  },
}
 
export default debounce

 */