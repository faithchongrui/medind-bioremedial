import React, { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../config/firebase";
import {
  collection,
  getDocs,
  updateDoc,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { useAuth } from "./AuthContext";

const SessionContext = createContext();

export function useSession() {
  return useContext(SessionContext);
}

export const SessionProvider = ({ children }) => {
  // This is a provider for a dashboard which keeps track of a user's progress in a 'session'. A 'session' is a collection of selected flashcard sets in the firestore, diagrams and simulations. It also keeps track of the progress of flashcards learnt.
  const [sessions, setSessions] = useState([]);

  const { currentUser } = useAuth();

  const [activeSession, setActiveSession] = useState({
    id: "",
    title: "",
    description: "",
    selectedFlashcards: [],
    diagrams: [],
    simulations: [],
    complete: {},
    incomplete: {}
  });


  useEffect(() => {
    const fetchSessionsData = async () => {
      try {
        const sessionsSnapshot = await getDocs(
          collection(db, "users", currentUser.uid, "sessions")
        );
        const sessionData = sessionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSessions(sessionData);
      } catch (error) {
        console.error("Error fetching sessions data: ", error);
      }
    };

    console.log(currentUser.uid);

    fetchSessionsData();
  }, [currentUser.uid]);

  const FindActiveSessionById = (sessionId) => {
    const selectedSession = sessions.find(
      (session) => session.id === sessionId
    );
    setActiveSession(selectedSession);
  };

  const setActiveSessionById = async (sessionId) => {
    try {
      // Set the active field to true for the selected session
      await updateDoc(
        doc(db, "users", auth.currentUser.uid, "sessions", sessionId),
        {
          active: true,
        }
      );

      // Set the active field to false for all other sessions
      const sessionsSnapshot = await getDocs(
        collection(db, "users", auth.currentUser.uid, "sessions")
      );
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
      console.error("Error setting the active session:", error);
    }
  };

  const addNewSession = async (title, description, selectedFlashcards, diagrams, simulations) => {
    try {
      const sessionDocRef = await addDoc(
        collection(db, "users", currentUser.uid, "sessions"),
        {
          title: title,
          description: description,
          complete: {
            name: "complete",
            number: 0
          },
          incomplete: {
            name: "incomplete",
            number: 100
          },
        }
      );
      const sessionRef = doc(db, "users", currentUser.uid, "sessions", sessionDocRef.id)
      const selectedFlashcardsRef = collection(sessionRef, "selectedFlashcards")
      const diagramsRef = collection(sessionRef, "selectedDiagrams")
      const simulationsRef = collection(sessionRef, "selectedSimulations")
      selectedFlashcards.forEach( async (flashcard) => {
        await addDoc(selectedFlashcardsRef, {
          name: flashcard
        })
      })
      diagrams.forEach( async (diagram) => {
        await addDoc(diagramsRef, {
          name: diagram
        })
      })
      simulations.forEach( async (simulation) => {
        await addDoc(simulationsRef, {
          name: simulation
        })
      })
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNewSession = async (idList) => {
    try {
      idList.forEach(async (id) => {
        await deleteDoc(doc(db, "users", currentUser.uid, "sessions", id));
      })
    } catch (error) {
      console.error(error)
    }
  }

  const updateSelectedFlashcards = async (flashcards) => {
    if (activeSession) {
      await setDoc(
        doc(db, "users", auth.currentUser.uid, "sessions", activeSession.id),
        {
          selectedFlashcards: flashcards,
        },
        { merge: true }
      );

      setActiveSession((prevSession) => ({
        ...prevSession,
        selectedFlashcards: flashcards,
      }));
    }
  };

  const value = {
    sessions,
    activeSession,
    addNewSession,
    deleteNewSession,
    setActiveSessionById,
    updateSelectedFlashcards,
    FindActiveSessionById,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
