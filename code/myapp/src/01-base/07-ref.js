import React, { Component } from 'react'

class App extends Component{
    
    myRef = React.createRef()
    addBtn = () => {
        console.log("click", this.myRef.current.value)
    }


    render() {
        return (
            // <div>
            //     <input ref="myText"></input>
            //     <button onClick={this.addBtn}>Add</button>
            // </div>
            <div>
                <input ref={this.myRef}></input>
                <button onClick={this.addBtn}>Add</button>
            </div>
        )
    }
}
export default App;


