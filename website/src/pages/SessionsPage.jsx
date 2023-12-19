import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Stack,
  Checkbox,
} from "@mui/material";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import SessionsSearchBar from "../components/SessionsPage/SessionsSearchBar";
import CreatedSession from "../components/SessionsPage/CreatedSession";

const SessionsPage = () => {
  const [sessionSearchQuery, setSessionSearchQuery] = useState("");
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            // backgroundColor: "rgba(20, 110, 114, 0.1)",
            // height: 10,
            // width: "100%",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Grid item>
            <IconButton
              onClick={() => navigate('/home')}
              sx={{
                padding: 1,
                ml: 2,
                color: "#CBE4DE",
                backgroundColor: "#2C3333",
                "&:hover": {
                  backgroundColor: "#2E4F4F",
                },
              }}
            >
              <ArrowBackIosRoundedIcon fontSize="medium" />
            </IconButton>
          </Grid>
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
                // paddingX: 2,
              }}
            >
              Created Sessions
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => navigate(`/csesh`)}
              sx={{
                padding: 1,
                mr: 2,
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
              onClick={() => navigate(`/csesh`)}
              sx={{
                padding: 1,
                mr: 2,
                color: "#CBE4DE",
                backgroundColor: "#2C3333",
                "&:hover": {
                  backgroundColor: "#2E4F4F",
                },
              }}
            >
              <EditRoundedIcon fontSize="medium" />
            </IconButton>
            <Checkbox
            icon={<DeleteOutlineRoundedIcon fontSize="medium" />}
            checkedIcon={<DeleteOutlineRoundedIcon fontSize="medium" />}
            checked={deleting}
            onChange={() => setDeleting(true)}
            sx={{
              padding: 1,
              color: "#C14058",
              '&.Mui-checked': {
                color: "#C14058",
                backgroundColor:"#c27a87"
              },
              backgroundColor: "#2C3333",
            }}
            >

            </Checkbox>
          </Grid>
          <Grid item sx={{ width: "65%" }}>
            <SessionsSearchBar
              sx={{ justifyContent: "right", alignItems: "right" }}
              searchQuery={sessionSearchQuery}
              setSearchQuery={setSessionSearchQuery}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Stack spacing={2} sx={{ mx: 3, mt: 2 }}>
          {/* should be a map function here */}
          <CreatedSession deleting={deleting} />
          <CreatedSession deleting={deleting} />
          <CreatedSession deleting={deleting} />
        </Stack>
      </Box>
    </div>
  );
};

export default SessionsPage;
