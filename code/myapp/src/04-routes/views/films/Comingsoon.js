import React, { useEffect } from 'react'
import axios from 'axios'

export default function Comingsoon() {

  useEffect(()=> {
    axios.get("/test/ajax/comingList?ci=1&limit=10&movieIds=&token=&optimus_uuid=4A3A4F608C6E11ED95EB0927A431DE9840FC216D1A6D4E63B75A32A9F038E3F8&optimus_risk_level=71&optimus_code=10")
    .then(res => {
      console.log(res.data.coming)
    })
  })
  return (
    <div>coming</div>
  )
}
