import './App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Start from './pages/StartPage';
import HomePage from './pages/HomePage';
import Auth from './components/Auth/auth';
import SignUp from './components/Auth/SignUp';
import SimulationPage from './pages/SimulationPage';
import TemplateSimulation from './components/SimulationPage/TemplateSimulation';
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
          <Route path="/simtem" element={<TemplateSimulation/>}/>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;