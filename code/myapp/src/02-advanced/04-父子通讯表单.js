import React, { Component } from 'react'

export default class App extends Component {
    state = {
        username: "eth",
        password: "123"
    }
    render() {
        return (
        <div>
            <h1>登录页面</h1>
            <Field label="用名" type="text" onChange={(val) => this.setState(val)} value={this.state.username}/>
            <Field label="密码" type="password" onChange={(val) => this.setState(val)} value={this.state.password}/>
            <button onClick={()=>{console.log(this.state)}}>登录</button>
            <button onClick={()=> this.setState({username: "", password: ""})}>取消</button>
        </div>
        )
    }
}

const Field = (props) => {
    const handleChange = (val) => {
        if(props.label == '密码') {
            props.onChange({password: val})
        } else {
            props.onChange({username: val})
        }
    }
    return(
        <div style={{background: 'yellow'}}>
            <label>{props.label}</label>
            <input type={props.type} value={props.value} onChange={(val)=> handleChange(val.target.value)}></input>
        </div>
    )
}
