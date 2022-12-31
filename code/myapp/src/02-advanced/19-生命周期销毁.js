import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isCreated: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.setState({isCreated: !this.state.isCreated})}}>click</button>
                {this.state.isCreated && <Child />}
            </div>
        )
    }
}

class Child extends Component {

    componentWillUnmount() {
        console.log("componentWillUnmount")
        window.onresize = null
    }

    componentDidMount() {
        window.onresize = () => {
            console.log("resize")
        }
    }

    render() {
        return (
            <div>
                child
            </div>
        )
    }
}
