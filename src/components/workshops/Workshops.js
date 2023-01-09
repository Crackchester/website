import React from 'react';
import './Workshops.scss';
import WorkshopsTitle from './workshopsTitle';

const Workshops = () => (
  <React.Fragment>
    <section id="workshopsTitle">
      <div className="container">
        <h1>Workshops</h1>
        <p>Interested in seeing all our previous workshops or need a refresher? Take a look down below.</p>
      </div>
    </section>
    <section id="workshops">
      <div className="container">
        <WorkshopsTitle/>
      </div>
    </section>
  </React.Fragment>
)

export default Workshops;