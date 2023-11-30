import React, { useState } from "react";
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
        <Card 
        component="div"
          sx={{
            backgroundColor: "#2E4F4F",
            borderRadius: 3,
            cursor: "pointer",
            m: 1,
            // my: 1,
          }}
          className={`card ${side ? "side" : ""}`} onClick={() => handleClick(true)}>
            <CardContent>
                <Grid container>
                <Typography
                component="h1"
                variant="h5"
                sx={{
                  fontSize: 20,
                  color: "#CBE4DE",
                  textDecorationLine: "underline",
                }}>
                    card ID
                </Typography>
                {card.id}
                <Typography
                className="front"
                component="h1"
                variant="h5"
                sx={{
                  fontSize: 20,
                  color: "#CBE4DE",
                  textDecorationLine: "underline",
                }}>
                    {card.fields.side1} 
                </Typography>
                <Typography
                className="back"
                component="h1"
                variant="h5"
                sx={{
                  fontSize: 20,
                  color: "#CBE4DE",
                  textDecorationLine: "underline",
                }}>
                    {card.fields.side2} 
                </Typography>
                </Grid>
            </CardContent>
        </Card>
    )
}
  
  export default Flashcard