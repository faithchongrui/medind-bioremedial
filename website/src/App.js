import "./App.css";
import React, { useEffect, useState } from "react";

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
import TemplateFlashcard from "./components/ActivityPage/ActivityCardComponents/FlashcardPage/TemplateFlashcard";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const location = useLocation();
  const [sims, setSims] = useState([])

  const fetchSimulations = async () => {
    try {
      const collectionRef = collection(db, "simulations");
      const querySnapshot = await getDocs(collectionRef);
  
      const data = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const documentData = {
            ...doc.data(),
          };
          return documentData;
        })
      );
  
      return data;
  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSimulations()
    .then(data => {
      setSims(data)
    })
    .catch(error => {
      console.error(error)
    })
  }, []);

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
          <Route path="/csesh" element={<CreateSessionPage />} />
          <Route path="/sesh" element={<SessionsPage />} />
          <Route path="/flashcards/:id" element={<TemplateFlashcard />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
