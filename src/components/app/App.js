import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav'
import Home from '../home/Home'
import Partners from '../partners/Partners'
import './App.scss';

function App() {
  return (
    <div id="app">
      <Nav />
      <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<Partners />} />
        </Routes>
      </BrowserRouter>
      </main>
      <footer>
        <div>
          <p>
            © 2022 Crackchester
          </p>
          <p>
            ( ͡° ͜ʖ ͡°)
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
