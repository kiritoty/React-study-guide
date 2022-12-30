import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: [{text: "aaa", checked: false}, { text: "bbb", checked: true}],
        mytext: ""
    }

    handleAdd() {
        let value = this.state.mytext
        this.setState({list: [...this.state.list, {text: value, checked: false}], mytext: ""});

    }
    
    handleDel = (index) => {
        let arr = [...this.state.list]
        arr.splice(index, 1)
        this.setState({list: arr})
    }

    handleCheck = (index) => {
        let obj = this.state.list.concat()
        obj[index].checked = !obj[index].checked
        this.setState({list: obj})
    }


    render() {

        return (
            <div>
                <input value={this.state.mytext} onChange={(evt) => {this.setState({mytext: evt.target.value})}}></input>
                <button onClick={this.handleAdd.bind(this)}>add</button>

                <ul>
                    {!this.state.list.length ? "暂无代办" :
                        this.state.list.map((item, index) => {
                            return (
                            <li key={item + index}>
                                <input type="checkbox" checked={item.checked} onChange={() => this.handleCheck(index)}></input>
                                <span style={{textDecoration: item.checked ? "line-through": ""}}>{item.text}</span>
                                <button onClick={() => this.handleDel(index)}>删除</button>
                            </li>
                        )})}
                </ul>
            </div>
        )
    }
}
