import React from "react";
import Sets from "./Sets";
import Session from "./Session";
import { Grid, Box, Typography } from "@mui/material";

const Progress = () => {
  return (
    <Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{
          color: "primary.text",
          fontWeight: 600,
          pb: 2,
          ml: 8,
          position: "top",
        }}
      >
        Your progress
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          // backgroundColor: "primary.white",
          pb: "20px",
          px: 6,
          display: "flex",
          flexWrap: "nowrap",
          overflowY: "hidden",
        }}
      >
        <Grid item xs={8}>
          <Session />
        </Grid>
        <Grid item xs={4}>
          <Sets />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Progress;
