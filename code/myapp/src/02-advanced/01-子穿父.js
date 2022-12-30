import React, { Component, useState } from 'react'

// export default class App extends Component {
//     state = {
//         show: true
//     }
//     render() {
//     return (
//       <div>
//         <Navbar setShow={() => {this.setState({show: !this.state.show})}}/>
//         {this.state.show && <Sidebar/>}
//       </div>
//     )
//   }
// }

const App = () => {
    const [show, setShow] = useState(true)
    console.log(show)
    return (
        <div>
            <Navbar show={show} setShow={setShow}/>
            <Sidebar show={show}/>
        </div>
    );
}

export default App;

const Navbar = (props) => {
    const { show, setShow } = props
    return(
        <div style={{background: 'red'}}>
            <button onClick={() => setShow(!show)}>click</button>
            <span>Navbar</span>
        </div>
    )
}
const Sidebar = (props) => {
    return(
        <div style={{background: 'yellow', width: '200px', display: props.show ? '' : 'none'}}>
            <ul>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
                <li>11111</li>
            </ul>
        </div>
    )
}
