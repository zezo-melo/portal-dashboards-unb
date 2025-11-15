// src/App.jsx

import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// CORREÇÃO DE CASE SENSITIVITY: 
// Os nomes de arquivo de componente no React geralmente usam Title Case.
// É altamente provável que o nome real do arquivo no seu repositório seja 'Dash-Hanseniase.jsx' e 'Dash-Tuberculose.jsx'.
import DashHansen from './pages/Dash-Hanseniase.jsx';
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
          {/* Padronizando rotas para URLs em minúsculas */}
          <Route path="/dash-hanseniase" element={<DashHansen />} />
          <Route path="/dash-tuberculose" element={<DashTuberculose />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;