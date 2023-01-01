import React, { useEffect, useState } from 'react'

export default function App() {
    const [ name, setName ] = useState("eth")

    useEffect(() => {
        setName(name.substring(0,1).toUpperCase() + name.substring(1))
    })

    return (
        <div>
            {console.log("aaa")}
            app - {name}
            <button onClick={() => {setName("xiaoming")}}>click</button>
        </div>
    )
}
