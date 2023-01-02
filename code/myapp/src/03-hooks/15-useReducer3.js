import React, { Component, useContext, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import '../02-advanced/css/03-comm.css'

const GlobalContext = React.createContext()

const reducer = (prevState, action) => {

    let state = {...prevState}

    switch(action.type) {
        case 'initList':
            state.filmList = action.value
            return state
        case 'setFilm':
            state.info = action.value
            return state
        default:
            return prevState
    }
}

const initState = {
    filmList: [],
    info: "",
}

const App = () => {
    const [ state, dispatch ] = useReducer(reducer, initState)

    const getMovieList = () => {
        return axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640",
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
            .then((res) => {
                // setFilmList(res.data.data.films);
                dispatch({
                    type: "initList",
                    value: res.data.data.films
                })
            })
    }

    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {state.filmList.map((item) => {
                    return <FilmItem key={item.filmId} {...item} />
                })}

                <FilmDetail />
            </div>
        </GlobalContext.Provider>
    )

}

const FilmItem = (props) => {
    const { name, poster, grade, synopsis } = props

    const {dispatch} = useContext(GlobalContext);

    return (
        <div className='filmitem' onClick={() => {
            dispatch({
                type: "setFilm",
                value: synopsis
            })
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>观众评分 {grade}</div>
        </div>
    )
}

const FilmDetail = () => {

    const { state } = useContext(GlobalContext);
    return (
        <div className='filmdetail'>
            {state.info}
        </div>

    )
}

export default App;