function HooksClicker() {
    const [count, setCount] = React.useState(0);
  
    return (
      <div>
        <h1>Hooks Dragon</h1>
        <div onClick={() => setCount(count + 1) }>🐉 {count}</div>
      </div>
    )
  }

  ReactDOM.render(<HooksClicker />, document.getElementById('hooks'));
  