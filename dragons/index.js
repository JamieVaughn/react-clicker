const mountNode = document.getElementById('app');
const list = document.getElementById('list');

var listOfDragons = dragons.map(i => <li>{i}</li>)

function List(props) {
  console.log(props)
  console.log(listOfDragons)
  return (
    <ul>
        {
        props.dragons.map(i => (
          <li onClick={()=>console.log(i)}>{i}</li>
          )
        )
        }
    </ul>
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

var dragons = ['water', 'fire']

ReactDOM.render(<List dragons={dragons}/>, list)
ReactDOM.render(<Dragon name="water"/>, mountNode)

