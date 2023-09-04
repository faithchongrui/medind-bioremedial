import React from "react";
import { Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

// https://codesandbox.io/s/beer-finder-mz7nx9v02j?file=/src/Beer.jsx
const SimulationCard = ({ title, description, imageurl }) => {
  return (
    <Grid container item xs={6} sm={4} md={6}>
      <Link to={`/simulations/${title}`} style={{ textDecoration: "none" }}>
        <Card
          component="div"
          sx={{
            // width: "70%",
            backgroundColor: "#2E4F4F",
            borderRadius: 3,
            cursor: "pointer",
            m: 1,
            // my: 1,
            textOverflow: "ellipsis",
            // whiteSpace: 'nowrap',
            // height: "50vh"
          }}
        >
          <Grid container item xs={6} columns={2}>
            <Grid item xs={1}>
              <CardContent>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{
                    fontSize: 20,
                    color: "#CBE4DE",
                    textDecorationLine: "underline",
                  }}
                >
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
                    backgroundColor: "inherit",
                    overflow: "hidden",
                  }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{
                padding: 1,
                backgroundColor: "#CBE4DE",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <CardMedia
                component="img"
                src={require("../../images/" + imageurl)}
                sx={{
                  padding: 1,
                  backgroundColor: "#CBE4DE",
                  maxHeight: "fit-content",
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Link>
    </Grid>
  );
};

export default SimulationCard;
