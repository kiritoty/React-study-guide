import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Center from '../views/Center'
import Cinema from '../views/Cinema'
import Film from '../views/Film'
import NotFound from '../views/NotFound'
import Redirect from '../component/Redirect'
import Nowplaying from '../views/films/Nowplaying'
import Comingsoon from '../views/films/Comingsoon'
import Detail from '../views/Detail'
import DetailSearch from '../views/Detail-search'

export default function MRouter() {
  return (
    <Routes>
        {/* <Route index  element={<Film/>}/> */}
        <Route path="/film" element={<Film/>}>
            <Route index element={<Redirect to="nowplaying"/>}></Route>
            <Route path="nowplaying" element={<Nowplaying/>}></Route>
            <Route path="comingsoon" element={<Comingsoon/>}></Route>
        </Route>
        <Route path="/cinema"  element={<Cinema/>}/>
        <Route path="/center"  element={<Center/>}/>
        <Route path="/detail" element={<Detail/>}></Route>
        <Route path="/detail/:id" element={<DetailSearch/>}></Route>

        {/* <Route path="*" element={<Navigate to="/film"/>}/> */}
        <Route path="/" element={<Redirect to="/film"/>}/>
        <Route path="*" element={<NotFound/>}/>

    </Routes>
  )
}
