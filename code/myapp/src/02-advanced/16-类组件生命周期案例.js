import React, { Component } from 'react'

class Box extends Component {
    shouldComponentUpdate(nextProps) {
        console.log(nextProps, this.props.curr, this.props.index)

        // 这个函数内部的 this.props 和下面16行的 this.props的值代表的不是同一个
        // 这个函数内部的值是更改之前，  nextProps才是更改之后
        // 所以这里的意思是 如果之前props.curr 和之前props.index 如果相等 说明我们需要去掉红色框
        // 那么就需要再次渲染

        // nextProps.curr 和 nextProps.index 代表的是更改之后，如果这两个值相等，那么则需要加上红色框
        // 这里的nextProps.curr 和 nextProps.index 和下面 this.props.curr, this.props.index是相同的
        if(this.props.curr == this.props.index || nextProps.curr === nextProps.index) {
            return true
        }
        return false;
    }
    render(){
        console.log("render")
        return(
            <div style={{width: '100px', height: "100px", border: this.props.curr == this.props.index ?'1px solid red' :'1px solid grey', margin: '10px', float: 'left'}}>
                
            </div>
        )
    }
}

export default class App extends Component {
    state = {
        list: ["00", "01", "02","03","04","05","06","07","08","09"],
        curr: 0
    }
  render() {
    return (
      <div>
        <input type='number' onChange={(evt) => {
            this.setState({curr: Number(evt.target.value) })
        }}></input>
        <div style={{overflow: 'hidden'}}>
            {
                this.state.list.map((item, index) => {
                    return <Box key={item} index={index} curr={this.state.curr}/>
                })
            }
        </div>
      </div>
    )
  }
}
