import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import { collection, getDocs, updateDoc, setDoc, doc } from "firebase/firestore";

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

  const FindActiveSessionById = (sessionId) => {
    const selectedSession = sessions.find((session) => session.id === sessionId);
    setActiveSession(selectedSession);
  };

  const setActiveSessionById = async (sessionId) => {
    try {
      // Set the active field to true for the selected session
      await updateDoc(doc(db, 'users', auth.currentUser.uid, 'sessions', sessionId), {
        active: true,
      });
  
      // Set the active field to false for all other sessions
      const sessionsSnapshot = await getDocs(collection(db, 'users', auth.currentUser.uid, 'sessions'));
      const batch = db.batch();
      sessionsSnapshot.docs.forEach((doc) => {
        if (doc.id !== sessionId) {
          batch.update(doc.ref, { active: false });
        }
      });
      await batch.commit();
  
      // Update the local state to reflect the active session
      setActiveSession(sessionId);
    } catch (error) {
      console.error('Error setting the active session:', error);
    }
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
    FindActiveSessionById
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
