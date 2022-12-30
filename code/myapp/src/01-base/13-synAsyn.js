import React, { Component } from 'react'

export default class App extends Component {
    state = {
        count: 1
    }

    addOne = () => {
        this.setState({count: this.state.count+1}, ()=>{
            console.log(this.state.count)  // 2
        })
        console.log("right after", this.state.count)  // right after 1
        this.setState({count: this.state.count+1})
        this.setState({count: this.state.count+1})
    }
    addTwo = () => {
        setTimeout(() => {
            this.setState({count: this.state.count+1})
            this.setState({count: this.state.count+1})
            this.setState({count: this.state.count+1})
        }, 1)
    }

    render() {
        return (
        <div>
            {this.state.count}
            <button onClick={this.addOne}>Add</button>
            <button onClick={this.addTwo}>Add2</button>
        </div>
        )
    }
}
