import React from 'react'
import Speakers from './Speakers'
import hh from './hh.json'
import './HH.scss'


const HH = () => {
  console.log(hh.speakers)
  return <React.Fragment>
    <section id="hh-container">
      <div id="hh">
        <h2>Hacker's Hub</h2>
        <p><span>{hh.details.location}</span><br/>{hh.details.date}</p>
      </div>
      <h1>Our Guest Speakers</h1>
      <Speakers speakers={hh.speakers}/>
    </section>
  </React.Fragment>
}

export default HH;