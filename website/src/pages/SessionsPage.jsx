import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Stack,
} from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import SessionsSearchBar from "../components/SessionsPage/SessionsSearchBar";
import CreatedSession from "../components/SessionsPage/CreatedSession";

const SessionsPage = () => {
  const [sessionSearchQuery, setSessionSearchQuery] = useState("");
  return (
    <div>
        <Box>
        <Grid container spacing={2}
        sx={{
            // backgroundColor: "rgba(20, 110, 114, 0.1)",
            // height: 10,
            // width: "100%",
            alignItems: "center",
            padding: 2
            
          }}>
            <Grid item>
            <Typography
          component="h1"
          variant="h4"
          sx={{
            width: "100%",
            // backgroundColor: "#2C3333",
            color: "#CBE4DE",
            fontSize: 25,
            borderRadius: 10,
            padding: 1,
            paddingX: 2,
          }}
        >
        Created Sessions
        </Typography>
            </Grid>
            <Grid item>
            <IconButton
          sx={{
            padding: 1,
            mr: 1,
            color: "#CBE4DE",
            backgroundColor: "#2C3333",
                    "&:hover": {
                        backgroundColor: "#2E4F4F",
                    },
          }}
        >
          <AddRoundedIcon fontSize="medium" />
        </IconButton>
        <IconButton
          sx={{
            padding: 1,
            color: "#C14058",
            backgroundColor: "#2C3333",
                    "&:hover": {
                        backgroundColor: "#2E4F4F",
                    },
          }}
        >
          <DeleteOutlineRoundedIcon fontSize="medium" />
        </IconButton>
            </Grid>
            <Grid item>
                <SessionsSearchBar sx={{justifyContent: "right", alignItems: "right",}} searchQuery={sessionSearchQuery} setSearchQuery={setSessionSearchQuery}/>
            </Grid>
          </Grid>
          </Box>
          <Box>
          <Stack spacing={2}
          sx={{m: 3}}>
            {/* should be a map function here */}
            <CreatedSession/>
            <CreatedSession/>
            <CreatedSession/>
            some props that can detect when a button is pressed then parse it over to the created sesh and if its this this then the icon is this for editing, selecting for deleting & starting
          </Stack>
          </Box>
      </div>
  )
}

export default SessionsPage