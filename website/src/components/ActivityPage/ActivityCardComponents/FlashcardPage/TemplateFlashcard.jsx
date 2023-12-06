import React, { useState, useEffect } from "react";
import Flashcard from "./Flashcard";
import './CardPage.css'

const TemplateFlashcard = () => {
  const [flashcarddata, setFlashcarddata] = useState([]);

  useEffect(() => {
    const url =
      "https://api.airtable.com/v0/appqY5UZYlf41Q5VT/Table%201?api_key=keyPZ9SKzXIt4Ek1v";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setFlashcarddata(json.records);
      }, []);
  });

  // https://www.debuggr.io/react-map-of-undefined/
  const cards = flashcarddata.map((card) => {
    return <Flashcard card={card} key={card.id} />;
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
      {flashcarddata && flashcarddata.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {flashcarddata.length}
        </div>
      ) : (
        ""
      )}
      {/* /number of cards */}

      {/* render cards */}
      {flashcarddata && flashcarddata.length > 0 ? cards[current] : loading}
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
        {current < flashcarddata.length - 1 ? (
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
