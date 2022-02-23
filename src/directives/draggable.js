import {emit} from 'utils/utils'
// 拖拽指令
const draggable = {
  inserted(el, binding) {
    el.style.cursor = 'move'
    el.style.position = binding.arg || 'absolute'
    el.style.userSelect = 'none'
    // pc端
    el.onmousedown = e => {
      emit(el, 'drag-start', e)
      let disx = e.clientX - el.offsetLeft
      let disy = e.clientY - el.offsetTop
      document.onmousemove = e => {
        emit(el, 'drag', e)
        let x = e.clientX - disx
        let y = e.clientY - disy
        let maxX = el.parentNode.clientWidth - parseInt(el.clientWidth)
        let maxY = el.parentNode.clientHeight - parseInt(el.clientHeight)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }
        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = e => {
        emit(el, 'drag-end', e)
        document.onmousemove = document.onmouseup = null
      }
    }
    // 移动端
    el.ontouchstart = e => {
      emit(el, 'drag-start', e)
      e = e.targetTouches[0]
      let disx = e.clientX - el.offsetLeft
      let disy = e.clientY - el.offsetTop
      document.ontouchmove = e => {
        emit(el, 'drag', e)
        e = e.targetTouches[0]
        let x = e.clientX - disx
        let y = e.clientY - disy
        let maxX = el.parentNode.clientWidth - parseInt(el.clientWidth)
        let maxY = el.parentNode.clientHeight - parseInt(el.clientHeight)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }
        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.ontouchend = e => {
        emit(el, 'drag-end', e)
        document.ontouchmove = document.ontouchend = null
      }
    }
  }
}

export default draggable

/**
 * 需求：实现一个拖拽指令，可在页面可视区域任意拖拽元素。
 * 思路：
 * 1、设置需要拖拽的元素为相对定位，其父元素为绝对定位。
 * 2、鼠标按下(onmousedown)时记录目标元素当前的 left 和 top 值。
 * 3、鼠标移动(onmousemove)时计算每次移动的横向距离和纵向距离的变化值，并改变元素的 left 和 top 值
 * 4、鼠标松开(onmouseup)时完成一次拖拽
 * 使用: 在 Dom 上加上 v-draggable 即可
 * <div class="el-dialog" v-draggable></div>
 * 
 const draggable = {
  inserted: function (el) {
    el.style.cursor = 'move'
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX = document.body.clientWidth - parseInt(window.getComputedStyle(el).width)
        let maxY = document.body.clientHeight - parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }
 
        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
 
        el.style.left = x + 'px'
        el.style.top = y + 'px'
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  },
}
export default draggable

 */
