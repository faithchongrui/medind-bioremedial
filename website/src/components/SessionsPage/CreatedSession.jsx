import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Grid, Accordion,AccordionSummary, AccordionDetails, Box, IconButton, Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import RadioButtonCheckedRoundedIcon from '@mui/icons-material/RadioButtonCheckedRounded';

const CreatedSession = ({ deleting }) => {
  // const [selected, setSelected] = useState(true)
  return (
    <div>
   <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center"}}>
   {deleting === true &&
    <Grid item>
      <Checkbox
      sx={{
            padding: 1,
            mr: 1,
            color: "#CBE4DE",
            '&.Mui-checked': {
              color: "#CBE4DE",
            },
            backgroundColor: "#2C3333",
            "&:hover": {
                backgroundColor: "#2E4F4F",
            },
            '& .MuiSvgIcon-root': { fontSize: 25 },
          }}/>
        {/* <IconButton
        sx={{
            padding: 1,
            mr: 1,
            color: "#CBE4DE",
            backgroundColor: "#2C3333",
            "&:hover": {
                backgroundColor: "#2E4F4F",
            },
          }}>
              <RadioButtonUncheckedRoundedIcon fontSize="medium" />
        </IconButton> */}
    </Grid>}
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