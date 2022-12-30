import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import './css/03-comm.css'

const App = () => {
    const [ filmList, setFilmList ] = useState([]);
    const [ detail, setDetail ] = useState("");

    const getMovieList = () => {
        return axios({url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640", 
        method: 'get',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
            'X-Host': 'mall.film-ticket.film.list'
        }})
        .then((res) => {
            setFilmList(res.data.data.films);
        })
    }

    useEffect(() => {
        getMovieList()
    }, [])

    return (
      <div>
        {filmList.map((item) => {
            return <FilmItem key={item.filmId} setDetail={(val) => setDetail(val)} {...item}/>
        })}

        <FilmDetail clickDetail={detail}/>
      </div>
    )
  
}

const FilmItem = (props) => {
    const { name, poster, grade, synopsis, setDetail } = props
    return(
        <div className='filmitem' onClick={() => {
            setDetail(synopsis)
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>观众评分 {grade}</div>
        </div>
    )
}

const FilmDetail = (props) => {
    return(
        <div className='filmdetail'>
            {props.clickDetail}
        </div>
    )
}

export default App;