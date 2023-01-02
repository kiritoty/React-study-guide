import React, { Component, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import '../02-advanced/css/03-comm.css'

const GlobalContext = React.createContext()

const App = () => {
    const [filmList, setFilmList] = useState([]);
    const [info, setInfo] = useState("")

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
                setFilmList(res.data.data.films);
            })
    }

    useEffect(() => {
        getMovieList()
    }, [])

    return (
        <GlobalContext.Provider value={{
            call: "打电话",
            sms: "短信",
            info: info,
            setInfo: (val) => setInfo(val)
        }}>
            <div>
                {filmList.map((item) => {
                    return <FilmItem key={item.filmId} {...item} />
                })}

                <FilmDetail />
            </div>
        </GlobalContext.Provider>
    )

}

const FilmItem = (props) => {
    const { name, poster, grade, synopsis } = props

    const context = useContext(GlobalContext);

    return (
        <div className='filmitem' onClick={() => {
            console.log(synopsis)
            context.setInfo(synopsis)
        }}>
            <img src={poster} alt={name}></img>
            <h4>{name}</h4>
            <div>观众评分 {grade}</div>
        </div>
    )
}

const FilmDetail = (props) => {

    const context = useContext(GlobalContext);
    return (
        <div className='filmdetail'>
            {context.info}
        </div>

    )
}

export default App;