import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Button,
  Backdrop,
} from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";

import { useParams } from "react-router-dom";
import TemplateFlashcard from "./ActivityCardComponents/FlashcardPage/TemplateFlashcard";
import TermsNavDrawer from "./TermsNavDrawer";

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
                backgroundColor: "primary.light",
                color: "primary.white",
                width: "20%",
                height: "10%",
                textTransform: "none",
                fontSize: 15,
                ":hover": {
                  backgroundColor: "primary.light",
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
