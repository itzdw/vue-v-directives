import Databus from 'utils/databus.js'
const databus = new Databus()

const lazyLoad = {
  bind(el) {
    init(el, databus.lazyLoad.default)
  },
  inserted(el) {
    observe(el)
  }
}

// 初始化
function init(el, def) {
  el.setAttribute('src', def)
}
// 利用IntersectionObserver监听el
function observe(el) {
  var io = new IntersectionObserver((entries) => {
    const realSrc = el.dataset.src
    if (entries[0].isIntersecting) {
      if (realSrc) {
        el.src = realSrc
        el.removeAttribute('data-src')
      }
    }
  })
  io.observe(el)
}

export default lazyLoad
