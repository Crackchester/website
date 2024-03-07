import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../nav/Nav';
import Home from '../home/Home';
import Partners from '../partners/Partners';
import Workshops from '../workshops/Workshops';
import NotFound from '../notfound/NotFound';
import Footer from '../footer/Footer';
import './App.scss';
import Admin from '../backend/admin/Admin';
import Login from '../backend/login/Login';
import Dashboard from '../workshopDummies/dummyDashboard/Dashboard';
import DummyLogin from '../workshopDummies/dummyLogin/DummyLogin';
import Policies from '../workshopDummies/dummyPolicies/Policies';
import Win from '../workshopDummies/dummyWin/Win';

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
            <Route path="/loginActual" element={<Login />} />
            <Route path="/adminActual" element={<Admin />} />
            <Route path="/admin" element={<DummyLogin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/win" element={<Win />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </div>
  );
}

export default App;
