import React, { Component, useEffect, useState } from 'react'
import axios from 'axios';
import BetterScroll from 'better-scroll'

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
                return <Film/>
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

const Film = () => {
    const[fileList, setFileList] = useState([])
    const[listCopy, setListCopy] = useState([])

    useEffect(() => {
        axios({url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=7422640", 
        method: 'get',
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16722550651316227087597569"}',
            'X-Host': 'mall.film-ticket.film.list'
        }})
        .then((res) => {
            setFileList(res.data.data.films)
            setListCopy(res.data.data.films)
        })
    }, [])

    useEffect(()=> {
        new BetterScroll(".wrapper")
    }, [fileList])

    const handleInput = (val) => {
        console.log(val.target.value)
        let arr = listCopy.filter(ele => ele.name.includes(val.target.value))

        setFileList(arr)
    }
    return (
        <div>
            <input onInput={handleInput}></input>
            <div className='wrapper' style={{height: '500px', background: 'skyblue', overflow: 'hidden'}}>
                <ul className="content">
                {fileList.map((item) => {
                    return <li className='itemName' key={item.filmId}>
                        <div >{item.name}</div>
                        <img className="posterSize"src={item.poster} style={{height: '200px'}}></img>
                    </li>
                })}
                </ul>
            </div>
        </div>
    )
}
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
