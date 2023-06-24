import './App.css';
import React from 'react';

import { BrowserRouter as Router,   Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="test" element={<createBoard />} />
        </Routes>
    </div>
  );
}

export default App;
