const mountNode = document.getElementById('app');

// function Arena(props) {
//     const [select, setSelect] = useState('water')

//     return (
//         <div>
//             <List dragons={['water', 'fire', 'fluffykins']}></List>
//             <Dragon name={select}></Dragon>
//         </div>
//     )
// }

function Dragon(props) {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>{props.name}</h1>
            <div onClick={() => setCount(count +1)}>🐉 {count}</div>
        </div>
    )
}

// function List(props) {
//     const [select, setSelect] = useState('water')
//     return (
//         <div>
//             <ul>
//                 {props.dragons.map(name => <li onClick={() => setSelect(name)}>name</li>)}
//             </ul>
//             <Dragon name={select}></Dragon>
//         </div>
//     )
// }

ReactDOM.render(<Dragon/>, mountNode)
// ReactDOM.render(<Arena/>, mountNode)