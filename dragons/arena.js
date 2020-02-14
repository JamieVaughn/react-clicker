const mountNode = document.getElementById('app');

function Arena() {
    const [select, setSelect] = React.useState('water')
    const dragons = [
        {name: 'water', count: 0}, 
        {name: 'fire', count: 0},
        {name: 'air', count: 0},
        {name: 'sand', count: 0},
        {name: 'ice', count: 0}
    ]

    const handleClick = (e) => {
        console.log(e.target)
        setSelect(e.target.innerText)
    }

    return (
        <div>
            <List  dragons={dragons} handler={handleClick}></List>
            <Dragon key={select.name} name={select.name} count={select.count}/>
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
            <li key={index} onClick={props.handler}>{i.name}</li>
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