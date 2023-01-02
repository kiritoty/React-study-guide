import React, { useRef, useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)

    var mycount = useRef(0)
    return (
        <div>
            {count}-{mycount.current}
            <button onClick={() => {
                setCount(count+1)
                mycount.current++
            }}>add</button>
        </div>
    )
}
