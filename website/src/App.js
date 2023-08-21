
import './App.css';
import { React, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './pages/StartPage';
import About from './pages/Login';
import HomePage from './pages/HomePage';
import Auth from './components/Auth/auth';
import auth from './config/firebase';
import signOut from 'firebase/auth'

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Auth setIsAuth={{setIsAuth}}/>}/>
          
        </Routes>
    </div>
  );
}

export default App;