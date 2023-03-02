import Announcements from './Articles';
import React from 'react'
import './Dashboard.scss'

const Dashboard = () => {

  return <React.Fragment>
    <section id="dashboard-container">
      <div id="dashboard">
        <svg className="logo" height={"10vh"} viewBox="0 0 434 601">
          <polygon points="228.5,0.6 227.9,136.5 314.1,222.5 229,388 230.6,593.8 434,202.8 "/>
          <polygon points="205.5,0.7 206.1,136.6 119.9,222.6 205,388.1 203.4,593.9 0,202.9 "/>
        </svg>
        <h3>CRACKCHESTER</h3>
        <p><span>Based In Manchester</span><br/>Cyber Security Solutions</p>
      </div>
    </section>
    <section id="about-us">
      <div className="container"> 
        <h1>Company Policies</h1>
        <p>
        Insert Here
        </p>
      </div>
    </section>
    <section id="events">
      <div className="container">
        <h1>Events</h1>
        <p>Find out what we're arranging soon!</p>
        <Announcements/>
      </div>
    </section>
    <section id="podcast">
      <div className="container">
        <h1>Our Podcast</h1>
        <p>
        A new podcast discussing the latest trends, topic and controversies in the cybersecurity scene.
        </p>
        <a href="https://podcast.crackchester.cc/">
          <button className="btn">
            Click Here
          </button>
        </a>
      </div>
    </section>
  </React.Fragment>
}

export default Dashboard;