import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  IconButton,
  Checkbox,
} from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

const CreatedSet = () => {
  const arr = [1, 2, 3, 4, 6];

  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  return (
    <Box sx={{ backgroundColor: "primary.dark", borderRadius: 3 }}>
      <Grid
        container
        justify="space-between"
        wrap="nowrap"
        sx={{
          overflow: "auto",
          pl: 2,
          padding: 1,
          display: "flex",
          alignItems: "center",
        }}
        spacing={2}
      >
        <Grid item>
          <Typography
            sx={{
              color: "primary.text",
              fontSize: 20,
              mx: 1,
            }}
          >
            {/* {card.title} */}
            test
          </Typography>
          <Typography
            sx={{
              color: "primary.text",
              fontSize: 15,
              mx: 1,
            }}
          >
            {/* {card.description} */}
            wooo
          </Typography>
        </Grid>
        <Grid item>
          <FlagRoundedIcon
            onClick={handleClick}
            sx={{ color: flag ? "primary.text" : "important.main", mr: 1 }}
          />
          <EditRoundedIcon sx={{ mr: 1, color: "primary.text" }} />
          <DeleteRoundedIcon sx={{ mr: 1, color: "warning.main" }} />
        </Grid>
      </Grid>
      <Grid
        container
        wrap="nowrap"
        sx={{ overflow: "auto", pl: 2 }}
        spacing={2}
      >
        {arr.map((number) => (
          <Card
            component="div"
            sx={{
              padding: 2,
              my: 2,
              ml: 2,
              backgroundColor: "primary.light",
              color: "primary.text",
              boxShadow: "none",
            }}
          >
            hjhkjj
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default CreatedSet;

// make it so that when you click on the set it takes you to an activities page for it
// since the activities page is just flashcard data
