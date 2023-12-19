import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Drawer,
  Toolbar,
  List,
  ListItem,
  IconButton,
  Divider,
  Box,
  Select,
  MenuItem,
  FormControl,
  CardMedia,
  AppBar,
  Button,
  Backdrop,
} from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";

import { useParams } from "react-router-dom";
import TemplateFlashcard from "./ActivityCardComponents/FlashcardPage/TemplateFlashcard";
import TermsNavDrawer from "./TermsNavDrawer";

const TermCard = ({ card }) => {
  return (
    <Card
      component="div"
      sx={{
        width: "100%",
        backgroundColor: "#2C3333",
        borderRadius: 3,
        mx: 1,
        mb: 1,
        color: "#CBE4DE",
      }}
    >
      <Grid container item xs={6} columns={2}>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            padding: 1,
            backgroundColor: "#146E72",
          }}
        >
          <Typography sx={{ padding: 1, maxHeight: "fit-content" }}>
            {card.word}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            padding: 1,
            backgroundColor: "#2e4f4f",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ padding: 1, maxHeight: "fit-content" }}>
            {card.meaning}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

const ActivitySegment = ({ link, unit }) => {
  <Box></Box>;
};

const TemplateActivity = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div>
      <Grid container columns={3}>
        <Grid item xs={0.9}>
          <TermsNavDrawer id={id} />
        </Grid>

        <Grid
          item
          xs={2.1}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            position: "relative",
          }}
        >
          <Backdrop
            open={true}
            sx={{
              position: "absolute",
              height: "105%",
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            <Button
              onClick={() => navigate(`/flashcards/${id}`)}
              sx={{
                backgroundColor: "#146E72",
                color: "#FFFFFF",
                width: "20%",
                height: "10%",
                textTransform: "none",
                fontSize: 15,
                ":hover": {
                  backgroundColor: "rgb(20, 110, 114)",
                  boxShadow: "none",
                  fontWeight: "bold",
                },
              }}
            >
              Start learning
            </Button>
          </Backdrop>
          <TemplateFlashcard />
        </Grid>
      </Grid>
    </div>
  );
};

export default TemplateActivity;
