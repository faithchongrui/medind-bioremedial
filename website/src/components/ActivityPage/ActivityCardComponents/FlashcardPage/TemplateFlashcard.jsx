import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import "./CardPage.css";
import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { useParams } from "react-router-dom";

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

  useEffect(() => {
    (async () => {
      const queryFlashcards = await fetchFlashcardsQuery(id);
      const querySnapshot = await getDocs(queryFlashcards)
      querySnapshot.forEach(async (doc) => {
        const flashcardsRef = collection(db, "activities", doc.id, "keywords")
        const flashcardSnapshot = await getDocs(flashcardsRef)
        flashcardSnapshot.forEach((doc) => {
          const data = {
            ...doc.data(),
            id: doc.id,
          };
          setFlashcards((flashcards) => [...flashcards, data]);
        })
      })
    })();
  }, [id]);

  // useEffect(() => {
  //   // const url =
  //   //   "https://api.airtable.com/v0/appqY5UZYlf41Q5VT/Table%201?api_key=keyPZ9SKzXIt4Ek1v";
  //   // fetch(url)
  //   //   .then((response) => response.json())
  //   //   .then((json) => {
  //   //     setflashcards(json.records);
  //   //   }, []);

  // });

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
// add like a little toolbar thingy at the bottom that you can expand out and also flip to other activities with
// also add ability to flag flashcards
// the toolbar could unfold up and the full list of terms unfolds down + the buttons for adding flaging editing (edit + delete)
export default TemplateFlashcard;
