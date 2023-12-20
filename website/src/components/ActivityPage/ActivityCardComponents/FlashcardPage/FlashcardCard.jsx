import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import StyleRoundedIcon from "@mui/icons-material/StyleRounded";

const FlashcardCard = ({ unit, terms, set }) => {
  const navigate = useNavigate();
  return (
    <Card
      component="div"
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        borderRadius: 3,
        mb: 2,
        my: 1,
        textOverflow: "ellipsis",
        // whiteSpace: 'nowrap',
        height: "fit-content",
        cursor: "pointer",
      }}
      // onClick={() => navigate(`/flashcards/${unit}`)}
    >
      <CardContent>
        <Grid container columns={2}>
          <Grid item>
            <StyleRoundedIcon
              sx={{
                color: "primary.text",
                fontSize: 30,
              }}
            />
          </Grid>
          <Grid item xs={1}>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                fontSize: 20,
                fontWeight: 600,
                color: "primary.text",
                paddingX: 1,
              }}
            >
              Flashcards
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
            color: "primary.text",
            backgroundColor: "inherit",
            overflow: "hidden",
          }}
        >
          {terms} terms
        </Typography>
        <Typography
          component="body"
          variant="body1"
          sx={{
            // paddingX: 1,
            fontSize: 15,
            mt: 1,
            color: "primary.text",
            backgroundColor: "inherit",
            overflow: "hidden",
          }}
        >
          Set: {set}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlashcardCard;
