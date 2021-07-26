// 倒计时
import {getAttr, emit} from '@/utils/utils'

const countdown = {
  bind(el, binding) {
    el.timer = null
    el.count = el.originCount = binding.value
    el.delay = getAttr(el, 'countdown-delay', 1000)
    el.countdownStop = stop.bind(el)
    el.countdownStart = start.bind(el)
    el.countdownReset = reset.bind(el)
  },
  inserted(el) {
    el.innerText = el.count
  },
  componentUpdated(el, binding) {
    el.count = binding.value
    el.delay = getAttr(el, 'countdown-delay', 1000)
    el.innerText = el.count
  }
}

function start() {
  emit(this, 'countdown-start')
  this.countdownStop()
  this.timer = setInterval(() => {
    if (this.count > 0) {
      --this.count
      this.innerText = this.count
    } else {
      emit(this, 'countdown-end')
      this.countdownStop()
    }
  }, this.delay)
}

function stop() {
  if (this.timer) {
    clearInterval(this.timer)
    this.timer = null
  }
}

function reset() {
  this.count = this.originCount
  this.innerText = this.count
}

export default countdown
