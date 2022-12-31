import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myname: "eth"
  }
  componentWillMount() {
    console.log("will mount", this.state.myname, document.getElementById("myname"))

    // 第一次上树前的 最后一次更改状态计划
    this.setState({
      myname: "ethan"
    })
  }

  componentDidMount() {
    console.log("did mount", document.getElementById("myname"))
    // 数据请求axios
    // 订阅函数的调用
    // setInterval
    // 基于创建完的dom进行初始化。。。。。better-scroll
  }

  render() {
    console.log("render")
    return (
      <div>
        <span id="myname">{this.state.myname}</span>
      </div>
    )
  }
}
