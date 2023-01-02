
import React, { useRef, useState } from 'react'

const App = () => {
    const[ list, setList ] = useState([])

    const myRef = useRef()

    const handleAdd = () => {
        // setList([...list, input])
        // setInput("")

        console.log(myRef.current.value)
        setList([...list, myRef.current.value])
        myRef.current.value = ""
    }

    const handleDelete = (index) => {
        let arr = list.concat();
        arr.splice(index, 1)

        setList(arr)
    }

    return (
        <div>
            <input ref={myRef}></input>
            <button onClick={handleAdd}>add</button>

            {list.length != 0 ?
            <ul>
                {list.map((item,index) => 
                    <li key={item}>
                        {item}
                        <button onClick={() => handleDelete(index)}>del</button>
                    </li>)}
            </ul> : <div>暂无</div>}
        </div>
    )
}

export default App;
