 //   https://reactjs.org/docs/react-without-es6.html
 var ClickerMVC = React.createClass({
    getInitialState: function(){
        return {count: 0}
    },
    handleClick: function(){ 
        this.setState({count: this.state.count + 1})
    },
    render: function(){ 
        return (
        <div className='clicker' onClick={this.handleClick}>
            <h1>React MVC style Dragon</h1>
            <div>🐉 {this.state.count}</div>
        </div>)
    } 
})
        
React.render(
<ClickerMVC />,
document.getElementById('MVC')
)