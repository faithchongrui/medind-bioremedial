import React from 'react'
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const Sets = () => {

  const arr = [1,2,3,4]
  
  return (
    <Grid
      container
      sx={{
        pb: "10px",
      flexDirection: "column",
      alignItems: "left",
        backgroundColor: "#2C3333",
        color: "#CBE4DE",
     }}>
      <Box 
      sx={{
        display: "flex",
            flexDirection: "row",
            width: "fit-content",
      }}>
        <Typography
          component="h1"
          variant="h6"
          sx={{
            color: "#CBE4DE",
            my: 2,
            ml: 2,
            mr: 1,
            fontWeight: 300,
            padding: 1
          }}
        >
          Created Sets
        </Typography>
        <IconButton
        sx={{
          color: "#CBE4DE",
          backgroundColor: "#2E4F4F",
          my: 2.5,
          // padding: 1,
          ":hover": {
            backgroundColor: "#1E1E1E",
            boxShadow: "none",
          },
        }}>
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
              backgroundColor: "#2E4F4F",
              boxShadow: "none",
              borderRadius: 7,
              textAlign:"left",
              display: 'inline',
              color: "#CBE4DE",
              textTransform: 'none',
              ":hover": {
                backgroundColor: "rgb(20, 110, 114)",
                boxShadow: "none",
                fontWeight:"bold"
              },
            }}
          >
            Set {number}
            
          </Button>
        ))}
    </Grid>
  )
}

export default Sets