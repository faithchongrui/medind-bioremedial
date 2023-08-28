
import './App.css';
import { React, useState } from 'react';

import { Routes, Route } from 'react-router-dom';
import Start from './pages/StartPage';
import HomePage from './pages/HomePage';
import Auth from './components/Auth/auth';
import auth from './config/firebase';
import signOut from 'firebase/auth'
import SignUp from './components/Auth/SignUp';
import SimulationPage from './pages/SimulationPage';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/home" element={<PrivateRoute/>}>
            <Route exact path="/home" element={<HomePage/>}/>
          </Route>
          <Route path="/login" element={<Auth />}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/simulations" element={<SimulationPage/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;