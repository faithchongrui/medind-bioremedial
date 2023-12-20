import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import "./CardPage.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { useNavigate, useParams } from "react-router-dom";
import TermsDrawer from "../TermsDrawer";
import { Grid, Toolbar, IconButton, Box } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const fetchFlashcardsQuery = async (unit) => {
  try {
    const collectionRef = collection(db, "activities");
    const flashcardQuery = query(collectionRef, where("unit", "==", unit));
    return flashcardQuery;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const TemplateFlashcard = () => {
  const [flashcards, setFlashcards] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();
  // const history = useHistory();

  useEffect(() => {
    (async () => {
      const queryFlashcards = await fetchFlashcardsQuery(id);
      const querySnapshot = await getDocs(queryFlashcards);
      querySnapshot.forEach(async (doc) => {
        const flashcardsRef = collection(db, "activities", doc.id, "keywords");
        const flashcardSnapshot = await getDocs(flashcardsRef);
        flashcardSnapshot.forEach((doc) => {
          const data = {
            ...doc.data(),
            id: doc.id,
          };
          setFlashcards((flashcards) => [...flashcards, data]);
        });
      });
    })();
  }, [id]);

  useEffect(() => {
    const keyDownHandler = (event) => {
      console.log("User pressed: ", event.key);
      if (event.key === "Escape") {
        event.preventDefault();
        navigate(-1);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  // https://www.debuggr.io/react-map-of-undefined/
  const cards = flashcards.map((card) => {
    return <Flashcard card={card} />;
  });

  const loading = <div className="loading">Loading terms...</div>;

  // navigation in cards
  const [current, setCurrent] = useState(0);
  function previousCard() {
    setCurrent(current - 1);
  }
  function nextCard() {
    setCurrent(current + 1);
  }

  return (
    <div>
    {/* number of cards */}
      {flashcards && flashcards.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {flashcards.length}
        </div>
      ) : (
        ""
      )}
      {/* /number of cards */}

      {/* render cards */}
      {flashcards && flashcards.length > 0 ? cards[current] : loading}
      {/* /render cards */}

      {/* render nav buttons */}
      <div className="nav">
        {current > 0 ? (
          <button onClick={previousCard}>Previous card</button>
        ) : (
          <button className="disabled" disabled>
            Previous card
          </button>
        )}
        {current < flashcards.length - 1 ? (
          <button onClick={nextCard}>Next card</button>
        ) : (
          <button className="disabled" disabled>
            Next card
          </button>
        )}
        {/* /render nav buttons */}
      </div>
    </div>
  );
};

// also add ability to flag flashcards
// the toolbar could unfold up and the full list of terms unfolds down + the buttons for adding flaging editing (edit + delete)
export default TemplateFlashcard;
