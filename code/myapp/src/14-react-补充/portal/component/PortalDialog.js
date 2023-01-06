import React from 'react'
import { createPortal } from 'react-dom'

export default function PortalDialog() {
  return (
    createPortal(<div style={{width: '100%', height: '100%', position: 'fixed', left: 0, top: 0, background: 'rgba(0,0,0,0.7)', zIndex: '99999', color: 'white'}}>
    Dialog
</div>, document.body)
  )
}
