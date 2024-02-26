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
  Card,
} from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

const TermCard = ({ card }) => {
  const [flag, setFlag] = React.useState(true); // For Michael: This is a good start to your thinking process!
  //  But you will have to add them to an array that contains the flagged terms eventually, and filtering out TermCard instances with a True flag just to add them
  //  to the array will be difficult. Could you find a way to add them to the flagged cards array directly?

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <Card
      component="div"
      sx={{
        width: "100%",
        backgroundColor: "primary.dark",
        borderRadius: 3,
        mx: 1,
        mb: 1,
        color: "primary.text",
        boxShadow: "none",
      }}
    >
      <Grid container item xs={6} columns={4}>
        <Grid
          item
          xs={1}
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "primary.light",
          }}
        >
          <Typography sx={{ padding: 1, maxHeight: "fit-content", wordBreak: "break-word", fontSize: 14}}>
            {card.word}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ padding: 1, maxHeight: "fit-content", fontSize: 14 }}>
            {card.meaning}
          </Typography>
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            padding: 1,
            // backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FlagRoundedIcon
            onClick={handleClick}
            sx={{ color: flag ? "primary.text" : "important.main", mr: 1 }}
          />
          <EditRoundedIcon sx={{ mr: 1 }} />
          <DeleteRoundedIcon sx={{ mr: 1, color: "warning.main" }} />
        </Grid>
      </Grid>
    </Card>
  );
};

// + the buttons for adding editing (edit + delete)

const ActivityButton = ({ unit, activity, link }) => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => navigate(`/${link}/${unit}`)}
      sx={{
        backgroundColor: "primary.main",
        textTransform: "none",
        mx: 1,
        mb: 1,
        width: "100%",
        color: "primary.text",
        fontSize: 15,
        ":hover": {
          backgroundColor: "primary.light",
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
  // Feedback for Michael: cards is the array passed into TermNavDrawer, so make sure you spell it as such in the map
  const navigate = useNavigate();
  const { id } = useParams();
  // const cards = [1, 2, 3, 4];
  const Test = () => {
    console.log("Test");
  };
  return (
    <Drawer
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "35%",
          boxSizing: "border-box",
          backgroundColor: "primary.darkest",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <IconButton
        onClick={() => navigate(`/activities`)}
        sx={{ width: 50, height: 50, mt: 1, mx: 1 }}
      >
        <ChevronLeftRoundedIcon
          fontSize="medium"
          sx={{ color: "primary.white" }}
        />
      </IconButton>

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
          <ActivityButton
            activity={"Drag & Drop"}
            link={"drag-drop"}
            unit={id}
          />
        </ListItem>
        <ListItem disablePadding>
          <ActivityButton activity={"Type"} link={"type"} unit={id} />
        </ListItem>
      </List>

      <Divider />
      <Grid
        container
        sx={{
          borderRadius: 2,
          color: "primary.text",
          mt: 1,
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
          }}
        >
          <Typography component="h1" variant="h6">
            {" "}
            Terms{" "}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* { For Michael:  Make sure that when passing in functions, you dont type the brackets as well. You are passing in the function object, not its execution} */}
          <IconButton>
            <AddRoundedIcon sx={{ color: "primary.text" }} onClick={Test} />
          </IconButton>
        </Grid>
      </Grid>
      <List sx={{ color: "primary.text" }}>
        {cards.map((card) => (
          <ListItem disablePadding>
            <TermCard card={card} />
          </ListItem>
        ))}
      </List>
    </Drawer>
    // For Michael: notice how in order to create the list seen in the UI, we map each element of the cards array to a TermCard component
  );
};

export default TermNavDrawer;
