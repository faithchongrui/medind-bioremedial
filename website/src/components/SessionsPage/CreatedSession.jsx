import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Accordion,AccordionSummary, AccordionDetails, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const CreatedSession = () => {
  return (
    <div>

   <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center"}}>
    <Grid item xs={1}>
        <IconButton
        sx={{
            padding: 1,
            color: "#C14058",
            backgroundColor: "#2C3333",
            "&:hover": {
                backgroundColor: "#2E4F4F",
            },
          }}>

        </IconButton>
    </Grid>
    <Grid item xs>
    <Card
    component="div"
          sx={{
            backgroundColor: "#2C3333",
            borderRadius: 3,
            cursor: "pointer",
          }}>
      <Typography
      sx={{
        color: "#CBE4DE",
        fontSize: 20,
        mx: 2,
        mt:1,
      }}>Title</Typography>
      <Typography
      sx={{
        color: "#CBE4DE",
        fontSize: 15,
        mx: 2,
        mb:1,
      }}>Description (optional)</Typography>
      <Accordion
      sx={{
        backgroundColor: "#2E4F4F",
        color: "#CBE4DE",
      }}>
          <AccordionSummary>
            Selected Activities
          </AccordionSummary>
          <AccordionDetails
          sx={{
            backgroundColor: "rgba(20, 110, 114, 0.1)",
            paddingTop: 2,
          }}>
            <Grid container columns={3}>
                <Grid item xs={1}
                sx={{
                    backgroundColor: "rgba(20, 110, 114, 0.1)",
                    padding: 1,
                    borderRight: "10px solid #2c5254"
                }}>
                    Flashcards
                    <Box sx={{ padding: 1 }}>
                        Biomolecule Functions
                    </Box>
                </Grid>
                <Grid item xs={1}
                 sx={{
                    backgroundColor: "rgba(20, 110, 114, 0.1)",
                    padding: 1,
                    borderRight: "10px solid #2c5254"
                }}>
                    Diagrams
                    <Box sx={{ padding: 1 }}>
                        Eukaryotic Cell
                    </Box>
                </Grid>
                <Grid item xs={1}
                 sx={{
                    backgroundColor: "rgba(20, 110, 114, 0.1)",
                    padding: 1,
                }}>
                    Simulations
                    <Box sx={{ padding: 1 }}>
                        Fluid Mosaic Model
                    </Box>
                </Grid>
            </Grid>
          </AccordionDetails>
      </Accordion>
    </Card>
    </Grid>
    </Grid>
    </div>
  )
}

export default CreatedSession