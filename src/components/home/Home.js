import Announcements from '../announcements/Announcements';
import React from 'react'
import './Home.scss'

const Home = () => (
  <React.Fragment>
    <header id="header">
      <svg className="logo" height={"40vh"} viewBox="0 0 434 601">
        <polygon points="228.5,0.6 227.9,136.5 314.1,222.5 229,388 230.6,593.8 434,202.8 "/>
        <polygon points="205.5,0.7 206.1,136.6 119.9,222.6 205,388.1 203.4,593.9 0,202.9 "/>
      </svg>
      <h1>CRACKCHESTER</h1>
      <p>The University of Manchester <br/> Cyber Security Society</p>
      <span>Partnered With</span>
    </header>
    <div id="aboutUs">
      <h1>About Us</h1>
      <p>
      Here at Crackchester, we aim to provide students with the best possible start to their career in cybersecurity.
Employer talks, CTF challenges, workshops and hacking leaderboards allow members to grow in both skill and knowledge.
      </p>
    </div>
    <div id="events">
      <h1>Events</h1>
      <p>Find out what we're arranging soon!</p>
      <Announcements/>
    </div>
    <div id="podcast">
      <h1>Check Out Our Podcast</h1>
      <p>
      A new podcast discussing the latest trends, topic and controversies in the cybersecurity scene.
      </p>
      <a href="https://podcast.crackchester.cc/">Link</a>
    </div>
  </React.Fragment>
)

export default Home;