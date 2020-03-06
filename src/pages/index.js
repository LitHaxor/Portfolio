import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/mgbhs.jpg'
import thumb02 from '../assets/images/thumbs/dmrc.jpg'
import thumb03 from '../assets/images/thumbs/aiub.jpg'

import full01 from '../assets/images/fulls/mgbhs.png'
import full02 from '../assets/images/fulls/dmrc.jpg'
import full03 from '../assets/images/fulls/aiub.png'


const DEFAULT_IMAGES = [
    { id: '1', source: full03, thumbnail: thumb03, caption: 'Started Undergraduate 2020', description: 'Studying CS in American International University- Bangladesh', link:"http://aiub.edu"},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'HSC Graduation 2019', description: 'Completed HSC from Dr. Mahbubur Rahman Mollah College', link:"http://dmrc.info"},
    { id: '3', source: full01, thumbnail: thumb01, caption: 'SSC Graduation 2017', description: 'Completed SSC from Motijheel Govt Boys High school.',link: 'http://mgbhs.com' },
    
    
];

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "Hasan Ahamed"
        const siteDescription = "Site description"

        return (
            <Layout>
                <Helmet>
                        <title>LitHaxor!</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Hi, It's Hasan </h2>
                        </header>
                        <p>I mess with Web interface. I know HTML, JS, NODE.js and Basic C/C++ and Python, I want to know more. <br/>
                        Intrested in learning Data Science and app devolopment. <br/>
                        Willing to perticipate ICPC and coding competiton.</p>
                        <ul className="actions">
                            <li><a href="\knowmore.js" className="button">Know more</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Timeline</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                            source,
                            thumbnail,
                            caption,
                            description
                        }))} /> 

                        <ul className="actions">
                            <li><a href="#" className="button">Full Portfolio</a></li>
                        </ul>
                    </section>
                        
                    <section id="three">
                        <h2>About me</h2>
                        <p>Currently studying <b>UG Bsc CS </b> in <a href= "http://aiub.edu/">AIUB</a>.<br/> connect me via sending message</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" action="#">
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                    </div>
                                </form>
                                <ul className="actions">
                                    <li><input type="submit" value="Send Message" /></li>
                                </ul>
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        North Jatrabari,<br />
                                        Dhaka, DK 1204
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        +880-1623-785124 
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="http://gmail.com">officials.hasan@gmail.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex