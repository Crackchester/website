import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Partners from '../partners/Partners';
import Footer from '../footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="app">
      <header>
        <Nav />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
