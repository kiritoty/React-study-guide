import React from 'react'
import { Map } from 'immutable'

let obj = {
    name: 'eth',
    age: 100
}

let oldImmuObj = Map(obj)
let newImmuObj = oldImmuObj.set("name", "xiaoming")
// console.log(oldImmuObj, newImmuObj)

console.log(newImmuObj.get("name"))

console.log(newImmuObj.toJS())

export default function App() {

    

  return (
    <div>App</div>
  )
}
