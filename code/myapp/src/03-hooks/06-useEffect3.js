import React, { Component, useEffect } from 'react'

export default class App extends Component {
    state = {
        isCreated: true
    }
    render() {
        return (
            <div>
                <button onClick={() => {this.setState({isCreated: !this.state.isCreated})}}>click</button>
                {this.state.isCreated && <Child />}
            </div>
        )
    }
}

const Child = () => {
    useEffect(() => {
        window.onresize = () => {
            console.log("resize")
        }

        const id = setInterval(() => {
            console.log("111")
        }, 1000)

        return () => {
            window.onresize = ""
            clearInterval(id)
        }
    }, [])

    return (
        <div>
            child
        </div>
    )

}

// class Child extends Component {

//     componentWillUnmount() {
//         console.log("componentWillUnmount")
//         window.onresize = null
//     }

//     componentDidMount() {
//         window.onresize = () => {
//             console.log("resize")
//         }
//     }

//     render() {
//         return (
//             <div>
//                 child
//             </div>
//         )
//     }
// }
