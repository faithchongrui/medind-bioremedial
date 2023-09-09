import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export const SessionProvider = ({ children }) => {
  // This is a provider for a dashboard which keeps track of a user's progress in a 'session'. A 'session' is a collection of selected flashcard sets in the firestore, diagrams and simulations. It also keeps track of the progress of flashcards learnt.
  const [sessions, setSessions] = useState([]);
  
  const [activeSession, setActiveSession] = useState({
    selectedFlashcards: [],
    diagrams: [],
    simulations: [],
    flashcardsProgress: {}
  })

  useEffect(() => {
    const fetchSessionsData = async () => {
      try {
        const sessionsSnapshot = await getDocs(collection(db, 'users', auth.currentUser.uid, 'sessions'))
        const sessionData = sessionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSessions(sessionData);
      } catch (error) {
        console.error('Error fetching sessions data: ', error)
      }
    }

    fetchSessionsData();
  }, [])

  const setActiveSessionById = (sessionId) => {
    const selectedSession = sessions.find((session) => session.id === sessionId);
    setActiveSession(selectedSession);
  };

  const updateSelectedFlashcards = async (flashcards) => {
    if (activeSession) {
      await setDoc(doc(db, 'users', auth.currentUser.uid, 'sessions', activeSession.id), {
        selectedFlashcards: flashcards,
      }, { merge: true });

      setActiveSession((prevSession) => ({
        ...prevSession,
        selectedFlashcards: flashcards,
      }));
    }
  }

  const value = {
    sessions,
    activeSession,
    setActiveSessionById,
    updateSelectedFlashcards,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
