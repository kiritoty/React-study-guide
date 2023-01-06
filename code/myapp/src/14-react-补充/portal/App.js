import React, { useState } from 'react'
import './App.css'
// import Dialog from './component/Dialog'
import Dialog from './component/PortalDialog'

export default function App() {
    const [isShow, setIsShow] = useState(false)
  return (
    <div className="box">
        <div className='left'></div>
        <div className='right'>
            <button onClick={() => {setIsShow(true)}}>ajax</button>
            {
                isShow && <Dialog/>
            }
        </div>
    </div>
  )
}
