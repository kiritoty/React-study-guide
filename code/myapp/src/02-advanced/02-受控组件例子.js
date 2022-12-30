import React, { Component, useEffect, useState } from 'react'
import './css/css12.css'
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
                {/* {this.state.list.map((item, index) => {
                    return  <li key={item.id} 
                                className={this.state.curr == index ? "active" : ""} 
                                onClick={()=>this.handleClick(index)}>
                            {item.text}</li>
                })} */}
                <Navbar handleClickCenter={(val) => this.handleClick(val)}/>
                <Tab list={this.state} handleClick={(index) => this.handleClick(index)}/>
                <button onClick={()=>console.log(this.state.curr)}>aaa</button>
            
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
            console.log(res.data.data.films)
            setFileList(res.data.data.films)
            setListCopy(res.data.data.films)
        })
    }, [])

    const handleInput = (val) => {
        console.log(val.target.value)
        let arr = listCopy.filter(ele => ele.name.includes(val.target.value))

        setFileList(arr)
    }
    return (
        <div>
            <input onInput={handleInput}></input>
                {fileList.map((item) => {
                    return <div className='itemName' key={item.filmId}>
                        <div >{item.name}</div>
                        <img className="posterSize"src={item.poster}></img>
                    </div>
                })}
        </div>
    )
}

const Tab = (props) => {
    const { list, handleClick } = props
    return(
        <div>
            <ul>
                {list.list.map((item, index) => {
                    return <li key={item.id}
                        className={list.curr == index ? "active" : ""}
                        onClick={() =>handleClick(index)}>
                        {item.text}</li>
                })}
            </ul>
        </div>
    );
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


const Navbar = (props) => {
    const { handleClickCenter } = props
    return (
        <div style={{background: 'yellow', textAlign: 'center'}}>
            <button style={{float: 'left'}}>返回</button>
            <span>卖座电影</span>
            <button style={{float: 'right'}} onClick={() => handleClickCenter(2)}>center</button>
        </div>
    )
}