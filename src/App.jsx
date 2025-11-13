
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import DashHansen from './pages/Dash-Hansen.jsx';
import DashTuberculose from './pages/Dash-Tuberculose.jsx';
import Home from './pages/Home.jsx';
import './App.css'; 
import Header from './components/Header.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="main-content"> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Dash-Hansen" element={<DashHansen />} />
          <Route path="/Dash-Tuberculose" element={<DashTuberculose />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;