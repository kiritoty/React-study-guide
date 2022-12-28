import React, { Component } from 'react'

class App extends Component{

    a = 1


    addBtn2 () {
        console.log("click", this)
    }

    addBtn = () => {
        console.log("click", this.a)
    }


    render() {
        return (
            <div>
                <input></input>
                <button onClick={this.addBtn}>Add</button>
                <button onClick={this.addBtn2.bind(this)}>Add2</button>
                <button onClick={() => { console.log("click", this.a) }}>Add3</button>
            </div>
        )
    }
}
export default App;


