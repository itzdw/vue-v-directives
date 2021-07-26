let findEle = (parent, type) => {
  return parent.tagName.toLowerCase() === type ? parent : parent.querySelector(type)
}

const trigger = (el, type) => {
  const e = document.createEvent('HTMLEvents')
  e.initEvent(type, true, true)
  el.dispatchEvent(e)
}

const limitText = {
  bind: function (el, binding) {
    // 正则规则可根据需求自定义
    var regRule = binding.value || /[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g
    let $inp = findEle(el, 'input')
    el.$inp = $inp
    $inp.handle = function () {
      let val = $inp.value
      $inp.value = val.replace(regRule, '')

      // trigger($inp, 'input')
    }
    $inp.addEventListener('input', $inp.handle)
  },
  unbind: function (el) {
    el.$inp.removeEventListener('input', el.$inp.handle)
  },
}

export default limitText
