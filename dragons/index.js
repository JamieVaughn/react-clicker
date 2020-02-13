const mountNode = document.getElementById('app');
const list = document.getElementById('list');

var dragons = ['water', 'fire']


function List(props) {

  return (
    <ul>
        Dragon list here
    </ul>
  )
}

function Dragon (props) {


  return (
    <div className="dragon">
      Active Dragon here
    </div>
  )
}

ReactDOM.render(<List dragons={dragons}/>, list)
ReactDOM.render(<Dragon name="water"/>, mountNode)

