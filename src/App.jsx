import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import HireMe from './pages/HireMe';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hire-me" element={<HireMe />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
