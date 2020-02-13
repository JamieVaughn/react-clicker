const mountNode = document.getElementById('app');

function Clicker (props) {
    return (
      <>
        <h1>Functional Sand Dragon</h1>
        <div>🐉 {props.name}</div>
      </>
    )
  }

  ReactDOM.render(<Clicker name={dragonName}/>, mountNode)
