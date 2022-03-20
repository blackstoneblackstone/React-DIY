class Component {
  constructor(props) {
    this.props = props
    this.state = {}
    renderComponent()
  }
}

createElement = (tag, attrs, ...children) => {
  return {
    tag,
    attrs,
    children
  }
}

const React = {
  Component,
  createElement
};

export default React;