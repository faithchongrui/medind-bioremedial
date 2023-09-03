import "./App.css";
import React from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Start from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth/auth";
import SignUp from "./components/Auth/SignUp";
import SimulationPage from "./pages/SimulationPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Activities from "./pages/Activities";
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
          <Route path="/login" element={<Auth />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/simulations" element={<SimulationPage />} />
          <Route path="/activities" element={<Activities />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
