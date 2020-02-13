const hook = document.getElementById('hooks')

function HooksClicker (props) {
    const [count, setCount] = React.useState(0)
    
    return (
        <>
            <h1>Functional Water Dragon</h1>
            <h4>{props.name}</h4>
            <div
            onClick={() => setCount(count + 1)}>
            🐉 {count}</div>
        </>
    )  
}



ReactDOM.render(<HooksClicker name="Aquasaur"/>, hook)