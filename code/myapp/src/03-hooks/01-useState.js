import React, { Component, useState } from 'react'

const App = () => {
    const[ name, setName ] = useState("eth")
    const[ age, setAge ] = useState(100)

    return(
        <div>
            <button onClick={() => {setName("xiaoming"); setAge(19)}}>click</button>
            app - {name} - {age}
        </div>
    )
}


export default App;