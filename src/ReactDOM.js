/** * 添加Dom中的属性 */
const setAttribute = (dom, attrs) => {
  for (let key in attrs) {
    // 添加对事件绑定的处理 
    if (/^on/.test(key)) {
      dom[key.toLocaleLowerCase()] = attrs[key]
    } else if (key === 'style') {
      Object.assign(dom.style, attrs[key])
    } else {
      dom[key] = attrs[key]
    }
  }
}

/** * vnode转化为DOM方法 **/
const render = (vnode, container) => {
  if (typeof vnode === 'string') {
    return container.appendChild(document.createTextNode(vnode))
  } if (typeof vnode === 'object') {
    const dom = document.createElement(vnode.tag)
    setAttribute(dom, vnode.attrs)
    if (vnode.children && Array.isArray(vnode.children)) {
      vnode.children.forEach(vnodeChild => {
        render(vnodeChild, dom)
      })
    } container.appendChild(dom)
  }
} 

const ReactDOM = {
  render
}

export default ReactDOM;