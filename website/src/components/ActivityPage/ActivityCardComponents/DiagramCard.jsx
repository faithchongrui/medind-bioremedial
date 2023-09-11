import React from 'react'
import { 
    Card,
    CardMedia,
    CardContent,
    Typography,
    // Grid,
 } from '@mui/material'

 import image from '../../../images/2.png'

const DiagramCard = () => {
  return (
    <Card component="div"
    sx={{
         width: "100%",
         backgroundColor: "#2E4F4F",
         borderRadius: 3,
        //  m: 1,
         my: 1,
         textOverflow: 'ellipsis',
         // whiteSpace: 'nowrap',
         height: "fit-content",
    }}>
        <CardMedia component="img" src={image}
        sx={{
            height: "25vh",
            backgroundColor: "146E72",
        }}/>
        <CardContent>
        <Typography
        component="h1"
        variant="h5"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: "#CBE4DE",
        }}>
            Diagram
        </Typography>
        <Typography
          component="body"
          variant="body1"
          sx={{
            // paddingX: 1,
            fontSize: 15,
            mt: 1,
            color: "#CBE4DE",
            backgroundColor: "inherit",
            overflow: 'hidden'
          }}>
              Description
          </Typography>
          <Typography
          component="body"
          variant="body1"
          sx={{
            // paddingX: 1,
            fontSize: 15,
            mt: 1,
            color: "#CBE4DE",
            backgroundColor: "inherit",
            overflow: 'hidden',
          }}>
              Tags
          </Typography>
        </CardContent>
    </Card>
  )
}

export default DiagramCard