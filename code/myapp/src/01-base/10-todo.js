import React, { Component } from 'react'

export default class App extends Component {

    state = {
        list: ["aaa", "bbb"]
    }
    myRef = React.createRef();

    handleAdd() {
        let value = this.myRef.current.value;
        this.myRef.current.value = ""
        this.setState({list: [...this.state.list, value]});
    }
    
    handleDel = (index) => {
        console.log(index)
        let arr = [...this.state.list]
        arr.splice(index, 1)
        this.setState({list: arr})
    }


    render() {

        return (
            <div>
                <input ref={this.myRef}></input>
                <button onClick={this.handleAdd.bind(this)}>add</button>

                <ul>
                    {!this.state.list.length ? "暂无代办" :
                        this.state.list.map((item, index) => {
                            return <li key={item + index}>{item}
                                <button onClick={() => this.handleDel(index)}>删除</button>
                            </li>
                        })}
                </ul>
            </div>
        )
    }
}
