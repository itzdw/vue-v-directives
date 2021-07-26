import {getAttr} from '@/utils/utils'
// 给整个页面添加背景水印
function addWaterMarker(str, el) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas')
  can.width = getAttr(el, 'watermarker-width', 200)
  can.height = getAttr(el, 'watermarker-height', 150)
  can.style.display = 'none'
  var ctx = can.getContext('2d')
  const fontSize = getAttr(el, 'watermarker-font-size', 16)
  const fontFamily = getAttr(el, 'watermarker-font-family', 'Microsoft YaHei')
  const rotate = getAttr(el, 'watermarker-rotate', -30)
  ctx.font = `${fontSize}px ${fontFamily}`
  ctx.fillStyle = getAttr(el, 'watermarker-text-color', 'rgba(180, 180, 180, 0.3)')
  ctx.textAlign = getAttr(el, 'watermarker-text-align', 'center')
  ctx.textBaseline = getAttr(el, 'watermarker-text-baseline', 'center')
  ctx.translate(pontX(ctx, can), pontY(ctx, can))
  ctx.rotate(rotate * Math.PI / 180)
  ctx.translate(- pontX(ctx, can), - pontY(ctx, can))
  ctx.fillText(str, pontX(ctx, can), pontY(ctx, can), can.width)
  el.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}

const watermarker = {
  bind(el, binding) {
    addWaterMarker(binding.value, el)
  },
  componentUpdated(el, binding) {
    addWaterMarker(binding.value, el)
  }
}

function pontX({textAlign}, {width}) {
  let x
  switch(textAlign) {
    case 'left':
      x = 0
      break
    case 'right':
      x = width
      break
    default :
      x = width / 2
      break
  }
  return x
}


function pontY({textBaseline}, {height}) {
  let y
  switch(textBaseline) {
    case 'top':
      y = 0
      break
    case 'bottom':
      y = height
      break
    default:
      y = height / 2
      break
  }
  return y
}

export default watermarker
