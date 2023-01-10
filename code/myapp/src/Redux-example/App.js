import React from 'react'
import Count from './Count'
import { store } from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store = {store}>
        <div>
            <Count/>
        </div>
    </Provider>
  )
}
