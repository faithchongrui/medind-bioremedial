import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography, Grid, Button } from "@mui/material";
import FlashcardCard from "./ActivityCardComponents/FlashcardPage/FlashcardCard";
import DiagramCard from "./ActivityCardComponents/DiagramCard";
import DragDropCard from "./ActivityCardComponents/DragDropCard";
import TypeCard from "./ActivityCardComponents/TypeCard";
import QuizCard from "./ActivityCardComponents/QuizCard";
import CheckboxCard from "../SimulationPage/CheckboxCard"

const ActivityCard = ({ unit, terms, set }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
      <Box
      sx={{
        my: 1,
        // mx: 10,
        width: "100%",
        background: "rgba(20, 110, 114, 0.1)",
        borderRadius: 5,
        padding: 2,
        cursor: "pointer",
      }}
      onClick={() => {
        if (location.pathname.includes("csesh")) {
          return null;
        } else {
          navigate(`/activity/${unit}`);
        }
      }}
    >
      <Typography
        variant="h5"
        sx={{
          width: "100%",
          // backgroundColor: "primary.dark",
          color: "primary.text",
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
            <FlashcardCard unit={unit} terms={terms} set={set} />
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
