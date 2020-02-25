const list = document.getElementById('list');
const arena = document.getElementById('app');

function Arena() {
    const [active, setActive] = React.useState({name: 'water', count: 0})
    const [dragons, setDragons] = React.useState([
      {name: 'water', count: 0}, 
      {name: 'fire', count: 0},
      {name: 'air', count: 0},
      {name: 'sand', count: 0},
      {name: 'ice', count: 0}
  ])

    const handleClick = (d) => {
        console.log(d)
        setActive(d)
    }
    const increment = dragon => {
      // setDragons(
      //   dragons.map(d => d.name == dragon.name ?
      //   {name: dragon.name, count: dragon.count += 1} : d)
      // )
      setDragons(
        dragons.map(d => (d.count += d.name == dragon.name, d))
      )
    }

    return (
        <div>
            <List  dragons={dragons} handler={handleClick}></List>
            <Dragon dragon={active} clicker={increment}/>
        </div>
    )
}

function List(props) {
  console.log(props)
  return (
    <div>
        <ul>
            {props.dragons.map((i, index) => (
            <li key={index} onClick={()=>props.handler(i)}>{i.name}</li>
            )
            )}
        </ul>
    </div>
  )
}

function Dragon (props) {
  console.log(props)
  return (
    <div className="dragon" onClick={() => props.clicker(props.dragon)}>
      <h1>{props.dragon.name}</h1>
      <div>🐉 {props.dragon.count}</div>
    </div>
  )
}

ReactDOM.render(<Arena />, list)
ReactDOM.render(<Arena />, arena)