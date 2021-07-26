import {getAttr, emit} from '@/utils/utils'
// 滚动文字

const marquee = {
  bind(el) {
    el.timer = null
    el.distance = 0
    el.count = 0
    el.play = false
    el.marqueeStart = function() {
      start(el)
    }
    el.marqueeStop = function() {
      stop(el)
    }
    window.addEventListener('resize', function h(e) {
      handler(el)
    })
  },
  inserted(el) {
    handler(el)
  },
  componentUpdated(el) {
    start(el)
  },
  unbind(el) {
    window.removeEventListener('resize', function h(e) {
      handler(el)
    })
  }
}

function handler(el) {
  el.parentNode.style.overflow = 'hidden'
  el.parentNode.style.whiteSpace = 'nowrap'
  if (el.style.display !== 'block') {
    el.style.display = 'block'
  }
  start(el)
}

function start(el) {
  if (el.timer) {
    stop(el)
  }
  // 获取属性值
  const scrollAmount = getAttr(el, 'marquee-scroll-amount', 6)
  let scrollDelay = getAttr(el, 'marquee-scroll-delay', 85)
  const loop = getAttr(el, 'marquee-loop', -1)
  if (scrollDelay < 60) {
    scrollDelay = 60
  }
  const boxWidth = el.parentNode.offsetWidth
  // 创建移动元素
  const elWidth = el.scrollWidth
  el.count = 0
  // 判断条件
  if (elWidth > boxWidth) {
    el.timer = setInterval(() => {
      if(!el.play) {
        emit(el, 'marquee-start')
        el.play = true
      }
      if (Math.abs(el.distance) >= elWidth) {
        el.distance = boxWidth
        if (loop > -1) {
          ++ el.count
          emit(el, 'marquee-bounce', {detail: el.count})
          if (loop <= el.count) {
            emit(el, 'marquee-finish')
            stop(el)
          }
        }
      } else {
        el.distance -= scrollAmount
      }
      el.style.transform = `translateX(${el.distance}px)`
    }, scrollDelay)
  }
}

function stop(el) {
  clearInterval(el.timer)
  el.timer = null
  el.play = false
}

export default marquee
