
import './App.css';
import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './pages/StartPage';
import About from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
    </div>
  );
}

export default App;
