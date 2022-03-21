// class App extends Reconciler.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: ''
//     }
//   }

//   // 这里注意要用 箭头函数
//   addOne = () => {
//     this.props.onAppMessage()
//     this.setState({
//       value: '323232'
//     });
//   }

//   render() {
//     return (
//       <div><button onClick={this.addOne}>hello world {this.state.value}</button></div>
//     )
//   }
// }

// const FatherFunc = ({
//   title
// }) => {
//   const [state, setState] = useState(0);
//   const onAppMessage = () => {
//     log('onAppMessage', state);
//     setState(state + 1)
//   }
//   return (
//     <div>
//       {state}
//       {title}
//       <App onAppMessage={onAppMessage} />
//     </div>
//   )
// }

const renderDom = () => {
  React.render(
  <div>
    <div>
      <button onClick={() => alert(1)}>点击按钮</button>
    </div>
  </div>, document.getElementById('app'));
}
renderDom()