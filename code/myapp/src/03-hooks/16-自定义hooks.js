import React, { Component, useEffect, useMemo, useState } from 'react'
import '../01-base/css/css12.css'
import axios from 'axios';

export default class App extends Component {
    state = {
        list: [{
            id:1,
            text: '电影'
        },{
            id:2,
            text: '影院'
        },{
            id:3,
            text: '我的'
        }],
        curr: 0
    }

    handleClick(index) {
        this.setState({curr: index})
    }
    switchContent() {
        switch(this.state.curr) {
            case 0:
                return <Cinema/>
            case 1:
                return <Movie/>
            case 2:
                return <My/>
        }
    }
    render() {
        return (
        <div>
            <ul>
                {this.state.list.map((item, index) => {
                    return  <li key={item.id} 
                                className={this.state.curr == index ? "active" : ""} 
                                onClick={()=>this.handleClick(index)}>
                            {item.text}</li>
                })}
            </ul>
            {/* {this.state.curr == 0 && <Film/>}
            {this.state.curr == 1 && <Movie/>}
            {this.state.curr == 2 && <My/>} */}
            {this.switchContent()}
        </div>
        )
    }
}

// const Film = () => {
//     const[fileList, setFileList] = useState([])
//     const[myText, setMyText] = useState("")

//     useEffect(() => {
//         axios({url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640", 
//         method: 'get',
//         headers:{
//             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
//             'X-Host': 'mall.film-ticket.film.list'
//         }})
//         .then((res) => {
//             setFileList(res.data.data.films)
//         })
//     }, [])

//     // const handleInput = (val) => {
//     //     console.log(val.target.value)
//     //     // let arr = listCopy.filter(ele => ele.name.includes(val.target.value))

//     //     // setFileList(arr)
//     // }

//     const getList = () => {
//         return fileList.filter(item => item.name.includes(myText))
//     }

//     return (
//         <div>
//             {console.log("render")}
//             <input value={myText} onChange={(value) => {
//                 setMyText(value.target.value)
                
//             }}></input>
//                 {getList().map((item) => {
//                     return <div className='itemName' key={item.filmId}>
//                         <div >{item.name}</div>
//                         <img className="posterSize"src={item.poster}></img>
//                     </div>
//                 })}
//         </div>
//     )
// }

const Movie = () => {
    return (
        <div>moive</div>
    )
}
const My = () => {
    return (
        <div>my</div>
    )
}

const useCinemaList = () => {
    const [cinemaList, setCinemaList] = useState([])

    useEffect(() => {
        axios({url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640", 
        method: 'get',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
            'X-Host': 'mall.film-ticket.film.list'
        }})
        .then((res) => {
            setCinemaList(res.data.data.films)
        })
    }, [])

    return {
        cinemaList
    }
}

const useFilter = (cinemaList, mytext) => {
    const getList = useMemo(() => cinemaList.filter(item => item.name.includes(mytext)), [cinemaList, mytext])

    return getList
}


const Cinema = () => {
    const[ mytext, setMytest ] = useState("")
    const { cinemaList } = useCinemaList()
    const getList = useFilter(cinemaList, mytext)

    return (
        <div>
            {console.log("render")}
            <input value={mytext} onChange={(value) => {
                setMytest(value.target.value)
                
            }}></input>
                {getList.map((item) => {
                    return <div className='itemName' key={item.filmId}>
                        <div >{item.name}</div>
                        <img className="posterSize"src={item.poster}></img>
                    </div>
                })}
        </div>
    )
}