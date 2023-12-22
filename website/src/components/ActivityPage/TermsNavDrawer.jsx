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
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";

const TermCard = ({ card }) => {
  const [flag, setFlag] = React.useState(true);

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
            padding: 1,
            backgroundColor: "primary.light",
          }}
        >
          <Typography sx={{ padding: 1, maxHeight: "fit-content" }}>
            {card.word}
          </Typography>
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            padding: 1,
            backgroundColor: "primary.main",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ padding: 1, maxHeight: "fit-content" }}>
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
            sx={{ color: flag ? "primary.text" : "important.main", mr: 1}}
          />
          <EditRoundedIcon sx={{ mr: 1}} />
          <DeleteRoundedIcon />
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
        m: 1,
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

const TermNavDrawer = ({ card }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const cards = [1, 2, 3, 4];
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
      <Grid container
        sx={{
          borderRadius: 2,
          color: "primary.text",
          mt: 1,
        }}
      >
        <Grid item sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: 2,
          }}>
        <Typography
          component="h1"
          variant="h6"
         
        >
          {" "}
          Terms{" "}
        </Typography>
        </Grid>
        <Grid item sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
        <IconButton >
         <AddRoundedIcon sx={{color: "primary.text"}}/>
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
  );
};

export default TermNavDrawer;
