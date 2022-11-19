import Announcements from './Announcements';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="./">Home</a></li>
          <li><a href="./Announcements">Events</a></li>
          <li><a href="workshops">Workshops</a></li>
          <li><a href="join">Join Us</a></li>
          <li><a href="partners">Partners</a></li>
        </ul>
      </nav>
      <header>
        <h1>Crackchester</h1>
      </header>
      <div className='Announcements'>
        <Announcements/>
      </div>
      <div className='aboutUs'>

      </div>
    </div>
  );
}

export default App;
