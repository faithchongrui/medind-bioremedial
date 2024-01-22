import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Outlet, useLocation } from "react-router-dom";
import { Grid, Button, Backdrop, IconButton, Box } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import TermsNavDrawer from "./TermsNavDrawer";
import { collection, getDocs, query } from "firebase/firestore";

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

const fetchTermsQuery = async (unit) => {
  try {
    const collectionRef = collection(db, "activities");
    const termsQuery = query(collectionRef, where("unit", "==", unit));
    return termsQuery;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


const LayoutUI = ({ children, learning, setLearning }) => {

  const { id } = useParams()

  const [terms, setTerms] = useState([])

  useEffect(() => {
    (async () => {
      const queryTerms = await fetchTermsQuery(id);
      const querySnapshot = await getDocs(queryTerms);
      querySnapshot.forEach(async (doc) => {
        const termsRef = collection(db, "activities", doc.id, "keywords");
        const termsSnapshot = await getDocs(termsRef);
        termsSnapshot.forEach((doc) => {
          const data = {
            ...doc.data(),
            id: doc.id,
          };
          setTerms((terms) => [...terms, data]);
        });
      });
    })();
  }, [id]);

  const location = useLocation();
  
  return (
    <Grid container columns={3}>
      <Grid item xs={1.1}>
        <TermsNavDrawer />
      </Grid>
      <Grid
        item
        xs={1.9}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <Backdrop
          open={true}
          sx={{
            position: "fixed",
            height: "100%",
            color: "#fff",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            display: "flex",
            pr: "24.5%",
          }}
        >
          {location.pathname.includes("activity") === false &&
            learning === false && <StartLearning setLearning={setLearning} />}
        </Backdrop>
        <Box
          sx={{
            p: "2rem",
            height: "100%",
            right: 0,
            bottom: 0,
            top: 0,
            left: 0,
          }}
        >
          {children}
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
