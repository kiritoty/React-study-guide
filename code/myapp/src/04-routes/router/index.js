import React from 'react'
import { Route, Routes, useRoutes } from 'react-router-dom'
import Film from '../views/Film'
import Redirect from '../component/Redirect'

export default function MRouter() {
    const element = useRoutes([
        {
            path: "/film",
            element: LazyLoad("Film"),
            children: [
                {
                    path: "",
                    element: <Redirect to="/film/nowplaying"/>
                },
                {
                    path: "nowplaying",
                    element: LazyLoad("films/Nowplaying")
                },
                {
                    path: "comingsoon",
                    element: LazyLoad("films/Comingsoon")
                },
            ]
        },
        {
            path: "/login",
            element: LazyLoad("Login")
        },
        {
            path: "/cinema",
            element: LazyLoad("Cinema")
        },
        {
            path: "/center",
            element: <AuthComponent>{LazyLoad("Center")}</AuthComponent>
        },
    ])
  return (
    element
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