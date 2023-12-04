import React, { useState } from "react";
import './CardStyles.css';
import { 
    Card,
    CardContent,
    Typography,
    Grid,
 } from '@mui/material'
 
const Flashcard = ({card, key}) => {
    const [side, setSide] = useState(false);
    function handleClick() {
        console.log("clicked!");
        setSide(!side);
        console.log(side);
      }
      return (
        <div className={`card ${side ? "side" : ""}`} onClick={handleClick}>
          <small>
            <span>Card ID</span>
            {card.id}
          </small>
          {/* {side ? card.fields.side1 : card.fields.side2} */}
          <div className="front">{card.fields.side1}</div>
          <div className="back">{card.fields.side2}</div>
        </div>
      );
}
  
  export default Flashcard