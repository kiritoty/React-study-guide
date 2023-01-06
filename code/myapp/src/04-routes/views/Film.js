import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Film() {
  return (
    <div>
        <div style={{height: '200px', background: 'yellow'}}>大轮播</div>

        <div>
          <ul>
            <li>
              <NavLink to="/film/nowplaying">正在热映</NavLink>
            </li>
            <li>
              <NavLink to="/film/comingsoon">即将上映</NavLink>
            </li>
          </ul>
        </div>

        {/* 路由容器 */}
        <Outlet></Outlet>
    </div>
  )
}
