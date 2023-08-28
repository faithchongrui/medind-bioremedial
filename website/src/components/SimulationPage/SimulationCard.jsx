import React from 'react'
import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    Grid,
 } from '@mui/material';
// https://codesandbox.io/s/beer-finder-mz7nx9v02j?file=/src/Beer.jsx
const SimulationCard = ({ title, description, imageurl }) => {
    
  return (
    <Card
        sx={{
            // width: "100%",
            backgroundColor: "#2E4F4F",
            my: 1,
            borderRadius: 3,
            cursor: "pointer",
        }}>
      <CardContent>
        <Typography
            component="h1"
            variant="h5"
            sx={{
              fontSize: 20,
              color: "#CBE4DE"
            }}>
            {title}
        </Typography>
        <Typography
        component="body"
        variant="body1"
        sx={{
          paddingX: 1,
          fontSize: 15,
          mt: 1,
          color: "#CBE4DE",
          backgroundColor: "#146E72",
          borderRadius: 2,
        }}>
            {description}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default SimulationCard