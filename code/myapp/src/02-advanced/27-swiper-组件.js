import React, { Component } from 'react'
import Swiper from '../components/swiper'
import SwiperItem from '../components/SwiperItem'

export default class App extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                list: ["aaa", 'bbb',"ccc"]
            })
        }, 0);
    }


    render() {
        return (
        <div>
            <Swiper>
                {/* <SwiperItem>1111</SwiperItem>
                <SwiperItem>222</SwiperItem>
                <SwiperItem>333</SwiperItem> */}
                {
                    this.state.list.map(item => {
                        return <SwiperItem key={item}>{item}</SwiperItem>
                    })
                }
            </Swiper>
        </div>
        )
    }
}
