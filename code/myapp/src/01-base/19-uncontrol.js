import React, { Component } from 'react'

export default class App extends Component {
    myUserName = React.createRef();
    render() {
        return (
        <div>
            <h1>登录页</h1>
            <input type={'text'} ref={this.myUserName} defaultValue="eth"></input>
            <button onClick={() => {console.log(this.myUserName.current.value)}}>登录</button>
            <button onClick={() => {this.myUserName.current.value = ""}}>清空</button>
        </div>
        )
    }
}
