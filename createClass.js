const ClickerMVC = React.createClass({
    getInitialState: function() {
        return { count: 0 }
    },
    handleClick: function (){
        // console.log(this.state)
        this.setState({count: this.state.count + 1 })
    },
    render: function() {
        return (
            <div>
                <h1>React MVC Style</h1>
                <div>{this.state.count}</div>
            </div>
        )
    }
})

ReactDOM.render(<ClickerMVC/>, document.getElementById('MVC'))