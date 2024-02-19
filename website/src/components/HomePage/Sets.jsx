import React from "react";
import { Grid, Button, Box, Typography, IconButton } from "@mui/material";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useNavigate } from "react-router-dom";

const Sets = () => {
  const arr = [1, 2, 3, 4];
  const navigate = useNavigate();

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
        <Grid container columns={2} padding={1}>
          <Grid item sx={{ padding: 1, display: "flex", alignItems: "center" }}>
            <Typography
              component="h1"
              variant="h6"
              sx={{
                color: "primary.text",
                fontWeight: 300,
              }}
            >
              Created Sets
            </Typography>
          </Grid>
          <Grid item sx={{ padding: 1, display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                color: "primary.text",
                backgroundColor: "primary.light",
                padding: 1,
                borderRadius: 7,
                textTransform: "none",
                ":hover": {
                  backgroundColor: "primary.darkest",
                  boxShadow: "none",
                },
              }}
              onClick={() => navigate("/set")}
            >
              <EditRoundedIcon sx={{ paddingRight: 1 }} />
              Edit & Add
            </Button>
          </Grid>
        </Grid>
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

// sets shown should just be the most recent from the main sets page
// can directly take the component
// clicking on it will take you to the custom activity page