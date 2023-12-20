import React from "react";
import { Grid, Button, Box, Typography, IconButton } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const Sets = () => {
  const arr = [1, 2, 3, 4];

  return (
    <Grid
      container
      sx={{
        pb: "10px",
        flexDirection: "column",
        alignItems: "left",
        backgroundColor: "primary.dark",
        color: "primary.text",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "fit-content",
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          sx={{
            color: "primary.text",
            my: 2,
            ml: 2,
            mr: 1,
            fontWeight: 300,
            padding: 1,
          }}
        >
          Created Sets
        </Typography>
        <IconButton
          sx={{
            color: "primary.text",
            backgroundColor: "primary.main",
            my: 2.5,
            // padding: 1,
            ":hover": {
              backgroundColor: "primary.darkest",
              boxShadow: "none",
            },
          }}
        >
          <EditRoundedIcon />
        </IconButton>
      </Box>

      {arr.map((number) => (
        <Button
          variant="contained"
          // disableRipple="true"
          sx={{
            mx: 2,
            mb: 1,
            backgroundColor: "primary.main",
            boxShadow: "none",
            borderRadius: 7,
            textAlign: "left",
            display: "inline",
            color: "primary.text",
            textTransform: "none",
            ":hover": {
              backgroundColor: "primary.light",
              boxShadow: "none",
              fontWeight: "bold",
            },
          }}
        >
          Set {number}
        </Button>
      ))}
    </Grid>
  );
};

export default Sets;
