import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmItems(item) {
    const navigate = useNavigate()
    const handleChange = (id) => {
        navigate(`/detail/${id}`)
        
        // navigate(`/detail?id=${id}`)
        // query (URLSearch) 传参 /detail?id=1000
        // 路由传参 /detail/1000
      }
  return (
    <li onClick={()=>handleChange(item.filmId)}>{item.name}</li>
  )
}
