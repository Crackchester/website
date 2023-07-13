import React from 'react'
import './Win.scss'
import { useLocation } from 'react-router-dom';

var CryptoJS = require("crypto-js");

const Win = (props) => {
  
  var key='788a576161gd58i90kgn7rtha314fs78hn39404c3d729a8b361eddb60d1b7813'
  const { state } = useLocation();
  if(state){

    const { data } = state;

    if(data){ key = data; }

  }
  
  var bytes = CryptoJS.AES.decrypt('U2FsdGVkX18gMBDjjlQw6v7cvXIPg/ojR+Ix5At1qoU=', key);
  var decryptKey = "(You need to log in to view the code)"
  try {
    decryptKey = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  } catch (error) {
    console.log("decrypting with invalid key");
  }
  

  return <React.Fragment>
    <section id="win-container">
      <div id="win">
        <h2>CRACKCHESTER</h2>
        <p><span>Based In Manchester</span><br/>Cyber Security Solutions</p>
      </div>
    </section>
    <section id="about-us">
      <div className="container"> 
        <h2>You have successfully authenticated! ( ͡° ͜ʖ ͡°)</h2>
        <p>The Key is { decryptKey }</p>
        <p>Send This To george.goodey#5445 To Get A Prize At Next Week's Workshop </p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </section>
  </React.Fragment>
}

export default Win;