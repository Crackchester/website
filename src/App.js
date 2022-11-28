import Announcements from './Announcements';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#AboutUs">About Us</a></li>
          <li><a href="#Events">Events</a></li>
          <li><a href="workshops">Workshops</a></li>
          <li><a href="partners">Partners</a></li>
        </ul>
      </nav>
      <header id="header">
        <br/>
        <svg className='Logo' width={"auto"} height={"20vh"} viewBox="0 0 434 601">
          <polygon class="st0" points="228.5,0.6 227.9,136.5 314.1,222.5 229,388 230.6,593.8 434,202.8 "/>
          <polygon class="st0" points="205.5,0.7 206.1,136.6 119.9,222.6 205,388.1 203.4,593.9 0,202.9 "/>
        </svg>
        <h1>CRACKCHESTER</h1>
        <p>THE UNIVERSITY OF MANCHESTER CYBER SECURITY SOCIETY</p>
        <p>OUR PARTNERS</p>
      </header>
      <div id='AboutUs'>
        <br/>
        <h1>About Us</h1>
        <p>
        Here at Crackchester, we aim to provide students with the best possible start to their career in cybersecurity.
Employer talks, CTF challenges, workshops and hacking leaderboards allow members to grow in both skill and knowledge.
        </p>
        <br/>
      </div>
      <div id='Events'>
        <h1>Announcements</h1>
        <Announcements/>
      </div>
      <div id='Podcast'>
        <h1>Check Out Our Podcast</h1>
        <p>
        A new podcast discussing the latest trends, topic and controversies in the cybersecurity scene.
        </p>
        <a href="https://podcast.crackchester.cc/">Link</a>
        <br/>
      </div>
      <footer>
        <h1>Footer Time</h1>
        <p>
          Very Cool Website
        </p>
        <br/>
      </footer>
    </div>
  );
}

export default App;
