
import React, { useCallback, useState } from 'react'

const App = () => {
    const[ list, setList ] = useState([])
    const[ input, setInput ] = useState("")


    const handleChange = useCallback((evt) => {
        setInput(evt.target.value)
    }, [])

    const handleAdd = useCallback(() => {
        setList([...list, input])
        setInput("")
    }, [input, list])

    const handleDelete = useCallback((index) => {
        let arr = list.concat();
        arr.splice(index, 1)

        setList(arr)
    }, [list])

    return (
        <div>
            <input onChange={handleChange} value={input}></input>
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
