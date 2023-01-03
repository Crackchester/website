import React from 'react';
import './Workshops.scss';
import Announcements from '../workshops/Announcements';

const Workshops = () => (
  <React.Fragment>
    <section id="workshopsTitle">
      <div className="container">
        <h1>Workshops</h1>
        <p>Are you interested in shaping cybersecurity specialists of the future? Get in touch with us and become a Crackchester partner.</p>
      </div>
    </section>
    <section id="workshops">
      <div className="container">
        <Announcements/>
      </div>
    </section>
  </React.Fragment>
)

export default Workshops;