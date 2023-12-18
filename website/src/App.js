import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./App.css";
import React, { useEffect, useState } from "react";

import { Routes, Route, useLocation } from "react-router-dom";
import Start from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import Auth from "./components/Auth/auth";
import SignUp from "./components/Auth/SignUp";
import SimulationPage from "./pages/SimulationPage";
import TemplateSimulation from "./components/SimulationPage/TemplateSimulation";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ActivitiesPage from "./pages/ActivitiesPage";
import NavBar from "./components/HomePage/NavBar";
import CreateSessionPage from "./pages/CreateSessionPage";
import SessionsPage from "./pages/SessionsPage";
import TemplateFlashcard from "./components/ActivityPage/ActivityCardComponents/FlashcardPage/TemplateFlashcard";
import TemplateQuiz from "./components/ActivityPage/ActivityCardComponents/QuizPage/TemplateQuiz";
import TemplateActivity from "./components/ActivityPage/TemplateActivity";
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import { SessionProvider } from "./context/SessionContext";

function App() {
  const location = useLocation();
  const [sims, setSims] = useState([]);
  const [simSearchQuery, setSimSearchQuery] = useState('');

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
      .then((data) => {
        setSims(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <AuthProvider>
          <SessionProvider>
            {["/home", "/simulations", "/activities", "/sesh"].includes(
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
                <Route path="/simulations" element={<SimulationPage searchQuery={simSearchQuery} setSearchQuery={setSimSearchQuery} />} />
              </Route>
              <Route exact path="/activities" element={<PrivateRoute />}>
                <Route path="/activities" element={<ActivitiesPage />} />
              </Route>
              <Route
                path="/simulations/:id"
                element={<TemplateSimulation sims={sims} />}
              />
              <Route path="/csesh" element={<CreateSessionPage />} />
              <Route path="/sesh" element={<SessionsPage />} />
              <Route path="/flashcards/:id" element={<TemplateFlashcard />} />
              <Route path="/quiz/:id" element={<TemplateQuiz/>} />
              <Route path="/activity/:id" element={<TemplateActivity/>} />
            </Routes>
          </SessionProvider>
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
