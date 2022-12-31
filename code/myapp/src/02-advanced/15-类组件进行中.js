import React, { Component } from 'react'

export default class App extends Component {

  state = {
    myname: "eth"
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("update", prevProps, prevState)
  }

  shouldComponentUpdate(nextProps,nextState) {
    console.log("called ", nextState.myname)
    // return false
    if(this.state.myname == nextState.myname) {
        console.log("run")
        return false;
    }
    return true
  }

  render() {
    return (
      <div>
        <button onClick={() => {
            this.setState({myname: "ethan"})
        }}>click</button>
        <span id="myname">{this.state.myname}</span>
      </div>
    )
  }
}
