import Articles from './Articles';
import React from 'react'
import './Dashboard.scss'

const Dashboard = () => {

  return <React.Fragment>
    <section id="dashboard-container">
      <div id="dashboard">
        <h3>HACKCHESTER</h3>
        <p>Cyber Security Solutions</p><br/>
        <svg className="logo" height={"10vh"} viewBox="0 0 434 601">
          <polygon points="228.5,0.6 227.9,136.5 314.1,222.5 229,388 230.6,593.8 434,202.8 "/>
          <polygon points="205.5,0.7 206.1,136.6 119.9,222.6 205,388.1 203.4,593.9 0,202.9 "/>
        </svg>
      </div>
    </section>
    <section id="about-us">
      <div className="container">
        <h2>Company Policies</h2>
        <p>Policies Have Been Moved To hackchester.org/policies</p>
      </div>
    </section>
    <section id="events">
      <div className="container">
        <h1>Events</h1>
        <p>Find out what we're arranging soon!</p>
        <Articles/>
      </div>
    </section>
  </React.Fragment>
}

export default Dashboard;