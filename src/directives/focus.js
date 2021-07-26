// 获取焦点
const findElm = (node, elms) => {
  if (elms.some(elm => elm.toUpperCase() === node.tagName)) {
    return node
  }
  if (node.nodeType === 1 && node.hasChildNodes()) {
    let childNodes = node.childNodes
    for (let i = 0; i < childNodes.length; i ++) {
      let childNode = childNodes.item(i)
      const ret = findElm(childNode, elms)
      if (ret) {
        return ret
      }
    }
  }
}

const focus = {
  inserted(el) {
    const targetElm = findElm(el, ['input', 'textarea'])
    if (targetElm) {
      targetElm.focus()
    }
  }
}

export default focus
