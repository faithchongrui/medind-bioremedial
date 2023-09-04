import "./App.css";
import React from "react";

import { Routes, Route, useLocation } from 'react-router-dom';
import Start from './pages/StartPage';
import HomePage from './pages/HomePage';
import Auth from './components/Auth/auth';
import SignUp from './components/Auth/SignUp';
import SimulationPage from './pages/SimulationPage';
import TemplateSimulation from './components/SimulationPage/TemplateSimulation';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ActivitiesPage from "./pages/ActivitiesPage";
import NavBar from "./components/HomePage/NavBar";

function App() {
  const location = useLocation();
  return (
    <div>
      <AuthProvider>
        {location.pathname !== "/" && <NavBar/>}
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/home" element={<PrivateRoute />}>
            <Route exact path="/home" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Auth />}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route exact path="/simulations" element={<PrivateRoute />}>
            <Route path="/simulations" element={<SimulationPage/>}/>
          </Route>
          <Route exact path="/activities" element={<PrivateRoute />}>
            <Route path="/activities" element={<SimulationPage/>}/>
          </Route>
          <Route path="/simtem" element={<TemplateSimulation/>}/>
          <Route path="/activities" element={<ActivitiesPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
