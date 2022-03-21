createElement = (tag, attrs, ...children) => {
  return {
    tag,
    attrs,
    children
  };
};

class Component {
  constructor(props) {
    this.props = props;
    this.state = {};
  }

  render() {
    console.log('render component');
    return '';
  }

  setState(state) {
    Object.assign(this.state, state);
    ReactDOM.renderComponent(this);
  }

}

const memorizedState = [];
let index = 0; //每次useState初始化时，传入这个索引

function useState(initialState) {
  memorizedState[index] = memorizedState[index] || initialState;
  let currentIndex = index;

  function setState(newState) {
    memorizedState[currentIndex] = newState;
    index = 0; //渲染前要归0

    log(memorizedState);
    renderDom();
  }

  return [memorizedState[index++], setState]; //下次要加1
}

const React = {
  Component,
  createElement,
  useState
};