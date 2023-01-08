import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Center from '../views/Center'
// import Cinema from '../views/Cinema'
import Film from '../views/Film'
// import NotFound from '../views/NotFound'
import Redirect from '../component/Redirect'
// import Nowplaying from '../views/films/Nowplaying'
// import Comingsoon from '../views/films/Comingsoon'
// import Detail from '../views/Detail'
// import DetailSearch from '../views/Detail-search'
// import Login from '../views/Login'

export default function MRouter() {
  return (
    <Routes>
        {/* <Route index  element={<Film/>}/> */}
        <Route path="/film" element={<Film/>}>
            <Route index element={<Redirect to="nowplaying"/>}></Route>
            <Route path="nowplaying" element={LazyLoad("films/Nowplaying")}></Route>
            <Route path="comingsoon" element={LazyLoad("films/Comingsoon")}></Route>
        </Route>
        <Route path="/cinema"  element={LazyLoad("Cinema")}/>
        <Route path="/center"  element={<AuthComponent>
                                            {LazyLoad("Center")}
                                        </AuthComponent>}/>

        <Route path="/detail" element={LazyLoad("Detail")}></Route>
        <Route path="/detail/:id" element={LazyLoad("Detail")}></Route>
        <Route path="/login" element={LazyLoad("Login")}></Route>

        {/* <Route path="*" element={<Navigate to="/film"/>}/> */}
        <Route path="/" element={<Redirect to="/film"/>}/>
        <Route path="*" element={LazyLoad("NotFound")}/>

    </Routes>
  )
}

const AuthComponent = (props) => {
    const isLogin = localStorage.getItem('token')
    return(
        isLogin ? props.children : <Redirect to="/login"/>
    )
}

const LazyLoad = (path) => {
    const Comp = React.lazy(() => import(`../views/${path}`))
    return (
        <React.Suspense fallback={<div>加载中</div>}>
            <Comp/>
        </React.Suspense>
    )
}