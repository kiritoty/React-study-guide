import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate()

  return (
    <div>
        <input type="text"></input>
        <button onClick={()=>{
            localStorage.setItem("token", "1111")
            navigate("/center")
        }}>登录</button>
    </div>
  )
}
