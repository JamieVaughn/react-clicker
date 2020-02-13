// ReactDOM.render(
//     <h1>Hello, from index.js</h1>,
//     document.getElementById('app')
//   );

const mountStateful = document.getElementById('app-stateful');

class ClickerState extends React.Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this)
    // this.state = { count: 0 }
  }
  state = { count: 0 }
  handleClick = () => {
    console.log(this)
    this.setState(state => ({
      count:  state.count + 1
    }))
  }
  render() {
    return (
      <>
        <h1>Stateful Sand Dragon</h1>
        <h3>{this.props.name}</h3>
        <div
        onClick={this.handleClick}>
          🐉 {this.state.count}
        </div>
      </>
    )
  }
}

// Some business logic outside of the component
var dragonName =''
var bool = false;
if(bool){
  dragonName ='Puff'
} else {
  dragonName ='Fluffykins'

}

ReactDOM.render(<ClickerState name={dragonName} />, mountStateful)