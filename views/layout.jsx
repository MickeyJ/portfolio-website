import React, { Component } from 'react'

import Head from './common/Head'
import NavHeader from './common/NavHeader'
import Footer from './common/Footer'

const siteName = "Mickey's Portfolio";

export default class Layout extends Component{
  render(){
    return(
      <html lang="en">
        <Head
          siteName={siteName}
          title={this.props.title}
          description={this.props.description}
        />
        <body>
          <div id="all-wrap">

            <NavHeader siteName={siteName}/>
            
            <main id="main-content" >
              {this.props.children}
            </main>

            <Footer siteName={siteName}/>

          </div>
        </body>
      </html>
    )
  }
}

