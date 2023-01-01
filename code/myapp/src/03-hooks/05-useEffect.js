import React, { Component, useEffect, useState } from 'react'
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

const FilmList = (props) => {
    const [ list, setList ] = useState([]);

    useEffect(() => {
        if(props.type == 1) {
            getHotList() 
          } else {
            getComingList()
          }
    }, [props.type])

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
            setList(res.data.data.films);
          })
      }
    
      const getComingList = () => {
        axios({
          url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=68496",
          method: 'get',
          headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
            'X-Host': 'mall.film-ticket.film.list'
          }
        })
          .then((res) => {
            setList(res.data.data.films);
          })
      }

      return (
        <div>
          <ul>
          {
            list.map((item) => {
              return <li key={item.filmId}>{item.name}</li>
            })
          }
          </ul>
        </div>
      )
}


// class FilmList extends Component {
//   state = {
//     list: []
//   }

//   componentDidMount() {
//     if(this.props.type == 1) {
//       this.getHotList() 
//     } else {
//       this.getComingList()
//     }
//   }

//   getHotList() {
//     axios({
//       url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640",
//       method: 'get',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     })
//       .then((res) => {
//         this.setState({list: res.data.data.films});
//       })
//   }

//   getComingList() {
//     axios({
//       url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=68496",
//       method: 'get',
//       headers: {
//         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
//         'X-Host': 'mall.film-ticket.film.list'
//       }
//     })
//       .then((res) => {
//         this.setState({list: res.data.data.films});
//       })
//   }

//   componentWillReceiveProps(nextProps) {
//     if(nextProps.type == 1) {
//       this.getHotList()

//     } else {
//       this.getComingList()
//     }
//   }

//   render() {
//     return (
//       <div>
//         <ul>
//         {
//           this.state.list.map((item) => {
//             return <li key={item.filmId}>{item.name}</li>
//           })
//         }
//         </ul>
//       </div>
//     )
//   }
// }
