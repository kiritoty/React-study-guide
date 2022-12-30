import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {

    state = {
        list: []
    }

    getData() {
        let list = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

        this.setState({list: list}, () => {
            // 状态更新完毕和dom更新完毕后 启用 better scroll的库      
            // new BetterScroll(".wrapper")
        })

    }
    render() {
        return (
            <div>
                <button onClick={() => this.getData()}>click</button>
                <div className="wrapper" style={{height: '200px', backgroundColor: 'yellow', overflow: 'hidden'}}>
                    <ul className="content">
                        {
                            this.state.list.map((ele) => {
                                return <li key={ele} >{ele}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
