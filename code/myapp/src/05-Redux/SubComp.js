import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export default function SubComp() {

    const dispatch = useDispatch()
    const { count }  = useSelector(state => state.counterReducer)
    console.log("counter", count)
    return (
        <div>SubComp</div>
    )
}
