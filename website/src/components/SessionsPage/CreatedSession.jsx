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

const CreatedSession = ({ deleting, value, cards, setCards }) => {
  // const [selected, setSelected] = useState(true)
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
              value={value}
              onChange={() => setCards([...cards, value])}
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
                mx: 2,
                mt: 1,
              }}
            >
              Title
            </Typography>
            <Typography
              sx={{
                color: "primary.text",
                fontSize: 15,
                mx: 2,
                mb: 1,
              }}
            >
              Description (optional)
            </Typography>
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
                  paddingTop: 2,
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
                    <Box sx={{ padding: 1 }}>Biomolecule Functions</Box>
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
                    <Box sx={{ padding: 1 }}>Eukaryotic Cell</Box>
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
                    <Box sx={{ padding: 1 }}>Fluid Mosaic Model</Box>
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
