import React, { Component } from 'react'

export default class App extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }

    myRef = React.createRef()
    getSnapshotBeforeUpdate() {
        // let height = document.querySelector("#box")

        console.log(this.myRef.current.scrollHeight)

        return this.myRef.current.scrollHeight
    }

    componentDidUpdate(prevProps, prevState, value) {
        let nowHeight = this.myRef.current.scrollHeight;
        console.log(nowHeight)

        this.myRef.current.scrollTop += this.myRef.current.scrollHeight - value
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ list: [...[11, 12, 13, 14, 15, 16, 17, 18, 19], ...this.state.list] })
                }}>来邮件</button>
                <h1>邮箱应用</h1>
                <div ref={this.myRef} style={{ height: '200px', overflow: 'auto' }}>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return <li key={item + '_' + index} style={{ height: '100px', background: 'yellow' }}>{item}</li>
                        })}
                    </ul>
                </div>

            </div>
        )
    }
}
