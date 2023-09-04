import React from 'react'
import { 
    Card,
    CardContent,
    Typography,
    Grid,
 } from '@mui/material'
 import FontDownloadRoundedIcon from '@mui/icons-material/FontDownloadRounded';

const TypeCard = ({ terms, set }) => {
  return (
    <Card component="div"
    sx={{
         width: "100%",
         backgroundColor: "#2E4F4F",
         borderRadius: 3,
         mb: 2,
         my: 1,
         textOverflow: 'ellipsis',
         // whiteSpace: 'nowrap',
         height: "fit-content",
    }}>
        <CardContent>
          <Grid container columns={2}>
            <Grid item>
              <FontDownloadRoundedIcon
              sx={{
                color: "#CBE4DE",
                fontSize: 30,
              }}/>
            </Grid>
            <Grid item xs={1}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontSize: 20,
                fontWeight: 600,
                color: "#CBE4DE",
                paddingX: 1,
              }}>
              Type
            </Typography>
            </Grid>
          </Grid>
        <Typography
          component="body"
          variant="body1"
          sx={{
            fontSize: 15,
            fontWeight: 200,
            opacity: 0.6,
            color: "#CBE4DE",
            backgroundColor: "inherit",
            overflow: 'hidden'
          }}>
              {terms} terms
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
              Set: {set}
          </Typography>
        </CardContent>
    </Card>
  )
}

export default TypeCard