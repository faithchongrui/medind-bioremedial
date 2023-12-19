import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Typography,
  Grid,
  Drawer,
  List,
  ListItem,
  Divider,
  Box,
  Button,
  Toolbar,
  IconButton,
} from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const ActivityButton = ({ unit, activity, link }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(`/${link}/${unit}`)}
      sx={{
        backgroundColor: "#2E4F4F",
        textTransform: "none",
        m: 1,
        width: "100%",
        color: "#CBE4DE",
        fontSize: 15,
        ":hover": {
          backgroundColor: "rgb(20, 110, 114)",
          boxShadow: "none",
          fontWeight: "bold",
        },
      }}
    >
      {" "}
      {activity}{" "}
    </Button>
  );
};

const TermNavDrawer = ({ cards }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "30%",
          boxSizing: "border-box",
          backgroundColor: "#1e1e1e",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <IconButton
        onClick={navigate(-1)}
        sx={{ width: 50, height: 50, mt: 1, mx: 1 }}
      >
        <ChevronLeftRoundedIcon fontSize="medium" sx={{ color: "#FFFFFF" }} />
      </IconButton> */}
      <List disablePadding xs={{ width: "100%" }}>
        <ListItem disablePadding>
          <ActivityButton
            activity={"Flashcards"}
            link={"flashcards"}
            unit={id}
          />
        </ListItem>
        <ListItem disablePadding>
          <ActivityButton activity={"Quiz"} link={"quiz"} unit={id} />
        </ListItem>
        <ListItem disablePadding>
          <ActivityButton activity={"Drag & Drop"} link={"quiz"} unit={id} />
        </ListItem>
        <ListItem disablePadding>
          <ActivityButton activity={"Type"} link={"type"} unit={id} />
        </ListItem>
      </List>

      <Divider />
      <Box
        sx={{
          backgroundColor: "#2C3333",
          m: 1,
          borderRadius: 2,
        }}
      >
        <Typography
          component="h1"
          variant="h6"
          sx={{
            color: "#CBE4DE",
            display: "flex",
            alignItems: "center",
            mx: 2,
            my: 1,
          }}
        >
          {" "}
          Terms{" "}
        </Typography>
        <List sx={{ color: "#CBE4DE" }}>
          {/* {cards.map((card) => (
              <ListItem disablePadding>
                <TermCard card={card}/>
              </ListItem>
            ))} */}
        </List>
      </Box>
    </Drawer>
  );
};

export default TermNavDrawer;
