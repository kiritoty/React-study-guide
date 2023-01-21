import React, { useState } from 'react'

export default function App() {

    const [list,setList] = useState(["111","222","333"])
    const [input, setInput] = useState("")
  return (
    <div>
        <h1>eth</h1>
        <input onChange={(e)=> {
            setInput(e.target.value)
        }}/>
        <button className="add" onClick={()=>{
            setList([...list, input])
        }}>add</button>
        <ul>
        {
            list.map((item, index) => {
                return <li key={item}>{item}
                    <button className='del' onClick={()=>{ 
                        let arr = [...list]
                        arr.splice(index,1)
                        setList(arr)
                    }}>delete</button>
                </li>
            })
        }
        </ul>
    </div>
  )
}
