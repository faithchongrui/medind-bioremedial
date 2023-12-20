import React, { useState } from "react";
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom";
import { Grid, Button, Backdrop, IconButton, Box } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import TermsNavDrawer from "./TermsNavDrawer";

const StartLearning = ({ setLearning }) => {
  return (
    <Button
      onClick={() => setLearning(true)}
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
  );
};
const LayoutUI = ({ children, learning, setLearning }) => {
  const location = useLocation();
  return (
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
        <Box>
          <Backdrop
            open={true}
            sx={{
              position: "absolute",
              height: "100%",
              color: "#fff",
              zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
          >
            {location.pathname.includes("activity") === false &&
              learning === false && <StartLearning setLearning={setLearning} />}
          </Backdrop>
          <Box
            sx={{
              p: "2rem",
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

const ActivityLayout = () => {
  const [learning, setLearning] = useState(false);
  return (
    <div>
      {learning === false ? (
        <LayoutUI learning={learning} setLearning={setLearning}>
          <Outlet />
        </LayoutUI>
      ) : (
        <div>
          <IconButton
            onClick={() => setLearning(false)}
            sx={{ width: 50, height: 50, mt: 1, mx: 1 }}
          >
            <ChevronLeftRoundedIcon
              sx={{ color: "primary.white", fontSize: 30 }}
            />
          </IconButton>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default ActivityLayout;
