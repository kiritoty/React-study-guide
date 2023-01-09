import React from 'react'
import store from './redux/store'
import {Provider} from 'react-redux'
import SubComp from './SubComp'

export default function App() {
  return (
    <Provider store={store}>
        <div>
            <SubComp/>
        </div>
    </Provider>
  )
}
