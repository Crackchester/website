import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Partners from '../partners/Partners';
import Workshops from '../workshops/Workshops';
import NotFound from '../notfound/NotFound';
import Footer from '../footer/Footer';
import DummyLogin from '../dummyLogin/DummyLogin';
import Dashboard from '../dummyDashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <div className="app" id="home">
      <header>
        <Nav />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/admin" element={<DummyLogin />} />Dashboard
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
