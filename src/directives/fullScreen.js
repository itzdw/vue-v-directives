import {emit} from 'utils/utils'
// 全屏
const fullScreen = {
  bind(el, binding) {
    el.container = binding.arg
    el.status = binding.value
  },
  inserted(el, binding, vnode) {
    // 监控点击事件
    el.addEventListener('click', (e) => {
      switchFullScreen(el, vnode)
    })
    // 监听浏览器F11全屏按键方法
    document.addEventListener('keyup', e => {
      if (e && e.keyCode === 122) {
        e.preventDefault()
        switchFullScreen(el, vnode)
      }
    })
    window.addEventListener('fullscreenchange', (e) => {
      if (document.fullscreenElement) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
    window.addEventListener('webkitfullscreenchange', (e) => {
      if (document.webkitIsFullScreen) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
    window.addEventListener('mozfullscreenchange', (e) => {
      if (document.mozFullScreen) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
    window.addEventListener('msfullscreenchange', (e) => {
      if (document.msFullscreenElement) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
  },
  componentUpdated(el, binding, vnode) {
    el.status = binding.value
  },
  unbind(el, binding, vnode) {
    el.removeEventListener('click', (e) => {
      switchFullScreen(el, vnode)
    })
    // 监听浏览器F11全屏按键方法
    document.removeEventListener('keyup', e => {
      if (e && e.keyCode === 122) {
        e.preventDefault()
        switchFullScreen(el, vnode)
      }
    })
    window.removeEventListener('fullscreenchange', (e) => {
      if (document.fullscreenElement) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
    window.removeEventListener('webkitfullscreenchange', (e) => {
      if (document.webkitIsFullScreen) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
    window.removeEventListener('mozfullscreenchange', (e) => {
      if (document.mozFullScreen) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
    window.removeEventListener('msfullscreenchange', (e) => {
      if (document.msFullscreenElement) {
        emit(el, 'enter-full-screen')
      } else {
        emit(el, 'exit-full-screen')
      }
    })
  }
}

function switchFullScreen(el, vnode) {
  const ref = vnode.context.$refs[el.container]
  let elm
  if (ref && ref.length > 0) {
    elm = ref[0]
  } else {
    elm = ref
  }
  if (el.status) {
    // 进入全屏
    const fullScreen = elm.requestFullscreen || elm.msRequestFullscreen || elm.mozRequestFullScreen || elm.webkitRequestFullScreen
    if (fullScreen) {
      fullScreen.call(elm)
      return
    }
    if (typeof window.ActiveXObject != "undefined") {
      let wscript = new ActiveXObject("WScript.Shell");
      if (wscript) {
        wscript.SendKeys("{F11}");
      }
    }
  } else {
    // 退出全屏
    let exitFullScreen = elm.exitFullscreen || elm.msExitFullscreen || elm.mozCancelFullScreen || elm.webkitCancelFullScreen
    if (exitFullScreen) {
      exitFullScreen.call(elm)
    }
    exitFullScreen = document.exitFullscreen || document.msExitFullscreen || document.mozCancelFullScreen || document.webkitCancelFullScreen
    if (exitFullScreen) {
      exitFullScreen.call(document)
      return
    }
    if (typeof window.ActiveXObject != "undefined") {
      let wscript = new ActiveXObject("WScript.Shell");
      if (wscript) {
        wscript.SendKeys("{F11}");
      }
    }
  }
}

export default fullScreen
