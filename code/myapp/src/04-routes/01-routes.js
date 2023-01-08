import React from 'react'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import Tabbar from './component/Tabbar'
import MRouter from './router/index-bak'

export default function App() {
  
  return (
    <BrowserRouter>
        <MRouter></MRouter>
        <Tabbar/>
    </BrowserRouter>
  )
}
