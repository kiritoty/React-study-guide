import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                nav bar
            </div>
        )
    }
}

class Swiper extends Component {
    render() {
        return(
            <div>
                Swiper
            </div>
        )
    }
}

const Tabbar = () => {
    return (
        <div>
            tabbar
        </div>
    )
}

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Swiper/>
                <Tabbar/>
            </div>
        )
    }
}

export default App;