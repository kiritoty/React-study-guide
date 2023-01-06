import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function withRouter(Component) {
  return () => {
    const push = useNavigate()
    return <Component  {...props} history={{push}}/>
  }
}
