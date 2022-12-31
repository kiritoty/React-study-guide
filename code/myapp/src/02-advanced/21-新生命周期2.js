import React, { Component, useEffect } from 'react'
import axios from 'axios'

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={()=>{this.setState({type: 1})}}>正在热映</li>
          <li onClick={()=>{this.setState({type: 2})}}>正在上映</li>
        </ul>


        <FilmList type={this.state.type}></FilmList>
      </div>
    )
  }
}

class FilmList extends Component {
  state = {
    list: [],
    type: 1
  }

  componentDidMount() {
    if(this.props.type == 1) {
      this.getHotList() 
    } else {
      this.getComingList()
    }
  }

  getHotList() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640",
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then((res) => {
        this.setState({list: res.data.data.films});
      })
  }

  getComingList() {
    axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=68496",
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
      .then((res) => {
        this.setState({list: res.data.data.films});
      })
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log(nextProps)

    return {
        type: nextProps.type
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("cdu", this.state.type)
    if(this.state.type === prevState.type) return

    if(this.state.type == 1) {
      this.getHotList()

    } else {
      this.getComingList()
    }
  }

//   componentWillReceiveProps(nextProps) {
//     if(nextProps.type == 1) {
//       this.getHotList()

//     } else {
//       this.getComingList()
//     }
//   }

  render() {
    return (
      <div>
        <ul>
        {
          this.state.list.map((item) => {
            return <li key={item.filmId}>{item.name}</li>
          })
        }
        </ul>
      </div>
    )
  }
}
