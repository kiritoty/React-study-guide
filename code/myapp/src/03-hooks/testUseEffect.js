import React, { useEffect, useState } from 'react'

export default function App() {
    const [ test, setTest ] = useState(true);
    useEffect(() => {
        console.log("aaa")
    })
  return (
    <div>
        <button onClick={() => {setTest(!test)}}>click</button>
    </div>
  )
}
