import React, { Component } from 'react'
import Swiper, { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default class App extends Component {

  state = {
    list: ["111","222","333"]
  }

  componentDidMount() {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }

  render() {
    return (
      <div>
        <div className="swiper" style={{height: '200px', background: 'yellow'}}>
          <div className="swiper-wrapper">
            {this.state.list.map((item) => {
              return <div key={item} className="swiper-slide">{item}</div>
            })}
          </div>
          <div className="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-scrollbar"></div>
        </div>
      </div>
    )
  }
}
