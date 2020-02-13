const list = document.getElementById('list');
var dragons = ['water', 'fire', 'air', 'sand', 'ice']


function List(props) {
  console.log(props)
  const [active, setActive] = React.useState('water')

  return (
    <div>
        <ul>
            {props.dragons.map((i, index) => (
            <li key={index} onClick={() => setActive(i)}>{i}</li>
            )
            )}
        </ul>
        <Dragon key={active} name={active} />
    </div>
  )
}

function Dragon (props) {
  const [count, setCount] = React.useState(0)
  return (
    <div key={props.name} className="dragon" onClick={() => setCount(count +1)}>
      <h1>{props.name}</h1>
      <div>🐉 {count}</div>
    </div>
  )
}

ReactDOM.render(<List dragons={dragons}/>, list)