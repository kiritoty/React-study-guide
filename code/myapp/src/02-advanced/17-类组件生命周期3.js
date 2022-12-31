import React, { Component } from 'react'

class Child extends Component {
    componentWillReceiveProps(nextProps, nextState) {
        console.log("componentWillReceiveProps", this.props.text, nextProps)
        // 最先获得父组件传来的属性， 可以利用属性进行 ajax或者逻辑处理
    }
    render(){
        // console.log("child render")
        return(
            <div>
                Child
                {this.props.text}
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: "111"
    }
    render() {
        return (
        <div>
            {
                this.state.text
            }
            <button onClick={()=>{this.setState({text: "2222"})}}>click</button>
            <Child text={this.state.text}/>
        </div>
        )
    }
}
