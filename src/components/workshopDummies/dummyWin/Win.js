import React from 'react'
import './Win.scss'
// import { useLocation } from 'react-router-dom';

// var CryptoJS = require("crypto-js");

const Win = (props) => {
  
  // var key='264e3e1e68579e03453476f959036af25157d8b9b3e2c5dcb7748d4a3fc6a9fa'
  // const { state } = useLocation();
  // if(state){

  //   const { data } = state;

  //   if(data){ key = data; }

  // }
  
  // var bytes = CryptoJS.AES.decrypt('U2FsdGVkX18N6KuNPLnwIXNl3gPgcjPBtK7N1+IHypaTvBG3OfFBxX/zFRKQ9NOI', key);
  // var decryptKey = "(You need to log in to view the code)"
  // try {
  //   decryptKey = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
  // } catch (error) {
  //   console.log("decrypting with invalid key");
  // }
  

  return <React.Fragment>
    <section id="win-container">
      <div id="win">
        <h2>HACKCHESTER</h2>
        <p><span>Based In Manchester</span><br/>Cyber Security Solutions</p>
      </div>
    </section>
    <section id="about-us">
      <div className="container"> 
        <h2>You have successfully authenticated! ( ͡° ͜ʖ ͡°)</h2>
        <p>The Key is 'Danger Close'</p>
        <p>Send This To cinnamonroll627 To Get A Prize</p>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </section>
  </React.Fragment>
}

export default Win;