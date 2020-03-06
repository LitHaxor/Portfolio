import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>I am Hasan</strong>, a super dumb<br />
                    Computer Science student trying to do something <strong>cool</strong>.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
