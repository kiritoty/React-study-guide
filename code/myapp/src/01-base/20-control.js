import React, { Component } from 'react'

export default class App extends Component {
    state = {
      textVal: ''
    }
    render() {
        return (
        <div>
            <h1>登录页</h1>
            <input type={'text'} value={this.state.textVal} onChange={(val)=>{this.setState({textVal: val.target.value})}}></input>
            <button onClick={() => {console.log(this.state.textVal)}}>登录</button>
            <button onClick={() => {this.setState({textVal: ""})}}>清空</button>
        </div>
        )
    }
}
