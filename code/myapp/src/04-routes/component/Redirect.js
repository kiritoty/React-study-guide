import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Redirect(props) {
    const naviage = useNavigate()

    useEffect(() => {
        naviage(props.to, {replace: true})
    })

  return null
}
