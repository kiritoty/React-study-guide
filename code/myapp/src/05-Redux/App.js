import React from 'react'
import store from './redux/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <Provider store={store}>
        <div>App</div>
    </Provider>
  )
}
