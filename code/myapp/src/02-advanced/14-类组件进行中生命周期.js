import React, { Component } from 'react'

export default class App extends Component {

  state = {
    myname: "eth"
  }

  componentWillUpdate() {
    // 拿到的是未更新前的值
    console.log("componentWillUpdate", document.getElementById("myname").innerHTML)
  }

  componentDidUpdate() {
    // 更新后想要获取dom节点
    console.log("componentDidUpdate", document.getElementById("myname").innerHTML)
  }

  render() {
    console.log("render")
    return (
      <div>
        <button onClick={() => {this.setState({myname: "ethan"})}}>click</button>
        <span id="myname">{this.state.myname}</span>
      </div>
    )
  }
}
