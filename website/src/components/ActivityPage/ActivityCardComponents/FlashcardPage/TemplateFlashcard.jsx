import React, { useState, useEffect } from "react";
import { 
    Card,
    CardContent,
    Typography,
    Grid,
 } from '@mui/material'
 import Flashcard from "./Flashcard";
 
const TemplateFlashcard = () => {
    const [flashcarddata, setFlashcarddata] = useState([]);

    useEffect(() => {
        // (async () => {
        //   const image = await fetchImage(simulation.image);
        //   console.log(image)
        //   setImage(image);
        // })()
      }, []);

      const cards = flashcarddata.map((card) => {
        return <Flashcard card={card} key={card.id} />;
      });
    
    const loading = <div className="loading">loading...</div>;

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
        {/* /number of cards */}
        {flashcarddata && flashcarddata.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {flashcarddata.length}
        </div>
      ) : (
        ""
      )}

        {/* render cards */}
        {flashcarddata && flashcarddata.length > 0 ? cards[current] : loading}

        {/* /render nav buttons */}
        <Grid container columns={2}>
            <Grid item>
            {current > 0 ? (
          <button onClick={previousCard}>Previous card</button>
        ) : (
          <button className="disabled" disabled>
            Previous card
          </button>
        )}
            </Grid>
            <Grid item>
            {current < flashcarddata.length - 1 ? (
          <button onClick={nextCard}>Next card</button>
        ) : (
          <button className="disabled" disabled>
            Next card
          </button>
        )}
            </Grid>
        
        
      </Grid>
    </div>
    )
}
  
  export default TemplateFlashcard