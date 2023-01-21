import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, decreaseByAmount, increase, increaseByAmount } from './redux/Feature/countSlice'
import { countThunk } from './redux/Thunk/countThunk'

export default function Count() {
    const [ selectNum, setSelectNum ] = useState(1)
    const { countNum } = useSelector(state => state.testRed)
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(increase())
    }

    const handleAddAsync = () => {
        dispatch(countThunk(selectNum))
    }

    const handleDec = () => {
        dispatch(decrease())
    }

    const handleDecAsync = () => {
        setTimeout(() => {
            dispatch(decreaseByAmount(selectNum))
        }, 0);
    }

    return (
        <div>
            {countNum}<br/>
            <select onChange={(val) => setSelectNum(val.target.value)}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select><br/>
            <button onClick={handleAdd}>+</button><br/>
            <button onClick={handleAddAsync}>+ async</button><br/>
            <button onClick={handleDec}>-</button><br/>
            <button onClick={handleDecAsync}>- async</button>
        </div>
    )
}
