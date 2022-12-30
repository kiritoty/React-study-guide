import React, { Component } from 'react'
import tyleProps from 'prop-types'

export default class App extends Component {
  render() {
    let obj = {
        title: "test",
        showLeft: false
    }
    return (
      <div>
        <div>
            <h2>首页</h2>
            <NavBar title={"首页"} showLeft={false}/>
        </div>
        <div>
            <h2>列表</h2>
            <NavBar title={"列表"}/>
        </div>
        <div>
            <h2>购物车</h2>
            <NavBar title={"购物车"}/>
        </div>
        <NavBar {...obj}></NavBar>
      </div>
    )
  }
}

const NavBar = (props) => {
    const { title, showLeft } = props
    return (
        <div>
            {showLeft && <button>返回</button>}
            nav - {title}
            <button>home</button>
        </div>
    )
}

// 类属性
NavBar.prototype = {
    showLeft: tyleProps.bool
}

NavBar.defaultProps = {
    showLeft: true
}