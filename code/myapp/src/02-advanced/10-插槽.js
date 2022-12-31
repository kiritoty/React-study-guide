import React, { Component } from 'react'

class Child extends Component {
    render() {
        return(
            <div>
                child
                {this.props.children}
            </div>
        );
    }
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Child>
            <div>eeee</div>
        </Child>
      </div>
    )
  }
}
