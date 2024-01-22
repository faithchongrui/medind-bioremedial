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

const CreatedSet = () => {
  return (
    <Box sx={{ backgroundColor: "primary.dark"}}>
    
         
            <Typography
              sx={{
                color: "primary.text",
                fontSize: 20,
                mx: 2,
                mt: 1,
              }}
            >
              {/* {card.title} */}
              test
            </Typography>
            <Typography
              sx={{
                color: "primary.text",
                fontSize: 15,
                mx: 2,
                mb: 1,
              }}
            >
              {/* {card.description} */}
              wooo
            </Typography>
        <Grid container spacing={2} sx={{ alignItems: "center", justifyContent: "center" }}>
            <Grid item xs>
            <Card
            component="div"
            sx={{
              backgroundColor: "primary.dark",
              borderRadius: 3,
              cursor: "pointer",
            }}
          >
            hjhkjj
            </Card>
  </Grid>
     </Grid>
    </Box>
  )
}

export default CreatedSet