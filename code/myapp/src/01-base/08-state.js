import React, { Component } from 'react'

// const App = () => {

//         // let text = "收藏"
//         const [text, setText] = useState("收藏")
//         return (
//             <div>
//                 <h1>react 开发</h1>

//                 <button onClick={() => {
//                     text == "收藏" ? setText("取消收藏") : setText("收藏")
//                 }}>{text}</button>
//             </div>
//         )
    
// }

// export default App;

export default class App extends Component {

    state = {
        text: "收藏"
    }

    render() {

        return (
            <div>
                <h1>react 开发</h1>

                <button onClick={() => {
                   this.state.text == "收藏" ? this.setState({text: "取消收藏"}) : this.setState({text: "收藏"})
                }}>{this.state.text}</button>
            </div>
        )
    }
}
