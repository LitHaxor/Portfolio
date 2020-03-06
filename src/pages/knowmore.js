import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

class HomeIndex extends React.Component {
    render()
{
        const siteTitle = "title"
        const siteDescription = "know more"
    return (
            <Layout>
                <Helmet>
                        <title>About Me</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

            <div id="main">

                <section id="one">
                    <header className="major">
                    <h2>Hi, It's  Hasan </h2>
                    </header>
                    <p>Like to mess with Website interface. I know HTML, JS, NODE.js and Basic C/C++ and Python, I want to know more. <br/>
                    Intrested in learning Data Science and app devolopment. <br/>
                    Willing to perticipate ICPC and coding competiton.</p>
                    </section></div>
            </Layout>
        )
    }
}