import {getAttr} from '@/utils/utils'
// 给整个页面添加背景水印 [实现页面水印]
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

/**
 * 需求：给整个页面添加背景水印
 * 思路：
 * 使用 canvas 特性生成 base64 格式的图片文件，设置其字体大小，颜色等。
 * 将其设置为背景图片，从而实现页面或组件水印效果
 * 使用: 设置水印文案，颜色，字体大小即可
 * <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
 * 
function addWaterMarker(str, parentNode, font, textColor) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas')
  parentNode.appendChild(can)
  can.width = 200
  can.height = 150
  can.style.display = 'none'
  var cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180)
  cans.font = font || '16px Microsoft JhengHei'
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  cans.fillText(str, can.width / 10, can.height / 2)
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')'
}
 
const waterMarker = {
  bind: function (el, binding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  },
}
 
export default waterMarker

 */

