const list = document.getElementById('list');
const list2 = document.getElementById('list2');
var dragons = [
  {name: 'water', count: 0}, 
  {name: 'fire', count: 0}, 
  {name: 'air', count: 0}, 
  {name: 'sand', count: 0}, 
  {name: 'ice', count: 0}
]


function List(props) {
  const [dragons, setDragons] = React.useState(props.dragons)
  const [active, setActive] = React.useState(props.dragons[0])

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
        <ul>
            {dragons.map((i, index) => (
            <li key={index} onClick={()=>setActive(i)}>{i.name}</li>
            )
            )}
        </ul>
        <Dragon dragon={active} clicker={active => increment(active)} />
    </div>
  )
}

function Dragon (props) {
  // console.log(props)
  return (
    <div className="dragon" onClick={() => props.clicker(props.dragon)}>
      <h1>{props.dragon.name}</h1>
      <div>🐉 {props.dragon.count}</div>
    </div>
  )
}

ReactDOM.render(<List dragons={dragons}/>, list)
// ReactDOM.render(<List dragons={dragons}/>, list2)