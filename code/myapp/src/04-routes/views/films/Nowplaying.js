import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import FilmItems from './FilmItems'

export default function Nowplaying() {
  const [ hotlist, setHotlist ] = useState([])


  const getHotList = () => {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640",
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then((res) => {
        setHotlist(res.data.data.films);
      })
  }

  useEffect(() => {
    getHotList()
  }, [])

  // getComingList() {
  //   axios({
  //     url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=68496",
  //     method: 'get',
  //     headers: {
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
  //       'X-Host': 'mall.film-ticket.film.list'
  //     }
  //   })
  //     .then((res) => {
  //       this.setState({list: res.data.data.films});
  //     })
  // }
  const navigate = useNavigate()
  const handleChange = (id) => {
    navigate(`/detail/${id}`)
    
    // navigate(`/detail?id=${id}`)
    // query (URLSearch) 传参 /detail?id=1000
    // 路由传参 /detail/1000
  }
  
  return (
    <div>
      <ul>
      {hotlist && hotlist.map((item) => {
        return <FilmItems key={item.filmId} {...item}/>
      })}
      </ul>
    </div>
  )
}
