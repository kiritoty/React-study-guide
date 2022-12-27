import React, { Component } from 'react'

const App = () => {
    function addBtn2 () {
        console.log("click")
    }

    const addBtn = () => {
        console.log("click")
    }

    return (
        <div>
            <input></input>
            <button onClick={addBtn}>Add</button>
            <button onClick={addBtn2}>Add2</button>
            <button onClick={() => { console.log("click") }}>Add3</button>
        </div>
    )
}

export default App;


