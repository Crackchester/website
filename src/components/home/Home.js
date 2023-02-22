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
        Crackchester is the University of Manchester's only ethical hacking society.  We hold weekly interactive workshops on
        cybersecurity techniques every Thursday from 4pm 'til 5pm in Atlas 1, Kilburn Building.  We explore the major
        technques employed by hackers to atack vulnerable systems, how to go about spotting vulnerabilities in your own system,
        and how to protect systems against those attacks.  We are the hosts of HackersHub, our very own cybersecurity conference, and we
        host CTFs too for everyone to dig their teeth into the techniques we cover in the workshops.
        We've tried to make the society as inclusive as possible.  We welcome anyone with any experience.  You absolutely do not
        have to be a computer science student to join.  Our workshops start from scratch, and we'll help you at every stage of
        the process.  
        
        Come along.  Have fun.  Go home and practice your skills.  Come back.  Have more fun.  Do cybersecurity.
        Join Crackchester.
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

export default Home;