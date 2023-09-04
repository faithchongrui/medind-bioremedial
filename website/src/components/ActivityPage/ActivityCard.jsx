import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import FlashcardCard from "./ActivityCardComponents/FlashcardCard";
import DiagramCard from "./ActivityCardComponents/DiagramCard";
import DragDropCard from "./ActivityCardComponents/DragDropCard";
import TypeCard from "./ActivityCardComponents/TypeCard";
import QuizCard from "./ActivityCardComponents/QuizCard";

const ActivityCard = ({unit, terms, set}) => {
  console.log(unit)
  return (
    <Box
      sx={{
        my: 1,
        // mx: 10,
        width: "100%",
        background: "rgba(20, 110, 114, 0.1)",
        borderRadius: 5,
        padding: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          width: "100%",
          // backgroundColor: "#2C3333",
          color: "#CBE4DE",
          fontWeight: 500,
          // paddingX: 1,
        }}
      >
        {unit}
      </Typography>
      <Grid container spacing={2} columns={3}>
        <Grid item xs={1}>
          <DiagramCard terms={terms} set={set} />
        </Grid>
        <Grid item xs={1}>
          <Grid item>
            <FlashcardCard terms={terms} set={set} />
          </Grid>
          <Grid item>
            <QuizCard terms={terms} set={set} />
          </Grid>
        </Grid>
        <Grid item xs={1}>
          <Grid item>
            <DragDropCard terms={terms} set={set} />
          </Grid>
          <Grid item>
            <TypeCard terms={terms} set={set} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ActivityCard;