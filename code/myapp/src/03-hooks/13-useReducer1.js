// import React, { useState } from 'react'

// export default function App() {
//     const [count, setCount] = useState(0)

//     return (
//         <div>
//             count - {count}
//             <button onClick={() => {setCount(count + 1)}}>click</button>
//         </div>
//     )
// }
import React, { useState, useReducer } from 'react'

const reducer = (prevState, action) => {
    console.log('reducer', prevState, action)

    let state = {...prevState}

    switch(action.type) {
        case 'eth-':
            state.count--;
            return state
        case 'eth+':
            state.count++;
            return state
        default:
            return prevState
    }
}

const initialState = {
    count: 0,
}


export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)

    // console.log(useReducer(reducer, initialState))

    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "eth-"
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: "eth+"
                })
            }}>+</button>
        </div>
    )
}
