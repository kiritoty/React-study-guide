import React, { Component } from 'react'

class Child extends Component {
    render(){
        return(
            <div>
                child - {this.props.text}
                <button onClick={()=>{
                    this.props.text = "33333"
                }}>child-ck</button>
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        text: "1111"
    }
  render() {
    return (
      <div>
        <button onClick={() => {this.setState({text: "22222"})}}>chagne</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
