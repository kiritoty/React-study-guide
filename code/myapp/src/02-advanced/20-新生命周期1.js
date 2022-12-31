import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: "ethan"
    }

    static getDerivedStateFromProps(nextProps, nextState) {
        console.log(nextProps, nextState)

        return {myname: nextState.myname.substring(0,1).toUpperCase() + nextState.myname.substring(1)}
    }

    render() {
        return (
        <div>
            <button onClick={() => {this.setState({myname: "xiaoming"})}}>click</button>
            {this.state.myname}
        </div>
        )
    }
}
