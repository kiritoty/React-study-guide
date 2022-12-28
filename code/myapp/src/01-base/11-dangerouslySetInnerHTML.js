import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myhtml: `<b>aaa</b>`
    }
  render() {
    return (
      <div>
        <div dangerouslySetInnerHTML={{__html : this.state.myhtml}}></div>
      </div>
    )
  }
}
