import React, { Component } from 'react'
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
  AppBar,
  Button,
} from "@mui/material";
// import { styled, useTheme } from "@mui/material/styles";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 400;

const TermCard = ({ card }) => {
    return (
      <Card
        component="div"
        sx={{
          width: "100%",
          backgroundColor: "#2C3333",
          borderRadius: 3,
          mx: 1,
          mb: 1,
          // whiteSpace: 'nowrap',
          // height: "50vh"
          color: "#CBE4DE",
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
              backgroundColor: "#146E72",
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
              backgroundColor: "#2e4f4f",
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
  
const TermNavDrawer = ({cards}) => {
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              backgroundColor: "#2C3333",
            },
        }}
        variant="permanent"
        anchor="left"
      >
        <List disablePadding>
            <ListItem>
            <Button>
                    test
                </Button>
            </ListItem>
            <ListItem>
            <Button>
                    test
                </Button>
            </ListItem>
            <ListItem>
            <Button>
                    test
                </Button>
            </ListItem>
            <ListItem>
            <Button>
                    test
                </Button>
            </ListItem>
        </List>
          <Grid container>
            {/* <Grid
              item
              sx={{
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box>
                <Grid container sx={{ alignItems: "center" }}>
                  <Grid item>
                    <IconButton>
                      <ChevronLeftRoundedIcon sx={{ color: "#FFFFFF" }} />
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
                          color: "#FFFFFF",
                          "& .MuiSvgIcon-root": { color: "#FFFFFF" },
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
                      <ChevronRightRoundedIcon sx={{ color: "#FFFFFF" }} />
                    </IconButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid> */}
          </Grid>
        <Divider />
        <Typography
        component="h1"
        variant="h5"
          sx={{
            color: "#CBE4DE",
            display: "flex",
            alignItems: "center",
            mx: 2,
            mt: 1,
          }}
        >
          {" "}
          Terms{" "}
        </Typography>
        {/* <List sx={{ color: "#CBE4DE" }}>
          {cards.map((card) => (
            <ListItem disablePadding>
              <TermCard card={card}/>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </Box>
      )
}

const TemplateActivity = () => {
    return (
        <div>
            <TermNavDrawer />
        </div>
    )
}

export default TemplateActivity
