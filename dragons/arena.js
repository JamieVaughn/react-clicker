const mountNode = document.getElementById('app');

function Arena() {
    const [select, setSelect] = React.useState('water')
    const dragons = ['water', 'fire', 'air', 'sand', 'ice']

    const handleClick = (e) => {
        console.log(e.target)
        setSelect(e.target.innerText)
    }

    return (
        <div key={1}>
            <List  dragons={dragons} handler={handleClick}></List>
            <Dragon key={select} name={select} />
        </div>
    )
}

function List(props) {
  console.log(props)
  const [active, setActive] = React.useState('water')

  return (
    <div>
        <ul>
            {props.dragons.map((i, index) => (
            // <li key={index} onClick={()=>setActive(i)}>{i}</li>
            <li key={index} onClick={props.handler}>{i}</li>
            )
            )}
        </ul>
    </div>
  )
}

function Dragon (props) {
  const [count, setCount] = React.useState(0)
  return (
    <div className="dragon" onClick={() => setCount(count +1)}>
      <h1>{props.name}</h1>
      <div>🐉 {count}</div>
    </div>
  )
}

ReactDOM.render(<Arena/>, mountNode)