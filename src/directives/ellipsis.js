import clamp from "clamp-js"
// 文本多行溢出
const ellipsis = {
  bind(el, binding) {
    handler(el, binding)
  },
  componentUpdated(el, binding) {
    handler(el, binding)
  }
}

function handler(el, binding) {
  const line = binding.value || 1
  if (line === 1) {
    el.style.overflow = 'hidden'
    el.style.textOverflow = 'ellipsis'
    el.style.whiteSpace = 'nowrap'
  } else {
    clamp(el, {clamp: line})
  }
}

export default ellipsis
