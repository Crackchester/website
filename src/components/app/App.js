import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Partners from '../partners/Partners';
import Workshops from '../workshops/Workshops';
import NotFound from '../notfound/NotFound';
import Footer from '../footer/Footer';
import DummyLogin from '../dummyLogin/DummyLogin';
import Dashboard from '../dummyDashboard/Dashboard';
import Policies from '../dummyPolicies/Policies';
import Win from '../dummyWin/Win';
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
            <Route path="/admin" element={<DummyLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/winButThisNeedsToBeUniqueAndNotGuessable23855834543957389CyberSecLvl1000" element={<Win />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
