import React from 'react'

// 浅复制
let obj = {
  name: "ethan"
}

let obj2 = obj
obj2.name = "xiaoming"
console.log(obj2, obj)


// 比浅复制只多复制一层
let myobj = {
  name: 'ethan',
  arr: [1,2,3]
}

let myobj2 = {
  ...myobj
}

myobj2.name = "xiaoming"
myobj2.arr.splice(0, 1)
console.log(myobj2, myobj)


// json-parse json-stringity

let jsonObj = {
  name:'test',
  arr: [1,2,3]
}

let jsonObj2 = JSON.parse(JSON.stringify(jsonObj))
jsonObj2.arr.splice(1,1)
console.log(jsonObj, jsonObj2)


//  递归深复制

// const deepCopy = (obj) => {
//   let newobj = null

//   if(typeof(obj) == 'object' && obj != null) {
//     newobj = obj instanceof Array ? [] : {}
//     for(let i in obj){
//       newobj[i] = deepCopy(obj[i])
//     }
//   } else {
//     newobj = obj
//   }

//   return newobj
// }

const deepCopy = (obj) => {
  let newObj = obj instanceof Array? [] : {}

  if(obj != null && typeof(obj) == 'object') {
      for(let i in obj) {
          newObj[i] = deepCopy(obj[i])
      }
  } else {
      newObj = obj
  }
  return newObj
}

let dobj = {
  name: 'eth',
  arr: [1,2,3],
  test: null
}

let dobj2 = deepCopy(dobj)
dobj2.arr.splice(1,1)
console.log(dobj, dobj2)





export default function App() {
  return (
    <div>App</div>
  )
}
