import React, { Component } from 'react'
import DefaultLayout from './layout'

import SkillsList from './components/SkillsList'

export default class Me extends Component{
  render(){
    return(
      <DefaultLayout
        title={this.props.title}
        description={this.props.description}>

        <div className="row-fluid">

          <article id="web-bio">
            <p>
              My journey into the depths of web development began in October of 2015.
              Before that, music was my only focus... working part time as an audio engineer
              with a local producer, freelance producing/recording/mixing with friends, and
              producing instrumentals for a group in Salt Lake City. I quickly discovered that
              the 'starving artist' way of life was not for me.
            </p>
            <p>
              I remembered a great friend who
              dropped out of college and taught himself web and IOS development. He worked his ass off
              everyday for about a year and was able to build beautiful applications. This reminded me of
              my own self taught skills with the music and related technologies. I also realized that
              my passion for music was more about the process, the puzzles, the tinkering. Most of all, I
              thrive on creation. Something about building and working on stuff just makes me happy.
            </p>
            <p>
              Sooooo that's why I decided to learn about web development. Starting out, I learned the basics
              of Html and Css. Once Javascript became relevant I learned as much as I could understand
              while using jQuery to actually do stuff. I got a job building a larger website for my uncle's business
              and found template engines to make it easier. I then starting using simple Nodejs-Express servers
              and found AWS EC2 to be the cheapest, most stable way of host his website. I used Ejs template engine
              for a while, then heard about React and discovered Express-React-Views
              ( at the time I had no idea how powerful it was ). Around that time I was considering the
              'code bootcamp' route and had the opportunity. Galvanize seemed to be the best bang per buck,
              and it happened to be down the street.
            </p>
            <p>
              Long story short, I was accepted, I went through the course, and it was a whirlwind of learning!
              With a bit of a head start, I was able to pick up some basics that I missed on my own and
              climb up the next hill to learn more about Node, Angular, and React. This cycle repeated throughout most of the course.
              I focused mainly on React outside of class, learning why and when to use Angular or React, or even both symbiotically.
              In the name of components, I also focused heavily on Sass. I had used Gulp for compiling Sass, but didn't quite
              understand the power of task runners and build tools. Since the React community tends to favor Webpack, I learned that
              and started to bundle everything for a SPA project into a single file.
            </p>
          </article>

          <SkillsList />
        </div>


      </DefaultLayout>
    )
  }
}
