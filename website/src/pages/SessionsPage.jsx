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
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import SessionsSearchBar from "../components/SessionsPage/SessionsSearchBar";
import CreatedSession from "../components/SessionsPage/CreatedSession";

const SessionsPage = () => {
  const [sessionSearchQuery, setSessionSearchQuery] = useState("");
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate();

  const [cards, setCards] = useState([1, 2, 3, 4, 5]);
  const [cardsToDelete, setCardsToDelete] = useState([]);

  function handleConfirm() {
    setCards(cards.filter((value) => !cardsToDelete.includes(value)));
    setDeleting(false);
    setCardsToDelete([]);
  }

  return (
    <div>
      <Box>
        <Grid
          container
          spacing={2}
          sx={{
            // backgroundColor: "primary.transparency",
            // height: 10,
            // width: "100%",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Grid item>
            <IconButton
              onClick={() => navigate("/home")}
              sx={{
                padding: 1,
                ml: 2,
                color: "primary.text",
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
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
                // width: "100%",
                // backgroundColor: "primary.dark",
                color: "primary.text",
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
                color: "primary.text",
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
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
                color: "primary.text",
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                },
              }}
            >
              <EditRoundedIcon fontSize="medium" />
            </IconButton>
            <Checkbox
              icon={<DeleteOutlineRoundedIcon fontSize="medium" />}
              checkedIcon={<DeleteOutlineRoundedIcon fontSize="medium" />}
              checked={deleting}
              onChange={() => setDeleting(!deleting)}
              sx={{
                padding: 1,
                color: "warning.main",
                "&.Mui-checked": {
                  color: "warning.main",
                  backgroundColor: "warning.light",
                },
                backgroundColor: "primary.dark",
              }}
            />
            {deleting === true && (
              <Button
                sx={{
                  borderRadius: 5,
                  padding: 1,
                  ml: 2,
                  color: "warning.main",
                  backgroundColor: "warning.light",
                  "&:hover": {
                    backgroundColor: "warning.light",
                  },
                  textTransform: "none",
                }}
                onClick={handleConfirm}
              >
                Confirm
              </Button>
            )}
          </Grid>
          <Grid item xs={7} sx={{ width: "100%" }}>
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
          {cards.map((value) => (
            <CreatedSession
              deleting={deleting}
              value={value}
              cards={cardsToDelete}
              setCards={setCardsToDelete}
            />
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default SessionsPage;
