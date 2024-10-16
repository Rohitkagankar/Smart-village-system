// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Agriculture from './Pages/Agriculture/Agriculture.jsx';
import Education from './Pages/Education/Education.jsx';
import Healthcare from './Pages/Healthcare/Healthcare.jsx';
import EconomicDevelopment from './Pages/EconomicDevelopment/EconomicDevelopment.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';  // Import the Login component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/economic-development" element={<EconomicDevelopment />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
