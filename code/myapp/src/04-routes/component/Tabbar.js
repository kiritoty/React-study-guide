import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Tabbar.css'

export default function Tabbar() {
  return (
    <footer>
        <ul>
            <li>
                <NavLink to="/film" className={({isActive}) => {return isActive ? "eth-active":''}}>电影</NavLink>
            </li>
            <li>
                <NavLink to="/cinema" className={({isActive}) => {return isActive ? "eth-active":''}}>影院</NavLink>
            </li>
            <li>
                <NavLink to="/center" className={({isActive}) => {return isActive ? "eth-active":''}}>我的</NavLink>
            </li>
        </ul>
    </footer>
  )
}
