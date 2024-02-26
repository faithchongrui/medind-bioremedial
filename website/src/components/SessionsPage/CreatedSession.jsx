import React, { useState } from "react";
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
import { Link } from "react-router-dom";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

const CreatedSession = ({ deleting, card, cards, setCards }) => {
  const [selected, setSelected] = useState(false);

  const handleCheck = () => {
    setSelected(!selected);

    const alreadyContains = cards.includes(card.title);

    if (alreadyContains) {
      setCards(cards.filter((value) => value !== card.title));
    } else {
      setCards([...cards, card.id]);
    }
  };

  const [flag, setFlag] = React.useState(true);
  const handleClick = () => {
    setFlag(!flag);
  };
  const editfunction = (cardtitle) => {
    cardtitle = "aaaaa";
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "center", justifyContent: "center" }}
      >
        {deleting === true && (
          <Grid item>
            <Checkbox
              sx={{
                padding: 1,
                mr: 1,
                color: "primary.text",
                "&.Mui-checked": {
                  color: "primary.text",
                },
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
                "& .MuiSvgIcon-root": { fontSize: 25 },
              }}
              checked={selected}
              value={card.id}
              onChange={handleCheck}
            />
          </Grid>
        )}
        <Grid item xs>
          <Card
            component="div"
            sx={{
              backgroundColor: "primary.dark",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            <Typography
              sx={{
                color: "primary.text",
                fontSize: 20,
                mx: 1,
                mt: 1,
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                color: "primary.text",
                fontSize: 15,
                mx: 1,
                mb: 1,
              }}
            >
              {card.description}
            </Typography>
            <Grid item>
              <FlagRoundedIcon
                onClick={handleClick}
                sx={{ color: flag ? "primary.text" : "important.main", mr: 1 }}
              />
              <EditRoundedIcon
                sx={{ mr: 1, color: "primary.text" }}
                onClick={editfunction(card.title)}
              />
              <DeleteRoundedIcon sx={{ mr: 1, color: "warning.main" }} />
            </Grid>
            
            <Accordion
              sx={{
                backgroundColor: "primary.main",
                color: "primary.text",
              }}
            >
              <AccordionSummary>Selected Activities</AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: "primary.transparency",
                  paddingTop: 1,
                }}
              >
                <Grid container columns={3}>
                  <Grid
                    item
                    xs={1}
                    sx={{
                      backgroundColor: "primary.transparency",
                      padding: 1,
                      borderRight: "10px solid #2c5254",
                    }}
                  >
                    Flashcards
                    {card.selectedFlashcards?.map((flashcard) => {
                      return <Box sx={{ padding: 1 }}>{flashcard.name}</Box>;
                    })}
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{
                      backgroundColor: "primary.transparency",
                      padding: 1,
                      borderRight: "10px solid #2c5254",
                    }}
                  >
                    Diagrams
                    {card.diagrams.map((diagram) => {
                      return <Box sx={{ padding: 1 }}>{diagram.name}</Box>;
                    })}
                  </Grid>
                  <Grid
                    item
                    xs={1}
                    sx={{
                      backgroundColor: "primary.transparency",
                      padding: 1,
                    }}
                  >
                    Simulations
                    {card.simulations?.map((simulation) => {
                      return <Box sx={{ padding: 1 }}>{simulation.name}</Box>;
                    })}
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreatedSession;
