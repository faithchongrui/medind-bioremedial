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
import CreateSessionPage from "./pages/CreateSessionPage";
import SessionsPage from "./pages/SessionsPage";

function App() {
  const location = useLocation();

  const sims = [
    {
      title: "Fluid Mosaic Model",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem vel pariatur obcaecati ex sequi necessitatibus velit eum consectetur laboriosam provident, consequatur cupiditate veritatis tenetur voluptate atque sed neque placeat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis autem vel pariatur obcaecati ex sequi necessitatibus velit eum consectetur laboriosam provident, consequatur cupiditate veritatis tenetur voluptate atque sed neque placeat.",
      imageurl: "2.png",
    },
    {
      title: "Diffusion",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat laboriosam cumque commodi illo quo temporibus! Atque, sed consequatur illum reprehenderit voluptatem voluptates laudantium saepe distinctio beatae veritatis obcaecati, aliquid doloremque.",
      imageurl: "2.png",
    },
    {
      title: "Osmosis",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae saepe temporibus voluptate doloribus labore assumenda laudantium corporis illo, vel unde rerum mollitia minus maxime, expedita tempora pariatur? Rem, repellendus voluptatibus.",
      imageurl: "2.png",
    },
  ];

  return (
    <div>
      <AuthProvider>
        {["/home", "/simulations", "/activities"].includes(
          location.pathname
        ) && <NavBar />}
        <Routes>
          <Route path="/" element={<Start />} />
          <Route exact path="/home" element={<PrivateRoute />}>
            <Route exact path="/home" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<Auth />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route exact path="/simulations" element={<PrivateRoute />}>
            <Route path="/simulations" element={<SimulationPage />} />
          </Route>
          <Route exact path="/activities" element={<PrivateRoute />}>
            <Route path="/activities" element={<ActivitiesPage />} />
          </Route>
          <Route path="/simulations/:id" element={<TemplateSimulation sims={sims}/>} />
          <Route path="/create-session" element={<CreateSessionPage />} />
          <Route path="/sesh" element={<SessionsPage />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
