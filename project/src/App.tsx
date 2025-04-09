import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Talents from './pages/Talents';
import Presence from './pages/Presence';
import Events from './pages/Events';
import Solutions from './pages/Solutions';
import Academy from './pages/Academy';
import Marketing from './pages/Marketing';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Contact />} />
            <Route path="/talents" element={<Talents />} />
            <Route path="/presence" element={<Presence />} />
            <Route path="/events" element={<Events />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;