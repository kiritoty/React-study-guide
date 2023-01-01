import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function App() {

    const [ list, setList ] = useState([])
    
    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640",
            method: 'get',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
            .then((res) => {
                console.log(res.data.data.films)
                setList(res.data.data.films);
            })
    }, [])

    return (
        <div>
            <ul>
                {
                    list && list.map((item) => {
                        return <li key={item.filmId}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
