import React, { createContext, useContext, useReducer } from 'react'

const reducer = (prevState, action) => {

    let state = {...prevState}
    switch(action.type) {
        case "change-a":
            state.a = action.value
            return state
        case "change-b":
            state.b = action.value
            return state
        default:
            return prevState
    }

    return prevState
}

const initialState = {
    a:"111",
    b:"111"
}

const GlobalContext = createContext();

export default function App() {
    const [ state, dispatch ] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{
            dispatch: dispatch,
            state: state
        }}>    
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

const Child1 = () => {
    const {state, dispatch} = useContext(GlobalContext);

    return (
        <div style={{background: 'red'}}>
            <button onClick={() => {
                dispatch({
                    type: "change-a",
                    value: "a-2222"
                })
            }}>改变a</button>
            <button onClick={() => {
                dispatch({
                    type: "change-b",
                    value: "b-2222"
                })
            }}>改变b</button>
        </div>
    )
}
const Child2 = () => {
    const  {state, dispatch} = useContext(GlobalContext);
    return (
        <div style={{background: 'yellow'}}>
            child2 - {state.a}
        </div>
    )
}
const Child3 = () => {
    const  {state, dispatch} = useContext(GlobalContext);
    return (
        <div style={{background: 'gray'}}>
            child3 - {state.b}
        </div>
    )
}