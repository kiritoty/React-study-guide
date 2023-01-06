import React, { memo, useState } from 'react'

export default function App() {
    const [name, setName] = useState("eth")
  return (
    <div>
        {name}
        <button onClick={() => setName("xiaoming")}>click</button>
        <Child/>
    </div>
  )
}

const Child = memo(() => {
    console.log("111")
    return(<div>child</div>)
})
