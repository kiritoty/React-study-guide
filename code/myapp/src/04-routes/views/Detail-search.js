import React from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom'

export default function Detail() {
   
    const params = useParams()
    const navigate = useNavigate()

    console.log(params['id'])
  return (
    <div>Detail
        <button onClick={() => {
            navigate("/detail/1000")
        }}>跳转</button>
    </div>
  )
}
