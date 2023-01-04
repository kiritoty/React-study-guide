import React from 'react'
import { HashRouter } from 'react-router-dom'
import Tabbar from './component/Tabbar'
import MRouter from './router'

export default function App() {
  return (
    <HashRouter>
        <MRouter></MRouter>
        <Tabbar/>
    </HashRouter>
  )
}
