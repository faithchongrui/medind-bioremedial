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
    incomplete: {},
  });

  const [newSession, setNewSession] = useState({
    id: "",
    title: "",
    description: "",
    selectedFlashcards: [],
    diagrams: [],
    simulations: [],
  });

  useEffect(() => {
    const fetchSessionsData = async () => {
      try {

        const sessionsRef = collection(
          db,
          "users",
          currentUser.uid,
          "sessions"
        );

        const sessionsSnapshot = await getDocs(
          sessionsRef
        );

        const sessionData = await Promise.all(
          sessionsSnapshot.docs.map(async (doc) => {
            const selectedFlashcardsDocs = await getDocs(
              collection(sessionsRef, doc.id, "selectedFlashcards")
            );
            const diagramsDocs = await getDocs(
              collection(sessionsRef, doc.id, "selectedDiagrams")
            );
            const simulationsDocs = await getDocs(
              collection(sessionsRef, doc.id, "selectedSimulations")
            );

            return {
              id: doc.id,
              selectedFlashcards: selectedFlashcardsDocs.docs.map((doc) => doc.data()),
              diagrams: diagramsDocs.docs.map((doc) => doc.data()),
              simulations: simulationsDocs.docs.map((doc) => doc.data()),
              ...doc.data(),
            };  
          })

        );
        setSessions(sessionData);

      } catch (error) {
        console.error("Error fetching sessions data: ", error);
      }
    };

    fetchSessionsData();
  }, [sessions, currentUser.uid, ]);

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

  const addNewSession = async () => {
    try {
      const sessionDocRef = await addDoc(
        collection(db, "users", currentUser.uid, "sessions"),
        {
          title: newSession.title,
          description: newSession.description,
          complete: {
            name: "complete",
            number: 0,
          },
          incomplete: {
            name: "incomplete",
            number: 100,
          },
        }
      );
      const sessionRef = doc(
        db,
        "users",
        currentUser.uid,
        "sessions",
        sessionDocRef.id
      );
      const selectedFlashcardsRef = collection(
        sessionRef,
        "selectedFlashcards"
      );
      const diagramsRef = collection(sessionRef, "selectedDiagrams");
      const simulationsRef = collection(sessionRef, "selectedSimulations");
      newSession.selectedFlashcards.forEach(async (flashcard) => {
        await addDoc(selectedFlashcardsRef, {
          name: flashcard,
        });
      });
      // newSession.diagrams.forEach( async (diagram) => {
      //   await addDoc(diagramsRef, {
      //     name: diagram
      //   })
      // })
      await addDoc(diagramsRef, {
        name: "",
      });
      newSession.simulations.forEach(async (simulation) => {
        await addDoc(simulationsRef, {
          name: simulation,
        });
      });

      setNewSession({
        id: "",
        title: "",
        description: "",
        selectedFlashcards: [],
        diagrams: [],
        simulations: [],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deleteNewSession = async (idList) => {
    try {
      idList.forEach(async (id) => {
        await deleteDoc(doc(db, "users", currentUser.uid, "sessions", id));
      });
    } catch (error) {
      console.error(error);
    }
  };

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
    newSession,
    setNewSession,
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
