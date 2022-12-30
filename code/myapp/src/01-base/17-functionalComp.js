import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar color={"yellow"}></Sidebar>
      </div>
    )
  }
}

const Sidebar = (props) => {
    const { color } = props;
    return(
        <div style={{backgroundColor: color, width: '200px'}}>
            <ul>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
                <li>1111</li>
            </ul>
        </div>
    );
}