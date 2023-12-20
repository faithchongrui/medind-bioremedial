import React from "react";
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom";
import { Grid, Button, Backdrop } from "@mui/material";
import TermsNavDrawer from "./TermsNavDrawer";

const StartLearning = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const path = window.location.pathname;
  return (
    <Button
      // onClick={() => navigate(`${path}/${id}`)}
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
  );
};

const ActivityLayout = () => {
  const location = useLocation()
  return (
    <div>
      <Grid container columns={3}>
        <Grid item xs={0.9}>
          <TermsNavDrawer />
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
            {location.pathname.includes("activity") === false && <StartLearning />}
          </Backdrop>
          <Outlet />
        </Grid>
      </Grid>
    </div>
  );
};

export default ActivityLayout;
