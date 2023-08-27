import React from 'react'
import {
  Grid,
  Button,
  Box,
  Typography,
} from "@mui/material";
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const Sets = () => {

  const arr = [1,2,3,4]
  
  return (
    <Grid
      container
      item
      xs={false}
      // sm={true}
      md={5.4}
      sx={{
        // padding: "1rem",
      // display: "flex",
      flexDirection: "column",
      alignItems: "left",
        backgroundColor: "#2C3333",
        color: "#CBE4DE",
     }}>
      <Box 
      sx={{
        display: "flex",
            flexDirection: "row",
      }}>
        <Typography
          component="h1"
          variant="h6"
          sx={{
            color: "#CBE4DE",
            m: 2,
            fontWeight: 300,
          }}
        >
          Created Sets
        </Typography>
        <Button
        sx={{
          color: "#CBE4DE",
          backgroundColor: "#2E4F4F",
          borderRadius: 20,
          inlineSize: "fit-content",
          my: 2,
          padding: 0,
          ":hover": {
            backgroundColor: "#1E1E1E",
            boxShadow: "none",
          },
        }}>
          <EditRoundedIcon></EditRoundedIcon>
        </Button>
      </Box>
      
      {arr.map((number) => (
          <Button
            variant="contained"
            disableRipple="true"
            sx={{
              mx: 2,
              mb: 1,
              backgroundColor: "#2E4F4F",
              boxShadow: "none",
              borderRadius: 7,
              width: "92%",
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