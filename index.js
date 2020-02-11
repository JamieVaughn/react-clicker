// ReactDOM.render(
//     <h1>Hello, from index.js</h1>,
//     document.getElementById('app')
//   );

const mountNode = document.getElementById('app')

class Clicker extends React.Component {
    state = { counter: 1 };
    
    handleClick = () => {
      this.setState(state => ({
        counter: state.counter + 1 
      }));
    };
    
    render() {
      return (
        <div className='card'>
          <h1>Dragon</h1>
            <button onClick={this.handleClick}>
            🐉 {this.state.counter}
            </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Clicker />, mountNode);