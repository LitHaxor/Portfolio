import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="https://www.linkedin.com/in/hasan-ahmed-909899157/?locale=en_US" className="image avatar"><img src={avatar} alt="hasan.png" /></a>
                    <h1><strong>I am Hasan</strong>, a super dumb<br />
                    Computer Science student trying to do something <strong>cool</strong>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
