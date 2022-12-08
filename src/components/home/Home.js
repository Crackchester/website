import Announcements from '../announcements/Announcements';
import React, { useCallback } from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import partners from '../partners/partners.json';
import particles from './particles.json';
import './Home.scss'

const Home = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return <React.Fragment>
    <section id="landing-container">
      <Particles
        options={particles}
        init={particlesInit} 
      />
      <div id="landing">
        <svg className="logo" height={"35vh"} viewBox="0 0 434 601">
          <polygon points="228.5,0.6 227.9,136.5 314.1,222.5 229,388 230.6,593.8 434,202.8 "/>
          <polygon points="205.5,0.7 206.1,136.6 119.9,222.6 205,388.1 203.4,593.9 0,202.9 "/>
        </svg>
        <h1>CRACKCHESTER</h1>
        <p><span>The University of Manchester</span><br/>Cyber Security Society</p>
        <p><span>Partnered With</span></p>
        <div id="landing-partners">
        {
          Object.keys(partners).map((category) => 
            partners[category].map((partner, index) => 
              <div key={index}>
                <a href={partner.url} target={"_blank"} rel={"noreferrer"}>
                  <img src={`${process.env.PUBLIC_URL}/assets/partners/${partner.img}`} alt={partner.name} />
                </a>
              </div>
            )
          )
        }
        </div>
      </div>
    </section>
    <section id="about-us">
      <div className="container"> 
        <h1>About Us</h1>
        <p>
        Here at Crackchester, we aim to provide students with the best possible start to their career in cybersecurity.
  Employer talks, CTF challenges, workshops and hacking leaderboards allow members to grow in both skill and knowledge.
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
        <a href="https://podcast.crackchester.cc/">Link</a>
      </div>
    </section>
  </React.Fragment>
}

export default Home;