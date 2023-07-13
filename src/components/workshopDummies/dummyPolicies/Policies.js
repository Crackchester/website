import React from 'react'
import './Policies.scss'

const Policies = () => {
  return <React.Fragment>
    <section id="policies-container">
      <div id="policies">
        <h2>CRACKCHESTER</h2>
        <p><span>Based In Manchester</span><br/>Cyber Security Solutions</p>
      </div>
    </section>
    <section id="about-us">
      <div className="container"> 
        <h2>Company Policies</h2>
        <p>System Must Be Kept Secure At All Times</p>
        <p>Passwords May Be Given By Support</p>
        <p>Passwords Will Only Be Given If The Security Questions Are Answered</p>
        <p>Username Must Always Be First Name Of User</p>
        <p>Passwords Will Always Default To 1234</p>
      </div>
    </section>
  </React.Fragment>
}

export default Policies;