import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>App</div>
    )
  }
}

var bus = {

    list: [],

    subscribe(callback) {
        // console.log(callback)
        this.list.push(callback)    
    },

    publish(val) {
        //遍历列表，调用回调函数
        console.log(this.list)
        this.list.map((func) => {
            func && func(val)
        })
    }
}

// 订阅者

bus.subscribe((val)=>{
    console.log("111", val)
})
bus.subscribe((val)=>{
    console.log("222", val)
})

//发布者
bus.publish("pass down data")