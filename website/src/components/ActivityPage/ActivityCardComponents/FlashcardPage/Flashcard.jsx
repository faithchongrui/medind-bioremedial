import React, { useState } from "react";
import './CardStyles.css';
import { 
    Card,
    CardContent,
    Typography,
    Grid,
 } from '@mui/material'
 
const Flashcard = ({card}) => {
    const [side, setSide] = useState(false);
    function handleClick() {
        console.log("clicked!");
        setSide(!side);
        console.log(side);
      }
      return (
        <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
          {/* {side ? card.fields.side1 : card.fields.side2} */}
          <div className="front">{card.word}</div>
          <div className="back">{card.meaning}</div>
        </div>
      );
}
  
  export default Flashcard