import React, { forwardRef } from 'react'

export default function App() {
   const mytext = React.createRef()
  return (
    <div>
        <button onClick={() => {
            mytext.current.value = ""
            mytext.current.focus()
        }}>获取焦点</button>
        <Child ref={mytext}/>
    </div>
  )
}

const Child = forwardRef((props, ref) => {
    return (
        <div style={{background: 'yellow'}}>
            <input ref={ref} defaultValue="1111"/>
        </div>
    )
})
