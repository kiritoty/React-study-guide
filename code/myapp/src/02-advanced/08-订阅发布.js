import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import './css/03-comm.css'

var bus = {

    list: [],

    subscribe(callback) {
        // console.log(callback)
        this.list.push(callback)    
    },

    publish(val) {
        //遍历列表，调用回调函数
        // console.log(this.list)
        console.log(this.list)
        this.list.map((func) => {
            func && func(val)
        })
    }
}

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
            return <FilmItem key={item.filmId} {...item}/>
        })}

        <FilmDetail clickDetail={detail}/>
      </div>
    )
  
}

const FilmItem = (props) => {
    const { name, poster, grade, synopsis } = props

    return(
        <div className='filmitem' onClick={() => {
            // console.log(synopsis)
            bus.publish(synopsis)
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>观众评分 {grade}</div>
        </div>
    )
}

const FilmDetail = (props) => {
    const[ detail, setDetail ] = useState("");
    useEffect(() => {
        bus.subscribe((info) => {
            // console.log("subscribe, filmdetail", info)
            setDetail(info)
        })
    }, [])
    return(
        <div className='filmdetail'>
            {detail}
        </div>
    )
}

export default App;