import React, { Component } from "react";
import styled from "@emotion/styled";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Drawer,
  Toolbar,
  List,
  IconButton,
  Divider,
  Box,
  Select,
  MenuItem,
  FormControl,
  CardMedia,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 400;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
    /**
     * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
     * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
     * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
     * proper interaction with the underlying content.
     */
    //   position: 'relative',
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: 5,
  justifyContent: "flex-start",
}));

const TermCard = ({ card }) => {
  return (
    <Card
      component="div"
      sx={{
        width: "100%",
        backgroundColor: "primary.dark",
        borderRadius: 3,
        mx: 1,
        mb: 1,
        // whiteSpace: 'nowrap',
        // height: "50vh"
        color: "primary.text",
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
            backgroundColor: "primary.light",
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
            backgroundColor: "primary.main",
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

const TermsDrawer = ({ cards }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar
        color="inherit"
        position="fixed"
        variant="dense"
        open={open}
        sx={{ flexGrow: 1 }}
      >
        <Box noWrap sx={{ flexGrow: 1 }} component="div" />
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          sx={{ ...(open && { display: "none" }) }}
        >
          <MenuRoundedIcon sx={{ color: "primary.text", fontSize: 25 }} />
        </IconButton>
      </Toolbar>
      <Main open={open}>
        <DrawerHeader />
      </Main>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "primary.dark",
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <Grid container>
            <Grid item>
              <IconButton
                onClick={handleDrawerClose}
                sx={{ color: "primary.light" }}
              >
                {theme.direction === "rtl" ? (
                  <ChevronLeftRoundedIcon />
                ) : (
                  <ChevronRightRoundedIcon />
                )}
              </IconButton>
            </Grid>
            <Grid
              item
              sx={{
                color: "primary.white",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item>
                    <IconButton>
                      <ChevronLeftRoundedIcon sx={{ color: "primary.white" }} />
                    </IconButton>
                  </Grid>

                  <Grid item>
                    <FormControl size="small" sx={{ minWidth: 70, p: 0 }}>
                      <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        IconComponent={ExpandMoreRoundedIcon}
                        autoWidth
                        sx={{
                          boxShadow: "none",
                          ".MuiOutlinedInput-notchedOutline": {
                            borderStyle: "none",
                          },
                          color: "primary.white",
                          "& .MuiSvgIcon-root": { color: "primary.white" },
                        }}
                      >
                        <MenuItem value="">current page</MenuItem>
                        <MenuItem value={10}>Quiz</MenuItem>
                        <MenuItem value={20}>Drag & Drop</MenuItem>
                        <MenuItem value={30}>Type</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item>
                    <IconButton>
                      <ChevronRightRoundedIcon
                        sx={{ color: "primary.white" }}
                      />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </DrawerHeader>
        <Divider />
        <Typography
          component="h1"
          variant="h4"
          sx={{
            color: "primary.text",
            display: "flex",
            alignItems: "center",
            mx: 2,
            mt: 1,
          }}
        >
          {" "}
          Terms{" "}
        </Typography>
        <List sx={{ color: "primary.text" }}>
          {cards.map((card) => (
            <ListItem disablePadding>
              <TermCard card={card} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default TermsDrawer;
