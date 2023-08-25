
import './App.css';
import { React, useState } from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Start from './pages/StartPage';
import HomePage from './pages/HomePage';
import Auth from './components/Auth/auth';
import auth from './config/firebase';
import signOut from 'firebase/auth'
import SignUp from './components/Auth/SignUp';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  return (
    <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<Auth setIsAuth={{setIsAuth}}/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
    </div>
  );
}

export default App;